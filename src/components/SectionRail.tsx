import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Link } from '../router'
import { CloseIcon, MenuIcon } from './icons'

const items = [
  { href: '/', label: 'Home' },
  { href: '/profile', label: 'Profile' },
  { href: '/#proyek', label: 'Work' },
  { href: '/#sertifikasi', label: 'Certifications' },
  { href: '/#dokumentasi', label: 'Documentation' },
  { href: '/#kontak', label: 'Contact' },
]

export default function SectionRail() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!panelRef.current) return
      gsap.fromTo(
        panelRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.5, ease: 'power3.out' },
      )
      gsap.fromTo(
        '[data-menu-item]',
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' },
      )
    })

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      mm.revert()
    }
  }, [open])

  return (
    <>
      <div className="sticky top-0 z-40 bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4 md:px-12 lg:px-16">
          <Link
            href="/"
            className="rounded-pill px-2 py-1 font-display text-base font-semibold tracking-tight text-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-11 items-center justify-center rounded-control bg-secondary text-canvas focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden"
          >
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-secondary/90 backdrop-blur-sm"
          />
          <div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="absolute inset-x-0 bottom-0 top-[24%] flex flex-col bg-canvas px-6 pb-8 pt-6"
          >
            <div className="flex items-center justify-between border-b border-line pb-5">
              <span className="font-display text-xl font-semibold tracking-tight text-secondary">AFR / SYS</span>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex size-11 items-center justify-center rounded-pill text-ink transition-colors hover:bg-surface/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-5">
              {items.map((item) => (
                <Link
                  key={item.href}
                  data-menu-item
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 font-display text-2xl font-medium text-secondary transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-pill bg-primary" />
                  {item.label}
                </Link>
              ))}
            </nav>

            <p className="mt-auto pt-8 font-mono text-label-md text-ink-muted">UI/UX Designer — Semarang</p>
          </div>
        </div>
      )}
    </>
  )
}
