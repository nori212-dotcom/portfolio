export const config = { runtime: "nodejs" };

const CONTACT_EMAIL = "Soyul8363@gmail.com";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message, type } = req.body ?? {};

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    res.status(500).json({ error: "Email is not configured" });
    return;
  }

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "포트폴리오 문의 <onboarding@resend.dev>",
        to: CONTACT_EMAIL,
        reply_to: email,
        subject: `[포트폴리오 문의] ${name}${type ? ` · ${type}` : ""}`,
        text: `이름: ${name}\n이메일: ${email}${type ? `\n관심 분야: ${type}` : ""}\n\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      console.error("Resend error:", await resendRes.text());
      res.status(502).json({ error: "Failed to send message" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message" });
  }
}
