import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'

export function usePageAnimation(
  scope: RefObject<HTMLElement | null>,
  curtain: RefObject<HTMLElement | null>,
  key: string,
) {
  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return

    const mm = gsap.matchMedia()

    mm.add(
      {
        reduce: '(prefers-reduced-motion: reduce)',
        motion: '(prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const enter = gsap.utils.toArray<HTMLElement>('[data-enter]', root)
        const reveal = gsap.utils.toArray<HTMLElement>('[data-reveal]', root)
        const cover = curtain.current

        if (context.conditions?.reduce) {
          if (cover) gsap.set(cover, { yPercent: -100 })
          gsap.set([...enter, ...reveal], { autoAlpha: 1, y: 0 })
          return
        }

        if (cover) gsap.set(cover, { yPercent: 0 })

        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .to(cover, { yPercent: -100, duration: 0.75, ease: 'power3.inOut' })
          .fromTo(
            enter,
            { autoAlpha: 0, y: 44 },
            { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, clearProps: 'transform' },
            '-=0.4',
          )

        gsap.set(reveal, { autoAlpha: 0, y: 32 })
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              observer.unobserve(entry.target)
              context.add(() => {
                gsap.to(entry.target, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.75,
                  ease: 'power2.out',
                  clearProps: 'transform',
                })
              })
            })
          },
          { threshold: 0.15 },
        )
        reveal.forEach((element) => observer.observe(element))

        const fallback = window.setTimeout(() => {
          context.add(() => {
            reveal.forEach((element) => {
              if (getComputedStyle(element).visibility === 'hidden') {
                gsap.set(element, { autoAlpha: 1, y: 0 })
              }
            })
          })
        }, 2500)

        return () => {
          window.clearTimeout(fallback)
          observer.disconnect()
        }
      },
      root,
    )

    return () => mm.revert()
  }, [scope, curtain, key])
}
