import type { IncomingMessage, ServerResponse } from "node:http";

type VercelRequest = IncomingMessage & { body?: unknown };
type VercelResponse = ServerResponse & {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body ?? {});
  const token = (body as { token?: unknown }).token;
  if (typeof token !== "string" || !token) {
    res.status(400).json({ success: false, error: "Missing recaptcha token" });
    return;
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not set");
    res.status(500).json({ success: false, error: "Server misconfigured" });
    return;
  }

  const params = new URLSearchParams({ secret, response: token });
  const googleRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const data = (await googleRes.json()) as { success?: boolean };

  res.status(200).json({ success: data.success === true });
}
