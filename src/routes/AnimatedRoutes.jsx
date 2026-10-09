import { useLocation, Routes, Route, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Dev from "./Dev"
import DevHome from "./DevHome"
import Imagery from "./Imagery"
import DorffDesigns from "./DorffDesigns"
import Bonsai from "./Bonsai"
import NotFound from "./NotFound"

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Imagery />} />
        <Route path="/imagery" element={<Navigate to="/" replace />} />
        <Route path="/dev" element={<Dev />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<DevHome />} />
          <Route path="dorff-designs" element={<DorffDesigns />} />
          <Route path="bonsai" element={<Bonsai />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
