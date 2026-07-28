import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";
import {
  generateClientConfirmationEmail,
  generateAdminNotificationEmail,
} from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Send internal notification email & client confirmation email simultaneously
    await Promise.all([
      // 1. Internal notification email to Teddy
      resend.emails.send({
        from: siteConfig.contactFromEmail,
        to: siteConfig.contactToEmail,
        subject: `[New Inquiry] ${name}`,
        html: generateAdminNotificationEmail({ name, email, message }),
      }),

      // 2. Client auto-confirmation email
      resend.emails.send({
        from: siteConfig.contactFromEmail,
        to: email,
        subject: `Project Inquiry Received — Teddy Githinji`,
        html: generateClientConfirmationEmail({ name, email, message }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
