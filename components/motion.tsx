'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay }}>{children}</motion.div>
}

export function PageMotion({ children, pageKey }: { children: ReactNode; pageKey: string }) {
  const reduced = useReducedMotion()
  const staticState = { opacity: 1, y: 0 }
  return <motion.div key={pageKey} initial={reduced ? staticState : { opacity: 0, y: 12 }} animate={staticState} transition={{ duration: reduced ? 0 : 0.3 }}>{children}</motion.div>
}
