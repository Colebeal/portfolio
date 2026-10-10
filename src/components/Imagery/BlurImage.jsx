import { useMemo, useState } from "react"
import { decode } from "blurhash"
import PropTypes from "prop-types"

import { getResponsiveImageProps } from "../../utils/resolveImageSrc"

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
  alt,
  blurHash,
  blurWidth,
  blurHeight,
  fit,
  className,
  onLoad,
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const responsiveImage = getResponsiveImageProps(src)
  const sizes = fit
    ? "(min-width: 1536px) calc(100vw - 24rem), (min-width: 1024px) calc(100vw - 22rem), 90vw"
    : "(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 35vw, 50vw"

  const handleLoad = (event) => {
    setLoaded(true)
    onLoad?.(event)
  }

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

  if (failed) {
    return (
      <div
        className={`${className} min-h-32 flex items-center justify-center bg-gray-100 p-4 text-center text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-300`}
        role="img"
        aria-label={`${alt}. Image unavailable.`}
      >
        Image unavailable
      </div>
    )
  }

  // Slider: let the image itself determine its fitted dimensions. Keeping the
  // placeholder on the image prevents it from filling unused space around
  // letterboxed photographs.
  if (fit) {
    return (
      <img
        src={responsiveImage.src}
        srcSet={responsiveImage.srcSet}
        sizes={responsiveImage.srcSet ? sizes : undefined}
        alt={alt}
        width={blurWidth}
        height={blurHeight}
        onLoad={handleLoad}
        onError={() => setFailed(true)}
        className="block h-full w-full object-contain"
        style={{
          aspectRatio,
          backgroundImage:
            !loaded && blurDataUrl ? `url("${blurDataUrl}")` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        {...props}
      />
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
      src={responsiveImage.src}
      srcSet={responsiveImage.srcSet}
      sizes={responsiveImage.srcSet ? sizes : undefined}
      alt={alt}
      className={className}
      style={style}
      onLoad={handleLoad}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}

BlurImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  blurHash: PropTypes.string,
  blurWidth: PropTypes.number,
  blurHeight: PropTypes.number,
  fit: PropTypes.string,
  className: PropTypes.string,
  onLoad: PropTypes.func,
}
