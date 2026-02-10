import {
  scottieAmex,
  people,
  structure,
  observations,
  labDF3,
  labOZ1i,
  labHeelShaft,
} from "../../assets/sliderData"
import { motion as m } from "framer-motion"
import GalleryNav from "./GalleryNav"

export default function Slider({
  slideIndex,
  setSlideIndex,
  currentFolder,
  setCurrentFolder,
  setIsGallery,
  isGallery,
  menuStatus,
  menuHandler,
  galleryHandler,
}) {
  // const folder = [observations, people, structure];

  const enlargeImage = (e) => {
    setIsGallery(false)
    setSlideIndex(e - 1)
  }

  const animation = {
    initial: { translateY: 100, opacity: 0 },
    animate: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: {
      translateY: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  }

  return (
    <section
      className="m-auto w-auto bg-white pb-8 dark:bg-[#111111] md:mt-10"
      id="gallery"
    >
      <div>
        {currentFolder === 0 && (
          <m.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid h-full w-full grid-cols-2 gap-10 px-4 py-8
             md:gap-16 xl:grid-cols-3 2xl:grid-cols-4"
          >
            {scottieAmex.map((image) => (
              <img
                onClick={() => {
                  enlargeImage(image.id)
                }}
                id={image.id}
                key={image.id}
                className={image.gallery}
                src={image.src}
              />
            ))}
          </m.div>
        )}
        {currentFolder === 1 && (
          <m.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid h-full w-full grid-cols-2 gap-10 px-4 py-8
             md:gap-16 xl:grid-cols-3 2xl:grid-cols-4"
          >
            {labDF3.map((image) => (
              <img
                onClick={() => {
                  enlargeImage(image.id)
                }}
                id={image.id}
                key={image.id}
                className={image.gallery}
                src={image.src}
              />
            ))}
          </m.div>
        )}
        {currentFolder === 2 && (
          <m.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid h-full w-full grid-cols-2 gap-10 px-4 py-8
             md:gap-16 xl:grid-cols-3 2xl:grid-cols-4"
          >
            {labOZ1i.map((image) => (
              <img
                onClick={() => {
                  enlargeImage(image.id)
                }}
                id={image.id}
                key={image.id}
                className={image.gallery}
                src={image.src}
              />
            ))}
          </m.div>
        )}
        {currentFolder === 3 && (
          <m.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid h-full w-full grid-cols-2 gap-10 px-4 py-8
             md:gap-16 xl:grid-cols-3 2xl:grid-cols-4"
          >
            {labHeelShaft.map((image) => (
              <img
                onClick={() => {
                  enlargeImage(image.id)
                }}
                id={image.id}
                key={image.id}
                className={image.gallery}
                src={image.src}
              />
            ))}
          </m.div>
        )}
        {currentFolder === 4 && (
          <m.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3"
          >
            {people.map((image) => (
              <img
                onClick={() => {
                  enlargeImage(image.id)
                }}
                id={image.id}
                key={image.id}
                className={image.gallery}
                src={image.src}
              />
            ))}
          </m.div>
        )}
        {currentFolder === 5 && (
          <m.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3"
          >
            {structure.map((image) => (
              <img
                onClick={() => {
                  enlargeImage(image.id)
                }}
                id={image.id}
                key={image.id}
                className={image.gallery}
                src={image.src}
              />
            ))}
          </m.div>
        )}
        {currentFolder === 6 && (
          <m.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3"
          >
            {observations.map((image) => (
              <img
                onClick={() => {
                  enlargeImage(image.id)
                }}
                id={image.id}
                key={image.id}
                className={image.gallery}
                src={image.src}
              />
            ))}
          </m.div>
        )}
        {isGallery && (
          <GalleryNav
            slideIndex={slideIndex}
            menuHandler={menuHandler}
            currentFolder={currentFolder}
            galleryHandler={galleryHandler}
            isGallery={isGallery}
          />
        )}
      </div>
      {/* <div>

        <h2 className="mt-4 w-full text-center text-2xl text-teal-900 dark:text-gray-400 lg:left-20 lg:text-4xl">
          <p className="lg:text-md text-xs font-light">The AmEx • PGA • 2026</p>
          Scottie Scheffler
        </h2>

        <div className=" mb-8 h-[1px] w-full bg-gray-700"></div>

        <m.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid h-full w-full grid-cols-2 gap-10 px-4 md:gap-16 xl:grid-cols-3 2xl:grid-cols-4"
        >
          {scottieAmex.map((image) => (
            <img
              onClick={() => {
                enlargeImage(image.id)
              }}
              id={image.id}
              key={image.id}
              className={image.gallery}
              src={image.src}
            />
          ))}
        </m.div>

        <h2 className="mt-12 w-full text-center text-2xl text-teal-900 dark:text-gray-400 lg:left-20 lg:mt-20 lg:text-4xl">
          <p className="lg:text-md text-xs font-light">L.A.B. Golf</p>
          DF3
        </h2>
        <div className=" mb-4 h-[1px] w-full bg-gray-700"></div>

        <m.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >
          {labDF3.map((image) => (
            <img
              onClick={() => {
                enlargeImage(image.id)
              }}
              id={image.id}
              key={image.id}
              className={image.gallery}
              src={image.src}
            />
          ))}
        </m.div>

        <h2 className="mt-12 w-full text-center text-2xl text-teal-900 dark:text-gray-400 lg:left-20 lg:mt-20 lg:text-4xl">
          <p className="lg:text-md text-xs font-light">L.A.B. Golf</p>
          OZ1i
        </h2>
        <div className=" mb-4 h-[1px] w-full bg-gray-700"></div>

        <m.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >
          {labOZ1i.map((image) => (
            <img
              onClick={() => {
                enlargeImage(image.id)
              }}
              id={image.id}
              key={image.id}
              className={image.gallery}
              src={image.src}
            />
          ))}
        </m.div>


        <h2 className="mt-12 w-full text-center text-2xl text-teal-900 dark:text-gray-400 lg:left-20 lg:mt-20 lg:text-4xl">
          <p className="lg:text-md text-xs font-light">L.A.B. Golf</p>
          OZ1i HS
        </h2>
        <div className=" mb-4 h-[1px] w-full bg-gray-700"></div>

        <m.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >
          {labHeelShaft.map((image) => (
            <img
              onClick={() => {
                enlargeImage(image.id)
              }}
              id={image.id}
              key={image.id}
              className={image.gallery}
              src={image.src}
            />
          ))}
        </m.div>


        <h2 className="mt-12 w-full text-center text-2xl text-teal-900 dark:text-gray-400 lg:left-20 lg:mt-20 lg:text-4xl">
          <p className="lg:text-md text-xs font-light">Archives</p>
          People
        </h2>
        <div className=" mb-4 h-[1px] w-full bg-gray-700"></div>
        <m.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="xl:grid-cols-32xl:grid-cols-4 flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 2xl:grid-cols-4"
        >
          {people.map((image) => (
            <img
              onClick={() => {
                enlargeImage(image.id)
              }}
              id={image.id}
              key={image.id}
              className={image.gallery}
              src={image.src}
            />
          ))}
        </m.div>


        <h2 className="mt-4 w-full text-center text-2xl text-teal-900 dark:text-gray-400 lg:left-20 lg:mt-20 lg:text-4xl">
          <p className="lg:text-md text-xs font-light">Archives</p>
          Structure
        </h2>
        <div className=" mb-4 h-[1px] w-full bg-gray-700"></div>

        <m.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3"
        >
          {structure.map((image) => (
            <img
              onClick={() => {
                enlargeImage(image.id)
              }}
              id={image.id}
              key={image.id}
              className={image.gallery}
              src={image.src}
            />
          ))}
        </m.div>


        <h2 className="mt-12 w-full text-left text-2xl text-teal-900 dark:text-gray-400 lg:left-20 lg:mt-20 lg:text-4xl">
          <p className="lg:text-md text-xs font-light">Archives</p>
          Observations
        </h2>
        <div className=" mb-4 h-[1px] w-full bg-gray-700"></div>
        <m.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >
          {observations.map((image) => (
            <img
              onClick={() => {
                enlargeImage(image.id)
              }}
              id={image.id}
              key={image.id}
              className={image.gallery}
              src={image.src}
            />
          ))}
        </m.div>
        {isGallery && (
          <GalleryNav
            slideIndex={slideIndex}
            menuHandler={menuHandler}
            currentFolder={currentFolder}
            galleryHandler={galleryHandler}
            isGallery={isGallery}
          />
        )}
      </div> */}
    </section>
  )
}
