import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"

import { portfolioCollections } from "../src/assets/sliderData.js"
import { getResponsiveImageProps } from "../src/utils/resolveImageSrc.js"

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)))

test("portfolio collection configuration is complete", () => {
  assert.equal(portfolioCollections.length, 10)
  assert.equal(new Set(portfolioCollections.map(({ slug }) => slug)).size, 10)

  for (const collection of portfolioCollections) {
    assert.ok(collection.title)
    assert.ok(collection.eyebrow)
    assert.ok(collection.images.length > 0)
  }
})

test("image records have stable IDs and valid local paths", () => {
  for (const collection of portfolioCollections) {
    collection.images.forEach((image, index) => {
      assert.equal(image.id, index + 1)
      assert.equal(image.src, image.src.trim())
      assert.ok(image.blurHash)
      assert.ok(image.width > 0)
      assert.ok(image.height > 0)

      if (!image.src.startsWith("http")) {
        assert.ok(
          existsSync(resolve(projectRoot, "public", image.src)),
          `Missing local image: ${image.src}`,
        )
      }
    })
  }
})

test("application routes include aliases and a fallback", () => {
  const routes = readFileSync(
    resolve(projectRoot, "src/routes/AnimatedRoutes.jsx"),
    "utf8",
  )

  assert.match(routes, /path="\/imagery"/)
  assert.match(routes, /<Route index/)
  assert.match(routes, /path="index\/:collectionSlug"/)
  assert.match(routes, /path="image\/:collectionSlug\/:imageNumber"/)
  assert.match(routes, /path="\*"/)
})

test("remote portfolio images receive responsive Cloudinary sources", () => {
  const image = getResponsiveImageProps(
    "https://images.colebeal.com/Scottie-Amex-14_fr2hdq.jpg",
  )

  assert.match(image.src, /q_auto:best,c_limit,w_1600/)
  assert.match(image.srcSet, /w_480/)
  assert.match(image.srcSet, /2400w/)
})
