import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -80px 0px' }}
      transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.9, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  )
}
