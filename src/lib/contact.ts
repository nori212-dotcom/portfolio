import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_pok9a0w";
const EMAILJS_TEMPLATE_ID = "template_v822mdb";
const EMAILJS_PUBLIC_KEY = "DK727ePqfDwxhLbyf";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  type?: string;
};

export async function sendContactMessage(payload: ContactPayload): Promise<boolean> {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: payload.name,
        email: payload.email,
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
