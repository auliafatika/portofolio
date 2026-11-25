import { profile } from '../data/portfolio'
import { Link } from '../router'
import { ArrowRightIcon } from './icons'

export default function ProfilePanel() {
  return (
    <section
      id="profil"
      aria-labelledby="profil-title"
      className="scroll-mt-20 px-4 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="flex items-baseline justify-between gap-4">
          <h2 id="profil-title" className="font-display text-3xl font-medium tracking-tight text-secondary sm:text-4xl">
            Profile
          </h2>
          <span className="font-mono text-label-md text-ink-muted">record 001</span>
        </div>

        <p data-reveal className="mt-8 max-w-2xl text-body-md text-ink">{profile.bio[0]}</p>
        <Link
          data-reveal
          href="/profile"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-pill bg-surface/10 px-5 py-2.5 font-mono text-label-md font-semibold text-ink transition-colors hover:bg-surface/20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          View full profile
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  )
}
