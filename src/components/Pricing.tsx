import { motion } from 'motion/react'
import { plans, WHATSAPP_URL } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/Report'

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={6}
          label="Pricing"
          meta={`${plans.length} plans`}
          heading="Fixed, upfront pricing"
          description="No inflated bills. No surprises. Choose the plan that matches your home."
        />

        {/* A spec sheet rather than marketing cards: aligned columns, hairline
            rules, tabular figures — priced the way a report states a finding. */}
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80} className="bg-line">
              <div
                className={`flex h-full flex-col p-7 ${
                  plan.popular ? 'bg-ink text-white' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`label ${plan.popular ? 'text-brass-light' : 'text-brass-dark'}`}>
                    {plan.name}
                  </span>
                  {plan.popular && (
                    <span className="label rounded-full bg-brass px-2.5 py-1 text-ink">Popular</span>
                  )}
                </div>

                <p
                  className={`tnum mt-6 text-3xl font-extrabold tracking-tight ${
                    plan.popular ? 'text-white' : 'text-ink'
                  }`}
                >
                  {plan.price}
                </p>
                <p className={`label mt-2 ${plan.popular ? 'text-white/50' : 'text-muted'}`}>
                  {plan.suitableFor}
                </p>

                <ul className="mt-7 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-baseline gap-3 border-t py-3 text-sm ${
                        plan.popular ? 'border-white/10 text-white/80' : 'border-line text-body'
                      }`}
                    >
                      <span
                        className={`label shrink-0 ${plan.popular ? 'text-brass' : 'text-brass-dark'}`}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi, I'd like to book the ${plan.name} plan (${plan.price}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold ${
                    plan.popular
                      ? 'bg-brass text-ink hover:bg-brass-light'
                      : 'bg-ink text-white hover:bg-ink-2'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
