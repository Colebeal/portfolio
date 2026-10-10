import { useCallback, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { AnimatePresence, motion as m } from "framer-motion"
import { useSwipeable } from "react-swipeable"

import { portfolioCollections } from "../../../assets/sliderData"
import { getResponsiveImageProps } from "../../../utils/resolveImageSrc"
import ImageryNav from "../ImageryNav"
import BlurImage from "../BlurImage"

export default function Slider({
  slideIndex,
  setSlideIndex,
  currentFolder,
  setCurrentFolder,
  isTransitioning,
  setIsTransitioning,
}) {
  const prevCursorRef = useRef(null)
  const nextCursorRef = useRef(null)
  const wheelDistanceRef = useRef(0)
  const wheelCooldownRef = useRef(false)
  const wheelResetTimerRef = useRef(null)
  const wheelCooldownTimerRef = useRef(null)
  const collection = portfolioCollections[currentFolder]
  const currentImage = collection.images[slideIndex]

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
      return
    }
    const previousFolder =
      (currentFolder - 1 + portfolioCollections.length) %
      portfolioCollections.length
    setCurrentFolder(previousFolder)
    setSlideIndex(portfolioCollections[previousFolder].images.length - 1)
  }, [
    currentFolder,
    isTransitioning,
    setCurrentFolder,
    setSlideIndex,
    slideIndex,
  ])

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    if (slideIndex < collection.images.length - 1) {
      setSlideIndex(slideIndex + 1)
      return
    }
    setCurrentFolder((currentFolder + 1) % portfolioCollections.length)
    setSlideIndex(0)
  }, [
    collection.images.length,
    currentFolder,
    isTransitioning,
    setCurrentFolder,
    setSlideIndex,
    slideIndex,
  ])

  useEffect(() => {
    const getAdjacentImage = (offset) => {
      let folderIndex = currentFolder
      let imageIndex = slideIndex + offset

      while (imageIndex >= portfolioCollections[folderIndex].images.length) {
        imageIndex -= portfolioCollections[folderIndex].images.length
        folderIndex = (folderIndex + 1) % portfolioCollections.length
      }

      while (imageIndex < 0) {
        folderIndex =
          (folderIndex - 1 + portfolioCollections.length) %
          portfolioCollections.length
        imageIndex += portfolioCollections[folderIndex].images.length
      }

      return portfolioCollections[folderIndex].images[imageIndex]
    }

    ;[1, 2, -1].forEach((offset) => {
      const preload = new Image()
      const image = getResponsiveImageProps(getAdjacentImage(offset).src)
      preload.fetchPriority = "low"
      preload.decoding = "async"
      if (image.srcSet) {
        preload.srcset = image.srcSet
        preload.sizes =
          "(min-width: 1536px) calc(100vw - 24rem), (min-width: 1024px) calc(100vw - 22rem), 90vw"
      }
      preload.src = image.src
    })
  }, [currentFolder, slideIndex])

  useEffect(
    () => () => {
      window.clearTimeout(wheelResetTimerRef.current)
      window.clearTimeout(wheelCooldownTimerRef.current)
    },
    [],
  )

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  const moveCursor = (event, ref) => {
    if (ref.current) {
      ref.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }
  }

  const setCursorOpacity = (ref, opacity) => {
    if (ref.current) ref.current.style.opacity = opacity
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target
      const isEditing =
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
      if (isEditing) return

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        prevSlide()
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  const handleTrackpadSwipe = (event) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
    event.preventDefault()
    if (wheelCooldownRef.current || isTransitioning) return

    wheelDistanceRef.current += event.deltaX
    window.clearTimeout(wheelResetTimerRef.current)
    wheelResetTimerRef.current = window.setTimeout(() => {
      wheelDistanceRef.current = 0
    }, 140)

    if (Math.abs(wheelDistanceRef.current) < 55) return

    if (wheelDistanceRef.current > 0) nextSlide()
    else prevSlide()

    wheelDistanceRef.current = 0
    wheelCooldownRef.current = true
    wheelCooldownTimerRef.current = window.setTimeout(() => {
      wheelCooldownRef.current = false
    }, 450)
  }

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      id="slider"
      className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden"
      onWheel={handleTrackpadSwipe}
      aria-label={`${collection.title} photo viewer`}
      {...swipeHandlers}
    >
      <div className="absolute left-0 top-0 grid h-full w-full grid-cols-2">
        <button
          type="button"
          onClick={prevSlide}
          onMouseMove={(event) => moveCursor(event, prevCursorRef)}
          onMouseEnter={() => setCursorOpacity(prevCursorRef, "1")}
          onMouseLeave={() => setCursorOpacity(prevCursorRef, "0")}
          className="z-20 border-0 bg-transparent p-0 lg:cursor-none"
          aria-label="Previous photograph"
        >
          <span
            ref={prevCursorRef}
            className="pointer-events-none fixed left-0 top-0 z-50 hidden opacity-0 transition-opacity lg:block"
            aria-hidden="true"
          >
            Previous
          </span>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          onMouseMove={(event) => moveCursor(event, nextCursorRef)}
          onMouseEnter={() => setCursorOpacity(nextCursorRef, "1")}
          onMouseLeave={() => setCursorOpacity(nextCursorRef, "0")}
          className="z-20 border-0 bg-transparent p-0 lg:cursor-none"
          aria-label="Next photograph"
        >
          <span
            ref={nextCursorRef}
            className="pointer-events-none fixed left-0 top-0 z-50 hidden opacity-0 transition-opacity lg:block"
            aria-hidden="true"
          >
            Next
          </span>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <AnimatePresence mode="wait">
          <m.h2
            key={collection.slug}
            initial={{ opacity: 0, translateX: -25 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 25 }}
            transition={{ duration: 0.25 }}
            className="portfolio-accent-text w-full pb-4 text-center text-4xl 2xl:text-5xl"
          >
            <span className="block text-xs font-light lg:text-base">
              {collection.eyebrow}
            </span>
            {collection.title}
          </m.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <m.div
            key={`${collection.slug}-${slideIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onAnimationStart={() => setIsTransitioning(true)}
            onAnimationComplete={() => setIsTransitioning(false)}
            className="z-10 flex h-[424px] w-[90vw] items-center justify-center md:h-[50vh] lg:h-[80vh] lg:w-[calc(100vw-22rem)] 2xl:w-[calc(100vw-24rem)]"
          >
            <BlurImage
              className={currentImage.className}
              src={currentImage.src}
              alt={currentImage.alt || `${collection.title} photograph`}
              blurHash={currentImage.blurHash}
              blurWidth={currentImage.width}
              blurHeight={currentImage.height}
              fit="contain"
              loading="eager"
              fetchPriority="high"
            />
          </m.div>
        </AnimatePresence>
      </div>

      <ImageryNav
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        currentFolder={currentFolder}
      />
    </m.section>
  )
}

Slider.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  currentFolder: PropTypes.number.isRequired,
  setCurrentFolder: PropTypes.func.isRequired,
  isTransitioning: PropTypes.bool.isRequired,
  setIsTransitioning: PropTypes.func.isRequired,
}
