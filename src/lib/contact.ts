import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_pok9a0w";
const EMAILJS_TEMPLATE_ID = "template_v822mdb";
const EMAILJS_PUBLIC_KEY = "DK727ePqfDwxhLbyf";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  subject?: string;
  type?: string;
  recaptchaToken?: string;
};

export async function sendContactMessage(payload: ContactPayload): Promise<boolean> {
  try {
    if (payload.recaptchaToken) {
      const verifyRes = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: payload.recaptchaToken }),
      });
      const verify = await verifyRes.json();
      if (!verify.success) {
        console.error("reCAPTCHA verification failed");
        return false;
      }
    }

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: payload.name,
        email: payload.email,
        subject: payload.subject ?? "",
        message: payload.type ? `[${payload.type}] ${payload.message}` : payload.message,
        time: new Date().toLocaleString("ko-KR"),
      },
      { publicKey: EMAILJS_PUBLIC_KEY },
    );
    return true;
  } catch (err) {
    console.error("EmailJS send failed:", err);
    return false;
  }
}
