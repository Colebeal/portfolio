import PropTypes from "prop-types"

import { portfolioCollections } from "../../assets/sliderData"
import ThemeToggle from "../ThemeToggle"

export default function DesktopNav({
  currentFolder,
  setCurrentFolder,
  setSlideIndex,
  activeView,
  setActiveView,
}) {
  const selectCollection = (index) => {
    setCurrentFolder(index)
    setSlideIndex(0)
    if (activeView === "gallery" || activeView === "about") {
      setActiveView("gallery")
      document
        .getElementById(`collection-${portfolioCollections[index].slug}`)
        ?.scrollIntoView({ behavior: "smooth" })
      return
    }
    setActiveView("viewer")
  }

  const scrollAfterViewChange = (targetId) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" })
      })
    })
  }

  const showAbout = () => {
    setActiveView("about")
    scrollAfterViewChange("about-index")
  }

  const showIndex = () => {
    setActiveView("gallery")
    scrollAfterViewChange(
      `collection-${portfolioCollections[currentFolder].slug}`,
    )
  }

  const collectionGroups = [
    {
      label: "Selected Works",
      collections: portfolioCollections.slice(0, 8),
      offset: 0,
    },
    {
      label: "Archive",
      collections: portfolioCollections.slice(8),
      offset: 8,
    },
  ]

  return (
    <aside className="portfolio-accent-border-strong fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r bg-white text-left dark:bg-[#111111] lg:flex 2xl:w-80">
      <header className="portfolio-accent-border-strong border-b px-7 py-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <a href="/" className="text-2xl tracking-tight">
              Cole Beal
            </a>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
              Photography
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="portfolio-accent-border-strong mt-7 grid grid-cols-3 border">
          <button
            type="button"
            onClick={showAbout}
            className={`rounded-none border-0 px-3 py-2 text-xs uppercase tracking-[0.16em] ${
              activeView === "about"
                ? "portfolio-accent-fill"
                : "bg-transparent text-black dark:text-white"
            }`}
            aria-pressed={activeView === "about"}
          >
            About
          </button>
          <button
            type="button"
            onClick={showIndex}
            className={`portfolio-accent-border-strong rounded-none border-0 border-l px-3 py-2 text-xs uppercase tracking-[0.16em] ${
              activeView === "gallery"
                ? "portfolio-accent-fill"
                : "bg-transparent text-black dark:text-white"
            }`}
            aria-pressed={activeView === "gallery"}
          >
            Index
          </button>
          <button
            type="button"
            onClick={() => setActiveView("viewer")}
            className={`portfolio-accent-border-strong rounded-none border-0 border-l px-3 py-2 text-xs uppercase tracking-[0.16em] ${
              activeView === "viewer"
                ? "portfolio-accent-fill"
                : "bg-transparent text-black dark:text-white"
            }`}
            aria-pressed={activeView === "viewer"}
          >
            Viewer
          </button>
        </div>
      </header>

      <nav
        className="min-h-0 flex-1 overflow-y-auto px-7 py-6"
        aria-label="Photography collections"
      >
        {collectionGroups.map((group, groupIndex) => (
          <section
            key={group.label}
            className={groupIndex > 0 ? "mt-8" : undefined}
          >
            <h2 className="mb-3 text-[10px] font-normal uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
              {group.label}
            </h2>
            <ol>
              {group.collections.map((collection, index) => {
                const collectionIndex = group.offset + index
                const isActive = collectionIndex === currentFolder

                return (
                  <li
                    key={collection.slug}
                    className="portfolio-accent-border-subtle border-t"
                  >
                    <button
                      type="button"
                      onClick={() => selectCollection(collectionIndex)}
                      className="group flex w-full items-start gap-3 rounded-none border-0 bg-transparent px-0 py-3 text-left"
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="mt-1 w-5 text-[10px] tabular-nums text-gray-400">
                        {String(collectionIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-[15px] leading-tight transition-transform group-hover:translate-x-1 ${
                            isActive ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {collection.title}
                        </span>
                        <span className="mt-1 block truncate text-[10px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                          {collection.eyebrow}
                        </span>
                      </span>
                      <span className="mt-1 text-[10px] tabular-nums text-gray-400">
                        {collection.images.length}
                      </span>
                    </button>
                    {isActive && (
                      <span className="portfolio-accent-background block h-px w-full" />
                    )}
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </nav>

      <footer className="portfolio-accent-border-strong border-t px-7 py-5 text-[11px] leading-relaxed">
        <div className="flex gap-4">
          <a
            href="mailto:cole@colebeal.com"
            className="underline-offset-4 hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/colebeal/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Instagram
          </a>
        </div>
      </footer>
    </aside>
  )
}

DesktopNav.propTypes = {
  currentFolder: PropTypes.number.isRequired,
  setCurrentFolder: PropTypes.func.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  activeView: PropTypes.oneOf(["viewer", "gallery", "about"]).isRequired,
  setActiveView: PropTypes.func.isRequired,
}
