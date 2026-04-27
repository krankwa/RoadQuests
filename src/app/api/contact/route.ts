import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body },
  );
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  let payload: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    turnstileToken?: string;
  };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, message, turnstileToken } = payload;

  if (!name || !email || !message || !turnstileToken) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 },
    );
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Input too long." }, { status: 400 });
  }

  const captchaOk = await verifyTurnstile(turnstileToken, ip);
  if (!captchaOk) {
    return NextResponse.json(
      { error: "CAPTCHA verification failed." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  try {
    await transporter.sendMail({
      from: `"Roadquest Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO ?? process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "-"}\n\nMessage:\n${message}`,
      html: `
        <h2>New Inquiry from the Roadquest Website</h2>
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        <p><strong>Phone:</strong> ${escape(phone ?? "-")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escape(message)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail send failed:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
