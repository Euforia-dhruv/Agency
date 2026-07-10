"use node";

import { v } from "convex/values";
import { internalAction } from "./_generated/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export const sendLeadNotification = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (_ctx, args) => {
    if (!RESEND_API_KEY) return;

    const { Resend } = await import("resend");
    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: "Agency <onboarding@resend.dev>",
      to: ["ventriee.contact@gmail.com"],
      subject: `New Lead: ${args.name}${args.company ? ` (${args.company})` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:480px">
          <tr><td style="padding:8px 0;font-weight:600">Name</td><td style="padding:8px 0">${args.name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${args.email}">${args.email}</a></td></tr>
          ${args.company ? `<tr><td style="padding:8px 0;font-weight:600">Company</td><td style="padding:8px 0">${args.company}</td></tr>` : ""}
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${args.message}</p>
      `,
    });
  },
});
