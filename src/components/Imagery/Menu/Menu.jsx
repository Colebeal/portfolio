import { useState } from "react"
import MenuInformation from "./MenuInformation"
import MenuContents from "./MenuContents"
import { BsXLg } from "react-icons/bs"

export default function Menu({
  menuStatus,
  setSlideIndex,
  currentFolder,
  setCurrentFolder,
  menuHandler,
  returnHomeHandler,
}) {
  const [menuContent, setMenuContent] = useState(true)
  const menuStyles = {
    showMain:
      "z-50 opacity-100 fixed flex flex-col right-5 md:top-0 md:right-0 h-[90%] md:h-full w-[90%] md:w-[30%] bg-white dark:bg-[#000000] dark:border-white animate-fade-in rounded-lg shadow-lg border-[1px] border-black",
    hideMain: "hidden",
    showBkg:
      "z-50 opacity-60 fixed top-0 left-0 h-full w-full bg-black animate-fade-in-Bkg",
    hideBkg: "hidden",
    //menuNav
    contentHidden: "text-lg cursor-pointer",
    contentShown: "underline text-lg cursor-pointer font-semibold",
    menuHidden: "text-lg cursor-pointer mr-5",
    menuShown: "underline text-lg cursor-pointer mr-5 font-semibold",
  }

  const menuContentHandler = () => {
    menuContent ? setMenuContent(false) : setMenuContent(true)
  }

  return (
    <>
      <div
        onClick={menuHandler}
        className={menuStatus ? menuStyles.showBkg : menuStyles.hideBkg}
      ></div>
      <menu className={menuStatus ? menuStyles.showMain : menuStyles.hideMain}>
        <div className="m-10 mb-0 pb-5 text-left">
          <span
            onClick={menuContentHandler}
            className={
              menuContent ? menuStyles.menuShown : menuStyles.menuHidden
            }
          >
            Menu
          </span>
          <span
            onClick={menuContentHandler}
            className={
              menuContent ? menuStyles.contentHidden : menuStyles.contentShown
            }
          >
            Info
          </span>
        </div>
        {menuContent ? (
          <MenuInformation
            setCurrentFolder={setCurrentFolder}
            setSlideIndex={setSlideIndex}
            menuHandler={menuHandler}
            menuContentHandler={menuContentHandler}
          />
        ) : (
          <MenuContents
            menuContentHandler={menuContentHandler}
            setCurrentFolder={setCurrentFolder}
          />
        )}
        <div className="h-24">
          <BsXLg
            onClick={menuHandler}
            className="absolute right-10 top-11 animate-rise-up text-2xl md:hidden"
          />
        </div>
      </menu>
    </>
  )
}
