const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export function Footer() {
  return (
    <footer className="bg-ink-2 pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="label text-white/50">About</p>
            <p className="mt-3 text-sm leading-relaxed">
              Inspect Before You Invest. India's most trusted premium home inspection service for
              new-possession and resale homes.
            </p>
          </div>

          <div>
            <p className="label text-white/50">Quick Links</p>
            <ul className="mt-4 space-y-1">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="inline-block py-2 text-sm transition hover:text-brass-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-white/50">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Chinchwad 411033, Pune</li>
              <li>
                <a href="tel:+919021907313" className="inline-block py-2 transition hover:text-brass-light">
                  +91 90219 07313
                </a>
              </li>
              <li>
                <a href="mailto:support@gharinspect.in" className="inline-block py-2 transition hover:text-brass-light">
                  support@gharinspect.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10" aria-hidden="true">
          <p className="select-none text-[13vw] font-extrabold leading-[0.82] tracking-tighter text-white/[0.07] lg:text-[11rem]">
            GharInspect
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GharInspect Home Services. All rights reserved.</p>
          <p>Crafted for Indian homebuyers.</p>
        </div>
      </div>
    </footer>
  )
}
