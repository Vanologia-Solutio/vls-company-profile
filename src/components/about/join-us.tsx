import backgroundImage from '@/assets/images/bg/joinus.webp'
import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '@/components/ui/craft-button'
import { TagBadge } from '@/components/ui/tag-badge'
import { fadeUp, stagger, VIEWPORT } from '@/lib/motion'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
        variants={stagger()}
        initial='hidden'
        whileInView='visible'
        viewport={VIEWPORT}
        className='max-w-6xl mx-auto text-center space-y-6'
      >
        <div className='space-y-4'>
          <TagBadge label='Be a Part of Us' icon='Hand' />
          <motion.div variants={fadeUp}>
            <h1>
              Join Us on{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-b from-accent to-accent/65'>
                This Journey
              </span>
            </h1>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className='max-w-2xl md:max-w-3xl mx-auto'
          >
            We&apos;re happily looking for passionate individuals to join our
            team. Let&apos;s build something amazing together.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
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
