import { createContext } from "react"

import { portfolioCollections as fallbackCollections } from "../assets/sliderData"

export const PortfolioDataContext = createContext(fallbackCollections)
export const PortfolioDataReadyContext = createContext(false)
export { fallbackCollections }
