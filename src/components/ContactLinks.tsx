import { profile } from '../data/portfolio'
import { BehanceIcon, DribbbleIcon, LinkedinIcon, MailIcon } from './icons'

const linkClass =
  'inline-flex size-11 items-center justify-center rounded-pill border border-canvas/30 text-canvas transition-colors hover:border-canvas hover:text-canvas focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2 focus-visible:ring-offset-secondary'

const disabledClass =
  'inline-flex size-11 cursor-not-allowed items-center justify-center rounded-pill border border-canvas/20 text-canvas/50'

export default function ContactLinks() {
  const { contact } = profile

  return (
    <ul className="flex flex-wrap items-center gap-2 font-mono text-label-md">
      <li>
        <a href={`mailto:${contact.email}`} aria-label="Email Aulia Fatika" title="Email" className={linkClass}>
          <MailIcon />
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
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <span role="img" aria-label="Behance, link coming soon" title="Link coming soon" className={disabledClass}>
          <BehanceIcon />
        </span>
      </li>
      <li>
        <span role="img" aria-label="Dribbble, link coming soon" title="Link coming soon" className={disabledClass}>
          <DribbbleIcon />
        </span>
      </li>
    </ul>
  )
}
