import { certifications } from '../data/portfolio'
import { ArrowRightIcon } from './icons'

export default function Certifications() {
  return (
    <section
      id="sertifikasi"
      aria-labelledby="sertifikasi-title"
      className="scroll-mt-20 px-4 py-[60px] sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="flex items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-label-md text-ink-muted">Credentials</p>
            <h2 id="sertifikasi-title" className="mt-2 font-display text-3xl font-medium tracking-tight text-secondary sm:text-4xl">
              Certifications
            </h2>
          </div>
          <span className="font-mono text-label-md tabular-nums text-ink-muted">{certifications.length} records</span>
        </div>

        <ol className="mt-12 divide-y divide-line border-y border-line">
          {certifications.map((item, index) => (
            <li
              data-reveal
              key={item.title}
              className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-[96px_minmax(0,1fr)_auto] sm:items-start sm:gap-10 sm:py-10"
            >
              <div className="min-w-0">
                <p className="font-display text-2xl font-medium leading-none tabular-nums text-secondary">
                  {String(index + 1).padStart(2, '0')}.
                </p>
                <p className="mt-8 font-mono text-label-md font-semibold text-ink-muted">Issued by</p>
                <p className="mt-2 font-mono text-label-md leading-relaxed text-ink">{item.issuer}</p>
              </div>

              <div className="min-w-0">
                <h3 className="font-display text-xl font-medium leading-snug text-secondary sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl font-mono text-label-md leading-relaxed text-ink-muted">
                  {item.period}
                  {item.score ? `, ${item.score}.` : '.'}
                </p>
              </div>

              <div className="sm:justify-self-end sm:self-end">
                {item.documentUrl ? (
                  <a
                    href={item.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-pill bg-secondary px-5 font-mono text-label-md font-semibold text-canvas transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {item.documentLabel}
                    <ArrowRightIcon />
                  </a>
                ) : (
                  <span
                    title="Certificate link not available yet"
                    className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-pill bg-surface/10 px-5 font-mono text-label-md font-semibold text-ink-muted"
                  >
                    {item.documentLabel}
                    <ArrowRightIcon />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
