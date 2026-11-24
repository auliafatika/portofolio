import type { AnchorHTMLAttributes, MouseEvent } from 'react'

export type Route =
  | { name: 'home' }
  | { name: 'profile' }
  | { name: 'project'; slug: string }
  | { name: 'notFound' }

export function parseRoute(): Route {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/profile') return { name: 'profile' }
  const project = path.match(/^\/work\/([^/]+)$/)
  if (project) return { name: 'project', slug: decodeURIComponent(project[1]) }
  if (path === '/') return { name: 'home' }
  return { name: 'notFound' }
}

export function navigate(href: string) {
  const url = new URL(href, window.location.origin)
  history.pushState(null, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))

  if (url.hash) {
    requestAnimationFrame(() => {
      document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
    })
  } else {
    window.scrollTo({ top: 0 })
  }
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Link({ href, onClick, children, ...rest }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    const url = new URL(href, window.location.origin)
    if (url.origin !== window.location.origin) return
    event.preventDefault()
    navigate(href)
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
