import type { Metadata } from 'next'
import { ContactPage } from '@/components/sections'
import { PageMotion } from '@/components/motion'

// oxlint-disable-next-line react/only-export-components -- App Router metadata must be exported from page.tsx.
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Bring Derricode the real question. Start a practical conversation about what you are trying to improve, automate, or build.',
}

export default function Page() { return <PageMotion pageKey="contact"><ContactPage /></PageMotion> }
