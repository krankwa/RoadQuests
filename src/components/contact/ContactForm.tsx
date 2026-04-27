"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey || !widgetRef.current) return;

    const render = () => {
      if (!window.turnstile || !widgetRef.current) return;
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        callback: (t: string) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
        theme: "auto",
      });
    };

    if (window.turnstile) {
      render();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = render;
    document.body.appendChild(script);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) {
      setStatus("error");
      setErrorMsg("Please complete the CAPTCHA.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          turnstileToken: token,
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        window.turnstile?.reset(widgetIdRef.current);
        setToken("");
        return;
      }

      setStatus("success");
      form.reset();
      window.turnstile?.reset(widgetIdRef.current);
      setToken("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Name<span className="text-accent">*</span>
        </label>
        <input
          name="name"
          required
          maxLength={100}
          className="w-full px-4 py-2 rounded-lg border border-text-secondary/30 focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Email<span className="text-accent">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          className="w-full px-4 py-2 rounded-lg border border-text-secondary/30 focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Phone <span className="text-text-secondary">(optional)</span>
        </label>
        <input
          name="phone"
          maxLength={30}
          className="w-full px-4 py-2 rounded-lg border border-text-secondary/30 focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">
          Message<span className="text-accent">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="w-full px-4 py-2 rounded-lg border border-text-secondary/30 focus:outline-none focus:border-accent resize-none"
        />
      </div>

      <div ref={widgetRef} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3 rounded-full bg-accent text-bg-primary font-semibold disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-medium">
          Thanks! Your message has been sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium">{errorMsg}</p>
      )}
    </form>
  );
}
