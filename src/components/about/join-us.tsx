import backgroundImage from '@/assets/images/bg/joinus.webp'
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

export function JoinUs() {
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
          <TagBadge label='Be a Part of Us' icon='Hand' />
          <motion.div variants={itemVariants}>
            <h1>
              Join Us on{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-b from-accent to-accent/65'>
                This Journey
              </span>
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className='max-w-2xl md:max-w-3xl mx-auto'
          >
            We&apos;re happily looking for passionate individuals to join our
            team. Let&apos;s build something amazing together.
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
              <CraftButtonLabel>Start Your Journey</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowUpRight className='transition-transform duration-500 group-hover:rotate-45 text-foreground' />
              </CraftButtonIcon>
            </Link>
          </CraftButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
