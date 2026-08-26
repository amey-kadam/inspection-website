import { useState } from 'react'
import { plans } from '../data/content'
import { useBooking } from '../context/BookingContext'
import { Modal } from './ui/Modal'

const inputClass =
  'mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink outline-none'

const today = new Date().toISOString().split('T')[0]

export function BookingModal() {
  const { isOpen, plan, close } = useBooking()
  const [submitted, setSubmitted] = useState(false)
  const selectedPlan = plans.find((p) => p.id === plan)

  const handleClose = () => {
    close()
    setTimeout(() => setSubmitted(false), 300)
  }

  return (
    <Modal open={isOpen} onClose={handleClose} title="Book Your Inspection" widthClassName="max-w-lg">
      {submitted ? (
        <div className="py-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="m5 13 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-bold text-ink">Request received</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Thank you — our team will call you within a few hours to confirm your inspection slot. For
            an instant response, message us on WhatsApp.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={handleClose}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
          className="space-y-4"
          noValidate={false}
        >
          {selectedPlan && (
            <div className="flex items-center justify-between rounded-lg border border-brass/30 bg-brass/10 px-4 py-2.5 text-sm">
              <span className="font-medium text-ink">
                Selected plan: <strong>{selectedPlan.name}</strong> ({selectedPlan.price})
              </span>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
              Full Name
              <input type="text" name="name" required className={inputClass} placeholder="Aditya Rao" />
            </label>
            <label className="block text-sm font-medium text-ink">
              Phone Number
              <input
                type="tel"
                name="phone"
                required
                pattern="[6-9][0-9]{9}"
                title="Enter a valid 10-digit Indian mobile number"
                className={inputClass}
                placeholder="98765 43210"
              />
            </label>
          </div>

          <label className="block text-sm font-medium text-ink">
            Email Address
            <input type="email" name="email" required className={inputClass} placeholder="you@example.com" />
          </label>

          <label className="block text-sm font-medium text-ink">
            Property Location
            <input type="text" name="location" required className={inputClass} placeholder="Society / area, city" />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
              Property Type
              <select name="propertyType" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select type
                </option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Independent House</option>
                <option>Commercial</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-ink">
              BHK Configuration
              <select name="bhk" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select BHK
                </option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4+ BHK</option>
                <option>Villa / Commercial</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
              Preferred Date
              <input type="date" name="date" required min={today} className={inputClass} />
            </label>
            <label className="block text-sm font-medium text-ink">
              Preferred Time
              <select name="time" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select slot
                </option>
                <option>Morning (9 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 4 PM)</option>
                <option>Evening (4 PM – 7 PM)</option>
              </select>
            </label>
          </div>

          <label className="block text-sm font-medium text-ink">
            Additional Message <span className="font-normal text-muted">(optional)</span>
            <textarea name="message" rows={3} className={inputClass} placeholder="Anything we should know?" />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-2 active:scale-[0.98]"
          >
            Confirm Booking Request
          </button>
        </form>
      )}
    </Modal>
  )
}
