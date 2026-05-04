'use client'

import { CTA } from '@/components/cta'
import { Hero } from '@/components/works/hero'
import { Projects } from '@/components/works/projects'
import { Testimonies } from '@/components/works/testimonies'

export default function WorkPage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Testimonies />
      <CTA />
    </main>
  )
}
