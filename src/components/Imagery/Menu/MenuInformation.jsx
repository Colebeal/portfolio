import PropTypes from "prop-types"
import { portfolioCollections } from "../../../assets/sliderData"

export default function MenuInformation({
  setCurrentFolder,
  setSlideIndex,
  menuHandler,
}) {
  const selectFolder = (index) => {
    setCurrentFolder(index)
    setSlideIndex(0)
    menuHandler()
  }

  return (
    <div className="flex h-full animate-fade-in flex-col px-10 pb-10 pt-5 text-left">
      {["Portfolio", "Archives"].map((section) => (
        <section
          key={section}
          className={section === "Archives" ? "mt-12" : ""}
        >
          <h2 className="mb-5 text-xl font-bold">{section}</h2>
          <ul>
            {portfolioCollections.map((collection, index) => {
              const isArchive = collection.eyebrow === "Archives"
              if ((section === "Archives") !== isArchive) return null

              return (
                <li key={collection.slug}>
                  <button
                    type="button"
                    onClick={() => selectFolder(index)}
                    data-gtm-event="cta_click"
                    data-gtm-location="menu"
                    data-gtm-label={collection.slug}
                    className="my-2 flex w-full justify-between rounded-none border-0 bg-transparent px-0 py-2 text-left hover:underline"
                  >
                    <span>
                      {isArchive
                        ? collection.title
                        : `${collection.eyebrow} • ${collection.title}`}
                    </span>
                    <span>{collection.images.length}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}

MenuInformation.propTypes = {
  setCurrentFolder: PropTypes.func.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  menuHandler: PropTypes.func.isRequired,
}
