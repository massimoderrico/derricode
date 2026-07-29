'use client'

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef, type ReactNode } from 'react'

 type RevealDirection = 'up' | 'left' | 'right'

const ease = [0.2, 0.8, 0.2, 1] as const

export function Reveal({ children, delay = 0, direction = 'up', className = '' }: { children: ReactNode; delay?: number; direction?: RevealDirection; className?: string }) {
  const reduced = useReducedMotion() ?? true
  const offset = direction === 'up' ? { y: 18 } : direction === 'left' ? { x: -18 } : { x: 18 }
  return <motion.div className={className} initial={reduced ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: '-64px' }} transition={{ duration: reduced ? 0 : .62, delay: reduced ? 0 : delay, ease }}>{children}</motion.div>
}

export function StaggeredHeadline({ lines }: { lines: ReactNode[] }) {
  const reduced = useReducedMotion() ?? true
  return <span className="headline-lines">{lines.map((line, index) => <span className="headline-line" key={index}><motion.span initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .58, delay: reduced ? 0 : .08 + index * .09, ease }}>{line}</motion.span></span>)}</span>
}

export function MagneticLink({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion() ?? true
  return <motion.span className={`magnetic-link ${className}`} whileHover={reduced ? undefined : { x: 3 }} whileTap={reduced ? undefined : { scale: .98 }} transition={{ duration: reduced ? 0 : .2, ease }}>{children}</motion.span>
}

// Adapted from the public 21st.dev Interactive Hover Button, id 685.
export function RegistryHoverButton({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion() ?? true
  return <motion.span className={`registry-hover-button ${className}`} whileHover={reduced ? undefined : { scale: 1 }} whileTap={reduced ? undefined : { scale: .98 }}>
    <span className="registry-hover-label">{children}</span><span className="registry-hover-fill" aria-hidden="true" />
  </motion.span>
}

// Adapted from the public 21st.dev Text Scroll animation, id 4905.
function ScrollCharacter({ character, distance, progress, reduced }: { character: string; distance: number; progress: ReturnType<typeof useScroll>['scrollYProgress']; reduced: boolean }) {
  const x = useTransform(progress, [0, 1], reduced ? [0, 0] : [distance * 10, 0])
  const y = useTransform(progress, [0, 1], reduced ? [0, 0] : [Math.abs(distance) * 4, 0])
  return <motion.span style={{ x, y }} aria-hidden="true">{character === ' ' ? '\u00a0' : character}</motion.span>
}

export function ScrollWord({ text }: { text: string }) {
  const reduced = useReducedMotion() ?? true
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 35%'] })
  return <span ref={ref} className="scroll-word" aria-label={text}>{text.split('').map((character, index) => <ScrollCharacter key={`${character}-${index}`} character={character} distance={index - (text.length - 1) / 2} progress={scrollYProgress} reduced={reduced} />)}</span>
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
