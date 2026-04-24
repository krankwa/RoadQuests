#!/usr/bin/env python3
"""Scrape trucking-site imagery using Scrapling.

Pulls modern Philippine trucks from Wikimedia Commons (static HTML via Fetcher)
and Filipino portrait / logistics photos from Pixabay (JS-rendered via
StealthyFetcher), then writes them under public/images/.

Hard-refuses to overwrite the three protected logo files.
"""
from __future__ import annotations

import json
import re
import sys
import time
import urllib.parse
import urllib.request
from dataclasses import dataclass
from io import BytesIO
from pathlib import Path
from typing import Iterable

from PIL import Image
from scrapling.fetchers import Fetcher, StealthyFetcher

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
IMAGES = PUBLIC / "images"
CLIENT_JSON = ROOT / "src" / "data" / "client-text.json"

PROTECTED = {
    (IMAGES / "logo.png").resolve(),
    (IMAGES / "7459344.png").resolve(),
    (IMAGES / "business-partners" / "logo.png").resolve(),
}

USER_AGENT = (
    "RoadquestImageBot/1.0 (corporate-template; contact: roadquesttruckingservices@gmail.com)"
)


@dataclass
class Target:
    path: Path
    source: str  # "wikimedia" or "pixabay"
    query: str
    min_w: int
    min_h: int


def abs_target(rel: str) -> Path:
    return (PUBLIC / rel).resolve()


TARGETS: list[Target] = [
    Target(abs_target("images/header-image.jpg"), "pixabay", "modern truck fleet", 1000, 600),
    Target(abs_target("images/about-us.jpg"), "wikimedia", "container truck Philippines", 1000, 600),
    Target(abs_target("images/medium-shot-low-angle-view-smiling-engineer.jpg"), "pixabay", "truck driver", 800, 600),
    Target(abs_target("images/projects/project-1.jpg"), "pixabay", "wing van truck", 800, 500),
    Target(abs_target("images/projects/project-2.jpg"), "wikimedia", "Trailer trucks in the Philippines", 800, 500),
    Target(abs_target("images/projects/project-3.jpg"), "wikimedia", "container truck Philippines", 800, 500),
    Target(abs_target("images/business-partners/preview.jpg"), "wikimedia", "Truck maintenance", 800, 500),
]

PORTRAIT_TARGETS: list[Target] = [
    Target(abs_target(f"images/team/client-{i}.jpg"), "pixabay", query, 400, 400)
    for i, query in enumerate(
        [
            "filipino businessman portrait",
            "filipino businesswoman portrait",
            "asian businessman headshot",
            "asian businesswoman headshot",
            "filipino man portrait",
            "filipino woman portrait",
            "asian man professional",
            "asian woman professional",
            "businessman portrait",
            "businesswoman portrait",
            "asian man smiling",
            "asian woman smiling",
        ],
        start=1,
    )
]


# ------------------------- Utility helpers -------------------------


def is_protected(path: Path) -> bool:
    try:
        return path.resolve() in PROTECTED
    except FileNotFoundError:
        return False


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def thumb_to_original(thumb_url: str) -> str:
    """Convert a Wikimedia thumbnail URL into the full-resolution original.

    //upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Foo.jpg/250px-Foo.jpg
        -> https://upload.wikimedia.org/wikipedia/commons/a/ab/Foo.jpg
    """
    if thumb_url.startswith("//"):
        thumb_url = "https:" + thumb_url
    if "/thumb/" not in thumb_url:
        return thumb_url
    prefix, rest = thumb_url.split("/thumb/", 1)
    # rest = "a/ab/Foo.jpg/250px-Foo.jpg"
    rest_no_size = rest.rsplit("/", 1)[0]
    return f"{prefix}/{rest_no_size}"


def largest_from_srcset(srcset: str) -> str | None:
    """Given an img srcset string, return the URL with the largest width descriptor."""
    if not srcset:
        return None
    candidates: list[tuple[int, str]] = []
    for part in srcset.split(","):
        part = part.strip()
        if not part:
            continue
        bits = part.split()
        url = bits[0]
        width = 0
        if len(bits) > 1:
            m = re.match(r"(\d+)[wx]", bits[1])
            if m:
                width = int(m.group(1))
        candidates.append((width, url))
    if not candidates:
        return None
    candidates.sort(key=lambda x: x[0], reverse=True)
    return candidates[0][1]


