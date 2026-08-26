import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type BookingContextType = {
  isOpen: boolean
  plan: string | null
  open: (plan?: string) => void
  close: () => void
}

const BookingContext = createContext<BookingContextType | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [plan, setPlan] = useState<string | null>(null)

  const value = useMemo(
    () => ({
      isOpen,
      plan,
      open: (p?: string) => {
        setPlan(p ?? null)
        setIsOpen(true)
      },
      close: () => setIsOpen(false),
    }),
    [isOpen, plan],
  )

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}
