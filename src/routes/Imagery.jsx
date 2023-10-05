import { useState } from "react"
import { motion as m, AnimatePresence, easeInOut } from "framer-motion"

import Slider from "../components/Imagery/Slider/Slider"
import Menu from "../components/Imagery/Menu/Menu"
import Gallery from "../components/Imagery/Gallery"
import MiniMenu from "../components/Imagery/MiniMenu"

export default function Imagery() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [menuStatus, setMenuStatus] = useState(false)
  const [currentFolder, setCurrentFolder] = useState(0)
  const [isGallery, setIsGallery] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

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

  isGallery
    ? (document.body.style.overflow = "auto")
    : (document.body.style.overflow = "hidden")

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      id="wrapper"
    >
      <Menu
        menuStatus={menuStatus}
        setSlideIndex={setSlideIndex}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
        menuHandler={menuHandler}
      />
      <MiniMenu menuHandler={menuHandler} />

      {/* Gallery and Slider Logic */}

      <AnimatePresence mode="wait">
        {isGallery && (
          <Gallery
            key={"gallery"}
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
            setIsGallery={setIsGallery}
            isTransitioning={isTransitioning}
            setIsTransitioning={setIsTransitioning}
          />
        )}
        {!isGallery && (
          <Slider
            key={"slider"}
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
            isGallery={isGallery}
            menuStatus={menuStatus}
            menuHandler={menuHandler}
            galleryHandler={galleryHandler}
            isTransitioning={isTransitioning}
            setIsTransitioning={setIsTransitioning}
          />
        )}
      </AnimatePresence>
    </m.section>
  )
}
