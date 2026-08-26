import { faqs } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionIntro } from './ui/SectionIntro'

export function FAQ() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionIntro center label="FAQ" heading="Answers to common questions" />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={(i % 6) * 40}>
              <details name="faq-group" className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-semibold text-ink">{faq.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
