import {
  observations,
  people,
  structure,
  scottieAmex,
  labDF3,
  labOZ1i,
  labHeelShaft,
  surferMickRodgers,
  surferUsOpen,
  tcssDeadKooks,
} from "../../../assets/sliderData"
import { AnimatePresence, motion as m } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import { useRef } from "react"

import ImageryNav from "../ImageryNav"
import Observations from "./ImageSets/Observations"
import People from "./ImageSets/People"
import Structure from "./ImageSets/Structure"
import ScottieAmex from "./ImageSets/ScottieAmex"
import LabDF3 from "./ImageSets/LabDF3"
import LabOZ1i from "./ImageSets/LabOZ1i"
import LabHeelShaft from "./ImageSets/LabHeelShaft"
import SurferMickRodgers from "./ImageSets/SurferMickRodgers"
import SurferUsOpen from "./ImageSets/SurferUSOpen"
import TCSSDeadKooks from "./ImageSets/TCSSDeadKooks"

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
  const folder = [
    scottieAmex,
    labDF3,
    labOZ1i,
    labHeelShaft,
    surferUsOpen,
    surferMickRodgers,
    tcssDeadKooks,
    people,
    structure,
    observations,
  ]
  const prevCursorRef = useRef(null)
  const nextCursorRef = useRef(null)

  const prevSlide = () => {
    let previousFolder = folder[currentFolder - 1]

    if (isTransitioning === true) {
      return
    } else if (slideIndex === 0 && currentFolder === 0) {
      setSlideIndex(observations.length - 1)
      setCurrentFolder(9)
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
    } else if (slideIndex === observations.length - 1 && currentFolder === 9) {
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
      initial: { opacity: 0, translateX: -25 },
      animate: {
        opacity: 1,
        translateX: 0,
        transition: { duration: 0.5, delay: 0.5 },
      },
      exit: { opacity: 0, translateX: 25, transition: { duration: 0.25 } },
    },
    slider: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.25 } },
      exit: { opacity: 0 },
    },
  }

  const cursorHandler = (e, ref) => {
    const el = ref.current
    if (!el) return
    el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
  }

  const showPrev = () => {
    const el = prevCursorRef.current
    if (el) el.style.opacity = "1"
  }
  const hidePrev = () => {
    const el = prevCursorRef.current
    if (el) el.style.opacity = "0"
  }

  const showNext = () => {
    const el = nextCursorRef.current
    if (el) el.style.opacity = "1"
  }
  const hideNext = () => {
    const el = nextCursorRef.current
    if (el) el.style.opacity = "0"
  }

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      id="slider"
      className="flex h-[100vh] w-full flex-col items-center justify-center"
      onKeyDown={() => console.log("keydown")}
      {...swipeHandlers}
    >
      <div className="absolute left-0 top-0 grid h-full w-full grid-cols-2">
        <div
          onClick={prevSlide}
          onMouseMove={() => cursorHandler(event, prevCursorRef)}
          onMouseEnter={showPrev}
          onMouseLeave={hidePrev}
          id="previous"
          className="z-20 lg:cursor-none"
        >
          <div
            id="previous-cursor"
            ref={prevCursorRef}
            className="pointer-events-none fixed left-0 top-0 z-50 hidden opacity-0 transition-opacity lg:block"
          >
            Previous
          </div>
        </div>
        <div
          onClick={nextSlide}
          onMouseMove={() => cursorHandler(event, nextCursorRef)}
          onMouseEnter={showNext}
          onMouseLeave={hideNext}
          id="next"
          className="z-20 lg:cursor-none"
        >
          <div
            ref={nextCursorRef}
            id="next-cursor"
            className="pointer-events-none fixed left-0 top-0 z-50 hidden opacity-0 transition-opacity lg:block"
          >
            Next
          </div>
        </div>
      </div>
      <div
        id="slider-container"
        className="flex flex-col items-center justify-center py-4"
      >
        <AnimatePresence mode="wait">
          {currentFolder === 0 && (
            <m.h2
              key={0}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">
                The Amex • PGA • 2026
              </p>
              Scottie Scheffler
            </m.h2>
          )}
          {currentFolder === 1 && (
            <m.h2
              key={1}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">L.A.B. Golf</p>
              DF3
            </m.h2>
          )}
          {currentFolder === 2 && (
            <m.h2
              key={2}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">L.A.B. Golf</p>
              OZ1i
            </m.h2>
          )}
          {currentFolder === 3 && (
            <m.h2
              key={3}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">L.A.B. Golf</p>
              OZ1i <span className="font-extrabold">HS</span>
            </m.h2>
          )}
          {currentFolder === 4 && (
            <m.h2
              key={4}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">SURFER Magazine</p>
              US Open
            </m.h2>
          )}
          {currentFolder === 5 && (
            <m.h2
              key={5}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">SURFER Magazine</p>
              Mick Rodgers x TCSS
            </m.h2>
          )}
          {currentFolder === 6 && (
            <m.h2
              key={6}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">TCSS</p>
              DeadKooks
            </m.h2>
          )}
          {currentFolder === 7 && (
            <m.h2
              key={7}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">Archives</p>
              People
            </m.h2>
          )}
          {currentFolder === 8 && (
            <m.h2
              key={8}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">Archives</p>
              Structure
            </m.h2>
          )}
          {currentFolder === 9 && (
            <m.h2
              key={9}
              variants={animation.title}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full pb-4 text-center text-4xl text-teal-900 dark:text-white lg:left-20 lg:text-5xl"
            >
              <p className="lg:text-md text-xs font-light">Archives</p>
              Observations
            </m.h2>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentFolder === 0 && (
              <m.div
                key={0}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10"
              >
                <ScottieAmex currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 1 && (
              <m.div
                key={1}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <LabDF3 currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 2 && (
              <m.div
                key={2}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <LabOZ1i currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 3 && (
              <m.div
                key={3}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <LabHeelShaft currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 4 && (
              <m.div
                key={4}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <SurferUsOpen currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 5 && (
              <m.div
                key={5}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <SurferMickRodgers currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 6 && (
              <m.div
                key={6}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <TCSSDeadKooks currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 7 && (
              <m.div
                key={7}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10 "
              >
                <People currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 8 && (
              <m.div
                key={8}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10"
              >
                <Structure currentImage={currentImage} />
              </m.div>
            )}
            {currentFolder === 9 && (
              <m.div
                key={9}
                variants={animation.slider}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationStart={() => setIsTransitioning(true)}
                onAnimationComplete={() => setIsTransitioning(false)}
                className="z-10"
              >
                <Observations currentImage={currentImage} />
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
