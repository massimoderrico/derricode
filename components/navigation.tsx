'use client'

import Link from 'next/link'
import { useState } from 'react'

const items = [
  ['/services', 'Services'],
  ['/process', 'Process'],
  ['/capabilities', 'Capabilities'],
] as const

export function Navigation() {
  const [open, setOpen] = useState(false)
  return <header className="nav wrap">
    <Link className="brand" href="/" aria-label="Derricode home"><span className="brand-mark">D</span><span>DERRICODE</span></Link>
    <button className="menu-button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>Menu <span>{open ? '×' : '＋'}</span></button>
    <nav id="primary-nav" className={open ? 'is-open' : ''} aria-label="Primary navigation">
      {items.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a conversation <span>↗</span></Link>
    </nav>
  </header>
}
