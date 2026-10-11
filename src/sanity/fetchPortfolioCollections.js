import { portfolioCollectionsQuery } from "./queries"

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "407874vc"
const dataset = import.meta.env.VITE_SANITY_DATASET || "production"
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2026-10-10"
let prefetchedCollections

export async function fetchPortfolioCollections(options = {}) {
  const { signal } = options
  const url = new URL(
    `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`,
  )
  url.searchParams.set("query", portfolioCollectionsQuery)
  url.searchParams.set("perspective", "published")

  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`Sanity request failed with status ${response.status}`)
  }

  const payload = await response.json()

  return payload.result
}

export function prefetchPortfolioCollections() {
  if (!prefetchedCollections) {
    prefetchedCollections = fetchPortfolioCollections().catch((error) => {
      prefetchedCollections = undefined
      throw error
    })
  }

  return prefetchedCollections
}
