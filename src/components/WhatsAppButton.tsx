import { WHATSAPP_URL } from '../data/content'

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PrimeInspect on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition hover:bg-emerald-700 active:scale-95"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.5 0-10 4.5-10 10 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a10 10 0 0 0 4.84 1.23h.01c5.5 0 10-4.5 10-10s-4.5-9.87-10.01-9.87Zm5.86 14.3c-.25.7-1.45 1.34-2 1.43-.5.08-1.14.11-1.84-.12-.42-.14-.97-.32-1.67-.63-2.94-1.27-4.86-4.22-5-4.42-.14-.19-1.2-1.6-1.2-3.04 0-1.45.76-2.16 1.03-2.45.27-.3.6-.37.8-.37h.58c.18 0 .43-.07.67.51.25.6.85 2.08.92 2.23.08.15.13.32.03.52-.1.2-.15.32-.3.5-.14.17-.3.38-.44.51-.14.14-.3.29-.13.58.18.29.79 1.3 1.7 2.1 1.17 1.05 2.16 1.37 2.45 1.53.29.15.46.13.63-.07.17-.2.72-.83.92-1.12.2-.28.4-.23.66-.14.27.1 1.7.8 2 .95.29.14.48.21.55.33.08.13.08.72-.17 1.42Z" />
      </svg>
    </a>
  )
}
