import { useLayoutEffect, useMemo, useRef, useState } from "react"
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
  const [fitSize, setFitSize] = useState(null)
  const fitFrameRef = useRef(null)
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

  useLayoutEffect(() => {
    if (!fit || !blurWidth || !blurHeight) return undefined

    const frame = fitFrameRef.current
    const container = frame?.parentElement
    if (!container) return undefined

    const updateFitSize = () => {
      const bounds = container.getBoundingClientRect()
      const scale = Math.min(
        bounds.width / blurWidth,
        bounds.height / blurHeight,
      )

      setFitSize({
        width: Math.round(blurWidth * scale),
        height: Math.round(blurHeight * scale),
      })
    }

    updateFitSize()
    const observer = new ResizeObserver(updateFitSize)
    observer.observe(container)

    return () => observer.disconnect()
  }, [blurHeight, blurWidth, fit])

  const placeholder = blurDataUrl ? (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-out ${
        loaded ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundImage: `url("${blurDataUrl}")` }}
    />
  ) : null

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
      <span
        ref={fitFrameRef}
        className="relative block max-h-full max-w-full shrink-0 overflow-hidden leading-none"
        style={{
          aspectRatio,
          width: fitSize?.width ?? blurWidth,
          height: fitSize?.height ?? blurHeight,
        }}
      >
        {placeholder}
        <img
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
          sizes={responsiveImage.srcSet ? sizes : undefined}
          alt={alt}
          width={blurWidth}
          height={blurHeight}
          onLoad={handleLoad}
          onError={() => setFailed(true)}
          className={`absolute inset-0 block h-full w-full object-contain transition-opacity duration-500 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      </span>
    )
  }

  return (
    <span
      className="relative block w-full max-w-full overflow-hidden leading-none"
      style={{ aspectRatio }}
    >
      {placeholder}
      <img
        src={responsiveImage.src}
        srcSet={responsiveImage.srcSet}
        sizes={responsiveImage.srcSet ? sizes : undefined}
        alt={alt}
        width={blurWidth}
        height={blurHeight}
        className={`${className} absolute inset-0 block h-full w-full object-contain transition-opacity duration-500 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleLoad}
        onError={() => setFailed(true)}
        {...props}
      />
    </span>
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
