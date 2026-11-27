import type { ProcessStep, Project } from '../types'
import { Link } from '../router'
import { ArrowLeftIcon } from './icons'
import Media from './Media'
import RichText from './RichText'

export default function ProjectPage({ project }: { project: Project }) {
  const processSteps: [string, ProcessStep][] = [
    ['Information architecture', project.detail.process.ia],
    ['Design system', project.detail.process.designSystem],
    ['Low-fidelity wireframes', project.detail.process.loFi],
    ['High-fidelity design', project.detail.process.hiFi],
    ['Prototyping', project.detail.process.prototyping],
  ]

  return (
    <main id="main" className="min-w-0 px-4 pt-8 pb-24 sm:px-8 md:px-12 md:pt-12 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Link
          data-enter
          href="/#proyek"
          className="inline-flex min-h-11 items-center gap-2 rounded-pill px-3 font-mono text-label-md text-ink-muted transition-colors hover:bg-surface/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <ArrowLeftIcon />
          Back to work
        </Link>

        <p data-enter className="mt-10 font-mono text-label-md text-ink-muted">Case study</p>
        <h1 data-enter className="mt-2 font-display text-4xl font-medium tracking-tight text-secondary sm:text-5xl">
          {project.title}
        </h1>
        <ul data-enter className="mt-4 flex flex-wrap gap-2" aria-label="Project categories">
          {project.categories.map((category) => (
            <li key={category} className="rounded-pill bg-surface/10 px-3 py-1 font-mono text-label-md text-ink">
              {category}
            </li>
          ))}
        </ul>

        <div data-enter>
          <Media
            asset={project.showcase}
            className="mt-10 h-auto w-full rounded-card"
            placeholderLabel={`TODO: showcase ${project.title}`}
            eager
          />
        </div>

        <dl data-reveal className="mt-12 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-label-md text-ink-muted">Timeline</dt>
            <dd className="mt-2 text-body-md tabular-nums text-ink">{project.detail.timeline}</dd>
          </div>
          <div>
            <dt className="font-mono text-label-md text-ink-muted">Role</dt>
            <dd className="mt-2 text-body-md text-ink">{project.detail.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-label-md text-ink-muted">Tools</dt>
            <dd className="mt-2 text-body-md text-ink">{project.detail.tools.join(', ')}</dd>
          </div>
        </dl>

        <div className="mt-16 space-y-20">
          <section data-reveal aria-labelledby="detail-description">
            <h2 id="detail-description" className="font-display text-xl font-medium text-secondary">
              Project description
            </h2>
            <RichText className="mt-4" text={project.detail.description} />
            {project.detail.before && (
              <figure className="mt-6">
                <Media
                  asset={project.detail.before}
                  className="h-auto w-full rounded-card"
                  placeholderLabel="TODO: design before"
                />
                {project.detail.before.description && (
                  <figcaption className="mt-3">
                    <RichText text={project.detail.before.description} />
                  </figcaption>
                )}
              </figure>
            )}
          </section>

          <section data-reveal aria-labelledby="detail-overview">
            <h2 id="detail-overview" className="font-display text-xl font-medium text-secondary">
              Project overview
            </h2>
            <RichText className="mt-4" text={project.detail.overview} />
          </section>

          <section data-reveal aria-labelledby="detail-problem">
            <h2 id="detail-problem" className="font-display text-xl font-medium text-secondary">
              Problem
            </h2>
            <RichText className="mt-4" text={project.detail.problem} />
          </section>

          <section data-reveal aria-labelledby="detail-research">
            <h2 id="detail-research" className="font-display text-xl font-medium text-secondary">
              Research & solution
            </h2>
            <RichText className="mt-4" text={project.detail.researchAndSolution} />
          </section>

          <section data-reveal aria-labelledby="detail-process">
            <h2 id="detail-process" className="font-display text-xl font-medium text-secondary">
              Design process
            </h2>
            <ol className="mt-5 grid gap-4">
              {processSteps.map(([defaultLabel, step], index) => {
                const label = step.label ?? defaultLabel
                return (
                  <li key={label} className="rounded-card bg-surface/[0.03] p-card">
                    <p className="font-mono text-label-md tabular-nums text-primary">
                      {String(index + 1).padStart(2, '0')} / {label}
                    </p>
                    <div className="mt-6 grid gap-10">
                      {step.images.map((image, imageIndex) => (
                        <figure key={imageIndex} className="min-w-0">
                          <Media
                            asset={image}
                            className="h-auto w-full rounded-card"
                            placeholderLabel={`TODO: ${label.toLowerCase()} image ${imageIndex + 1}`}
                          />
                          {image.description && (
                            <figcaption className="mt-5">
                              <RichText text={image.description} />
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                    {step.description && <RichText className="mt-5" text={step.description} />}
                  </li>
                )
              })}
            </ol>
          </section>

          <section data-reveal aria-labelledby="detail-learnings">
            <h2 id="detail-learnings" className="font-display text-xl font-medium text-secondary">
              What I learned
            </h2>
            <RichText className="mt-4" text={project.detail.learnings} />
          </section>
        </div>
      </div>
    </main>
  )
}
