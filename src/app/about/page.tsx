'use client'

import { CoreValues } from '@/components/about/core-values'
import { Hero } from '@/components/about/hero'
import { JoinUs } from '@/components/about/join-us'
import { Mission } from '@/components/about/mission'
import { Stats } from '@/components/about/stats'
import { Team } from '@/components/about/team'

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <Mission />
      <CoreValues />
      <Team />
      <Stats />
      <JoinUs />
    </main>
  )
}
