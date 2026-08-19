import type { Metadata } from 'next'
import { ProcessPage } from '@/components/sections'
import { PageMotion } from '@/components/motion'

// oxlint-disable-next-line react/only-export-components -- App Router metadata must be exported from page.tsx.
export const metadata: Metadata = {
  title: 'Process',
  description: 'A clear, consultative path from the first question to a useful working system.',
}

export default function Page() { return <PageMotion pageKey="process"><ProcessPage /></PageMotion> }
