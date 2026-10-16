import { useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"

import { prefetchPortfolioCollections } from "./fetchPortfolioCollections"
import {
  fallbackCollections,
  PortfolioDataContext,
  PortfolioDataReadyContext,
} from "./PortfolioDataContext"

const galleryClassName =
  "w-[stretch] cursor-pointer self-center lg:self-start w-auto max-h-[400px] md:max-h-[500px] justify-self-center object-cover"
const portfolioDataPromise = prefetchPortfolioCollections()

function normalizeCollections(collections) {
  return collections.map((collection) => ({
    ...collection,
    images: collection.images.map((image, index) => ({
      ...image,
      id: image._key || index + 1,
      className: "block h-auto max-h-full w-auto max-w-full object-contain",
      gallery: galleryClassName,
      loading: index < 2 ? "eager" : "lazy",
    })),
  }))
}

export default function PortfolioDataProvider({ children }) {
  const [collections, setCollections] = useState(fallbackCollections)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let active = true

    portfolioDataPromise
      .then((sanityCollections) => {
        if (active && sanityCollections?.length) {
          setCollections(normalizeCollections(sanityCollections))
        }
        if (active) setIsReady(true)
      })
      .catch((error) => {
        if (active) {
          console.warn("Sanity content unavailable; using bundled portfolio data.", error)
          setIsReady(true)
        }
      })

    return () => {
      active = false
    }
  }, [])

  const value = useMemo(() => collections, [collections])

  return (
    <PortfolioDataReadyContext.Provider value={isReady}>
      <PortfolioDataContext.Provider value={value}>
        {children}
      </PortfolioDataContext.Provider>
    </PortfolioDataReadyContext.Provider>
  )
}

PortfolioDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
