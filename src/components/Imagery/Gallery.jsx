import { useEffect, useLayoutEffect, useRef } from "react"
import PropTypes from "prop-types"
import { motion as m } from "framer-motion"

import usePortfolioCollections from "../../sanity/usePortfolioCollections"
import BlurImage from "./BlurImage"
import AboutPage from "./AboutPage"

export default function Gallery({
  setSlideIndex,
  currentFolder,
  setCurrentFolder,
  setActiveView,
  activeView,
}) {
  const portfolioCollections = usePortfolioCollections()
  const initialFolder = useRef(currentFolder)
  const initialView = useRef(activeView)

  useLayoutEffect(() => {
    if (initialView.current === "about") {
      document.getElementById("about-index")?.scrollIntoView()
      return
    }
    const activeCollection = portfolioCollections[initialFolder.current]
    document
      .getElementById(`collection-${activeCollection.slug}`)
      ?.scrollIntoView()
  }, [portfolioCollections])

  useEffect(() => {
    const sections = document.querySelectorAll("[data-index-section]")
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visibleSection) {
          if (visibleSection.target.dataset.indexSection === "about") {
            setActiveView("about")
          } else {
            setActiveView("gallery")
            setCurrentFolder(
              Number(visibleSection.target.dataset.collectionIndex),
            )
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [setActiveView, setCurrentFolder])

  useEffect(() => {
    if (activeView !== "about") return undefined

    const enterIndex = (event) => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches
      const isDownwardGesture =
        event.deltaY > 2 && Math.abs(event.deltaY) > Math.abs(event.deltaX)
      if (!isDesktop || !isDownwardGesture) return

      event.preventDefault()
      setCurrentFolder(0)
      setActiveView("gallery")
      document
        .getElementById(`collection-${portfolioCollections[0].slug}`)
        ?.scrollIntoView({ behavior: "smooth" })
    }

    window.addEventListener("wheel", enterIndex, { passive: false })
    return () => window.removeEventListener("wheel", enterIndex)
  }, [activeView, portfolioCollections, setActiveView, setCurrentFolder])

  const enlargeImage = (collectionIndex, imageIndex) => {
    setCurrentFolder(collectionIndex)
    setSlideIndex(imageIndex)
    setActiveView("viewer")
  }

  const returnToBeginning = () => {
    document
      .getElementById("about-index")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen w-full bg-white pb-28 text-left dark:bg-[#111111] lg:pb-12"
      id="gallery"
      aria-label="Complete photography index"
    >
      <AboutPage />

      {portfolioCollections.map((collection, collectionIndex) => (
        <section
          key={collection.slug}
          id={`collection-${collection.slug}`}
          data-index-section="collection"
          data-collection-index={collectionIndex}
          className="portfolio-accent-border-strong border-b px-4 py-12 md:px-10 lg:px-12 lg:py-16 2xl:px-16"
          aria-labelledby={`heading-${collection.slug}`}
        >
          <header className="mb-8 flex items-end justify-between gap-8">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                {String(collectionIndex + 1).padStart(2, "0")} ·{" "}
                {collection.eyebrow}
              </p>
              <h2
                id={`heading-${collection.slug}`}
                className="portfolio-accent-text text-3xl md:text-5xl"
              >
                {collection.title}
              </h2>
            </div>
            <p className="shrink-0 text-xs tabular-nums text-gray-500 dark:text-gray-400">
              {collection.images.length} photographs
            </p>
          </header>

          <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 xl:grid-cols-3 2xl:grid-cols-4">
            {collection.images.map((image, imageIndex) => (
              <button
                type="button"
                key={image.id}
                onClick={() => enlargeImage(collectionIndex, imageIndex)}
                className="min-h-32 flex items-center justify-center rounded-none border-0 bg-transparent p-0"
                aria-label={`Open ${collection.title} photograph ${
                  imageIndex + 1
                }`}
              >
                <BlurImage
                  className={`${image.gallery} !border-0`}
                  src={image.src}
                  alt={
                    image.alt ||
                    `${collection.title} photograph ${imageIndex + 1}`
                  }
                  blurWidth={image.width}
                  blurHeight={image.height}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </section>
      ))}

      <footer className="flex flex-col items-start gap-5 px-4 py-16 md:px-10 lg:px-12 2xl:px-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
          End of index
        </p>
        <button
          type="button"
          onClick={returnToBeginning}
          className="rounded-none border-0 bg-transparent p-0 text-2xl underline decoration-1 underline-offset-8"
        >
          Continue from the beginning
        </button>
      </footer>
    </m.section>
  )
}

Gallery.propTypes = {
  setSlideIndex: PropTypes.func.isRequired,
  currentFolder: PropTypes.number.isRequired,
  setCurrentFolder: PropTypes.func.isRequired,
  setActiveView: PropTypes.func.isRequired,
  activeView: PropTypes.oneOf(["gallery", "about"]).isRequired,
}
