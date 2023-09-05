import { useState } from "react"
import MenuInformation from "./MenuInformation"
import MenuContents from "./MenuContents"


export default function Menu ({ menuHandler }) {
  const [menuContent, setMenuContent] = useState(true)

  const menuContentHandler = () => {
    menuContent ? setMenuContent(false) : setMenuContent(true)
  }
   
  return (
    <>
      <div onClick={menuHandler} className="z-30 absolute top-0 left-0 bg-black w-screen h-screen opacity-60"></div>
      <menu className="z-40 opacity-100 absolute top-0 right-0 h-screen w-[50%] bg-orange-50 dark:bg-teal-950">
      {/* {menuContent && } */}
        {menuContent ? <MenuInformation menuContentHandler={menuContentHandler}/> : <MenuContents menuContentHandler={menuContentHandler}/>}
      </menu>
    </>
  ) 
}