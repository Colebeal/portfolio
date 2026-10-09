import { useCallback, useEffect, useState } from "react"
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

  const galleryHandler = useCallback(() => {
    setIsGallery((current) => !current)
  }, [])

  const menuHandler = useCallback(() => {
    setMenuStatus((current) => !current)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isGallery ? "auto" : "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isGallery])

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
        setCurrentFolder={setCurrentFolder}
        menuHandler={menuHandler}
      />
      {!isGallery && <MiniMenu />}

      {/* Gallery and Slider Logic */}

      <AnimatePresence mode="wait">
        {isGallery && (
          <Gallery
            key={"gallery"}
            setSlideIndex={setSlideIndex}
            currentFolder={currentFolder}
            setIsGallery={setIsGallery}
            menuHandler={menuHandler}
            galleryHandler={galleryHandler}
          />
        )}
        {!isGallery && (
          <Slider
            key={"slider"}
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
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
