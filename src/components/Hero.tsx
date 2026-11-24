import { Link } from '../router'
import { profile } from '../data/portfolio'
import { ArrowRightIcon } from './icons'
import Media from './Media'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="scroll-mt-20 px-4 pt-10 pb-16 sm:px-8 md:px-12 md:pt-16 lg:px-16 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 font-mono text-label-md text-ink-muted sm:flex-row sm:justify-between">
          <span className="tabular-nums">{profile.coordinates}</span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="inline-block size-2 rounded-pill bg-primary" />
            {profile.status}
          </span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <Media
            asset={profile.photo}
            className="aspect-[4/5] w-full rounded-card"
            placeholderLabel="TODO: portrait"
            eager
          />

          <div className="min-w-0">
            <h1
              id="hero-title"
              className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-balance text-secondary sm:text-5xl lg:text-display-lg"
            >
              {profile.name}
            </h1>
            <p className="mt-4 font-mono text-label-md font-semibold tracking-[0.12em] text-primary">
              {profile.role}
            </p>
            <p className="mt-8 max-w-xl font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">
              {profile.intro}
            </p>
            <Link
              href="/profile"
              className="mt-10 inline-flex min-h-11 items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 font-mono text-label-md font-semibold text-canvas transition-[opacity,transform] duration-150 hover:-translate-y-0.5 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get to know me
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            ['50+', 'digital pages'],
            ['5', 'active client projects'],
            ['4', 'case studies'],
          ].map(([value, label]) => (
            <div key={label} className="min-w-0">
              <dt className="font-mono text-label-md text-ink-muted">{label}</dt>
              <dd className="mt-2 font-display text-2xl font-medium tabular-nums text-secondary">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
