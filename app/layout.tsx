import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/navigation'

// oxlint-disable-next-line react/only-export-components -- App Router metadata must be exported from layout.tsx.
export const metadata: Metadata = {
  title: { default: 'Derricode — Turn possibility into motion.', template: '%s — Derricode' },
  description: 'Derricode is an AI implementation and software studio for useful systems, automations, applications, APIs, and MCP integrations.',
  metadataBase: new URL('https://derricode.vercel.app'),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="site-shell" id="top"><a className="skip-link" href="#main-content">Skip to content</a><Navigation /><main id="main-content" tabIndex={-1}>{children}</main><footer className="footer wrap"><span>© {new Date().getFullYear()} DERRICODE</span><span>AI systems, automations, and applications.</span><a href="#top">Back to top ↑</a></footer></div></body></html>
}
