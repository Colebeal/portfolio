import { useMemo, useState } from "react"
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
  const [loaded, setLoaded] = useState(false)

  const blurDataUrl = useMemo(
    () =>
      blurHash
        ? blurHashToDataURL(blurHash, blurWidth || 32, blurHeight || 32)
        : null,
    [blurHash, blurWidth, blurHeight],
  )

  const aspectRatio =
    blurWidth && blurHeight ? blurWidth / blurHeight : undefined
  const isHorizontal = aspectRatio > 1

  // Slider: stacked div with blurhash overlay that fades out
  if (fit) {
    const style = {
      aspectRatio,
      ...(isHorizontal
        ? { width: "100%", height: "auto", objectFit: "contain" }
        : { width: "auto", height: "100%", objectFit: "contain" }),
    }
    return (
      <div
        className={className}
        style={{ aspectRatio, position: "relative", overflow: "hidden" }}
        {...props}
      >
        <img src={src} onLoad={() => setLoaded(true)} style={style} />
        {blurDataUrl && (
          <img
            src={blurDataUrl}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: loaded ? 0 : 1,
              transition: "opacity 0.3s ease-in-out",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    )
  }

  // Gallery: plain img with background-image blurhash
  const style = {
    aspectRatio,
    ...(isHorizontal
      ? { width: "100%", height: "auto" }
      : { width: "auto", height: "100%" }),
    ...(!loaded && blurDataUrl
      ? {
          backgroundImage: `url("${blurDataUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maxInlineSize: "100%",
        }
      : {}),
  }

  return (
    <img
      src={src}
      className={className}
      style={style}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  )
}

BlurImage.propTypes = {
  src: PropTypes.string.isRequired,
  blurHash: PropTypes.string,
  blurWidth: PropTypes.number,
  blurHeight: PropTypes.number,
  fit: PropTypes.string,
  className: PropTypes.string,
}
