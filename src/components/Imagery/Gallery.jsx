import { observations, people, structure } from "../../assets/sliderData"

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
    setSlideIndex(e)
  }

  return (
    <section
      className="m-auto w-screen animate-rise-up md:mt-10 md:w-auto"
      id="gallery"
    >
      <div>
        {currentFolder === 0 && (
          <div className="flex h-full w-full flex-1 flex-col gap-10 md:gap-16 lg:grid lg:grid-cols-2 xl:grid-cols-3">
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
          </div>
        )}
        {currentFolder === 1 && (
          <div className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3">
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
          </div>
        )}
        {currentFolder === 2 && (
          <div className="flex h-full w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3">
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
          </div>
        )}
      </div>
    </section>
  )
}

// observations.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)
// {currentFolder === 1 && people.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}
// {currentFolder === 2 && structure.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}
