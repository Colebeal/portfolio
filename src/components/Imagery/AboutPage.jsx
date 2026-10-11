import PropTypes from "prop-types"
import { useState } from "react"
import { AnimatePresence, motion as m } from "framer-motion"

const clients = [
  "L.A.B. Golf, Staff Photographer",
  "Red Bull",
  "SURFER Magazine",
  "B. Draddy",
  "TCSS",
  "DeadKooks Surfboards",
  "Bing Surfboards",
  "Kassia Surf",
  "Wilderness Collective",
]

const emptyForm = {
  name: "",
  email: "",
  message: "",
  website: "",
}

function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState("idle")
  const [feedback, setFeedback] = useState("")

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const submitForm = async (event) => {
    event.preventDefault()
    if (status === "sending") return

    setStatus("sending")
    setFeedback("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.message || "Couldn’t send that. Please try again.")
      }

      setForm(emptyForm)
      setStatus("success")
      setFeedback("Sent. I’ll be in touch soon.")
    } catch (error) {
      setStatus("error")
      setFeedback(
        error instanceof Error
          ? error.message
          : "Couldn’t send that. Please try again.",
      )
    }
  }

  const fieldClassName =
    "portfolio-contact-field portfolio-accent-border-muted w-full rounded-none border-0 border-b bg-transparent px-0 py-2 text-base outline-none transition-colors placeholder:text-gray-400 md:text-lg"

  return (
    <form className="space-y-5" onSubmit={submitForm}>
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={form.name}
          onChange={updateField}
          className={fieldClassName}
          autoComplete="name"
          maxLength={100}
          required
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={updateField}
          className={fieldClassName}
          autoComplete="email"
          maxLength={254}
          required
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={updateField}
          className={`${fieldClassName} min-h-28 resize-y`}
          maxLength={5000}
          required
        />
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          value={form.website}
          onChange={updateField}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="portfolio-accent-border-strong portfolio-accent-text w-fit rounded-none border bg-transparent px-5 py-2 text-xs uppercase tracking-[0.16em] disabled:cursor-wait disabled:opacity-50"
      >
        {status === "sending" ? "Sending" : "Send message"}
      </button>

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            status === "error" ? "text-red-700 dark:text-red-300" : ""
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  )
}

