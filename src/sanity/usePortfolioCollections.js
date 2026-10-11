import { useContext } from "react"

import { PortfolioDataContext } from "./PortfolioDataContext"

export default function usePortfolioCollections() {
  return useContext(PortfolioDataContext)
}
