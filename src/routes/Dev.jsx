import { useRef } from 'react'
import Nav from '../components/Dev/Nav'
import Footer from '../components/Dev/Footer'
import Hero from '../components/Dev/Hero'
import TechStack from '../components/Dev/TechStack'
import About from '../components/Dev/About'
import Services from '../components/Dev/Services'
import Portfolio from '../components/Dev/Porfolio'



export default function Dev() { 
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const porfolioRef = useRef(null)
  
  document.body.style.overflow = 'auto'

  return (
    <>
      <Nav servicesRef={servicesRef} aboutRef={aboutRef} porfolioRef={porfolioRef}/>
      <Hero/>
      <TechStack aboutRef={aboutRef}/>
      <div className='m-5 md:m-20 md:mt-0'>
        <About/>
        <Services servicesRef={servicesRef}/>
        <Portfolio porfolioRef={porfolioRef}/>
      </div>
      <Footer/>
    </>
  )
}
          {/* <div className='text-left'>
            <h2 className='my-5 text-3xl font-semibold text-orange-300'>more about me</h2>
            <p className='my-5 text-base'>
              I found my way to front-end development after working with websites for over 4 years, photography for over 13 years, and needed to find a way to merge the two. Whether it was frustration with the limitations of website builders, or the desire to create something more unique, I found myself wanting to learn how to code.               
            </p>
            <p className='my-5 text-base'>
              Making a career switch into tech is hardly original, however I am proud to say that I have done so without the help of a bootcamp. Aside from HTML, CSS, JS, React and Tailwind, I most importantly discovered how to learn. Equipped with the technical knowledge to build and deploy a site from the ground up, I am looking to add value to your project or team.
            </p>
          </div> */}