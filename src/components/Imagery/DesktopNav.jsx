import PropTypes from "prop-types"
import { AnimatePresence, motion as m } from "framer-motion"
import { BsXLg } from "react-icons/bs"

import usePortfolioCollections from "../../sanity/usePortfolioCollections"
import ThemeToggle from "../ThemeToggle"

export function NavigationPanel({
  currentFolder,
  setCurrentFolder,
  setSlideIndex,
  activeView,
  setActiveView,
  onNavigate,
  onClose,
  onCollapse,
  controlsAtBottom = false,
}) {
  const portfolioCollections = usePortfolioCollections()
  const collectionGroups = [
    {
      label: "Selected Works",
      collections: portfolioCollections
        .map((collection, index) => ({ collection, index }))
        .filter(
          ({ collection }) =>
            collection.section !== "moments" &&
            collection.eyebrow !== "Moments",
        ),
    },
    {
      label: "Moments",
      collections: portfolioCollections
        .map((collection, index) => ({ collection, index }))
        .filter(
          ({ collection }) =>
            collection.section === "moments" ||
            collection.eyebrow === "Moments",
        ),
    },
  ]
  const scrollAfterViewChange = (targetId) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" })
      })
    })
  }

  const selectCollection = (index) => {
    setCurrentFolder(index)
    setSlideIndex(0)
    onNavigate?.()

    if (activeView === "gallery" || activeView === "about") {
      setActiveView("gallery")
      scrollAfterViewChange(
        `collection-${portfolioCollections[index].slug}`,
      )
      return
    }

    setActiveView("viewer")
  }

  const showAbout = () => {
    setActiveView("about")
    onNavigate?.()
    scrollAfterViewChange("about-index")
  }

  const showIndex = () => {
    setActiveView("gallery")
    onNavigate?.()
    scrollAfterViewChange(
      `collection-${portfolioCollections[currentFolder].slug}`,
    )
  }

  const showViewer = () => {
    setActiveView("viewer")
    onNavigate?.()
  }

  const showContact = () => {
    setActiveView("about")
    onNavigate?.()
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const contact = document.getElementById("contact-form")
        const trigger = contact?.querySelector("[data-contact-trigger]")
        if (trigger?.getAttribute("aria-expanded") !== "true") {
          trigger?.click()
        }
        contact?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    })
  }

  const viewControls = (
    <div className="portfolio-accent-border-strong grid grid-cols-3 border">
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
        onClick={showViewer}
        className={`portfolio-accent-border-strong rounded-none border-0 border-l px-3 py-2 text-xs uppercase tracking-[0.16em] ${
          activeView === "viewer"
            ? "portfolio-accent-fill"
            : "bg-transparent text-black dark:text-white"
        }`}
        aria-pressed={activeView === "viewer"}
      >
        Loupe
      </button>
    </div>
  )

  return (
    <>
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
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="portfolio-accent-text flex h-9 w-9 items-center justify-center rounded-none border-0 bg-transparent p-0 text-lg"
                aria-label="Close menu"
              >
                <BsXLg aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {!controlsAtBottom && <div className="mt-7">{viewControls}</div>}
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
              {group.collections.map(({ collection, index }) => {
                const isActive = index === currentFolder

                return (
                  <li
                    key={collection.slug}
                    className="portfolio-accent-border-subtle border-t"
                  >
                    <button
                      type="button"
                      onClick={() => selectCollection(index)}
                      className="group flex w-full items-start gap-3 rounded-none border-0 bg-transparent px-0 py-3 text-left"
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="mt-1 w-5 text-[10px] tabular-nums text-gray-400">
                        {String(index + 1).padStart(2, "0")}
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

      {controlsAtBottom && (
        <div className="portfolio-accent-border-strong border-t px-7 py-5">
          {viewControls}
        </div>
      )}

      <footer className="portfolio-accent-border-strong h-[59px] border-t px-7 text-[11px] leading-relaxed">
        <div className="flex h-full items-center gap-4">
          <button
            type="button"
            onClick={showContact}
            className="rounded-none border border-black/20 bg-white px-3 py-1 text-[11px] font-normal text-black transition-colors hover:bg-gray-100"
          >
            Email
          </button>
          <a
            href="https://www.instagram.com/colebeal/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Instagram
          </a>
          {onCollapse && (
            <button
              type="button"
              onClick={onCollapse}
              className="ml-auto rounded-none border-0 bg-transparent p-0 text-[11px] font-normal underline-offset-4 hover:underline"
            >
              Hide
            </button>
          )}
        </div>
      </footer>
    </>
  )
}

export default function DesktopNav({ isOpen, onToggle, activeView, ...props }) {
  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="portfolio-accent-border-strong fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r bg-white text-left dark:bg-[#111111] lg:flex 2xl:w-80"
          >
            <NavigationPanel
              {...props}
              activeView={activeView}
              onCollapse={onToggle}
            />
          </m.aside>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {!isOpen && activeView === "viewer" && (
          <m.button
            type="button"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={onToggle}
            style={{ borderRadius: 0 }}
            className="portfolio-accent-border-strong fixed bottom-0 left-0 z-40 hidden h-[59px] w-24 items-center justify-center border border-b-0 border-l-0 bg-white text-[11px] uppercase tracking-[0.16em] text-black hover:bg-gray-100 lg:flex"
            aria-label="Show menu"
          >
            Menu
          </m.button>
        )}
      </AnimatePresence>
    </>
  )
}

const navigationPropTypes = {
  currentFolder: PropTypes.number.isRequired,
  setCurrentFolder: PropTypes.func.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  activeView: PropTypes.oneOf(["viewer", "gallery", "about"]).isRequired,
  setActiveView: PropTypes.func.isRequired,
}

NavigationPanel.propTypes = {
  ...navigationPropTypes,
  onNavigate: PropTypes.func,
  onClose: PropTypes.func,
  onCollapse: PropTypes.func,
  controlsAtBottom: PropTypes.bool,
}

DesktopNav.propTypes = {
  ...navigationPropTypes,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}
