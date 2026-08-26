const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#0B1220"/><rect width="100%" height="100%" fill="#C99A3E" fill-opacity="0.08"/></svg>',
  )

export function Img({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = FALLBACK
      }}
    />
  )
}
