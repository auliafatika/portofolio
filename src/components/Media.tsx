import { useState } from 'react'
import type { ImageAsset } from '../types'

type MediaProps = {
  asset: ImageAsset
  className?: string
  placeholderLabel: string
  eager?: boolean
}

export default function Media({ asset, className = '', placeholderLabel, eager = false }: MediaProps) {
  const [failed, setFailed] = useState(false)

  if (!asset.src || failed) {
    return (
      <div
        role="img"
        aria-label={asset.alt}
        className={`flex min-w-0 items-center justify-center bg-surface/10 p-card text-center font-mono text-label-md text-ink-muted ${className}`}
      >
        <span>{placeholderLabel}</span>
      </div>
    )
  }

  return (
    <img
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={`min-w-0 object-cover ${className}`}
    />
  )
}
