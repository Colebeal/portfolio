import {observations, people, structure} from "../../assets/sliderData"

export default function Slider( { slideIndex, setSlideIndex, currentFolder, setCurrentFolder, setIsGallery }) {
  // const folder = [observations, people, structure];

  const enlargeImage = (e) => {
    setIsGallery(false)
    setSlideIndex(e)
  }

  return (
    <section className='animate-rise-up' id="gallery" >
      <div>
      {currentFolder === 0 && 
        <div className="w-full h-full flex flex-col flex-1 lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-16">
          {observations.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}
        </div>
      }    
      {currentFolder === 1 && 
        <div className="w-full h-full flex flex-col flex-1 lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {people.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}
        </div>
      }    
      {currentFolder === 2 && 
        <div className="w-full h-full flex flex-col flex-1 lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {structure.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}
        </div>
      }    
      </div>
    </section>
  )
}

// observations.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)
// {currentFolder === 1 && people.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}    
// {currentFolder === 2 && structure.map(image => <img onClick={()=>{enlargeImage(image.id)}} id={image.id} key={image.id} loading={"lazy"} className={image.gallery} src={image.src}/>)}    
