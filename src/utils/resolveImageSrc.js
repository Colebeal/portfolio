const CLOUDINARY_BASE = "https://res.cloudinary.com/dvfqeowxm/image/upload"
const RESPONSIVE_WIDTHS = [480, 768, 1200, 1600, 2000, 2400]

export default function resolveImageSrc(src) {
  if (src.startsWith("/") || /^[a-z][a-z\d+.-]*:/i.test(src)) return src
  return `/${src}`
}

function getCloudinaryPath(src) {
  try {
    const url = new URL(src)

    if (url.hostname === "images.colebeal.com") {
      const path = url.pathname.replace(/^\//, "")
      return path.includes("/") ? null : path
    }

    if (url.hostname !== "res.cloudinary.com") return null

    const prefix = "/dvfqeowxm/image/upload/"
    if (!url.pathname.startsWith(prefix)) return null

    return url.pathname
      .slice(prefix.length)
      .replace(/^f_auto,q_auto(?::[a-z]+)?\//, "")
  } catch {
    return null
  }
}

function cloudinaryUrl(path, width) {
  return `${CLOUDINARY_BASE}/f_auto,q_auto:best,c_limit,w_${width}/${path}`
}

export function getResponsiveImageProps(src) {
  const path = getCloudinaryPath(src)
  if (!path) return { src: resolveImageSrc(src) }

  return {
    src: cloudinaryUrl(path, 1600),
    srcSet: RESPONSIVE_WIDTHS.map(
      (width) => `${cloudinaryUrl(path, width)} ${width}w`,
    ).join(", "),
  }
}
