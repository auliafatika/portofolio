import { profile } from '../data/portfolio'
import ContactLinks from './ContactLinks'

export default function ContactSection() {
  return (
    <footer
      id="kontak"
      className="scroll-mt-20 bg-secondary px-4 py-[60px] text-canvas sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-label-md text-canvas/70">Contact</p>
        <h2 data-reveal className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
          Let's Work?
        </h2>
        <a
          data-reveal
          href={`mailto:${profile.contact.email}`}
          className="mt-8 inline-block break-all font-display text-xl font-medium text-canvas transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
        >
          {profile.contact.email}
        </a>
        <div data-reveal className="mt-10 [&_a]:text-canvas [&_a:hover]:text-canvas [&_span]:text-canvas/70">
          <ContactLinks />
        </div>
        <p className="mt-14 font-mono text-label-md text-canvas/60">
          {profile.name}, {profile.role}. {profile.location}.
        </p>
      </div>
    </footer>
  )
}
