import PropTypes from "prop-types"
import { motion as m } from "framer-motion"

import { portfolioCollections } from "../../assets/sliderData"
import GalleryNav from "./GalleryNav"
import BlurImage from "./BlurImage"

export default function Gallery({
  setSlideIndex,
  currentFolder,
  setIsGallery,
  menuHandler,
  galleryHandler,
}) {
  const collection = portfolioCollections[currentFolder]

  const enlargeImage = (index) => {
    setSlideIndex(index)
    setIsGallery(false)
  }

  return (
    <m.section
      initial={{ translateY: 100, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="m-auto min-h-screen w-full bg-white pb-28 dark:bg-[#111111] md:pt-10"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="px-4 py-8">
        <h1
          id="gallery-title"
          className="mb-2 text-4xl text-teal-900 dark:text-white"
        >
          {collection.title}
        </h1>
        <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">
          {collection.eyebrow} · {collection.images.length} photographs
        </p>
        <div className="grid grid-cols-2 gap-5 md:gap-10 xl:grid-cols-3 2xl:grid-cols-4">
          {collection.images.map((image, index) => (
            <button
              type="button"
              key={image.id}
              onClick={() => enlargeImage(index)}
              className="min-h-32 flex items-center justify-center border-0 bg-transparent p-0"
              aria-label={`Open ${collection.title} photograph ${index + 1}`}
            >
              <BlurImage
                className={image.gallery}
                src={image.src}
                alt={image.alt || `${collection.title} photograph ${index + 1}`}
                blurHash={image.blurHash}
                blurWidth={image.width}
                blurHeight={image.height}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
      <GalleryNav menuHandler={menuHandler} galleryHandler={galleryHandler} />
    </m.section>
  )
}

Gallery.propTypes = {
  setSlideIndex: PropTypes.func.isRequired,
  currentFolder: PropTypes.number.isRequired,
  setIsGallery: PropTypes.func.isRequired,
  menuHandler: PropTypes.func.isRequired,
  galleryHandler: PropTypes.func.isRequired,
}
