'use client'

import { Details } from '@/components/contact/details'
import { FAQ } from '@/components/contact/faq'
import { Hero } from '@/components/contact/hero'

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <Details />
      <FAQ />
    </main>
  )
}
