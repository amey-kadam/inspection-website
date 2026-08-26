import { plans } from '../data/content'
import { useBooking } from '../context/BookingContext'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionIntro } from './ui/SectionIntro'

export function Pricing() {
  const { open } = useBooking()

  return (
    <section id="pricing" className="scroll-mt-24 bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          center
          label="Pricing"
          heading="Fixed, upfront pricing"
          description="No inflated bills. No surprises. Choose the plan that matches your home."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-2xl p-7 ${
                  plan.popular
                    ? 'relative border border-ink bg-ink text-white shadow-xl'
                    : 'border border-line bg-white'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brass px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-sm font-bold uppercase tracking-wide ${plan.popular ? 'text-brass-light' : 'text-brass-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-3 text-3xl font-extrabold ${plan.popular ? 'text-white' : 'text-ink'}`}>
                  {plan.price}
                </p>
                <p className={`mt-1 text-sm ${plan.popular ? 'text-white/60' : 'text-muted'}`}>{plan.suitableFor}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className={plan.popular ? 'mt-0.5 text-brass' : 'mt-0.5 text-brass-dark'}>
                        <Icon name="check" stroke className="h-4 w-4" />
                      </span>
                      <span className={plan.popular ? 'text-white/85' : 'text-body'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => open(plan.id)}
                  className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-brass text-ink hover:bg-brass-light'
                      : 'bg-ink text-white hover:bg-ink-2'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
