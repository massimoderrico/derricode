'use client'

import Link from 'next/link'
import { useState } from 'react'

const items = [['/services', 'Services'], ['/process', 'Process'], ['/capabilities', 'Capabilities']] as const

export function Navigation() {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrap"><div className="nav wrap">
    <Link className="brand" href="/" aria-label="Derricode home"><span className="brand-word">derri<span>code</span></span><span className="brand-dot" aria-hidden="true" /></Link>
    <nav id="primary-nav" className={open ? 'is-open' : ''} aria-label="Primary navigation">
      {items.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a conversation <span aria-hidden="true">↗</span></Link>
    </nav>
    <button className="menu-button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>Menu <span aria-hidden="true">{open ? '×' : '＋'}</span></button>
  </div></header>
}
