import type { LegalDoc } from '../data/legal'
import { WHATSAPP_URL } from '../data/content'

// Rendered to static HTML at build time and shipped without any client JS —
// these are text pages, so nothing here may depend on hydration.
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-brass">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M12 3 20 6.5v5.4c0 4.8-3 8.5-8 9.6-5-1.1-8-4.8-8-9.6V6.5L12 3Z" />
                <path d="m8.5 12.2 2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            GharInspect
          </a>
          <a href="/" className="-mr-2 px-2 py-2 text-sm font-medium text-body transition-colors hover:text-ink">
            ← Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{doc.title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated {doc.updated}</p>
        <p className="mt-6 text-base leading-relaxed text-body">{doc.intro}</p>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-lg font-bold text-ink">{section.heading}</h2>
            {section.blocks.map((block, i) =>
              typeof block === 'string' ? (
                <p key={i} className="mt-3 text-base leading-relaxed text-body">
                  {block}
                </p>
              ) : (
                <ul key={i} className="mt-3 space-y-2">
                  {block.list.map((entry) => (
                    <li key={entry} className="flex gap-3 text-base leading-relaxed text-body">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </main>

      <footer className="border-t border-line bg-paper-2">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 GharInspect Home Services</p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/privacy" className="inline-block py-2 transition-colors hover:text-ink">Privacy Policy</a>
            <a href="/terms" className="inline-block py-2 transition-colors hover:text-ink">Terms</a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 transition-colors hover:text-ink"
            >
              Contact
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
