import { profile } from '../data/portfolio'
import ButtonLink from './ButtonLink'
import Media from './Media'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="scroll-mt-20 px-4 pt-10 pb-[60px] sm:px-8 md:px-12 md:pt-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div data-enter>
            <Media
              asset={profile.photo}
              className="aspect-[4/5] w-full rounded-card"
              placeholderLabel="TODO: portrait"
              eager
            />
          </div>

          <div className="min-w-0">
            <h1
              id="hero-title"
              data-enter
              className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-balance text-secondary sm:text-5xl lg:text-display-lg"
            >
              {profile.name}
            </h1>
            <p data-enter className="mt-4 font-mono text-label-md font-semibold tracking-[0.12em] text-primary">
              {profile.role}
            </p>
            <p data-enter className="mt-8 max-w-xl font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">
              {profile.intro}
            </p>
            <div data-enter>
              <ButtonLink href="/profile" variant="secondary" showIcon>
                More about me
              </ButtonLink>
            </div>
          </div>
        </div>

        <dl data-enter className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            ['1+', 'hands-on experience'],
            ['5', 'real-world projects'],
            ['5+', 'case studies'],
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
