'use client'

import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_QUERY).matches
}

export function SystemVisual() {
  const host = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(prefersReducedMotion)
  const [visualFailed, setVisualFailed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia(REDUCED_MOTION_QUERY)
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener?.('change', update)
    media.addListener?.(update)
    return () => {
      media.removeEventListener?.('change', update)
      media.removeListener?.(update)
    }
  }, [])

  useEffect(() => {
    if (!host.current || reduced) return

    let instance: InstanceType<typeof p5> | null = null
    let p5Instance: InstanceType<typeof p5> | null = null
    let failed = false
    const fail = () => {
      if (failed) return
      failed = true
      setVisualFailed(true)
      try { instance?.remove() } catch { /* p5 may only be partially initialized */ }
      try { p5Instance?.remove() } catch { /* p5 may only be partially initialized */ }
      instance = null
      p5Instance = null
    }
    const sketch = (p: InstanceType<typeof p5>) => {
      p5Instance = p
      const nodes = [{ x: .16, y: .28, r: 10 }, { x: .48, y: .2, r: 13 }, { x: .78, y: .34, r: 9 }, { x: .31, y: .7, r: 8 }, { x: .62, y: .72, r: 12 }]
      let t = 0
      p.setup = () => {
        try {
          const canvas = p.createCanvas(host.current!.clientWidth, host.current!.clientHeight, p.WEBGL)
          canvas.parent(host.current!)
          const context = canvas.elt.getContext('webgl2') ?? canvas.elt.getContext('webgl') ?? canvas.elt.getContext('experimental-webgl')
          if (!context) throw new Error('WebGL context unavailable')
          p.pixelDensity(1)
          p.frameRate(30)
          p.noStroke()
        } catch {
          fail()
        }
      }
      p.draw = () => {
        if (failed) return
        try {
          t += .008; p.clear(); p.ambientLight(100); p.directionalLight(255, 255, 255, -1, 1, -1); p.rotateY(Math.sin(t * .7) * .12); p.rotateX(-.12)
          const w = p.width, h = p.height; p.stroke(25, 92, 255, 80); p.strokeWeight(1); p.noFill()
          nodes.forEach((a, i) => nodes.slice(i + 1).forEach((b) => { if ((i + b.x * 10) % 2 < 1.1) p.line((a.x - .5) * w, (a.y - .5) * h, 0, (b.x - .5) * w, (b.y - .5) * h, 0) }))
          nodes.forEach((n, i) => { const z = Math.sin(t + i) * 18; p.push(); p.translate((n.x - .5) * w, (n.y - .5) * h, z); p.specularMaterial(i === 1 ? 25 : 235, 92, 255); p.sphere(n.r + (i === 1 ? Math.sin(t * 2) * 2 : 0), 12, 8); p.pop() })
          p.push(); p.translate(0, 0, -20); p.rotateX(Math.PI / 2); p.stroke(25, 92, 255, 35); p.strokeWeight(.5); for (let x = -w; x < w; x += 28) p.line(x, -h, x, h); for (let y = -h; y < h; y += 28) p.line(-w, y, w, y); p.pop()
        } catch {
          fail()
        }
      }
      p.windowResized = () => {
        try { p.resizeCanvas(host.current!.clientWidth, host.current!.clientHeight) } catch { fail() }
      }
    }
    try {
      instance = new p5(sketch)
    } catch {
      fail()
    }
    return () => {
      try { instance?.remove() } catch { /* p5 may only be partially initialized */ }
      instance = null
      p5Instance = null
    }
  }, [reduced])

  const isStatic = reduced || visualFailed
  return <div className={`system-visual ${isStatic ? 'is-static' : ''}`} ref={host} aria-label="A system map connecting business context, automation, and software"><div className="visual-fallback" aria-hidden="true"><span /><span /><span /><span /><span /></div><div className="visual-caption"><span>LIVE SYSTEM MAP</span><span>{reduced ? 'STATIC / REDUCED MOTION' : visualFailed ? 'STATIC / WEBGL UNAVAILABLE' : 'WEBGL / 30 FPS'}</span></div></div>
}
