import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { motion as m, AnimatePresence, easeInOut } from "framer-motion"
import { useLocation, useNavigate } from "react-router-dom"

import Slider from "../components/Imagery/Slider/Slider"
import Menu from "../components/Imagery/Menu/Menu"
import Gallery from "../components/Imagery/Gallery"
import MiniMenu from "../components/Imagery/MiniMenu"
import DesktopNav from "../components/Imagery/DesktopNav"
import { portfolioCollections } from "../assets/sliderData"

function getRouteState(pathname) {
  if (pathname === "/" || pathname === "/about") {
    return {
      activeView: "about",
      currentFolder: 0,
      slideIndex: 0,
      explicit: true,
    }
  }

  const indexMatch = pathname.match(/^\/index(?:\/([^/]+))?$/)
  if (indexMatch) {
    const collectionIndex = portfolioCollections.findIndex(
      ({ slug }) => slug === indexMatch[1],
    )
    return {
      activeView: "gallery",
      currentFolder: collectionIndex >= 0 ? collectionIndex : 0,
      slideIndex: 0,
      explicit: collectionIndex >= 0,
    }
  }

  const imageMatch = pathname.match(/^\/image\/([^/]+)\/(\d+)$/)
  if (imageMatch) {
    const collectionIndex = portfolioCollections.findIndex(
      ({ slug }) => slug === imageMatch[1],
    )
    if (collectionIndex >= 0) {
      const requestedImage = Number(imageMatch[2]) - 1
      const imageIndex = Math.min(
        Math.max(requestedImage, 0),
        portfolioCollections[collectionIndex].images.length - 1,
      )
      return {
        activeView: "viewer",
        currentFolder: collectionIndex,
        slideIndex: imageIndex,
        explicit: imageIndex === requestedImage,
      }
    }
  }

  return {
    activeView: "viewer",
    currentFolder: 0,
    slideIndex: 0,
    explicit: false,
  }
}

export default function Imagery() {
  const location = useLocation()
  const navigate = useNavigate()
  const initialRoute = useRef(getRouteState(location.pathname)).current
  const [slideIndex, setSlideIndex] = useState(initialRoute.slideIndex)
  const [menuStatus, setMenuStatus] = useState(false)
  const [currentFolder, setCurrentFolder] = useState(initialRoute.currentFolder)
  const [activeView, setActiveView] = useState(initialRoute.activeView)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const menuHandler = useCallback(() => {
    setMenuStatus((current) => !current)
  }, [])

  const showIndex = useCallback(() => {
    setActiveView("gallery")
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document
          .getElementById(
            `collection-${portfolioCollections[currentFolder].slug}`,
          )
          ?.scrollIntoView({ behavior: "smooth" })
      })
    })
  }, [currentFolder])

  useLayoutEffect(() => {
    const route = getRouteState(location.pathname)
    setActiveView(route.activeView)
    setCurrentFolder(route.currentFolder)
    setSlideIndex(route.slideIndex)
  }, [location.pathname])

  useEffect(() => {
    const collection = portfolioCollections[currentFolder]
    const target =
      activeView === "about"
        ? "/"
        : activeView === "gallery"
        ? `/index/${collection.slug}`
        : `/image/${collection.slug}/${slideIndex + 1}`

    if (location.pathname !== target) navigate(target, { replace: true })
  }, [activeView, currentFolder, location.pathname, navigate, slideIndex])

  useEffect(() => {
    document.body.style.overflow = activeView === "viewer" ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [activeView])

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      id="wrapper"
    >
      <DesktopNav
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
        setSlideIndex={setSlideIndex}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      <Menu
        menuStatus={menuStatus}
        setSlideIndex={setSlideIndex}
        setCurrentFolder={setCurrentFolder}
        setActiveView={setActiveView}
        menuHandler={menuHandler}
      />
      <MiniMenu
        menuHandler={menuHandler}
        primaryLabel={activeView === "gallery" ? "Viewer" : "Index"}
        primaryHandler={
          activeView === "gallery" ? () => setActiveView("viewer") : showIndex
        }
      />

      {/* Gallery and Slider Logic */}

      <main className="min-h-screen w-full lg:pl-72 2xl:pl-80">
        <AnimatePresence mode="wait">
          {(activeView === "gallery" || activeView === "about") && (
            <Gallery
              key={"gallery"}
              setSlideIndex={setSlideIndex}
              currentFolder={currentFolder}
              setCurrentFolder={setCurrentFolder}
              setActiveView={setActiveView}
              activeView={activeView}
            />
          )}
          {activeView === "viewer" && (
            <Slider
              key={"slider"}
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              currentFolder={currentFolder}
              setCurrentFolder={setCurrentFolder}
              isTransitioning={isTransitioning}
              setIsTransitioning={setIsTransitioning}
            />
          )}
        </AnimatePresence>
      </main>
    </m.section>
  )
}
