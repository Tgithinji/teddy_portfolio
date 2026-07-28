import { siteConfig } from "./siteConfig";

interface EmailTemplateParams {
  name: string;
  email: string;
  message: string;
}

export function generateClientConfirmationEmail({
  name,
  email,
  message,
}: EmailTemplateParams): string {
  const firstName = name.trim().split(" ")[0] || name;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Inquiry Received — Teddy Githinji</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f17; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0b0f17; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #131b2a; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
          
          <!-- Header Banner -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #1e293b;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #38bdf8;">
                      SYSTEMS &amp; AUTOMATION ARCHITECTURE
                    </span>
                    <h1 style="margin: 8px 0 0 0; font-size: 20px; font-weight: 400; color: #f8fafc; tracking-tight: -0.02em;">
                      Teddy Githinji
                    </h1>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; padding: 4px 10px; font-family: monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #38bdf8; background-color: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 9999px;">
                      Received
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 16px 0; font-size: 16px; color: #f8fafc; font-weight: 500;">
                Hi ${firstName},
              </p>
              
              <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                Thank you for reaching out! I’ve received your project inquiry and am reviewing the details of your request. I reply to all qualified operational inquiries within <strong style="color: #f8fafc;">24 hours</strong>.
              </p>

              <!-- Submission Recap Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0b0f17; border: 1px solid #1e293b; border-radius: 12px; margin-bottom: 24px; padding: 20px;">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; display: block; margin-bottom: 12px;">
                      INQUIRY SUMMARY RECAP
                    </span>
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b;">
                      <strong style="color: #cbd5e1;">From:</strong> ${name} (${email})
                    </p>
                    <p style="margin: 8px 0 0 0; font-size: 13px; line-height: 1.5; color: #e2e8f0; font-style: italic;">
                      "${message.replace(/\n/g, "<br/>")}"
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                If your requirement is urgent or you’d like to book a direct 30-minute technical discovery call immediately, feel free to schedule a slot on my calendar below:
              </p>

              <!-- CTA Button -->
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                <tr>
                  <td align="center" style="background-color: #38bdf8; border-radius: 9999px;">
                    <a href="${siteConfig.calendlyUrl}" target="_blank" style="display: inline-block; padding: 12px 24px; font-size: 13px; font-weight: 600; color: #0b0f17; text-decoration: none; border-radius: 9999px;">
                      Schedule Discovery Call &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #94a3b8;">
                Best regards,<br/>
                <strong style="color: #f8fafc;">Teddy Githinji</strong><br/>
                <span style="font-size: 12px; color: #64748b;">Automation Architect &amp; Software Engineer</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #0b0f17; border-top: 1px solid #1e293b; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #64748b; font-family: monospace;">
                Direct: <a href="mailto:${siteConfig.email}" style="color: #38bdf8; text-decoration: none;">${siteConfig.email}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateAdminNotificationEmail({
  name,
  email,
  message,
}: EmailTemplateParams): string {
  return `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f5; padding: 20px; color: #18181b;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; padding: 24px; border: 1px solid #e4e4e7;">
    <h2 style="margin-top: 0; color: #09090b;">New Project Inquiry Submission</h2>
    <p><strong>Client Name:</strong> ${name}</p>
    <p><strong>Client Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Message / Requirement:</strong></p>
    <div style="background: #f4f4f5; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 14px;">${message}</div>
  </div>
</body>
</html>
  `.trim();
}
