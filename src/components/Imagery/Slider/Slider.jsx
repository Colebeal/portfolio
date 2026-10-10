import { useCallback, useEffect, useRef, useState } from "react"
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
  const wheelAxisRef = useRef(null)
  const wheelCooldownRef = useRef(false)
  const wheelResetTimerRef = useRef(null)
  const wheelCooldownTimerRef = useRef(null)
  const [collectionDirection, setCollectionDirection] = useState(0)
  const collection = portfolioCollections[currentFolder]
  const currentImage = collection.images[slideIndex]

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setCollectionDirection(0)
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
    setCollectionDirection(0)
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

    const previousFolder =
      (currentFolder - 1 + portfolioCollections.length) %
      portfolioCollections.length
    const nextFolder = (currentFolder + 1) % portfolioCollections.length
    const imagesToPreload = [
      ...[1, 2, -1].map(getAdjacentImage),
      portfolioCollections[previousFolder].images[0],
      portfolioCollections[nextFolder].images[0],
    ].filter(
      (image, index, images) =>
        images.findIndex(({ src }) => src === image.src) === index,
    )

    imagesToPreload.forEach((imageToPreload) => {
      const preload = new Image()
      const image = getResponsiveImageProps(imageToPreload.src)
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

  const changeCollection = useCallback(
    (direction) => {
      if (isTransitioning) return

      const nextFolder =
        (currentFolder + direction + portfolioCollections.length) %
        portfolioCollections.length

      setCollectionDirection(direction)
      setCurrentFolder(nextFolder)
      setSlideIndex(0)
    },
    [currentFolder, isTransitioning, setCurrentFolder, setSlideIndex],
  )

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    onSwipedUp: () => changeCollection(1),
    onSwipedDown: () => changeCollection(-1),
    delta: { left: 12, right: 12, up: 70, down: 70 },
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
      if (event.key === "ArrowUp") {
        event.preventDefault()
        changeCollection(-1)
      }
      if (event.key === "ArrowDown") {
        event.preventDefault()
        changeCollection(1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [changeCollection, nextSlide, prevSlide])

  const handleTrackpadSwipe = (event) => {
    const axis =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? "horizontal"
        : "vertical"
    const distance = axis === "horizontal" ? event.deltaX : event.deltaY

    event.preventDefault()
    if (wheelCooldownRef.current || isTransitioning) return

    if (wheelAxisRef.current !== axis) {
      wheelAxisRef.current = axis
      wheelDistanceRef.current = 0
    }

    wheelDistanceRef.current += distance
    window.clearTimeout(wheelResetTimerRef.current)
    wheelResetTimerRef.current = window.setTimeout(() => {
      wheelDistanceRef.current = 0
      wheelAxisRef.current = null
    }, 140)

    const threshold = axis === "horizontal" ? 55 : 70
    if (Math.abs(wheelDistanceRef.current) < threshold) return

    if (axis === "horizontal") {
      if (wheelDistanceRef.current > 0) nextSlide()
      else prevSlide()
    } else if (wheelDistanceRef.current > 0) {
      changeCollection(1)
    } else {
      changeCollection(-1)
    }

    wheelDistanceRef.current = 0
    wheelAxisRef.current = null
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
      className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden pb-16 lg:pb-0"
      onWheel={handleTrackpadSwipe}
      aria-label={`${collection.title} photo loupe`}
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
        <AnimatePresence custom={collectionDirection} mode="wait">
          <m.h2
            key={collection.slug}
            custom={collectionDirection}
            variants={{
              enter: (direction) => ({
                opacity: 0,
                x: direction === 0 ? -25 : 0,
                y: direction * 32,
              }),
              center: { opacity: 1, x: 0, y: 0 },
              exit: (direction) => ({
                opacity: 0,
                x: direction === 0 ? 25 : 0,
                y: direction * -32,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="portfolio-accent-text w-full pb-4 text-center text-4xl 2xl:text-5xl"
          >
            <span className="block text-xs font-light lg:text-base">
              {collection.eyebrow}
            </span>
            {collection.title}
          </m.h2>
        </AnimatePresence>

        <AnimatePresence custom={collectionDirection} mode="wait">
          <m.div
            key={`${collection.slug}-${slideIndex}`}
            custom={collectionDirection}
            variants={{
              enter: (direction) => ({
                opacity: 0,
                y: direction * 72,
              }),
              center: { opacity: 1, y: 0 },
              exit: (direction) => ({
                opacity: 0,
                y: direction * -72,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
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
