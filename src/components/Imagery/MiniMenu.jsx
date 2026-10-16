import PropTypes from "prop-types"

export default function MiniMenu({
  menuHandler,
  homeHandler,
  primaryHandler,
  primaryLabel,
  menuStatus,
  hasShadow,
}) {
  return (
    <nav
      className={`portfolio-accent-text fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 bg-white px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-5 text-xs uppercase tracking-[0.12em] transition-transform duration-300 ease-out dark:bg-[#111111] lg:hidden ${
        hasShadow
          ? "shadow-[0_-10px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_-10px_30px_rgba(0,0,0,0.4)]"
          : "shadow-none"
      } ${
        menuStatus ? "translate-x-72" : "transform-none"
      }`}
      aria-label="Photography navigation"
    >
      <button
        type="button"
        onClick={homeHandler}
        className="border-0 bg-transparent p-1"
      >
        Home
      </button>
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
        aria-controls="mobile-navigation"
        aria-expanded={menuStatus}
      >
        Menu
      </button>
    </nav>
  )
}

MiniMenu.propTypes = {
  menuHandler: PropTypes.func.isRequired,
  homeHandler: PropTypes.func.isRequired,
  primaryHandler: PropTypes.func.isRequired,
  primaryLabel: PropTypes.oneOf(["Index", "Loupe"]).isRequired,
  menuStatus: PropTypes.bool.isRequired,
  hasShadow: PropTypes.bool.isRequired,
}
