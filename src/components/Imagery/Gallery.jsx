import { observations, people, structure } from "../../assets/sliderData"
import { motion as m } from "framer-motion"

import MiniMenu from "./MiniMenu"

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
      transition: { duration: .5, ease: "easeInOut" },
    },
  }

  return (
    <section
      className="m-auto w-screen bg-white dark:bg-teal-950 md:mt-10 md:w-auto"
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
        {currentFolder === 1 && (
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
            d
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
      </div>
    </section>
  )
}

// observations.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)
// {currentFolder === 1 && people.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}
// {currentFolder === 2 && structure.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}
