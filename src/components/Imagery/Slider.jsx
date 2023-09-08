import {observations, people, structure} from "../../assets/sliderData"
import { useState } from "react"

export default function Slider( { slideIndex, setSlideIndex, currentFolder, setCurrentFolder }) {
  const currentImage = slideIndex;
  const folder = [observations, people, structure];

  const prevSlide = ( ) => {
    let previousFolder = folder[currentFolder - 1]

    if(slideIndex === 0 && currentFolder === 0){
      setSlideIndex(structure.length - 1)
      setCurrentFolder(2)
    }else if (slideIndex <= 0 ){
      setSlideIndex( previousFolder.length - 1)
      setCurrentFolder(currentFolder - 1)
    } else {
      setSlideIndex(slideIndex - 1)
    } 
  }
  
  const nextSlide = () => {
    let selectedFolder = folder[currentFolder]

    if(slideIndex === structure.length - 1  && currentFolder === 2){
      
      setCurrentFolder(0)
      setSlideIndex(0)
      return
    }else if (slideIndex >= selectedFolder.length - 1) {
      setSlideIndex(0)
      setCurrentFolder(currentFolder + 1)
      return
    }
    setSlideIndex(slideIndex + 1)
  }

console.log('currentFolder', currentFolder)
  return (
    <section id="slider">
      <div className="absolute top-0 left-0 h-screen w-screen grid grid-cols-2 justify-center">
        <div onClick={prevSlide} id="previous" className="w-auto h-full z-10"></div>
        <div onClick={nextSlide} id="next" className="w-auto h-full z-10"></div>
      </div>
      <div id="slider-container" className="flex justify-center items-center ">
        <div className="flex justify-center items-center w-[60%] h-[50%] opacity-100 animate-fade-in">
        {/* <img id={observations[slideIndex].id} key={observations[slideIndex].id} className={observations[slideIndex].className} src={observations[slideIndex].src}/> */}
        {currentFolder === 0 &&
          observations.map((image,index) => {
            if (index === currentImage) {
              return <img id={image.id} key={index} loading={index === 0 ? 'eager' : 'lazy'} className={currentImage === index ? image.className : image.hidden} src={image.src}/>
            } else {
              return <img id={image.id} key={image.id} loading={"lazy"} className={image.hidden} src={image.src}/>
            }
          })
        }
        {currentFolder === 1 &&
          people.map((image,index) => {
            if (index === currentImage) {
              return <img id={image.id} key={index} loading={index === 0 ? 'eager' : 'lazy'} className={currentImage === index ? image.className : image.hidden} src={image.src}/>
            } else {
              return <img id={image.id} key={image.id} loading={"lazy"} className={image.hidden} src={image.src}/>
            }
          })
        }
        {currentFolder === 2 &&
          structure.map((image,index) => {
            if (index === currentImage) {
              return <img id={image.id} key={index} loading={image.loading} className={currentImage === index ? image.className : image.hidden} src={image.src}/>
            } else {
              return <img id={image.id} key={image.id} loading={"lazy"} className={image.hidden} src={image.src}/>
            }
          })
        }
        </div>
      </div>
    </section>
  )
}


  // const showSlide = () => {
  //   let folder = Object.keys(imageData)[folderDisplayed]
  //   let source = imageData[folder][slideIndex]

  //   if(slideIndex === 0){
  //     return (
  //       <img loading='eager' className="max-w-[1000px] max-h-[800px] object-contain will-change-contents" src={`/images/${folder}/${source}`}/>
  //     ) 
  //   } return (
  //       <img className="max-w-[1000px] max-h-[800px] object-contain" src={`/images/${folder}/${source}`}/>
  //     )
  // }

  // const renderObservations = () => {
  //   observations.map(image => {
  //     return(<img key={image.id} loading='eager' className={image.className} src={image.src}/>)
  //   })
  // }

  
  // const showSlide = (array) => {
  //   let image = array[slideIndex]



  //   if(slideIndex === 0){
  //     return (
  //       <img loading='eager' className="max-w-[1000px] max-h-[800px] object-contain will-change-contents" src={image.src}/>
  //     ) 
  //   } return (
  //       <img className="max-w-[1000px] max-h-[800px] object-contain" src={image.src}/>
  //     )
  // }



  // const showSlide = () => {
  //   let folder = Object.keys(imageData)[folderDisplayed]
  //   let source = imageData[folder][slideIndex]

  //   if(slideIndex === 0){
  //     return (
  //       <img loading='eager' className="max-w-[1000px] max-h-[800px] object-contain will-change-contents" src={`/images/${folder}/${source}`}/>
  //     ) 
  //   } return (
  //       <img className="max-w-[1000px] max-h-[800px] object-contain" src={`/images/${folder}/${source}`}/>
  //     )
  // }
  
