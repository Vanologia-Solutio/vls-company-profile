'use client'

import backgroundImage from '@/assets/images/bg/cta.webp'
import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '@/components/ui/craft-button'
import { TagBadge } from '@/components/ui/tag-badge'
import { motion, Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function CTA() {
  return (
    <section className='py-16 sm:py-24 relative px-4 overflow-hidden'>
      <div className='absolute inset-0 -z-10'>
        <Image
          src={backgroundImage}
          alt='Background Image'
          fill
          className='object-cover grayscale-50 opacity-10'
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-6xl mx-auto text-center space-y-6'
      >
        <div className='space-y-4'>
          <TagBadge label='Ready to Start?' icon='Zap' />
          <motion.div variants={itemVariants}>
            <h1>Let&apos;s Build Something</h1>
            <h1 className='text-transparent bg-clip-text bg-linear-to-b from-accent to-accent/65'>
              Amazing Together
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className='max-w-2xl md:max-w-3xl mx-auto'
          >
            Whether you&apos;re a startup looking to establish your digital
            presence or an established business ready for transformation,
            we&apos;re here to help you succeed.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start sm:justify-center'
        >
          <CraftButton
            size='xl'
            className='w-full sm:w-auto animate-heartbeat'
            asChild
          >
            <Link href='/contact'>
              <CraftButtonLabel>Schedule a Consultation</CraftButtonLabel>
            </Link>
          </CraftButton>
          <CraftButton
            size='xl'
            className='w-full sm:w-auto bg-background text-foreground border border-accent/30'
            asChild
          >
            <Link href='/work'>
              <CraftButtonLabel>View Portfolio</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowUpRight className='transition-transform duration-500 group-hover:rotate-45 dark:text-foreground' />
              </CraftButtonIcon>
            </Link>
          </CraftButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
