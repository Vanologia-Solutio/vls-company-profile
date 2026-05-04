'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '../ui/craft-button'
import { TagBadge } from '../ui/tag-badge'

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

export function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden'>
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="grad1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:rgba(202,36,36,0.15);stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:rgba(30,30,30,0);stop-opacity:1" /%3E%3C/linearGradient%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3CfeDisplacementMap in="SourceGraphic" in2="noise" scale="30" /%3E%3C/filter%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23grad1)" /%3E%3Ccircle cx="200" cy="100" r="250" fill="rgba(202,36,36,0.1)" filter="url(%23noise)" /%3E%3Ccircle cx="1000" cy="700" r="300" fill="rgba(202,36,36,0.08)" filter="url(%23noise)" /%3E%3Cpath d="M0 400 Q300 300 600 400 T1200 400" stroke="rgba(202,36,36,0.05)" stroke-width="2" fill="none" /%3E%3C/svg%3E')`,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className='absolute inset-0 bg-linear-to-b from-accent/20 to-transparent'
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute top-20 right-20 size-72 bg-accent/8 rounded-full blur-3xl'
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute bottom-20 left-20 size-72 bg-accent/10 rounded-full blur-3xl'
      />

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='relative z-10 max-w-6xl mx-auto text-center space-y-6'
      >
        <TagBadge label='Digital Innovation Starts Here' icon='Sparkles' />
        <motion.div
          variants={itemVariants}
          className='font-bold text-foreground leading-normal'
        >
          <h1 className='hero'>Transform Your Digital</h1>
          <TypeAnimation
            sequence={['Vision', 2000, 'Presence', 2000, 'Future', 2000]}
            repeat={Infinity}
            className="hero font-courgette text-transparent bg-clip-text bg-linear-to-br from-accent to-accent/60 after:content-['|'] after:ml-1 after:animate-blink after:text-accent/80"
            wrapper='span'
            speed={50}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className='text-base sm:text-lg max-w-2xl md:max-w-3xl'
        >
          Vanologia Solutio delivers cutting-edge digital solutions that empower
          your business to thrive in the modern landscape.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start sm:justify-center'
        >
          <CraftButton size='xl' className='w-full sm:w-auto' asChild>
            <Link href='/contact'>
              <CraftButtonLabel>Start Your Project</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowUpRight className='transition-transform duration-500 group-hover:rotate-45 dark:text-foreground' />
              </CraftButtonIcon>
            </Link>
          </CraftButton>
          <CraftButton
            size='xl'
            className='w-full sm:w-auto bg-background text-foreground border border-accent/30'
            asChild
          >
            <Link href='/works'>
              <CraftButtonLabel>Explore Our Works</CraftButtonLabel>
            </Link>
          </CraftButton>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial='hidden'
        animate='visible'
        className='absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2'
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1 h-2 bg-muted-foreground rounded-full'
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
