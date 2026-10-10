import { useEffect, useState } from "react"
import { BiMoon, BiSun } from "react-icons/bi"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  )

  useEffect(() => {
    const isDark = theme === "dark"
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", theme)
  }, [theme])

  const nextTheme = theme === "light" ? "dark" : "light"

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="portfolio-accent-text z-50 border-0 bg-transparent p-1 text-xl"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {theme === "light" ? (
        <BiSun aria-hidden="true" />
      ) : (
        <BiMoon aria-hidden="true" />
      )}
    </button>
  )
}