def download(url: str) -> bytes | None:
    if url.startswith("//"):
        url = "https:" + url
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Referer": "https://commons.wikimedia.org/"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            ctype = resp.headers.get("Content-Type", "")
            if not ctype.startswith("image/"):
                print(f"    skip (content-type={ctype}): {url}")
                return None
            return resp.read()
    except Exception as e:  # noqa: BLE001
        print(f"    download failed: {url} -> {e}")
        return None


MAX_WIDTH = 2000


def validate_and_convert(data: bytes, min_w: int, min_h: int) -> bytes | None:
    """Validate dimensions, cap width, strip metadata, convert to JPEG."""
    try:
        img = Image.open(BytesIO(data))
        img.load()
    except Exception as e:  # noqa: BLE001
        print(f"    image parse failed: {e}")
        return None
    w, h = img.size
    if w < min_w or h < min_h:
        print(f"    too small ({w}x{h}, need {min_w}x{min_h})")
        return None
    if img.mode not in ("RGB", "L"):
        img = img.convert("RGB")
    if w > MAX_WIDTH:
        ratio = MAX_WIDTH / w
        img = img.resize((MAX_WIDTH, int(h * ratio)), Image.LANCZOS)
    out = BytesIO()
    img.save(out, format="JPEG", quality=85, optimize=True)
    return out.getvalue()


def safe_write(target: Path, data: bytes) -> None:
    if is_protected(target):
        raise RuntimeError(f"refused to overwrite protected path: {target}")
    ensure_parent(target)
    target.write_bytes(data)
    kb = len(data) // 1024
    print(f"    wrote {target.relative_to(ROOT)} ({kb} KB)")


# ------------------------- Wikimedia scraper -------------------------


def scrape_wikimedia(query: str, n: int) -> list[str]:
    """Return a list of original-resolution image URLs from a Wikimedia category.

    `query` is either a category suffix (e.g. "Trucks in the Philippines") which
    is mapped to /wiki/Category:... or a free-text MediaSearch query.
    """
    urls: list[str] = []
    seen: set[str] = set()

    def add_from_page(page) -> None:
        thumbs = page.css("li.gallerybox img::attr(src)").getall() or []
        if not thumbs:
            thumbs = page.css("img.mw-file-element::attr(src)").getall() or []
        for t in thumbs:
            if not t:
                continue
            if "/static/images/" in t or "Commons-logo" in t:
                continue
            orig = thumb_to_original(t)
            # Only keep commons-hosted image files
            if "upload.wikimedia.org" not in orig:
                continue
            # filter out SVG/GIF
            if orig.lower().endswith((".svg", ".gif", ".webm", ".ogv")):
                continue
            if orig in seen:
                continue
            seen.add(orig)
            urls.append(orig)

    # Try Category page first
    cat_url = (
        "https://commons.wikimedia.org/wiki/Category:"
        + urllib.parse.quote(query.replace(" ", "_"))
    )
    try:
        page = Fetcher.get(cat_url, stealthy_headers=True)
        if page.status == 200:
            add_from_page(page)
    except Exception as e:  # noqa: BLE001
        print(f"  wikimedia category fetch failed: {e}")

    # Fall back / top up from MediaSearch
    if len(urls) < n:
        search_url = (
            "https://commons.wikimedia.org/w/index.php?search="
            + urllib.parse.quote(query)
            + "&title=Special:MediaSearch&go=Go&type=image"
        )
        try:
            page = Fetcher.get(search_url, stealthy_headers=True)
            if page.status == 200:
                # MediaSearch results embed thumbs as <img> with data-src / src
                ms_thumbs = (
                    page.css("img.sd-image::attr(src)").getall()
                    or page.css("img::attr(src)").getall()
                    or []
                )
                for t in ms_thumbs:
                    if "upload.wikimedia.org" not in t:
                        continue
                    orig = thumb_to_original(t)
                    if orig.lower().endswith((".svg", ".gif", ".webm", ".ogv")):
                        continue
                    if orig in seen:
                        continue
                    seen.add(orig)
                    urls.append(orig)
        except Exception as e:  # noqa: BLE001
            print(f"  wikimedia mediasearch failed: {e}")

    return urls[: max(n, 10)]


