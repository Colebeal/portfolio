import PropTypes from "prop-types"
import ThemeToggle from "../ThemeToggle"

export default function MiniMenu({ menuHandler, indexHandler }) {
  return (
    <nav
      className="fixed right-5 top-5 z-40 flex items-center gap-3 text-xs uppercase tracking-[0.12em] lg:hidden"
      aria-label="Photography navigation"
    >
      <button
        type="button"
        onClick={indexHandler}
        className="border-0 bg-transparent p-1"
      >
        Index
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
  indexHandler: PropTypes.func.isRequired,
}
