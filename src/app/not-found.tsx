'use client'

import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '@/components/ui/craft-button'
import { fadeUp, stagger } from '@/lib/motion'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <motion.main
      variants={stagger(0.12, 0.1)}
      initial='hidden'
      animate='visible'
      className='min-h-[calc(100svh-192px)] flex flex-col items-center justify-center mx-auto px-4 py-16 sm:py-24'
    >
      <motion.div
        variants={stagger(0.12)}
        className='mb-4 space-y-2 text-center'
      >
        <motion.h1 variants={fadeUp}>404</motion.h1>
        <motion.h5 variants={fadeUp}>Page not found</motion.h5>
        <motion.p variants={fadeUp}>
          The page you are looking for does not exist.
        </motion.p>
      </motion.div>
      <motion.div variants={fadeUp}>
        <CraftButton size='xl' className='w-full sm:w-auto' asChild>
          <Link href='/'>
            <CraftButtonLabel>Back to Home</CraftButtonLabel>
            <CraftButtonIcon>
              <Home className='transition-transform duration-500' />
            </CraftButtonIcon>
          </Link>
        </CraftButton>
      </motion.div>
    </motion.main>
  )
}
