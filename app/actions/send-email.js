"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendEmail(formData) {
  try {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    // Basic validation
    if (!firstName || !email || !message) {
      return { success: false, error: "Missing required fields." };
    }

    if (!process.env.RESEND_API_KEY) {
      return { success: false, error: "Email service is not configured yet." };
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeService = escapeHtml(service || "General inquiry");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const fullName = [safeFirstName, safeLastName].filter(Boolean).join(" ");

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "dakotaking92@gmail.com",
      subject: "New Portfolio Contact Submission",
      html: `
        <div style="margin:0;padding:32px 16px;background:#091321;font-family:Roboto,Arial,sans-serif;color:#f7f1e6;">
          <div style="max-width:680px;margin:0 auto;border:1px solid rgba(240,241,245,0.12);border-radius:28px;overflow:hidden;background:linear-gradient(180deg, rgba(16,32,56,0.98), rgba(9,19,33,0.98));box-shadow:0 28px 70px rgba(2,8,23,0.42);">
            <div style="padding:32px 32px 24px;background:radial-gradient(circle at top left, rgba(240,190,89,0.18), transparent 34%), radial-gradient(circle at 85% 15%, rgba(138,180,248,0.18), transparent 34%), #102038;border-bottom:1px solid rgba(240,241,245,0.12);">
              <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:0.28em;text-transform:uppercase;color:#f0be59;">
                Portfolio Contact
              </p>
              <h1 style="margin:0;font-size:30px;line-height:1.2;font-weight:800;color:#f7f1e6;">
                New project inquiry from ${fullName || "a visitor"}
              </h1>
              <p style="margin:14px 0 0;font-size:16px;line-height:1.8;color:#b7c3d9;">
                A new message came in through your portfolio contact form. Here&apos;s the project snapshot and the note they sent.
              </p>
            </div>

            <div style="padding:28px 32px 32px;">
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;">
                <div style="padding:18px 20px;border:1px solid rgba(240,241,245,0.12);border-radius:20px;background:rgba(255,255,255,0.04);">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f0be59;">Name</p>
                  <p style="margin:0;font-size:18px;font-weight:700;line-height:1.5;color:#f7f1e6;">${fullName || safeFirstName}</p>
                </div>
                <div style="padding:18px 20px;border:1px solid rgba(240,241,245,0.12);border-radius:20px;background:rgba(255,255,255,0.04);">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f0be59;">Email</p>
                  <p style="margin:0;font-size:18px;font-weight:700;line-height:1.5;color:#f7f1e6;">${safeEmail}</p>
                </div>
                <div style="padding:18px 20px;border:1px solid rgba(240,241,245,0.12);border-radius:20px;background:rgba(255,255,255,0.04);">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f0be59;">Phone</p>
                  <p style="margin:0;font-size:18px;font-weight:700;line-height:1.5;color:#f7f1e6;">${safePhone}</p>
                </div>
                <div style="padding:18px 20px;border:1px solid rgba(240,241,245,0.12);border-radius:20px;background:rgba(255,255,255,0.04);">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f0be59;">Service</p>
                  <p style="margin:0;font-size:18px;font-weight:700;line-height:1.5;color:#f7f1e6;">${safeService}</p>
                </div>
              </div>

              <div style="margin-top:20px;padding:24px;border:1px solid rgba(240,241,245,0.12);border-radius:24px;background:rgba(255,255,255,0.04);">
                <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#8ab4f8;">
                  Project Message
                </p>
                <p style="margin:0;font-size:16px;line-height:1.9;color:#f7f1e6;">
                  ${safeMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return { success: true };

  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
