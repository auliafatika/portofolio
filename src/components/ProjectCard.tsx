import type { Project } from '../types'
import { Link } from '../router'
import { ArrowRightIcon } from './icons'
import Media from './Media'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex min-w-0 flex-col rounded-card bg-surface/[0.03] p-card transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-surface/[0.07] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <Media
        asset={project.showcase}
        className={`aspect-[3/2] w-full rounded-card ${project.wideCard ? 'lg:aspect-[21/8]' : ''}`}
        placeholderLabel={`TODO: showcase ${project.title}`}
      />
      <h3 className="mt-5 font-display text-xl font-medium text-secondary">{project.title}</h3>
      <p className="mt-2 text-body-md text-ink-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-2" aria-label="Project categories">
          {project.categories.map((category) => (
            <li key={category} className="rounded-pill bg-surface/10 px-3 py-1 font-mono text-label-md text-ink">
              {category}
            </li>
          ))}
        </ul>
        <ArrowRightIcon className="size-5 text-primary transition-transform duration-150 group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
