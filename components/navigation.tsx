'use client'

import Link from 'next/link'
import { useState } from 'react'

const items = [['/services', 'Services'], ['/process', 'Process'], ['/capabilities', 'Capabilities']] as const

export function Navigation() {
  const [open, setOpen] = useState(false)
  return <header className="nav wrap">
    <Link className="brand" href="/" aria-label="Derricode home"><span className="brand-mark"><i /></span><span>DERRICODE</span></Link>
    <div className="nav-note">IMPLEMENTATION STUDIO <span>·</span> 01—04</div>
    <button className="menu-button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>Menu <span aria-hidden="true">{open ? '×' : '＋'}</span></button>
    <nav id="primary-nav" className={open ? 'is-open' : ''} aria-label="Primary navigation">
      {items.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a conversation <span>↗</span></Link>
    </nav>
  </header>
}
