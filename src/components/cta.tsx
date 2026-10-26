import backgroundImage from '@/assets/images/bg/cta.webp'
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
        variants={stagger()}
        initial='hidden'
        whileInView='visible'
        viewport={VIEWPORT}
        className='max-w-6xl mx-auto text-center space-y-6'
      >
        <div className='space-y-4'>
          <TagBadge label='Ready to Start?' icon='Zap' />
          <motion.div variants={fadeUp}>
            <h1>Let&apos;s Build Something</h1>
            <h1 className='text-transparent bg-clip-text bg-linear-to-b from-accent to-accent/65'>
              Amazing Together
            </h1>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className='max-w-2xl md:max-w-3xl mx-auto'
          >
            Whether you&apos;re a startup looking to establish your digital
            presence or an established business ready for transformation,
            we&apos;re here to help you succeed.
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
              <CraftButtonLabel>Schedule a Consultation</CraftButtonLabel>
            </Link>
          </CraftButton>
          <CraftButton
            size='xl'
            className='w-full sm:w-auto bg-background text-foreground border border-accent/30'
            asChild
          >
            <Link href='/works'>
              <CraftButtonLabel>View Portfolio</CraftButtonLabel>
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
