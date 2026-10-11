import { Resend } from "resend"

const apiKey = process.env.RESEND_API_KEY

if (!apiKey || apiKey === "re_xxxxxxxxx") {
  throw new Error(
    "Replace re_xxxxxxxxx with your real RESEND_API_KEY in the local .env file.",
  )
}

const resend = new Resend(apiKey)

const { data, error } = await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "cole@colebeal.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
})

if (error) {
  console.error("Resend could not send the email:", error.message)
  process.exitCode = 1
} else {
  console.log(`Email sent successfully: ${data.id}`)
}
