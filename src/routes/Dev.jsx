import { useRef } from "react"
import { motion as m } from "framer-motion"

import Nav from "../components/Dev/Nav"
import Footer from "../components/Dev/Footer"
import Hero from "../components/Dev/Hero"
import TechStack from "../components/Dev/TechStack"
import About from "../components/Dev/About"
import Services from "../components/Dev/Services"
import Portfolio from "../components/Dev/Porfolio"

export default function Dev() {
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const porfolioRef = useRef(null)

  document.body.style.overflow = "auto"

  // window.innerWidth > 768 ? { translateY: 0 } : { translateY: 200 }
  // window.innerWidth > 768 ?   { duration: 0.5, ease: "easeInOut" } :   { duration: 0.5, delay: 2, ease: "easeInOut" }

  return (
    <>
      <m.div
        initial={
          window.innerWidth > 768 ? { translateY: 0 } : { translateY: 0 }
        }
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={
          window.innerWidth > 768
            ? { duration: 0.5, ease: "easeInOut" }
            : { duration: 0.5, ease: "easeInOut" }
        }
      >
        <Nav
          servicesRef={servicesRef}
          aboutRef={aboutRef}
          porfolioRef={porfolioRef}
        />
        <Hero />
        <TechStack aboutRef={aboutRef} />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
          className="m-5 md:m-20 md:mt-0"
        >
          <About />
          <Services servicesRef={servicesRef} />
          <Portfolio porfolioRef={porfolioRef} />
        </m.div>
        <Footer />
      </m.div>
    </>
  )
}
{
  /* <div className='text-left'
            <h2 className='my-5 text-3xl font-semibold text-orange-300'>more about me</h2>
            <p className='my-5 text-base'>
              I found my way to front-end development after working with websites for over 4 years, photography for over 13 years, and needed to find a way to merge the two. Whether it was frustration with the limitations of website builders, or the desire to create something more unique, I found myself wanting to learn how to code.               
            </p>
            <p className='my-5 text-base'>
              Making a career switch into tech is hardly original, however I am proud to say that I have done so without the help of a bootcamp. Aside from HTML, CSS, JS, React and Tailwind, I most importantly discovered how to learn. Equipped with the technical knowledge to build and deploy a site from the ground up, I am looking to add value to your project or team.
            </p>
          </div> */
}
