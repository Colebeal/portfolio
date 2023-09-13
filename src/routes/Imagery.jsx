import { useState } from "react"
import { Link } from "react-router-dom"
import { HiOutlineHome,HiMenu } from 'react-icons/hi'


import Slider from "../components/Imagery/Slider"
import ImageryNav from "../components/Imagery/ImageryNav"
import Menu from "../components/Imagery/Menu/Menu"
import Gallery from "../components/Imagery/Gallery"
import ThemeToggle from "../components/ThemeToggle"



export default function Imagery({ theme }) { 
  const [slideIndex, setSlideIndex] = useState(0)
  const [menuStatus, setMenuStatus] = useState(false)
  const [currentFolder, setCurrentFolder] = useState(0)
  const [isGallery, setIsGallery] = useState(false)

  const galleryHandler = () => {
    if (isGallery) {
      setIsGallery(false)
    }
    if (!isGallery) {
      setIsGallery(true)
    }
  }  

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
      <div>
        <ThemeToggle/>
        <Link to="/">
          <HiOutlineHome className="absolute top-5 left-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>
        </Link>
        {isGallery && <HiMenu onClick={menuHandler} className="absolute top-14 left-3 m-5 z-50 text-2xl cursor-pointer text-teal-900 dark:text-orange-50 animate-fade-in"/>}
      </div>
      <Menu menuStatus={menuStatus} setSlideIndex={setSlideIndex} currentFolder={currentFolder} setCurrentFolder={setCurrentFolder} menuHandler={menuHandler}/>
      {isGallery && <Gallery slideIndex={slideIndex} setSlideIndex={setSlideIndex} currentFolder={currentFolder} setCurrentFolder={setCurrentFolder} setIsGallery={setIsGallery}/>}
      {!isGallery && <main className="flex justify-center xl:w-[1250px] 2xl:w-[1500px] h-full animation-ease-in">
        <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} currentFolder={currentFolder} setCurrentFolder={setCurrentFolder} />
      </main>}
      {!isGallery && <ImageryNav menuStatus={menuStatus} slideIndex={slideIndex} currentFolder={currentFolder} menuHandler={menuHandler} galleryHandler={galleryHandler}/>}    
    </>
  )
}