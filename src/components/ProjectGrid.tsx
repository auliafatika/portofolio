import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  const realProjects = projects.filter((project) => project.featured).length
  const caseStudies = projects.length - realProjects
  const summary = `${realProjects} real project${realProjects === 1 ? '' : 's'}, ${caseStudies} case stud${caseStudies === 1 ? 'y' : 'ies'}`

  return (
    <section
      id="proyek"
      aria-labelledby="proyek-title"
      className="scroll-mt-20 px-4 py-[60px] sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="flex items-baseline justify-between gap-4">
          <h2 id="proyek-title" className="font-display text-3xl font-medium tracking-tight text-secondary sm:text-4xl">
            Selected work
          </h2>
          <span className="font-mono text-label-md tabular-nums text-ink-muted">{summary}</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <div data-reveal key={project.slug} className={project.wideCard ? 'min-w-0 sm:col-span-2' : 'min-w-0'}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
