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

export default function Slider({
  slideIndex,
  setSlideIndex,
  currentFolder,
  setCurrentFolder,
  setIsGallery,
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
      className="m-auto w-screen bg-white py-8 dark:bg-[#111111] md:mt-10 md:w-auto"
      id="gallery"
    >
      <div>
        {currentFolder === 0 && (
          <m.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex h-full w-full flex-1 flex-col gap-10 md:gap-16 lg:grid lg:grid-cols-2 xl:grid-cols-3"
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
            className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3"
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
            className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3"
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
            className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3"
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
      </div>
    </section>
  )
}
