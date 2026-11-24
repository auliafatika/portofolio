export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase">
          NEXUS PUBLISHING — SYSTEM ARCHITECTURE TOPOLOGY V.2
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium leading-[1.04] tracking-tight text-secondary sm:text-6xl">
          Synapse
        </h1>
        <p className="mt-3 font-display text-2xl font-medium text-ink">Mapping the Mind</p>
        <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-ink-muted">
          The spatial mapping of artificial consciousness. React + TypeScript + Tailwind CSS
          siap untuk dikembangkan.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-control bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            Explore interface
          </button>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-control border border-line px-5 py-2.5 font-mono text-xs font-semibold text-ink transition-colors hover:bg-secondary hover:text-white"
          >
            Tailwind docs
          </a>
        </div>
      </div>
    </main>
  )
}
