import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { ArrowUp } from 'lucide-react'
import './globals.css'
import { Navigation } from '@/components/navigation'

const displayFont = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const sansFont = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

// oxlint-disable-next-line react/only-export-components -- App Router metadata must be exported from layout.tsx.
export const metadata: Metadata = {
  title: { default: 'Derricode — Make the next useful thing.', template: '%s — Derricode' },
  description: 'Derricode is an AI implementation and software studio for businesses building clearer, more useful systems.',
  metadataBase: new URL('https://derricode.vercel.app'),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}><body><div className="site-shell" id="top"><a className="skip-link" href="#main-content">Skip to content</a><Navigation /><main id="main-content" tabIndex={-1}>{children}</main><footer className="footer wrap"><span>© {new Date().getFullYear()} DERRICODE</span><span>AI systems, automations, and applications.</span><a href="#top">Back to top <ArrowUp aria-hidden="true" size={14} /></a></footer></div></body></html> }
