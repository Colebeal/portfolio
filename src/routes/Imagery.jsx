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
import usePortfolioCollections from "../sanity/usePortfolioCollections"

function getRouteState(pathname, portfolioCollections) {
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
  const portfolioCollections = usePortfolioCollections()
  const initialRoute = useRef(
    getRouteState(location.pathname, portfolioCollections),
  ).current
  const [slideIndex, setSlideIndex] = useState(initialRoute.slideIndex)
  const [menuStatus, setMenuStatus] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(true)
  const [currentFolder, setCurrentFolder] = useState(initialRoute.currentFolder)
  const [activeView, setActiveView] = useState(initialRoute.activeView)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const menuHandler = useCallback(() => {
    setMenuStatus((current) => !current)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuStatus(false)
  }, [])

  const toggleDesktopMenu = useCallback(() => {
    setDesktopMenuOpen((current) => !current)
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
  }, [currentFolder, portfolioCollections])

  const showAbout = useCallback(() => {
    setActiveView("about")
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document
          .getElementById("about-index")
          ?.scrollIntoView({ behavior: "smooth" })
      })
    })
  }, [])

  useLayoutEffect(() => {
    const route = getRouteState(location.pathname, portfolioCollections)
    setActiveView(route.activeView)
    setCurrentFolder(route.currentFolder)
    setSlideIndex(route.slideIndex)
  }, [location.pathname, portfolioCollections])

  useEffect(() => {
    const collection = portfolioCollections[currentFolder]
    const target =
      activeView === "about"
        ? "/"
        : activeView === "gallery"
        ? `/index/${collection.slug}`
        : `/image/${collection.slug}/${slideIndex + 1}`

    if (location.pathname !== target) navigate(target, { replace: true })
  }, [
    activeView,
    currentFolder,
    location.pathname,
    navigate,
    portfolioCollections,
    slideIndex,
  ])

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
      className="w-full overflow-x-hidden"
    >
      <DesktopNav
        isOpen={desktopMenuOpen}
        onToggle={toggleDesktopMenu}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
        setSlideIndex={setSlideIndex}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      <Menu
        menuStatus={menuStatus}
        currentFolder={currentFolder}
        setSlideIndex={setSlideIndex}
        setCurrentFolder={setCurrentFolder}
        activeView={activeView}
        setActiveView={setActiveView}
        closeMenu={closeMenu}
      />
      <div className="min-h-screen w-full">
        <MiniMenu
          menuHandler={menuHandler}
          homeHandler={showAbout}
          menuStatus={menuStatus}
          primaryLabel={activeView === "gallery" ? "Loupe" : "Index"}
          primaryHandler={
            activeView === "gallery"
              ? () => setActiveView("viewer")
              : showIndex
          }
        />

        {/* Gallery and Slider Logic */}

        <main
          className={`min-h-screen w-full transition-[transform,padding] duration-300 ease-out lg:transform-none ${
            desktopMenuOpen ? "lg:pl-72 2xl:pl-80" : "lg:pl-0"
          } ${
            menuStatus ? "translate-x-72" : "transform-none"
          }`}
        >
          <AnimatePresence mode="wait">
            {(activeView === "gallery" || activeView === "about") && (
              <Gallery
                key={"gallery"}
                setSlideIndex={setSlideIndex}
                currentFolder={currentFolder}
                setCurrentFolder={setCurrentFolder}
                setActiveView={setActiveView}
                activeView={activeView}
                desktopMenuOpen={desktopMenuOpen}
                onDesktopMenuToggle={toggleDesktopMenu}
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
                desktopMenuOpen={desktopMenuOpen}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </m.section>
  )
}
