import PropTypes from "prop-types"
import ThemeToggle from "../ThemeToggle"

export default function MiniMenu({
  menuHandler,
  primaryHandler,
  primaryLabel,
}) {
  return (
    <nav
      className="portfolio-accent-text fixed inset-x-0 top-0 z-40 flex items-center justify-end gap-3 bg-white px-5 py-5 text-xs uppercase tracking-[0.12em] dark:bg-[#111111] lg:hidden"
      aria-label="Photography navigation"
    >
      <button
        type="button"
        onClick={primaryHandler}
        className="border-0 bg-transparent p-1"
      >
        {primaryLabel}
      </button>
      <button
        type="button"
        onClick={menuHandler}
        className="border-0 bg-transparent p-1"
      >
        Menu
      </button>
      <ThemeToggle />
    </nav>
  )
}

MiniMenu.propTypes = {
  menuHandler: PropTypes.func.isRequired,
  primaryHandler: PropTypes.func.isRequired,
  primaryLabel: PropTypes.oneOf(["Index", "Viewer"]).isRequired,
}
