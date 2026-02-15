"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "dakotaking92@gmail.com",
      subject: "New Portfolio Contact Submission",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || ""}</p>
        <p><strong>Service:</strong> ${service || ""}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };

  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
