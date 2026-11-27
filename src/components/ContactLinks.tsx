import { profile } from '../data/portfolio'
import { BehanceIcon, DribbbleIcon, LinkedinIcon, MailIcon } from './icons'

const linkClass =
  'inline-flex size-11 items-center justify-center rounded-pill border border-canvas/30 text-canvas transition-colors hover:border-canvas hover:text-canvas focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2 focus-visible:ring-offset-secondary'

export default function ContactLinks() {
  const { contact } = profile

  return (
    <ul className="flex flex-wrap items-center gap-2 font-mono text-label-md">
      <li>
        <a href={`mailto:${contact.email}`} aria-label="Email Aulia Fatika" title="Email" className={linkClass}>
          <MailIcon className="size-6" />
        </a>
      </li>
      <li>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
          className={linkClass}
        >
          <LinkedinIcon className="size-6" />
        </a>
      </li>
      <li>
        <a
          href={contact.behance}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance profile"
          title="Behance"
          className={linkClass}
        >
          <BehanceIcon className="size-6" />
        </a>
      </li>
      <li>
        <a
          href={contact.dribbble}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dribbble profile"
          title="Dribbble"
          className={linkClass}
        >
          <DribbbleIcon className="size-6" />
        </a>
      </li>
    </ul>
  )
}
