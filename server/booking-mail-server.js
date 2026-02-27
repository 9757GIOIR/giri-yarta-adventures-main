import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const serverPort = Number(process.env.BOOKING_SERVER_PORT || 3001);

const requiredEnvKeys = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_TO"];
const missingEnv = requiredEnvKeys.filter((key) => !process.env[key]);

const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ||
  "http://localhost:5173,http://127.0.0.1:5173,http://localhost:8080,http://127.0.0.1:8080"
)
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("CORS origin blocked"));
    },
  }),
);

app.use(express.json());

const toBoolean = (value, fallback = false) => {
  if (!value) return fallback;
  return value.toLowerCase() === "true";
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: toBoolean(process.env.SMTP_SECURE, Number(process.env.SMTP_PORT) === 465),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get("/api/health", (_req, res) => {
  if (missingEnv.length) {
    res.status(500).json({
      ok: false,
      message: `Missing env vars: ${missingEnv.join(", ")}`,
    });
    return;
  }

  res.json({ ok: true });
});

app.post("/api/bookings", async (req, res) => {
  if (missingEnv.length) {
    res.status(500).json({
      success: false,
      message: `Missing env vars: ${missingEnv.join(", ")}`,
    });
    return;
  }

  const {
    tourName = "",
    fullName = "",
    phone = "",
    email = "",
    city = "",
    seats = "",
    travelDate = "",
    message = "",
  } = req.body ?? {};

  if (!tourName || !fullName || !phone || !email || !city || !seats) {
    res.status(400).json({
      success: false,
      message: "Required fields missing",
    });
    return;
  }

  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const textBody = [
    "New Tour Booking Request",
    "------------------------",
    `Tour Name     : ${tourName}`,
    `Full Name     : ${fullName}`,
    `Phone         : ${phone}`,
    `Email         : ${email}`,
    `City          : ${city}`,
    `Seats         : ${seats}`,
    `Travel Date   : ${travelDate || "-"}`,
    `Message       : ${message || "-"}`,
    `Submitted At  : ${submittedAt}`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5">
      <h2 style="margin: 0 0 12px">New Tour Booking Request</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px">
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Tour Name</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(tourName)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Full Name</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Phone</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Email</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>City</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(city)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Seats</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(seats)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Travel Date</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(travelDate || "-")}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Message</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(message || "-")}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Submitted At</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(submittedAt)}</td></tr>
        </tbody>
      </table>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Booking - ${tourName}`,
      text: textBody,
      html: htmlBody,
    });

    res.json({
      success: true,
      message: "Booking submitted and emailed successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.post("/api/contact", async (req, res) => {
  if (missingEnv.length) {
    res.status(500).json({
      success: false,
      message: `Missing env vars: ${missingEnv.join(", ")}`,
    });
    return;
  }

  const {
    fullName = "",
    phone = "",
    email = "",
    subject = "",
    message = "",
  } = req.body ?? {};

  if (!fullName || !phone || !email || !message) {
    res.status(400).json({
      success: false,
      message: "Required fields missing",
    });
    return;
  }

  const mailSubject = subject || "General Inquiry";
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const textBody = [
    "New Contact Form Submission",
    "---------------------------",
    `Full Name     : ${fullName}`,
    `Phone         : ${phone}`,
    `Email         : ${email}`,
    `Subject       : ${mailSubject}`,
    `Message       : ${message}`,
    `Submitted At  : ${submittedAt}`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5">
      <h2 style="margin: 0 0 12px">New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px">
        <tbody>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Full Name</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Phone</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Email</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Subject</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(mailSubject)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Message</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(message)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd"><b>Submitted At</b></td><td style="padding: 8px; border: 1px solid #ddd">${escapeHtml(submittedAt)}</td></tr>
        </tbody>
      </table>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Contact - ${fullName}`,
      text: textBody,
      html: htmlBody,
    });

    res.json({
      success: true,
      message: "Contact form submitted and emailed successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.listen(serverPort, () => {
  console.log(`Booking mail server running at http://localhost:${serverPort}`);
});
