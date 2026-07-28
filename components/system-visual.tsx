'use client'

import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'

export function SystemVisual() {
  const host = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update(); media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    if (!host.current || reduced) return
    const sketch = (p: any) => {
      const nodes = [{ x: .16, y: .28, r: 10 }, { x: .48, y: .2, r: 13 }, { x: .78, y: .34, r: 9 }, { x: .31, y: .7, r: 8 }, { x: .62, y: .72, r: 12 }]
      let t = 0
      p.setup = () => { const canvas = p.createCanvas(host.current!.clientWidth, host.current!.clientHeight, p.WEBGL); canvas.parent(host.current!); p.pixelDensity(1); p.frameRate(30); p.noStroke() }
      p.draw = () => { t += .008; p.clear(); p.ambientLight(100); p.directionalLight(255, 255, 255, -1, 1, -1); p.rotateY(Math.sin(t * .7) * .12); p.rotateX(-.12)
        const w = p.width, h = p.height; p.stroke(25, 92, 255, 80); p.strokeWeight(1); p.noFill()
        nodes.forEach((a, i) => nodes.slice(i + 1).forEach((b) => { if ((i + b.x * 10) % 2 < 1.1) { p.line((a.x - .5) * w, (a.y - .5) * h, 0, (b.x - .5) * w, (b.y - .5) * h, 0) } }))
        nodes.forEach((n, i) => { const z = Math.sin(t + i) * 18; p.push(); p.translate((n.x - .5) * w, (n.y - .5) * h, z); p.specularMaterial(i === 1 ? 25 : 235, 92, 255); p.sphere(n.r + (i === 1 ? Math.sin(t * 2) * 2 : 0), 12, 8); p.pop() })
        p.push(); p.translate(0, 0, -20); p.rotateX(Math.PI / 2); p.stroke(25, 92, 255, 35); p.strokeWeight(.5); for (let x = -w; x < w; x += 28) p.line(x, -h, x, h); for (let y = -h; y < h; y += 28) p.line(-w, y, w, y); p.pop()
      }
      p.windowResized = () => p.resizeCanvas(host.current!.clientWidth, host.current!.clientHeight)
    }
    const instance = new p5(sketch)
    return () => instance.remove()
  }, [reduced])
  return <div className={`system-visual ${reduced ? 'is-static' : ''}`} ref={host} aria-label="A system map connecting business context, automation, and software"><div className="visual-fallback" aria-hidden="true"><span /><span /><span /><span /><span /></div><div className="visual-caption"><span>LIVE SYSTEM MAP</span><span>{reduced ? 'STATIC / REDUCED MOTION' : 'WEBGL / 30 FPS'}</span></div></div>
}
