export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-50 rounded-pill bg-primary px-5 py-2 font-mono text-label-md font-semibold text-canvas focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}
