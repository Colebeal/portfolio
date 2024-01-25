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

  return (
    <>
      <m.div
        initial={
          window.innerWidth > 768 ? { translateY: 0 } : { translateY: 0 }
        }
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
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
        </m.div>
        <Portfolio porfolioRef={porfolioRef} />
        <Footer />
      </m.div>
    </>
  )
}
