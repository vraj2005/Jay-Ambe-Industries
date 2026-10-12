import nodemailer from 'nodemailer';

export interface SendContactEmailsParams {
  fullName: string;
  organization?: string;
  phoneNumber: string;
  emailAddress: string;
  message?: string;
}

/**
 * Creates and returns a Nodemailer transporter configured via environment variables.
 * Compatible with Gmail, Google Workspace, Zoho, AWS SES, or any custom professional SMTP server.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends two emails:
 * 1. Confirmation email to the visitor who submitted the form.
 * 2. Notification email to the site owner / administration desk.
 */
export async function sendContactEmails(params: SendContactEmailsParams) {
  const { fullName, organization, phoneNumber, emailAddress, message } = params;

  const transporter = createTransporter();

  // If credentials are not yet configured in development, log helpful message and return mock success
  if (!transporter) {
    console.warn(
      '[Mail Service] SMTP_USER or SMTP_PASS is missing in environment variables. Email sending skipped in dev mode.'
    );
    return {
      success: true,
      simulated: true,
      message: 'SMTP credentials not configured. Query logged in development mode.',
    };
  }

  const fromName = process.env.CONTACT_FROM_NAME || 'Triangle | JAY AMBE INDUSTRIES';
  const fromAddress = process.env.SMTP_USER;
  const ownerEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;

  const formattedDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // 1. Email template for Site Owner
  const ownerMailOptions = {
    from: `"${fromName}" <${fromAddress}>`,
    to: ownerEmail,
    replyTo: emailAddress,
    subject: `🔔 New Website Query: ${fullName}${organization ? ` (${organization})` : ''}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #F7F5F1; margin: 0; padding: 24px; color: #111622; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #E5E3DE; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
          .header { background: #111622; color: #ffffff; padding: 24px 32px; border-bottom: 3px solid #B89047; }
          .header h2 { margin: 0; font-size: 20px; font-weight: 700; }
          .header p { margin: 4px 0 0; font-size: 13px; color: #ECE0C9; }
          .content { padding: 32px; }
          .badge { display: inline-block; background: #FBF8F1; color: #856428; border: 1px solid #ECE0C9; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
          .field-group { margin-bottom: 18px; }
          .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #757D8A; font-weight: 700; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #111622; font-weight: 500; }
          .field-value a { color: #856428; text-decoration: none; font-weight: 600; }
          .message-box { background: #F7F5F1; border-left: 4px solid #B89047; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #2C3036; white-space: pre-wrap; }
          .footer { background: #FDFBF7; padding: 18px 32px; border-top: 1px solid #E5E3DE; font-size: 12px; color: #757D8A; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Customer Inquiry Received</h2>
            <p>JAY AMBE INDUSTRIES • Factory Portal</p>
          </div>
          <div class="content">
            <span class="badge">Inquiry Received on ${formattedDate} IST</span>
            
            <div class="field-group">
              <div class="field-label">Full Name</div>
              <div class="field-value">${fullName}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Organization / Business</div>
              <div class="field-value">${organization || 'Not Provided (Individual / Homeowner)'}</div>
            </div>

            <div class="field-group">
              <div class="field-label">Contact Number</div>
              <div class="field-value"><a href="tel:${phoneNumber}">${phoneNumber}</a></div>
            </div>

            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${emailAddress}">${emailAddress}</a></div>
            </div>

            ${message
        ? `
            <div class="field-group">
              <div class="field-label">Inquiry Message / Requirement</div>
              <div class="message-box">${message}</div>
            </div>
            `
        : ''
      }
          </div>
          <div class="footer">
            You can directly reply to this email to contact <strong>${fullName}</strong> directly.
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // 2. Confirmation email for Visitor
  const visitorMailOptions = {
    from: `"${fromName}" <${fromAddress}>`,
    to: emailAddress,
    subject: `Thank you for contacting Triangle | JAY AMBE INDUSTRIES`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #F7F5F1; margin: 0; padding: 24px; color: #111622; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #E5E3DE; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
          .header { background: #111622; color: #ffffff; padding: 32px; text-align: center; border-bottom: 3px solid #B89047; }
          .brand-title { font-size: 24px; font-weight: 800; letter-spacing: 0.05em; margin: 0; }
          .brand-subtitle { font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #ECE0C9; margin-top: 4px; font-weight: 600; }
          .content { padding: 36px 32px; }
          h2 { font-size: 18px; color: #111622; margin-top: 0; margin-bottom: 12px; }
          p { font-size: 14px; line-height: 1.6; color: #4A505A; margin: 0 0 16px; }
          .summary-card { background: #FDFBF7; border: 1px solid #ECE0C9; border-radius: 8px; padding: 20px; margin: 24px 0; }
          .summary-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #856428; margin-bottom: 12px; }
          .summary-item { font-size: 13px; color: #2C3036; margin-bottom: 6px; }
          .contact-desk { background: #111622; color: #ffffff; border-radius: 8px; padding: 20px; margin: 24px 0; text-align: center; }
          .contact-desk p { color: #E2DDD4; margin-bottom: 8px; font-size: 13px; }
          .contact-desk a { color: #ECE0C9; font-weight: 700; text-decoration: none; }
          .footer { background: #F7F5F1; padding: 20px 32px; border-top: 1px solid #E5E3DE; font-size: 11px; color: #757D8A; text-align: center; line-height: 1.5; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="brand-title">Triangle</h1>
            <div class="brand-subtitle">JAY AMBE INDUSTRIES • Factory Direct Storage</div>
          </div>
          <div class="content">
            <h2>Hello ${fullName},</h2>
            <p>Thank you for reaching out to us. We have successfully received your inquiry at our factory technical and quotation desk.</p>
            <p>Our engineering and procurement team is currently reviewing your details. A dedicated specialist will get in touch with you within <strong>24 to 48 business hours</strong> with the requested information or quotation.</p>

            <div class="summary-card">
              <div class="summary-title">Summary of Your Submission</div>
              <div class="summary-item"><strong>Name:</strong> ${fullName}</div>
              ${organization ? `<div class="summary-item"><strong>Organization:</strong> ${organization}</div>` : ''}
              <div class="summary-item"><strong>Phone:</strong> ${phoneNumber}</div>
              <div class="summary-item"><strong>Email:</strong> ${emailAddress}</div>
              ${message ? `<div class="summary-item"><strong>Details:</strong> ${message}</div>` : ''}
            </div>

            <div class="contact-desk">
              <p>Need urgent assistance or bulk modular kitchen CAD specs?</p>
              <p>Direct Factory Hotline: <a href="tel:+918160934696">+91 8160934696</a> / <a href="tel:+919925372296">+91 9925372296</a></p>
            </div>

            <p style="font-size: 13px; color: #757D8A;">Warm regards,<br><strong>Customer Relations & Quotation Desk</strong><br>JAY AMBE INDUSTRIES (Triangle Brand)</p>
          </div>
          <div class="footer">
            Plot No-13, Revenue survey no-9, Shivay Industrial Area-A, Lothda, Rajkot, Gujarat - 360024, India<br>
            © ${new Date().getFullYear()} JAY AMBE INDUSTRIES. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // Send both emails concurrently
  const [ownerResult, visitorResult] = await Promise.allSettled([
    transporter.sendMail(ownerMailOptions),
    transporter.sendMail(visitorMailOptions),
  ]);

  if (ownerResult.status === 'rejected') {
    console.error('[Mail Service] Failed to send email to owner:', ownerResult.reason);
  }

  if (visitorResult.status === 'rejected') {
    console.error('[Mail Service] Failed to send confirmation to visitor:', visitorResult.reason);
  }

  // If at least one succeeded (or both), treat as successful operation
  if (ownerResult.status === 'fulfilled' || visitorResult.status === 'fulfilled') {
    return { success: true };
  } else {
    throw new Error('Failed to send emails via SMTP server.');
  }
}