function ContactPanel({ desktopMenuOpen, onDesktopMenuToggle }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleContact = () => {
    const willOpen = !isOpen
    setIsOpen(willOpen)

    if (willOpen && window.matchMedia("(max-width: 1023px)").matches) {
      window.requestAnimationFrame(() => {
        document
          .getElementById("contact-form")
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }

  return (
    <section
      id="contact-form"
      className={`portfolio-accent-border-strong -mx-5 mt-auto border-t bg-white md:-mx-10 dark:bg-[#111111] lg:fixed lg:inset-x-0 lg:bottom-0 lg:z-30 lg:mr-0 lg:max-h-screen lg:overflow-y-auto lg:transition-[margin] lg:duration-300 ${
        desktopMenuOpen ? "lg:ml-72 2xl:ml-80" : "lg:ml-0"
      }`}
    >
      <div className="flex px-4 py-4 md:px-10 lg:p-0">
        {!desktopMenuOpen && (
          <button
            type="button"
            onClick={onDesktopMenuToggle}
            style={{ borderRadius: 0 }}
            className="portfolio-accent-border-strong hidden h-[58px] w-24 shrink-0 items-center justify-center border-0 border-r bg-white text-[11px] uppercase tracking-[0.16em] text-black hover:bg-gray-100 lg:flex"
            aria-label="Show menu"
          >
            Menu
          </button>
        )}
        <button
          type="button"
          data-contact-trigger
          aria-expanded={isOpen}
          aria-controls="contact-form-fields"
          aria-label={isOpen ? "Close contact form" : "Open contact form"}
          onClick={toggleContact}
          style={{ borderRadius: 0 }}
          className="flex min-w-0 flex-1 items-center justify-center border-0 bg-[#770011] px-5 py-3 text-center text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#66000f] dark:bg-white dark:text-[#770011] dark:hover:bg-gray-100 lg:h-[58px] lg:justify-between lg:bg-white lg:px-14 lg:py-0 lg:text-left lg:text-[#770011] lg:hover:bg-black/[0.03] dark:lg:bg-[#111111] dark:lg:text-white dark:lg:hover:bg-white/[0.04] 2xl:px-20"
        >
          <span>Contact</span>
          <span className="hidden opacity-50 lg:inline" aria-hidden="true">
            {isOpen ? "Close" : "Open"}
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id="contact-form-fields"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="portfolio-accent-border-strong grid gap-10 border-t px-5 py-10 md:px-10 lg:grid-cols-[minmax(220px,0.7fr)_minmax(320px,1fr)] lg:gap-20 lg:px-14 lg:py-14 2xl:px-20">
              <div className="max-w-md">
                <h2 className="portfolio-accent-text text-3xl md:text-4xl">
                  Want to work together?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  Whether it’s a project, a print, or just a question, let’s
                  chat.
                </p>
              </div>
              <ContactForm />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}

ContactPanel.propTypes = {
  desktopMenuOpen: PropTypes.bool.isRequired,
  onDesktopMenuToggle: PropTypes.func.isRequired,
}

export default function AboutPage({
  desktopMenuOpen,
  onDesktopMenuToggle,
}) {
  return (
    <section
      id="about-index"
      data-index-section="about"
      className="portfolio-accent-border-strong flex min-h-screen flex-col border-b px-5 pb-0 pt-7 text-left md:px-10 md:pt-20 lg:px-14 lg:pt-12 2xl:px-20"
      aria-labelledby="about-title"
    >
      <header className="pb-3 lg:mb-14 lg:pb-6">
        <h1
          id="about-title"
          className="portfolio-accent-text max-w-5xl text-5xl md:text-[9rem] min-[1440px]:text-[15rem]"
        >
          Cole Beal
        </h1>
      </header>

      <div className="mt-4 grid gap-10 pb-12 lg:mt-0 lg:grid-cols-[minmax(0,40rem)_minmax(280px,1fr)] lg:gap-16 lg:pb-16 xl:gap-24">
        <figure className="lg:col-start-2 lg:row-start-1">
          <img
            src="/images/about/cole-beal-768.webp"
            srcSet="/images/about/cole-beal-480.webp 480w, /images/about/cole-beal-768.webp 768w, /images/about/cole-beal-1200.webp 1200w"
            sizes="(min-width: 1536px) 28vw, (min-width: 1024px) 24vw, 100vw"
            alt="Portrait of photographer Cole Beal"
            width="1200"
            height="1200"
            className="aspect-square w-full object-cover object-center"
          />
        </figure>

        <div className="lg:col-start-1 lg:row-start-1">
          <div className="max-w-4xl space-y-6 text-lg leading-relaxed md:text-2xl xl:text-3xl">
            <p>
              Over more than ten years as a working photographer, I have sought
              out clients who want to create high-quality, stylized imagery.
            </p>
            <p>
              I have been fortunate to work with a wide range of clients,
              primarily in professional sports. I have a particular affinity for
              shooting golf and am always looking for opportunities to expand my
              portfolio and collaborate with like-minded people.
            </p>
          </div>

          <div className="portfolio-accent-border-muted mt-8 border-t pt-8 lg:mt-14">
            <section>
              <h2 className="mb-5 text-xs font-normal uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                Selected clients
              </h2>
              <ul className="space-y-2 text-base md:text-lg">
                {clients.map((client) => (
                  <li key={client}>{client}</li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>

      <ContactPanel
        desktopMenuOpen={desktopMenuOpen}
        onDesktopMenuToggle={onDesktopMenuToggle}
      />
    </section>
  )
}

AboutPage.propTypes = {
  desktopMenuOpen: PropTypes.bool.isRequired,
  onDesktopMenuToggle: PropTypes.func.isRequired,
}
