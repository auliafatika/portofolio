import { documentations } from '../data/portfolio'
import Media from './Media'

export default function Documentations() {
  return (
    <section
      id="dokumentasi"
      aria-labelledby="dokumentasi-title"
      className="scroll-mt-20 px-4 py-[60px] sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="flex items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-label-md text-ink-muted">Records</p>
            <h2 id="dokumentasi-title" className="mt-2 font-display text-3xl font-medium tracking-tight text-secondary sm:text-4xl">
              Documentations
            </h2>
          </div>
          <span className="font-mono text-label-md tabular-nums text-ink-muted">{documentations.length} records</span>
        </div>

        <p data-reveal className="mt-6 max-w-2xl text-body-md text-ink">
          Proof that I touch grass—from internship days and campus grind to helping local UMKM go digital. 📸
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentations.map((item) => (
            <div data-reveal key={item.title} className="min-w-0">
              <Media
                asset={item.image}
                className="aspect-[3/2] w-full rounded-card"
                placeholderLabel={`TODO: ${item.title} documentation`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
