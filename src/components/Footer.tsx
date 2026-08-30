const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-ink-2 pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-lg font-extrabold tracking-tight text-white">GharInspect</p>
            <p className="mt-3 text-sm leading-relaxed">
              Inspect Before You Invest. India's most trusted premium home inspection service for
              new-possession and resale homes.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition hover:text-brass-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>101 Business Park, MG Road, Pune, Maharashtra - 411001</li>
              <li>
                <a href="tel:+919876543210" className="transition hover:text-brass-light">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:support@gharinspect.in" className="transition hover:text-brass-light">
                  support@gharinspect.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GharInspect Home Services. All rights reserved.</p>
          <p>Crafted for Indian homebuyers.</p>
        </div>
      </div>
    </footer>
  )
}
