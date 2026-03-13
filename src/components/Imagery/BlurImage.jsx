import { useEffect, useState } from "react"
import { decode } from "blurhash"
import PropTypes from "prop-types"

function blurHashToDataURL(hash) {
  const pixels = decode(hash, 32, 32)
  const canvas = document.createElement("canvas")
  canvas.width = 32
  canvas.height = 32
  const ctx = canvas.getContext("2d")
  const imageData = ctx.createImageData(32, 32)
  imageData.data.set(pixels)
  ctx.putImageData(imageData, 0, 0)
  return canvas.toDataURL()
}

export default function BlurImage({ src, blurHash, blurWidth, blurHeight, fit = "width", className, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(blurHash ? null : src)

  useEffect(() => {
    if (blurHash) {
      setCurrentSrc(blurHashToDataURL(blurHash))
    }

    const img = new Image()
    img.onload = () => setCurrentSrc(src)
    img.src = src

    return () => {
      img.onload = null
    }
  }, [src, blurHash])

  const isBlur = blurHash && currentSrc !== src
  const aspectRatio = blurWidth && blurHeight ? blurWidth / blurHeight : undefined
  const blurStyle = isBlur
    ? fit === "height"
      ? { height: "100%", aspectRatio, objectFit: "cover" }
      : { width: "100%", height: "auto", aspectRatio, objectFit: "cover" }
    : undefined

  return (
    <img
      src={currentSrc ?? src}
      className={className}
      style={blurStyle}
      {...props}
    />
  )
}

BlurImage.propTypes = {
  src: PropTypes.string.isRequired,
  blurHash: PropTypes.string,
  blurWidth: PropTypes.number,
  blurHeight: PropTypes.number,
  fit: PropTypes.oneOf(["width", "height"]),
  className: PropTypes.string,
}
