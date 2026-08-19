import type { Metadata } from 'next'
import { ServicesPage } from '@/components/sections'
import { PageMotion } from '@/components/motion'

// oxlint-disable-next-line react/only-export-components -- App Router metadata must be exported from page.tsx.
export const metadata: Metadata = {
  title: 'Services',
  description: 'AI implementation, workflow systems, and digital products built around how your business actually works.',
}

export default function Page() { return <PageMotion pageKey="services"><ServicesPage /></PageMotion> }
