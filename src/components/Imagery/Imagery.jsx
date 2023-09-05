import Slider from "./Slider"
import ImageryNav from "./ImageryNav"
import Menu from "./Menu/Menu"
import { useState } from "react"

export default function Imagery({ returnHomeHandler}) { 
  const [slideIndex, setSlideIndex] = useState(1)
  const [menuStatus, setMenuStatus] = useState(false)

  const menuHandler = () => {
    if (menuStatus) {
      setMenuStatus(false)
    }
    if (!menuStatus) {
      setMenuStatus(true)
    }
  }

  return(
    <>
      {menuStatus && <Menu returnHomeHandler={returnHomeHandler} menuHandler={menuHandler}/>}
      <main className="flex justify-center w-[1500px] h-[100%] animation-ease-in">
        <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        {/* <Gallery /> */}
      </main>
      <ImageryNav returnHomeHandler={returnHomeHandler} slideIndex={slideIndex} menuHandler={menuHandler}/>
    </>
  )
}