'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealDirection = 'up' | 'left' | 'right'

export function Reveal({ children, delay = 0, direction = 'up', className = '' }: { children: ReactNode; delay?: number; direction?: RevealDirection; className?: string }) {
  const reduced = useReducedMotion() ?? true
  const offset = direction === 'up' ? { y: 18 } : direction === 'left' ? { x: -18 } : { x: 18 }
  return <motion.div className={className} initial={reduced ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: '-64px' }} transition={{ duration: reduced ? 0 : .62, delay: reduced ? 0 : delay, ease: [0.2, .8, .2, 1] }}>{children}</motion.div>
}

export function PageMotion({ children, pageKey }: { children: ReactNode; pageKey: string }) {
  const reduced = useReducedMotion() ?? true
  return <motion.div key={pageKey} initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .32, ease: [0.2, .8, .2, 1] }}>{children}</motion.div>
}
