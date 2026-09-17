import { sampleReport } from '../data/content'
import { Callout, SectionHead } from './ui/Report'
import { Reveal } from './ui/Reveal'

/**
 * The product, not a stock photograph: an extract of the report you receive.
 * Sits directly under the hero so the first content beat after the image is
 * the thing being sold.
 */
export function ReportPreview() {
  const { ref, property, date, findings, groups } = sampleReport

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <SectionHead
          index={1}
          label="What you receive"
          meta={`${findings} findings`}
          heading="A report you can hand straight to your builder"
          description="Every check is categorised, measured and photographed. Findings are flagged against the standard they fail, so nothing is a matter of opinion."
        />

        <Reveal delay={100}>
          <div className="rounded-2xl border border-line bg-white shadow-2xl shadow-ink/10">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <span className="label text-ink">Inspection Report</span>
              <span className="label tnum rounded-full bg-paper-2 px-2.5 py-1 text-muted">
                Sample · {ref}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-line bg-paper/60 px-6 py-3">
              <span className="text-sm font-semibold text-ink">{property}</span>
              <span className="label tnum text-muted">{date}</span>
            </div>

            <div className="px-6 py-5">
              {groups.map((group, gi) => (
                <div key={group.label} className={gi ? 'mt-7' : ''}>
                  <div className="flex items-center gap-3">
                    <span className="label tnum text-brass-dark">
                      {String(gi + 1).padStart(2, '0')}
                    </span>
                    <span className="label text-muted">{group.label}</span>
                    <span className="h-px flex-1 bg-line" aria-hidden="true" />
                    <span className="label tnum text-muted">{group.checks} checks</span>
                  </div>

                  <div className="mt-2">
                    {group.rows.map((row) => (
                      <div
                        key={row.name}
                        className="flex items-center gap-3 border-b border-line/70 py-2.5 last:border-0"
                      >
                        <span
                          className={`label ${row.status === 'flag' ? 'text-brass-dark' : 'text-muted/60'}`}
                          aria-hidden="true"
                        >
                          {row.status === 'flag' ? '!' : '✓'}
                        </span>
                        <span className="flex-1 text-sm text-body">{row.name}</span>
                        <span
                          className={`label tnum ${row.status === 'flag' ? 'font-semibold text-brass-dark' : 'text-muted'}`}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-line bg-paper/60 px-6 py-4">
              <span className="label text-muted">
                <span className="tnum font-semibold text-ink">{findings}</span> findings documented
              </span>
              <span className="label text-muted">Photo-annotated</span>
            </div>
          </div>

          <Callout className="mt-5">Thermal imaging on every inspection</Callout>
        </Reveal>
      </div>
    </section>
  )
}
