'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-64px' }} transition={{ duration: reduced ? 0 : .6, delay: reduced ? 0 : delay, ease: [0.2, .8, .2, 1] }}>{children}</motion.div>
}

export function PageMotion({ children, pageKey }: { children: ReactNode; pageKey: string }) {
  const reduced = useReducedMotion()
  return <motion.div key={pageKey} initial={reduced ? { opacity: 1 } : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : .28 }}>{children}</motion.div>
}
