import { Link } from '../router'
import { GridIcon, MailIcon, UserIcon } from './icons'

const items = [
  { href: '/', label: 'Home' },
  { href: '/profile', label: 'Profile' },
  { href: '/#proyek', label: 'Work' },
  { href: '/#kontak', label: 'Contact' },
]

const compactItems = [
  { href: '/profile', label: 'Profile', icon: UserIcon },
  { href: '/#proyek', label: 'Work', icon: GridIcon },
  { href: '/#kontak', label: 'Contact', icon: MailIcon },
]

export default function SectionRail() {
  return (
    <div className="sticky top-0 z-40 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4 md:px-12 lg:px-16">
        <Link
          href="/"
          className="rounded-pill px-2 py-1 font-mono text-label-md font-semibold tracking-[0.12em] text-ink focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          AFR / SYS
        </Link>

        <nav aria-label="Section navigation" className="hidden items-center gap-4 sm:flex sm:gap-7">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-label-md text-ink-muted transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Quick navigation" className="flex items-center gap-1 sm:hidden">
          {compactItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="inline-flex size-11 items-center justify-center rounded-pill text-ink-muted transition-colors hover:bg-surface/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
