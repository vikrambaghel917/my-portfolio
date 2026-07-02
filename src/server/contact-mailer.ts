import nodemailer from "nodemailer";

type ContactEmailPayload = {
  requestId: string;
  submittedAt: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  description: string;
  userAgent: string;
  ipAddress: string;
};

let transporter: nodemailer.Transporter | null = null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass || Number.isNaN(port)) {
    throw new Error("SMTP is not configured.");
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

function getRecipientEmail() {
  return process.env.CONTACT_TO_EMAIL || "baghelvikram917@gmail.com";
}

function getSenderEmail() {
  return process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || getRecipientEmail();
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const mailer = getTransporter();
  const safePayload = {
    ...payload,
    requestId: escapeHtml(payload.requestId),
    submittedAt: escapeHtml(payload.submittedAt),
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    company: escapeHtml(payload.company),
    phone: escapeHtml(payload.phone),
    description: escapeHtml(payload.description),
    userAgent: escapeHtml(payload.userAgent),
    ipAddress: escapeHtml(payload.ipAddress),
  };

  const text = [
    `New portfolio inquiry`,
    ``,
    `Request ID: ${payload.requestId}`,
    `Submitted at: ${payload.submittedAt}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Company: ${payload.company}`,
    ``,
    `Description:`,
    payload.description,
    ``,
    `Metadata:`,
    `IP: ${payload.ipAddress}`,
    `User-Agent: ${payload.userAgent}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#e5eef8;background:#08111f;padding:24px;">
      <div style="max-width:680px;margin:0 auto;background:#0f1726;border:1px solid rgba(96,165,250,0.22);border-radius:20px;padding:24px;">
        <h2 style="margin:0 0 16px;color:#60a5fa;">New portfolio inquiry</h2>
        <p style="margin:0 0 8px;"><strong>Request ID:</strong> ${safePayload.requestId}</p>
        <p style="margin:0 0 8px;"><strong>Submitted at:</strong> ${safePayload.submittedAt}</p>
        <p style="margin:0 0 8px;"><strong>Name:</strong> ${safePayload.name}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> ${safePayload.email}</p>
        <p style="margin:0 0 8px;"><strong>Phone:</strong> ${safePayload.phone}</p>
        <p style="margin:0 0 16px;"><strong>Company:</strong> ${safePayload.company}</p>
        <div style="margin:16px 0;padding:16px;border-radius:16px;background:#08111f;border:1px solid rgba(148,163,184,0.18);">
          <p style="margin:0 0 8px;color:#60a5fa;"><strong>Description</strong></p>
          <p style="margin:0;white-space:pre-wrap;">${safePayload.description}</p>
        </div>
        <p style="margin:16px 0 4px;font-size:12px;color:#8aa0b8;"><strong>IP:</strong> ${safePayload.ipAddress}</p>
        <p style="margin:0;font-size:12px;color:#8aa0b8;"><strong>User-Agent:</strong> ${safePayload.userAgent}</p>
      </div>
    </div>
  `.trim();

  return mailer.sendMail({
    to: getRecipientEmail(),
    from: getSenderEmail(),
    replyTo: payload.email,
    subject: `Portfolio inquiry from ${payload.name}`,
    text,
    html,
  });
}
