import { observations, people, structure } from "../../../assets/sliderData"
import { AnimatePresence, motion as m } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import { useState } from "react"

import ImageryNav from "../ImageryNav"
import Observations from "./Observations"
import People from "./People"
import Structure from "./Structure"

export default function Slider({
  slideIndex,
  setSlideIndex,
  currentFolder,
  setCurrentFolder,
  menuStatus,
  menuHandler,
  galleryHandler,
  isGallery,
  isTransitioning,
  setIsTransitioning,
}) {
  const currentImage = slideIndex
  const folder = [observations, people, structure]

  const prevSlide = () => {
    let previousFolder = folder[currentFolder - 1]

    if (isTransitioning === true) {
      return
    } else if (slideIndex === 0 && currentFolder === 0) {
      setSlideIndex(structure.length - 1)
      setCurrentFolder(2)
    } else if (slideIndex == 0) {
      setSlideIndex(previousFolder.length - 1)
      setCurrentFolder(currentFolder - 1)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  const nextSlide = () => {
    let selectedFolder = folder[currentFolder]

    if (isTransitioning === true) {
      return
    } else if (slideIndex === structure.length - 1 && currentFolder === 2) {
      setCurrentFolder(0)
      setSlideIndex(0)
      // setIsTransitioning(true)
      // setTimeout(() => {
      //   setIsTransitioning(false)
      // }, 3500)
      return
    } else if (slideIndex >= selectedFolder.length - 1) {
      setSlideIndex(0)
      setCurrentFolder(currentFolder + 1)
      // setIsTransitioning(true)
      // setTimeout(() => {
      //   setIsTransitioning(false)
      // }, 3500)
      return
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      id="slider"
      className="relative flex flex-col items-center justify-center"
      {...swipeHandlers}
    >
      <div className="absolute left-0 top-0 grid h-full w-full grid-cols-2">
        <div onClick={prevSlide} id="previous" className="z-20"></div>
        <div onClick={nextSlide} id="next" className="z-20"></div>
      </div>
      <div id="slider-container" className="flex items-center justify-center">
        <m.h2 className="absolute text-5xl text-teal-600">
          {currentFolder === 0 && "Observations"}
          {currentFolder === 1 && "People"}
          {currentFolder === 2 && "Structure"}
        </m.h2>

        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentFolder === 0 && (
              <m.div
                key={0}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1] }}
                exit={{ opacity: [1, 0, 0] }}
                transition={{ duration: 2, delay: 0.25 }}
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <Observations currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 1 && (
              <m.div
                key={1}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1] }}
                exit={{ opacity: [1, 0, 0] }}
                transition={{ duration: 2, delay: 0.25 }}
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <People currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 2 && (
              <m.div
                key={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1] }}
                exit={{ opacity: [1, 0, 0] }}
                transition={{ duration: 2, delay: 0.25 }}
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <Structure currentImage={currentImage} />
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {!isGallery && (
        <ImageryNav
          menuStatus={menuStatus}
          slideIndex={slideIndex}
          currentFolder={currentFolder}
          menuHandler={menuHandler}
          galleryHandler={galleryHandler}
        />
      )}
    </m.section>
  )
}
