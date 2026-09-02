export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  type?: string;
};

export async function sendContactMessage(payload: ContactPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
