import assert from "node:assert/strict"
import test from "node:test"

import contact from "../netlify/functions/contact.mjs"

function request(body, method = "POST") {
  return new Request("https://colebeal.com/api/contact", {
    method,
    headers: { "Content-Type": "application/json" },
    body: method === "POST" ? JSON.stringify(body) : undefined,
  })
}

test("contact function rejects unsupported methods", async () => {
  const response = await contact(request({}, "GET"))
  assert.equal(response.status, 405)
})

test("contact function validates required fields before sending", async () => {
  const response = await contact(
    request({ name: "", email: "not-an-email", message: "" }),
  )
  assert.equal(response.status, 400)
})

test("contact honeypot silently accepts bot submissions", async () => {
  const response = await contact(
    request({
      name: "Bot",
      email: "bot@example.com",
      message: "Spam",
      website: "https://spam.example.com",
    }),
  )
  assert.equal(response.status, 200)
})
