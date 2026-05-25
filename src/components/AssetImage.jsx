import { useState } from 'react'

export function AssetImage({ src, alt, className = '', fallback, imgClassName = '' }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return <div className={className}>{fallback}</div>
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${imgClassName}`}
      onError={() => setFailed(true)}
    />
  )
}
