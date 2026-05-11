'use client'

import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '@/components/ui/craft-button'
import { motion, Variants } from 'framer-motion'
import { Home } from 'lucide-react'
import Link from 'next/link'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function NotFoundPage() {
  return (
    <main className='min-h-[calc(100svh-192px)] flex flex-col items-center justify-center mx-auto px-4 py-16 sm:py-24'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='mb-4 space-y-2 text-center'
      >
        <motion.h1 variants={itemVariants}>404</motion.h1>
        <motion.h5 variants={itemVariants}>Page not found</motion.h5>
        <motion.p variants={itemVariants}>
          The page you are looking for does not exist.
        </motion.p>
      </motion.div>
      <motion.div variants={itemVariants} initial='hidden' animate='visible'>
        <CraftButton size='xl' className='w-full sm:w-auto' asChild>
          <Link href='/'>
            <CraftButtonLabel>Back to Home</CraftButtonLabel>
            <CraftButtonIcon>
              <Home className='transition-transform duration-500' />
            </CraftButtonIcon>
          </Link>
        </CraftButton>
      </motion.div>
    </main>
  )
}
