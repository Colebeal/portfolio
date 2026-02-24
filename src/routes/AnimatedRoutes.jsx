import { useLocation, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Dev from "./Dev"
import DevHome from "./DevHome"
// import App from "./App"
import Imagery from "./Imagery"
import DorffDesigns from "./DorffDesigns"
import Bonsai from "./Bonsai"
import ScottieAmex from "../components/Imagery/Slider/ImageSets/ScottieAmex"
import LabDF3 from "../components/Imagery/Slider/ImageSets/LabDF3"

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Imagery />}></Route>
        <Route path="/dev" element={<Dev />}>
          <Route path="home" element={<DevHome />} />
          <Route path="dorff-designs" element={<DorffDesigns />} />
          <Route path="bonsai" element={<Bonsai />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
