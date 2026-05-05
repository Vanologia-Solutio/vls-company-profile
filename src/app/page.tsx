'use client'

import { CTA } from '@/components/cta'
import { Features } from '@/components/home/features'
import { Hero } from '@/components/home/hero'
import { Services } from '@/components/home/services'
import { Works } from '@/components/home/works'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <Features />
      <CTA />
    </main>
  )
}
