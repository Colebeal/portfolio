import { observations, people, structure } from "../../assets/sliderData"

export default function Slider({
  slideIndex,
  setSlideIndex,
  currentFolder,
  setCurrentFolder,
}) {
  const currentImage = slideIndex
  const folder = [observations, people, structure]

  const prevSlide = () => {
    let previousFolder = folder[currentFolder - 1]

    if (slideIndex === 0 && currentFolder === 0) {
      setSlideIndex(structure.length - 1)
      setCurrentFolder(2)
    } else if (slideIndex <= 0) {
      setSlideIndex(previousFolder.length - 1)
      setCurrentFolder(currentFolder - 1)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  const nextSlide = () => {
    let selectedFolder = folder[currentFolder]

    if (slideIndex === structure.length - 1 && currentFolder === 2) {
      setCurrentFolder(0)
      setSlideIndex(0)
      return
    } else if (slideIndex >= selectedFolder.length - 1) {
      setSlideIndex(0)
      setCurrentFolder(currentFolder + 1)
      return
    }
    setSlideIndex(slideIndex + 1)
  }

  return (
    <section id="slider">
      <div className="absolute left-0 top-0 grid h-full w-full grid-cols-2">
        <div onClick={prevSlide} id="previous" className="z-10"></div>
        <div onClick={nextSlide} id="next" className="z-10"></div>
      </div>
      <div id="slider-container">
        <div className="flex animate-fade-in items-center justify-center">
          {currentFolder === 0 &&
            observations.map((image, index) => {
              return (
                <img
                  id={image.id}
                  key={index}
                  width="1600px"
                  className={
                    currentImage === index ? image.className : image.hidden
                  }
                  src={image.src}
                />
              )
            })}
          {currentFolder === 1 &&
            people.map((image, index) => {
              return (
                <img
                  id={image.id}
                  key={index}
                  width="1600px"
                  className={
                    currentImage === index ? image.className : image.hidden
                  }
                  src={image.src}
                />
              )
            })}
          {currentFolder === 2 &&
            structure.map((image, index) => {
              return (
                <img
                  id={image.id}
                  key={index}
                  width="1600px"
                  className={
                    currentImage === index ? image.className : image.hidden
                  }
                  src={image.src}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
