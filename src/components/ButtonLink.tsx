import type { ReactNode } from 'react'
import { Link } from '../router'
import { ArrowRightIcon } from './icons'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  showIcon?: boolean
}

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  showIcon = false,
}: ButtonLinkProps) {
  const tone = variant === 'secondary' ? 'bg-secondary text-canvas' : 'bg-primary text-canvas'

  return (
    <Link
      href={href}
      className={`mt-10 inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-6 py-3 font-mono text-label-md font-semibold transition-[opacity,transform] duration-150 hover:-translate-y-0.5 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${tone}`}
    >
      {children}
      {showIcon && <ArrowRightIcon />}
    </Link>
  )
}
