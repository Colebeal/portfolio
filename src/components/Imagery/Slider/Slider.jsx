import { observations, people, structure } from "../../../assets/sliderData"
import { AnimatePresence, motion as m } from "framer-motion"
import { useSwipeable } from "react-swipeable"

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
      return
    } else if (slideIndex >= selectedFolder.length - 1) {
      setSlideIndex(0)
      setCurrentFolder(currentFolder + 1)
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

  const animation = {
    title: {
      initial: { opacity: 0, translateY: -100 },
      animate: {
        opacity: 1,
        translateY: 0,
        transition: { duration: 1, delay: 1 },
      },
      exit: { opacity: 0, translateY: 50, transition: { duration: 1 } },
    },
    slider: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: .25} },
      exit: { opacity: 0 },
    },
  }

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      id="slider"
      className="absolute top-0 flex w-full flex-col items-center justify-center"
      onKeyDown={() => console.log("keydown")}
      {...swipeHandlers}
    >
      <div className="absolute left-0 top-0 grid h-full w-full grid-cols-2">
        <div onClick={prevSlide} id="previous" className="z-20"></div>
        <div onClick={nextSlide} id="next" className="z-20"></div>
      </div>
      <div
        id="slider-container"
        className="flex flex-col items-center justify-center"
      >
        <div
          id="topSpacer"
          className="bg-red min-h-[150px] z-100 w-full"
        ></div>
        <AnimatePresence mode="wait">
          {currentFolder === 0 && (
            <m.h2
              key={0}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-5 top-10 text-4xl text-teal-900 dark:text-teal-700 lg:left-20 lg:text-5xl"
            >
              Observations
            </m.h2>
          )}
          {currentFolder === 1 && (
            <m.h2
              key={1}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-5 top-10 text-4xl text-teal-900 dark:text-teal-700 lg:left-20 lg:text-5xl"
            >
              People
            </m.h2>
          )}
          {currentFolder === 2 && (
            <m.h2
              key={2}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-5 top-10 text-4xl text-teal-900 dark:text-teal-700 lg:left-20 lg:text-5xl"
            >
              Structure
            </m.h2>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentFolder === 0 && (
              <m.div
                key={0}
                variants={animation.slider}
                initial="intial"
                animate="animate"
                exit="exit"
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
                variants={animation.slider}
                initial="intial"
                animate="animate"
                exit="exit"
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
                variants={animation.slider}
                initial="intial"
                animate="animate"
                exit="exit"
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
