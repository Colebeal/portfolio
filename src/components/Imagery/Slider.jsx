export default function Slider( {slideIndex, setSlideIndex} ) {
  
  const showSlide = (index) => {
    if(index === 1){
      return (
        <img loading='eager' className="max-w-[1000px] max-h-[800px] object-contain will-change-contents" src={`/images/Portfolio-${index}.jpg`}/>
      ) 
    } return (
        <img className="max-w-[1000px] max-h-[800px] object-contain" src={`/images/Portfolio-${index}.jpg`}/>
      )
  }

  const prevSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(66)
      return
    } 
    setSlideIndex(slideIndex - 1)
  }
  
  const nextSlide = () => {
    if (slideIndex === 66) {
      setSlideIndex(1)
      return
    }
    setSlideIndex(slideIndex + 1)
  }
  
  return (
    <section id="slider">
      <div className="absolute top-0 left-0 h-screen w-screen grid grid-cols-2 justify-center">
        <div onClick={prevSlide} id="previous" className="w-auto h-full z-10"></div>
        <div onClick={nextSlide} id="next" className="w-auto h-full z-10"></div>
      </div>
      <div id="slider-container" className="flex justify-center items-center ">
        <div className="flex justify-center items-center w-[60%] h-[50%] opacity-100 animate-fade-in">
          {showSlide(slideIndex)}
        </div>
      </div>
    </section>
  )
}




  // const imageList = sliderData.map((obj, index) => {
  //     return (
  //         <img key={obj.id} src={`/images/Portfolio-${index + 1}.jpg`}/>
  //     )
  // });