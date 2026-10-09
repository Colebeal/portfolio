import PropTypes from "prop-types"
import { motion as m } from "framer-motion"
import ThemeToggle from "../ThemeToggle"

export default function GalleryNav({ menuHandler, viewerHandler }) {
  return (
    <m.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="fixed bottom-8 left-0 z-40 flex w-full justify-center lg:hidden"
      aria-label="Gallery controls"
    >
      <div className="flex items-center gap-3 rounded-lg border border-black bg-white p-2 px-4 shadow-lg dark:border-white dark:bg-black">
        <ThemeToggle />
        <span className="h-6 w-px bg-gray-400" aria-hidden="true" />
        <button type="button" onClick={viewerHandler} className="p-2 text-sm">
          Viewer
        </button>
        <button type="button" onClick={menuHandler} className="p-2 text-sm">
          Menu
        </button>
      </div>
    </m.nav>
  )
}

GalleryNav.propTypes = {
  menuHandler: PropTypes.func.isRequired,
  viewerHandler: PropTypes.func.isRequired,
}
