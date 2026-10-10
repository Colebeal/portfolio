import { useEffect } from "react"
import PropTypes from "prop-types"
import MenuInformation from "./MenuInformation"
import { BsXLg } from "react-icons/bs"

export default function Menu({
  menuStatus,
  setSlideIndex,
  setCurrentFolder,
  setActiveView,
  menuHandler,
}) {
  const menuStyles = {
    showMain:
      "portfolio-accent-border z-50 opacity-100 fixed flex flex-col bottom-6 right-5 md:top-0 md:right-0 h-[90%] md:h-full w-[90%] md:w-[50%] bg-white dark:bg-[#000000] animate-fade-in rounded-lg shadow-lg border-[1px] overflow-auto lg:hidden",
    hideMain: "hidden",
    showBkg:
      "z-50 opacity-60 fixed top-0 left-0 h-full w-full bg-black animate-fade-in-Bkg lg:hidden",
    hideBkg: "hidden",
  }

  useEffect(() => {
    if (!menuStatus) return undefined
    const closeOnEscape = (event) => {
      if (event.key === "Escape") menuHandler()
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [menuStatus, menuHandler])

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={menuHandler}
        className={menuStatus ? menuStyles.showBkg : menuStyles.hideBkg}
      />
      <aside
        className={menuStatus ? menuStyles.showMain : menuStyles.hideMain}
        aria-hidden={!menuStatus}
        aria-label="Photography menu"
      >
        <div className="m-10 mb-0 flex items-center gap-5 pb-5 text-left">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            type="button"
            onClick={() => {
              setActiveView("about")
              menuHandler()
              window.requestAnimationFrame(() => {
                document
                  .getElementById("about-index")
                  ?.scrollIntoView({ behavior: "smooth" })
              })
            }}
            className="border-0 bg-transparent p-0 text-lg underline-offset-4 hover:underline"
          >
            About
          </button>
        </div>
        <MenuInformation
          setCurrentFolder={setCurrentFolder}
          setSlideIndex={setSlideIndex}
          setActiveView={setActiveView}
          menuHandler={menuHandler}
        />
        <div className="h-6">
          <button
            type="button"
            onClick={menuHandler}
            className="absolute right-10 top-9 animate-rise-up border-0 bg-transparent p-2 text-2xl md:hidden"
            aria-label="Close menu"
          >
            <BsXLg aria-hidden="true" />
          </button>
        </div>
      </aside>
    </>
  )
}

Menu.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  setCurrentFolder: PropTypes.func.isRequired,
  setActiveView: PropTypes.func.isRequired,
  menuHandler: PropTypes.func.isRequired,
}
