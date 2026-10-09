import { useRef, useEffect } from "react"
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
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const porfolioRef = useRef(null)
  const servicesRef = useRef(null)

  const location = useLocation()

  useEffect(() => {
    const sections = {
      home: homeRef,
      about: aboutRef,
      portfolio: porfolioRef,
      services: servicesRef,
    }
    sections[location.state]?.current?.scrollIntoView({ behavior: "smooth" })
  }, [location.state])

  return (
    <>
      <Nav />
      <m.div
        initial={{ opacity: 0 }}
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
