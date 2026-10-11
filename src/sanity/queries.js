export const portfolioCollectionsQuery = `
  *[_type == "portfolioCollection"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    eyebrow,
    section,
    order,
    images[] {
      _key,
      alt,
      altNeedsReview,
      caption,
      image,
      "src": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height,
      "lqip": image.asset->metadata.lqip,
      "blurHash": image.asset->metadata.blurHash
    }
  }
`
