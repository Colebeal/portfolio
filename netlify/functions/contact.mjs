import { Resend } from "resend"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(message, status = 200) {
  return Response.json({ message }, { status })
}

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  )
}

export default async function contact(request) {
  if (request.method !== "POST") {
    return json("Method not allowed.", 405)
  }

  const contentLength = Number(request.headers.get("content-length") || 0)
  if (contentLength > 20_000) {
    return json("Your message is too large.", 413)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return json("Please provide valid contact details.", 400)
  }

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const message =
    typeof body.message === "string" ? body.message.trim() : ""
  const website =
    typeof body.website === "string" ? body.website.trim() : ""

  // Quietly accept likely bot submissions without sending an email.
  if (website) {
    return json("Sent. I’ll be in touch soon.")
  }

  if (!name || name.length > 100) {
    return json("Please enter your name.", 400)
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return json("Please enter a valid email address.", 400)
  }
  if (!message || message.length > 5000) {
    return json("Please enter a message under 5,000 characters.", 400)
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured for the contact function.")
    return json("Email service is not configured.", 503)
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")
  const subjectName = name.replace(/[\r\n]+/g, " ")
  const from =
    process.env.RESEND_FROM_EMAIL ||
    "Cole Beal Portfolio <onboarding@resend.dev>"

  const { error } = await resend.emails.send({
    from,
    to: "cole@colebeal.com",
    replyTo: email,
    subject: `Portfolio inquiry from ${subjectName}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p>${safeMessage}</p>`,
  })

  if (error) {
    console.error("Resend contact email failed:", error)
    return json("Couldn’t send that. Please try again.", 502)
  }

  return json("Sent. I’ll be in touch soon.")
}

export const config = {
  path: "/api/contact",
  method: "POST",
  rateLimit: {
    windowLimit: 5,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
}
