import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { motion as m } from "framer-motion"

import { portfolioCollections } from "../../assets/sliderData"

export default function ImageryNav({
  slideIndex,
  setSlideIndex,
  currentFolder,
}) {
  const imageCount = portfolioCollections[currentFolder].images.length
  const railRef = useRef(null)

  useEffect(() => {
    const centerActiveNumber = (behavior = "smooth") => {
      const rail = railRef.current
      const activeNumber = rail?.querySelector('[data-active="true"]')
      if (!rail || !activeNumber) return

      rail.scrollTo({
        left:
          activeNumber.offsetLeft -
          (rail.clientWidth - activeNumber.offsetWidth) / 2,
        behavior,
      })
    }

    centerActiveNumber()
    const handleResize = () => centerActiveNumber("auto")
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [slideIndex, currentFolder])

  return (
    <m.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="z-30 mb-5 flex h-14 w-full items-end justify-center"
      aria-label="Select a photograph"
    >
      <div
        ref={railRef}
        className="no-scrollbar flex w-full items-end overflow-x-hidden pt-6 lg:w-auto lg:max-w-[calc(100vw-26rem)] lg:overflow-x-auto lg:px-4 2xl:max-w-[calc(100vw-30rem)]"
      >
        <span
          className="w-[calc(50vw-0.875rem)] shrink-0 lg:hidden"
          aria-hidden="true"
        />
        {Array.from({ length: imageCount }, (_, index) => {
          const isActive = index === slideIndex

          return (
            <m.button
              key={index}
              type="button"
              onClick={() => setSlideIndex(index)}
              animate={{
                y: isActive ? -13 : 0,
                scale: isActive ? 1.3 : 1,
                opacity: isActive ? 1 : 0.45,
              }}
              whileHover={{ y: -7, scale: 1.12, opacity: 1 }}
              transition={{ type: "spring", stiffness: 360, damping: 24 }}
              data-active={isActive}
              className="flex h-8 w-7 shrink-0 items-center justify-center rounded-none border-0 bg-transparent p-0 text-xs tabular-nums text-black dark:text-white md:w-8"
              aria-label={`View photograph ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
            >
              {String(index + 1).padStart(2, "0")}
            </m.button>
          )
        })}
        <span
          className="w-[calc(50vw-0.875rem)] shrink-0 lg:hidden"
          aria-hidden="true"
        />
      </div>
    </m.nav>
  )
}

ImageryNav.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  currentFolder: PropTypes.number.isRequired,
}
