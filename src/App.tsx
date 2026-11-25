import { useEffect, useRef, useState } from 'react'
import ContactSection from './components/ContactSection'
import Hero from './components/Hero'
import ProfilePage from './components/ProfilePage'
import ProfilePanel from './components/ProfilePanel'
import ProjectGrid from './components/ProjectGrid'
import ProjectPage from './components/ProjectPage'
import SectionRail from './components/SectionRail'
import SkipLink from './components/SkipLink'
import { projects } from './data/portfolio'
import { usePageAnimation } from './hooks/usePageAnimation'
import { Link, parseRoute, type Route } from './router'

function NotFound() {
  return (
    <main id="main" className="min-w-0 px-4 pt-24 pb-32 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-medium text-secondary">Page not found</h1>
        <p className="mt-4 text-body-md text-ink-muted">This case study does not exist.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-pill bg-primary px-6 font-mono text-label-md font-semibold text-canvas focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseRoute)
  const pageRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const routeKey = route.name === 'project' ? `project:${route.slug}` : route.name
  usePageAnimation(pageRef, curtainRef, routeKey)

  useEffect(() => {
    const sync = () => setRoute(parseRoute())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  const project =
    route.name === 'project' ? projects.find((item) => item.slug === route.slug) ?? null : null

  return (
    <>
      <SkipLink />
      <div ref={pageRef}>
      <div
        ref={curtainRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 bg-primary"
        style={{ transform: 'translateY(-100%)' }}
      />
      <SectionRail />

      {route.name === 'home' && (
        <main id="main" className="min-w-0 pb-24">
          <Hero />
          <ProfilePanel />
          <ProjectGrid />
        </main>
      )}

      {route.name === 'profile' && <ProfilePage />}

      {route.name === 'project' && (project ? <ProjectPage project={project} /> : <NotFound />)}

      {route.name === 'notFound' && <NotFound />}

      <ContactSection />
      </div>
    </>
  )
}
