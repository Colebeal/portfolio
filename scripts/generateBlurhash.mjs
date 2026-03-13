/**
 * Generates blurhash strings + original dimensions for all images in sliderData.js
 * and inserts them directly into the file.
 *
 * Usage: npm run gen-blur
 */

import { readFileSync, writeFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import sharp from "sharp"
import { encode } from "blurhash"

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, "..")
const dataPath = resolve(projectRoot, "src/assets/sliderData.js")
const publicDir = resolve(projectRoot, "public")

// Build a small fetch URL for Cloudinary images
function toSmallUrl(src) {
  if (src.includes("res.cloudinary.com")) {
    return src.replace(/\/upload\/[^/]+\//, "/upload/w_50,q_auto,f_jpg/")
  }
  return src.trim()
}

async function getImageBuffer(src) {
  const trimmed = src.trim()

  if (!trimmed.startsWith("http")) {
    // Local file in public/
    return readFileSync(resolve(publicDir, trimmed))
  }

  const url = toSmallUrl(trimmed)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  return Buffer.from(await res.arrayBuffer())
}

async function generateHashData(src) {
  const buffer = await getImageBuffer(src)
  const image = sharp(buffer)

  const [metadata, { data, info }] = await Promise.all([
    image.metadata(),
    image
      .clone()
      .resize(32, 32, { fit: "inside" })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true }),
  ])

  const hash = encode(
    new Uint8ClampedArray(data),
    info.width,
    info.height,
    4,
    3,
  )
  return { hash, width: metadata.width, height: metadata.height }
}

// Parse active (non-commented) src values from the file
const content = readFileSync(dataPath, "utf-8")
const lines = content.split("\n")

const activeSrcLines = []
for (let i = 0; i < lines.length; i++) {
  const line = lines[i]
  const match = line.match(/^(\s+)src:\s+"([^"]+)",\s*$/)
  if (!match) continue

  // Skip if the preceding non-empty line is a comment
  let prevLine = ""
  for (let j = i - 1; j >= 0; j--) {
    if (lines[j].trim()) {
      prevLine = lines[j].trim()
      break
    }
  }
  if (prevLine.startsWith("//")) continue

  const hasBlurHash = lines[i + 1]?.includes("blurHash:")
  const hasWidth = lines[i + 2]?.includes("width:")

  // Skip only if fully processed (has all three fields)
  if (hasBlurHash && hasWidth) continue

  activeSrcLines.push({
    lineIndex: i,
    indent: match[1],
    src: match[2],
    // If blurHash already exists, track its line so we can insert width/height after it
    blurHashLineIndex: hasBlurHash ? i + 1 : null,
  })
}

console.log(`Found ${activeSrcLines.length} images to process.\n`)

// Generate hashes with a concurrency limit of 5
const CONCURRENCY = 5
const hashMap = {}

for (let i = 0; i < activeSrcLines.length; i += CONCURRENCY) {
  const batch = activeSrcLines.slice(i, i + CONCURRENCY)
  await Promise.all(
    batch.map(async ({ src }) => {
      process.stdout.write(
        `  [${Object.keys(hashMap).length + 1}/${activeSrcLines.length}] ${src
          .slice(0, 70)
          .trim()}`,
      )
      try {
        hashMap[src] = await generateHashData(src)
        console.log("  ✓")
      } catch (err) {
        console.log(`  ✗ ${err.message}`)
        hashMap[src] = null
      }
    }),
  )
}

// Update file content
const updatedLines = [...lines]
let insertions = 0

// Process in reverse so line indices stay valid as we insert
for (const { lineIndex, indent, src, blurHashLineIndex } of [
  ...activeSrcLines,
].reverse()) {
  const result = hashMap[src]
  if (!result) continue
  const { hash, width, height } = result

  if (blurHashLineIndex !== null) {
    // blurHash already exists — replace it and insert width + height after it
    updatedLines[blurHashLineIndex] = `${indent}blurHash: "${hash}",`
    updatedLines.splice(
      blurHashLineIndex + 1,
      0,
      `${indent}width: ${width},`,
      `${indent}height: ${height},`,
    )
  } else {
    // Insert all three after the src line
    updatedLines.splice(
      lineIndex + 1,
      0,
      `${indent}blurHash: "${hash}",`,
      `${indent}width: ${width},`,
      `${indent}height: ${height},`,
    )
  }
  insertions++
}

writeFileSync(dataPath, updatedLines.join("\n"), "utf-8")
console.log(`\nProcessed ${insertions} images in sliderData.js`)
