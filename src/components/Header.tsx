import { useState } from 'react'
import { motion } from 'motion/react'
import { useScrolled } from '../hooks/useScrolled'
import { WHATSAPP_URL } from '../data/content'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faqs' },
]

export function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  // Inverted while over the hero image; normal once scrolled or the menu opens.
  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid
          ? 'border-b border-line/80 bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.02)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className={`flex items-center gap-2 text-lg font-extrabold tracking-tight transition-colors ${
            solid ? 'text-ink' : 'text-white'
          }`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
              solid ? 'bg-ink text-brass' : 'bg-white/15 text-brass-light backdrop-blur-sm'
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M12 3 20 6.5v5.4c0 4.8-3 8.5-8 9.6-5-1.1-8-4.8-8-9.6V6.5L12 3Z" />
              <path d="m8.5 12.2 2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          GharInspect
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                solid ? 'text-body hover:text-ink' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              solid ? 'bg-ink text-white hover:bg-ink-2' : 'bg-white text-ink hover:bg-brass-light'
            }`}
          >
            Book Inspection
          </motion.a>
        </div>

        <button
          className={`-mr-1 flex h-11 w-11 items-center justify-center rounded-lg transition-colors md:hidden ${
            solid ? 'text-ink' : 'text-white'
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden border-t border-line/80 bg-paper transition-[grid-template-rows] duration-300 md:hidden ${
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Inspection
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
