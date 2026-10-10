import { useEffect } from "react"
import PropTypes from "prop-types"
import { AnimatePresence, motion as m } from "framer-motion"

import { NavigationPanel } from "../DesktopNav"

export default function Menu({
  menuStatus,
  currentFolder,
  setSlideIndex,
  setCurrentFolder,
  activeView,
  setActiveView,
  closeMenu,
}) {
  useEffect(() => {
    if (!menuStatus) return undefined

    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu()
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [menuStatus, closeMenu])

  return (
    <>
      {menuStatus && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed inset-0 z-[45] rounded-none border-0 bg-transparent p-0 lg:hidden"
          aria-label="Close menu"
        />
      )}
      <AnimatePresence>
        {menuStatus && (
          <m.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            id="mobile-navigation"
            className="portfolio-accent-border-strong fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r bg-white text-left shadow-2xl dark:bg-[#111111] lg:hidden"
            aria-label="Photography menu"
          >
            <NavigationPanel
              currentFolder={currentFolder}
              setCurrentFolder={setCurrentFolder}
              setSlideIndex={setSlideIndex}
              activeView={activeView}
              setActiveView={setActiveView}
              onNavigate={closeMenu}
              onClose={closeMenu}
              controlsAtBottom
            />
          </m.aside>
        )}
      </AnimatePresence>
    </>
  )
}

Menu.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
  currentFolder: PropTypes.number.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  setCurrentFolder: PropTypes.func.isRequired,
  activeView: PropTypes.oneOf(["viewer", "gallery", "about"]).isRequired,
  setActiveView: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
}
