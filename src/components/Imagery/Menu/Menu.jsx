import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import MenuInformation from "./MenuInformation"
import MenuContents from "./MenuContents"
import { BsXLg } from "react-icons/bs"

export default function Menu({
  menuStatus,
  setSlideIndex,
  setCurrentFolder,
  menuHandler,
}) {
  const [menuContent, setMenuContent] = useState(true)
  const menuStyles = {
    showMain:
      "z-50 opacity-100 fixed flex flex-col bottom-6 right-5 md:top-0 md:right-0 h-[90%] md:h-full w-[90%] md:w-[50%] lg:w-[30%] bg-white dark:bg-[#000000] dark:border-white animate-fade-in rounded-lg shadow-lg border-[1px] border-black overflow-auto ",
    hideMain: "hidden",
    showBkg:
      "z-50 opacity-60 fixed top-0 left-0 h-full w-full bg-black animate-fade-in-Bkg",
    hideBkg: "hidden",
    //menuNav
    contentHidden: "border-0 bg-transparent p-0 text-lg cursor-pointer",
    contentShown:
      "border-0 bg-transparent p-0 underline text-lg cursor-pointer font-semibold",
    menuHidden: "border-0 bg-transparent p-0 text-lg cursor-pointer mr-5",
    menuShown:
      "border-0 bg-transparent p-0 underline text-lg cursor-pointer mr-5 font-semibold",
  }

  const menuContentHandler = () => {
    menuContent ? setMenuContent(false) : setMenuContent(true)
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
        <div className="m-10 mb-0 pb-5 text-left">
          <button
            type="button"
            onClick={menuContentHandler}
            className={
              menuContent ? menuStyles.menuShown : menuStyles.menuHidden
            }
          >
            Menu
          </button>
          <button
            type="button"
            onClick={menuContentHandler}
            className={
              menuContent ? menuStyles.contentHidden : menuStyles.contentShown
            }
          >
            About
          </button>
        </div>
        {menuContent ? (
          <MenuInformation
            setCurrentFolder={setCurrentFolder}
            setSlideIndex={setSlideIndex}
            menuHandler={menuHandler}
          />
        ) : (
          <MenuContents />
        )}
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
  menuHandler: PropTypes.func.isRequired,
}
