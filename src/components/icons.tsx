type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ArrowDownRightIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 7l10 10" />
      <path d="M17 7v10H7" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  )
}

export function ArrowLeftIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 12H4" />
      <path d="m10 6-6 6 6 6" />
    </svg>
  )
}

export function GridIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  )
}

export function UserIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  )
}

export function CloseIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  )
}

export function MailIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function ExternalIcon({ className = 'size-4' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </svg>
  )
}
