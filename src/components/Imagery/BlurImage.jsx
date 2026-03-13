import { useEffect, useState } from "react"
import { decode } from "blurhash"
import PropTypes from "prop-types"

function blurHashToDataURL(hash, width, height) {
  const aspect = width / height
  const decodeW = aspect >= 1 ? 32 : Math.round(32 * aspect)
  const decodeH = aspect >= 1 ? Math.round(32 / aspect) : 32
  const pixels = decode(hash, decodeW, decodeH)
  const canvas = document.createElement("canvas")
  canvas.width = decodeW
  canvas.height = decodeH
  const ctx = canvas.getContext("2d")
  const imageData = ctx.createImageData(decodeW, decodeH)
  imageData.data.set(pixels)
  ctx.putImageData(imageData, 0, 0)
  return canvas.toDataURL()
}

export default function BlurImage({
  src,
  blurHash,
  blurWidth,
  blurHeight,
  className,
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(() =>
    blurHash
      ? blurHashToDataURL(blurHash, blurWidth || 32, blurHeight || 32)
      : src,
  )

  useEffect(() => {
    const img = new Image()
    img.onload = () => setCurrentSrc(src)
    img.src = src

    return () => {
      img.onload = null
    }
  }, [src])

  const aspectRatio =
    blurWidth && blurHeight ? blurWidth / blurHeight : undefined
  const isBlur = blurHash && currentSrc !== src
  const isHorizontal = aspectRatio > 1

  const blurStyle = isBlur
    ? isHorizontal
      ? { aspectRatio, width: "100%", height: "auto", maxInlineSize: "100%" }
      : { aspectRatio, width: "auto", height: "100%", maxInlineSize: "100%" }
    : {}

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
  className: PropTypes.string,
}
