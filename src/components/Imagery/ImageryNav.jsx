import PropTypes from "prop-types"
import { motion as m } from "framer-motion"

import { portfolioCollections } from "../../assets/sliderData"

export default function ImageryNav({
  slideIndex,
  menuHandler,
  currentFolder,
  galleryHandler,
}) {
  const imageCount = portfolioCollections[currentFolder].images.length

  return (
    <m.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      className="z-20 my-1 mb-6 flex h-10 w-full justify-center md:mb-0"
      aria-label="Photography controls"
    >
      <div className="z-50 flex h-fit w-fit items-center rounded-lg border border-black bg-white p-2 shadow-lg dark:border-white dark:bg-black">
        <button
          type="button"
          onClick={galleryHandler}
          className="p-2 font-semibold"
        >
          Gallery
        </button>
        <span className="w-[100px] p-2" aria-live="polite">
          {slideIndex + 1} of {imageCount}
        </span>
        <button
          type="button"
          onClick={menuHandler}
          className="p-2 font-semibold"
        >
          Menu
        </button>
      </div>
    </m.nav>
  )
}

ImageryNav.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  menuHandler: PropTypes.func.isRequired,
  currentFolder: PropTypes.number.isRequired,
  galleryHandler: PropTypes.func.isRequired,
}
