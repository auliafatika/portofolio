import { profile } from '../data/portfolio'
import { Link } from '../router'
import { ArrowLeftIcon } from './icons'
import Media from './Media'

export default function ProfilePage() {
  return (
    <main id="main" className="min-w-0 px-4 pt-8 pb-24 sm:px-8 md:px-12 md:pt-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Link
          data-enter
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-pill px-3 font-mono text-label-md text-ink-muted transition-colors hover:bg-surface/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <ArrowLeftIcon />
          Back to home
        </Link>

        <h1 data-enter className="mt-10 font-display text-4xl font-medium leading-[1.04] tracking-tight text-secondary sm:text-5xl lg:text-display-lg">
          {profile.name}
        </h1>
        <p data-enter className="mt-4 font-mono text-label-md font-semibold tracking-[0.12em] text-primary">{profile.role}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-16">
          <div data-enter>
            <Media
              asset={profile.photo}
              className="aspect-[4/5] w-full rounded-card"
              placeholderLabel="TODO: portrait"
              eager
            />
          </div>
          <div data-reveal className="min-w-0 space-y-4 text-body-md text-ink">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <div data-reveal className="rounded-card bg-surface/[0.03] p-card">
            <h2 className="font-display text-xl font-medium text-secondary">Work experience</h2>
            {profile.experiences.map((experience) => (
              <div key={experience.company} className="mt-5">
                <p className="font-mono text-label-md font-semibold text-ink">{experience.role}</p>
                <p className="mt-1 font-display text-lg text-secondary">{experience.company}</p>
                <p className="mt-1 font-mono text-label-md tabular-nums text-ink-muted">{experience.period}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-body-md text-ink">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            <div data-reveal className="rounded-card bg-surface/[0.03] p-card">
              <h2 className="font-display text-xl font-medium text-secondary">Skills & tools</h2>
              <p className="mt-5 font-mono text-label-md font-semibold text-ink">Design</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.skills.design.map((skill) => (
                  <li key={skill} className="rounded-pill bg-surface/10 px-3 py-1 font-mono text-label-md text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-label-md font-semibold text-ink">Soft skills</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.skills.soft.map((skill) => (
                  <li key={skill} className="rounded-pill bg-surface/10 px-3 py-1 font-mono text-label-md text-ink-muted">
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-label-md font-semibold text-ink">Tools</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.tools.map((tool) => (
                  <li key={tool} className="rounded-pill bg-surface/10 px-3 py-1 font-mono text-label-md text-ink">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal className="rounded-card bg-surface/[0.03] p-card">
              <h2 className="font-display text-xl font-medium text-secondary">Education</h2>
              <p className="mt-5 font-display text-lg text-secondary">{profile.education.school}</p>
              <p className="mt-1 text-body-md text-ink">{profile.education.degree}</p>
              <p className="mt-2 font-mono text-label-md tabular-nums text-ink-muted">GPA {profile.education.gpa}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
