import Slider from "./Slider"
import ImageryNav from "./ImageryNav"
import Menu from "./Menu/Menu"
import { useState } from "react"

export default function Imagery() { 
  const [slideIndex, setSlideIndex] = useState(0)
  const [folderDisplayed, setFolderDisplayed] = useState(0)
  const [menuStatus, setMenuStatus] = useState(false)
  const [currentFolder, setCurrentFolder] = useState(0)

  

  const menuHandler = () => {
    if (menuStatus) {
      setMenuStatus(false)
    }
    if (!menuStatus) {
      setMenuStatus(true)
    }
  }

  return (
    <>
      <Menu menuStatus={menuStatus} setSlideIndex={setSlideIndex} currentFolder={currentFolder} setCurrentFolder={setCurrentFolder} menuHandler={menuHandler}/>
      <main className="flex justify-center w-[1500px] h-[100%] animation-ease-in">
        <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} currentFolder={currentFolder} setCurrentFolder={setCurrentFolder} />
        {/* <Gallery /> */}
      </main>
      <ImageryNav slideIndex={slideIndex} currentFolder={currentFolder} menuHandler={menuHandler}/>
    </>
  )
}