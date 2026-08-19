import { spawn } from 'node:child_process'
import { readFile } from 'node:fs/promises'

const port = 4175
const server = spawn('npm', ['run', 'start', '--', '-H', '127.0.0.1', '-p', String(port)], { stdio: 'ignore' })
const base = `http://127.0.0.1:${port}`
try {
  let ready = false
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try { if ((await fetch(`${base}/`)).ok) { ready = true; break } } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250))
  }
  if (!ready) throw new Error('Next server did not become ready')
  for (const route of ['/', '/services', '/process', '/capabilities', '/contact']) {
    const response = await fetch(`${base}${route}`)
    if (response.status !== 200) throw new Error(`${route} returned ${response.status}`)
    const html = await response.text()
    if (!html.includes('Derricode')) throw new Error(`${route} missing Derricode content`)
  }
  const missing = await fetch(`${base}/does-not-exist`)
  if (missing.status !== 404) throw new Error(`/does-not-exist returned ${missing.status}`)
  const [sections, contact] = await Promise.all([readFile('components/sections.tsx', 'utf8'), readFile('lib/contact.ts', 'utf8')])
  for (const required of ['NotFoundPage', 'Open email draft', 'mailto:hello@derricode.com']) {
    if (!(sections + contact).includes(required)) throw new Error(`missing behavior: ${required}`)
  }
  console.log('smoke: all App Router routes, branded 404, and honest contact draft behavior passed')
} finally { server.kill() }
