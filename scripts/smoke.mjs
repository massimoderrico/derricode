import { spawn } from 'node:child_process'
import { readFile } from 'node:fs/promises'

const port = 4175
const server = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(port)], { stdio: 'ignore' })
const base = `http://127.0.0.1:${port}`

try {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try { if ((await fetch(`${base}/`)).ok) break } catch { await new Promise((resolve) => setTimeout(resolve, 100)) }
  }
  for (const route of ['/', '/services', '/process', '/capabilities', '/contact', '/does-not-exist']) {
    const response = await fetch(`${base}${route}`)
    if (response.status !== 200) throw new Error(`${route} returned ${response.status}`)
  }
  const source = await readFile('src/App.tsx', 'utf8')
  for (const required of [": '/404'", 'function NotFound', 'buildContactMailto', 'mailto:hello@derricode.com', 'Open email draft']) {
    if (!source.includes(required)) throw new Error(`missing behavior: ${required}`)
  }
  console.log('smoke: valid routes, unknown-route fallback, and contact draft behavior present')
} finally {
  server.kill()
}
