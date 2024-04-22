import { useRef, useEffect, useState } from "react"
import { motion as m } from "framer-motion"

import Footer from "../components/Dev/Footer"
import Hero from "../components/Dev/Hero"
import TechStack from "../components/Dev/TechStack"
import About from "../components/Dev/About"
import Services from "../components/Dev/Services"
import Portfolio from "../components/Dev/Porfolio"
import Nav from "../components/Dev/Nav"

import { useLocation } from "react-router-dom"

const DevHome = () => {
  document.body.style.overflow = "auto"

  const [location, setLocation] = useState("")
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const porfolioRef = useRef(null)
  const servicesRef = useRef(null)

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }
  let locationData = useLocation()

  console.log("location state", locationData.state)

  useEffect(() => {
    setLocation(locationData.state)
    console.log("before", location)
    if (location === "" || location === undefined || location === null) {
      return
    } else if (location.localeCompare("home") == 0) {
      handleScroll(homeRef.current)
    } else if (location.localeCompare("about") == 0) {
      handleScroll(aboutRef.current)
    } else if (location.localeCompare("portfolio") == 0) {
      handleScroll(porfolioRef.current)
    } else if (location.localeCompare("services") == 0) {
      handleScroll(servicesRef.current)
    }
  })

  return (
    <>
      <Nav
        aboutRef={aboutRef}
        porfolioRef={porfolioRef}
        servicesRef={servicesRef}
      />
      <m.div
        initial={
          window.innerWidth > 768 ? { translateY: 0 } : { translateY: 0 }
        }
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        ref={homeRef}
      >
        <Hero />
        <div ref={aboutRef} id="about">
          <TechStack />
        </div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
          className="m-5 md:m-20 md:mt-0"
        >
          <div>
            <About />
          </div>
          <div ref={porfolioRef} id="portfolio">
            <Portfolio />
          </div>
          <div ref={servicesRef} id="services">
            <Services />
          </div>
        </m.div>
        <Footer />
      </m.div>
    </>
  )
}

export default DevHome
