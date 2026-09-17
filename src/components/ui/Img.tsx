const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#0B1220"/><rect width="100%" height="100%" fill="#C99A3E" fill-opacity="0.08"/></svg>',
  )

export function Img({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  /** Intrinsic size. Required so the browser can reserve space and avoid layout shift. */
  width: number
  height: number
  /** Set on above-the-fold images: lazy-loading an LCP candidate costs a round trip. */
  priority?: boolean
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = FALLBACK
      }}
    />
  )
}
