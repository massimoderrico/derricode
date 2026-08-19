import type { Metadata } from 'next'
import { CapabilitiesPage } from '@/components/sections'
import { PageMotion } from '@/components/motion'

// oxlint-disable-next-line react/only-export-components -- App Router metadata must be exported from page.tsx.
export const metadata: Metadata = {
  title: 'Capabilities',
  description: 'The technical range underneath Derricode: applications, APIs, automations, AI systems, and integrations.',
}

export default function Page() { return <PageMotion pageKey="capabilities"><CapabilitiesPage /></PageMotion> }
