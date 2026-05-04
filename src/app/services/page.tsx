'use client'

import { CTA } from '@/components/cta'
import { Hero } from '@/components/services/hero'
import { ListServices } from '@/components/services/list-services'
import { ProcessSteps } from '@/components/services/process-steps'

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <ListServices />
      <ProcessSteps />
      <CTA />
    </main>
  )
}
