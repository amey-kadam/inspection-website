import { faqs } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/Report'

export function FAQ() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHead
          index={8}
          light
          label="FAQ"
          meta={`${faqs.length} questions`}
          heading="Answers to common questions"
        />

        <div className="mt-14">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={(i % 6) * 40}>
              <details name="faq-group" className="group border-t border-white/10">
                <summary className="flex cursor-pointer list-none items-baseline gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="label tnum shrink-0 text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-base font-semibold text-white">{faq.question}</span>
                  <span
                    className="label shrink-0 text-white/40 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="-mt-1 max-w-2xl pb-5 pl-10 text-sm leading-relaxed text-white/70">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
          <div className="border-t border-white/10" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
