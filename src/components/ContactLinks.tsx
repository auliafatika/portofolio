import { profile } from '../data/portfolio'
import { ExternalIcon, MailIcon } from './icons'

export default function ContactLinks() {
  const { contact } = profile

  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-label-md">
      <li>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <MailIcon />
          Email
        </a>
      </li>
      <li>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          LinkedIn
          <ExternalIcon />
        </a>
      </li>
      <li>
        <span className="cursor-not-allowed text-ink-muted" title="Link coming soon">
          Behance
        </span>
      </li>
      <li>
        <span className="cursor-not-allowed text-ink-muted" title="Link coming soon">
          Dribbble
        </span>
      </li>
    </ul>
  )
}
