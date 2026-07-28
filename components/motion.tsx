'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'

 type RevealDirection = 'up' | 'left' | 'right'

const ease = [0.2, 0.8, 0.2, 1] as const

export function Reveal({ children, delay = 0, direction = 'up', className = '' }: { children: ReactNode; delay?: number; direction?: RevealDirection; className?: string }) {
  const reduced = useReducedMotion() ?? true
  const offset = direction === 'up' ? { y: 18 } : direction === 'left' ? { x: -18 } : { x: 18 }
  return <motion.div className={className} initial={reduced ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: '-64px' }} transition={{ duration: reduced ? 0 : .62, delay: reduced ? 0 : delay, ease }}>{children}</motion.div>
}

export function StaggeredHeadline({ lines }: { lines: ReactNode[] }) {
  const reduced = useReducedMotion() ?? true
  return <span className="headline-lines" aria-label={lines.map(String).join(' ')}>{lines.map((line, index) => <span className="headline-line" key={index}><motion.span initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .58, delay: reduced ? 0 : .08 + index * .09, ease }}>{line}</motion.span></span>)}</span>
}

export function MagneticLink({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion() ?? true
  return <motion.span className={`magnetic-link ${className}`} whileHover={reduced ? undefined : { x: 3 }} whileTap={reduced ? undefined : { scale: .98 }} transition={{ duration: reduced ? 0 : .2, ease }}>{children}</motion.span>
}

export function SectionProgress() {
  const reduced = useReducedMotion() ?? true
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, reduced ? { stiffness: 1000, damping: 1000 } : { stiffness: 120, damping: 30, mass: .2 })
  return <motion.div className="section-progress" style={{ scaleX, transformOrigin: '0 50%' }} aria-hidden="true" />
}

export function PageMotion({ children, pageKey }: { children: ReactNode; pageKey: string }) {
  const reduced = useReducedMotion() ?? true
  return <><SectionProgress /><motion.div key={pageKey} initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .32, ease }}>{children}</motion.div></>
}
