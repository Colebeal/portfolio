import { useLocation, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Dev from "./Dev"
import App from "./App"
import Imagery from "./Imagery"

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/imagery" element={<Imagery />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
