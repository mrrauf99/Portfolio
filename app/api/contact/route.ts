import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail, contactEmailText } from "@/emails/contact-email";
import { CONTACT_EMAIL } from "@/lib/constants";
import { EMAIL_REGEX } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function validate(payload: Partial<ContactPayload>): string | null {
  if (!payload.name?.trim() || payload.name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (!payload.email?.trim() || !EMAIL_REGEX.test(payload.email)) {
    return "Please enter a valid email address";
  }
  if (!payload.subject?.trim() || payload.subject.trim().length < 3) {
    return "Subject must be at least 3 characters";
  }
  if (!payload.message?.trim() || payload.message.trim().length < 10) {
    return "Message must be at least 10 characters";
  }
  return null;
}

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const validationError = validate(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const { name, email, subject, message } = payload as ContactPayload;

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <contact@abdulrauf.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Portfolio contact: ${subject}`,
    react: ContactEmail({ name, email, subject, message }),
    text: contactEmailText({ name, email, subject, message }),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
