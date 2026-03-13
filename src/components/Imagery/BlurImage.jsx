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
  fit,
  className,
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(blurHash ? null : src)

  useEffect(() => {
    if (blurHash) {
      setCurrentSrc(
        blurHashToDataURL(blurHash, blurWidth || 32, blurHeight || 32),
      )
    }

    const img = new Image()
    img.onload = () => setCurrentSrc(src)
    img.src = src

    return () => {
      img.onload = null
    }
  }, [src, blurHash, blurWidth, blurHeight])

  const aspectRatio =
    blurWidth && blurHeight ? blurWidth / blurHeight : undefined

  // Slider: div with background-image
  if (fit) {
    const style = {
      backgroundImage: currentSrc ? `url("${currentSrc}")` : undefined,
      aspectRatio,
    }
    // const style = {
    //   backgroundImage: currentSrc ? `url("${currentSrc}")` : undefined,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   aspectRatio,
    //   ...(fit === "height" ? { height: "100%", width: "unset" } : {}),
    // }

    return <div className={className} style={style} {...props} />
  }

  // Gallery: standard img
  return <img src={currentSrc ?? src} className={className} style={{ width: "stretch" }} {...props} />
}

BlurImage.propTypes = {
  src: PropTypes.string.isRequired,
  blurHash: PropTypes.string,
  blurWidth: PropTypes.number,
  blurHeight: PropTypes.number,
  fit: PropTypes.string,
  className: PropTypes.string,
}