# ------------------------- Pixabay scraper -------------------------


def scrape_pixabay(query: str, n: int) -> list[str]:
    """Return a list of image URLs from a Pixabay search page."""
    url = "https://pixabay.com/images/search/" + urllib.parse.quote(query) + "/"
    try:
        page = StealthyFetcher.fetch(url, headless=True, network_idle=True, timeout=45000)
    except Exception as e:  # noqa: BLE001
        print(f"  pixabay fetch failed: {e}")
        return []
    if page.status != 200:
        print(f"  pixabay status {page.status} for {query}")
        return []

    urls: list[str] = []
    seen: set[str] = set()

    # Primary: anchor-wrapped img with srcset
    imgs = page.css("img[srcset]") or []
    for node in imgs:
        srcset = node.attrib.get("srcset", "")
        largest = largest_from_srcset(srcset)
        if not largest:
            continue
        if "pixabay.com" not in largest and "cdn.pixabay" not in largest:
            continue
        if largest in seen:
            continue
        seen.add(largest)
        urls.append(largest)

    # Fallback: plain img src
    if not urls:
        for src in page.css("img::attr(src)").getall() or []:
            if "cdn.pixabay" not in src:
                continue
            if src in seen:
                continue
            seen.add(src)
            urls.append(src)

    return urls[: max(n, 8)]


# ------------------------- Main -------------------------


def fetch_for(target: Target, used: set[str]) -> bytes | None:
    """Scrape candidates for a target and return the first valid JPEG bytes."""
    if target.source == "wikimedia":
        candidates = scrape_wikimedia(target.query, 10)
    else:
        candidates = scrape_pixabay(target.query, 10)

    for url in candidates:
        if url in used:
            continue
        raw = download(url)
        if not raw:
            continue
        converted = validate_and_convert(raw, target.min_w, target.min_h)
        if not converted:
            continue
        used.add(url)
        return converted
    return None


def update_client_json() -> None:
    text = CLIENT_JSON.read_text(encoding="utf-8")
    data = json.loads(text)
    # data is expected to be a list of testimonial dicts each with an "image" field
    if not isinstance(data, list):
        print(f"  client-text.json is not a list — leaving it unchanged")
        return
    for i, item in enumerate(data, start=1):
        if isinstance(item, dict) and "image" in item:
            item["image"] = f"/images/team/client-{i}.jpg"
    CLIENT_JSON.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"  updated {CLIENT_JSON.relative_to(ROOT)} ({len(data)} entries)")


def main() -> int:
    trucks_only = "--trucks-only" in sys.argv
    skip_existing = "--skip-existing" in sys.argv
    all_targets = TARGETS if trucks_only else TARGETS + PORTRAIT_TARGETS

    # Pre-flight: refuse if any target resolves to a protected path
    for t in all_targets:
        if is_protected(t.path):
            print(f"ERROR: target points to protected path: {t.path}")
            return 1

    used_urls: set[str] = set()
    written: list[Path] = []
    failed: list[Target] = []

    print(f"\n== Scraping {len(all_targets)} images {'(trucks only)' if trucks_only else ''} ==\n")

    for t in all_targets:
        if skip_existing and t.path.exists():
            print(f"  skip (exists): {t.path.relative_to(ROOT)}")
            continue
        rel = t.path.relative_to(ROOT)
        print(f"[{t.source:9s}] {rel}  <-  '{t.query}'")
        data = fetch_for(t, used_urls)
        if data is None:
            print(f"    FAILED")
            failed.append(t)
            continue
        safe_write(t.path, data)
        written.append(t.path)
        time.sleep(1.0)  # be polite

    # Update testimonial JSON only if at least one portrait landed
    if any(p.parent.name == "team" for p in written):
        print("\n== Updating client-text.json ==")
        update_client_json()

    print(f"\n== Summary ==")
    print(f"  wrote: {len(written)} / {len(all_targets)}")
    if failed:
        print("  failed:")
        for t in failed:
            print(f"    - {t.path.relative_to(ROOT)} ({t.source}: {t.query})")

    # Final safety audit
    for p in PROTECTED:
        if not p.exists():
            print(f"  WARN: protected file missing: {p}")

    return 0 if not failed else 2


if __name__ == "__main__":
    sys.exit(main())
