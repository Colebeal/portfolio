import { useState } from "react"
import MenuInformation from "./MenuInformation"
import MenuContents from "./MenuContents"




export default function Menu ({menuStatus, setSlideIndex, currentFolder, setCurrentFolder, menuHandler}) {
  const [menuContent, setMenuContent] = useState(true)
  const menuStyles = {
    showMain: 'z-40 opacity-100 absolute top-0 right-0 h-screen w-[30%] bg-orange-50 dark:bg-teal-950 ease-in-out',
    hideMain: 'z-40 hidden absolute top-0 right-0 h-screen w-[30%] bg-orange-50 dark:bg-teal-950 ease-in-out',
    showBkg: 'z-30 absolute top-0 left-0 bg-black w-screen h-screen opacity-60 ease-in-out',
    hideBkg: 'z-30 absolute top-0 left-0 bg-black w-screen h-screen hidden ease-in-out',
  }

  const menuContentHandler = () => {
    menuContent ? setMenuContent(false) : setMenuContent(true)
  }


   
``
  return (
    <>
      <div onClick={menuHandler} className={menuStatus ? menuStyles.showBkg : menuStyles.hideBkg}></div>
      <menu className={menuStatus ? menuStyles.showMain : menuStyles.hideMain}>
        {menuContent ? 
        <MenuInformation setCurrentFolder={setCurrentFolder} setSlideIndex={setSlideIndex}  menuHandler={menuHandler} menuContentHandler={menuContentHandler}/> 
        : <MenuContents menuContentHandler={menuContentHandler} setCurrentFolder={setCurrentFolder}/>
        }
      </menu>
    </>
  ) 
}

//         
