'use client'

import { TagBadge } from '@/components/ui/tag-badge'
import { EASE_OUT, fadeUp, stagger } from '@/lib/motion'
import { cn, DynamicIcon } from '@/lib/utils'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode, useRef } from 'react'

interface HeroChip {
  label: string
  icon: string
  href?: string
}

interface HeroStat {
  value: string
  label: string
}

interface PageHeroProps {
  badge: { label: string; icon: string }
  title: string
  // Trailing words rendered in the accent gradient
  highlight: string
  description: ReactNode
  // Oversized outlined word in the background
  watermark: string
  breadcrumb: string
  chips?: HeroChip[]
  stats?: HeroStat[]
}

const ruleVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: EASE_OUT } },
}

const GRID_MASK =
  'radial-gradient(ellipse 80% 70% at 25% 20%, black 20%, transparent 75%)'

export function PageHero({
  badge,
  title,
  highlight,
  description,
  watermark,
  breadcrumb,
  chips,
  stats,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={ref}
      className='relative overflow-hidden pt-32 sm:pt-40 pb-6 sm:pb-8'
    >
      {/* Blueprint grid */}
      <div
        aria-hidden
        className='absolute inset-0 opacity-70 dark:opacity-50'
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />

      {/* Glow orbs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -top-24 -left-24 size-96 rounded-full bg-accent/15 blur-3xl'
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -bottom-32 right-0 size-112 rounded-full bg-accent/10 blur-3xl'
      />

      {/* Watermark */}
      <motion.span
        aria-hidden
        style={{ y: watermarkY }}
        className='pointer-events-none select-none absolute right-0 -bottom-[0.15em] font-bebasneue leading-none text-[28vw] lg:text-[18rem] text-transparent opacity-20 dark:opacity-15 [-webkit-text-stroke:2px_var(--color-accent)]'
      >
        {watermark}
      </motion.span>

      {/* Blend into the next section */}
      <div
        aria-hidden
        className='absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-background'
      />

      <motion.div
        variants={stagger(0.1, 0.1)}
        initial='hidden'
        animate='visible'
        className='relative z-10 w-full max-w-6xl mx-auto px-4'
      >
        <motion.nav
          variants={fadeUp}
          aria-label='Breadcrumb'
          className='flex items-center gap-1.5 text-sm text-muted-foreground mb-6'
        >
          <Link href='/' className='hover:text-accent transition-colors'>
            Home
          </Link>
          <ChevronRight className='size-3.5' />
          <span className='text-foreground'>{breadcrumb}</span>
        </motion.nav>

        <TagBadge label={badge.label} icon={badge.icon} className='mb-4' />

        <motion.h1 variants={fadeUp} className='max-w-4xl'>
          {title}{' '}
          <span className='text-transparent bg-clip-text bg-linear-to-b from-accent to-accent/65'>
            {highlight}
          </span>
        </motion.h1>

        <motion.div
          variants={ruleVariants}
          className='mt-4 h-1 w-20 rounded-full bg-accent origin-left'
        />

        <motion.p
          variants={fadeUp}
          className='mt-6 max-w-2xl md:max-w-3xl sm:text-lg'
        >
          {description}
        </motion.p>

        {chips && (
          <motion.div variants={fadeUp} className='mt-8 flex flex-wrap gap-2.5'>
            {chips.map(chip => {
              const className = cn(
                'inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-sm px-3.5 py-1.5 text-sm text-foreground',
                chip.href &&
                  'hover:border-accent/50 hover:text-accent transition-colors',
              )
              const content = (
                <>
                  <DynamicIcon
                    name={chip.icon}
                    className='size-4 text-accent'
                  />
                  {chip.label}
                </>
              )
              return chip.href ? (
                <a
                  key={chip.label}
                  href={chip.href}
                  target={chip.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    chip.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <span key={chip.label} className={className}>
                  {content}
                </span>
              )
            })}
          </motion.div>
        )}

        {stats && (
          <motion.dl
            variants={fadeUp}
            className='mt-10 grid grid-cols-3 gap-6 max-w-lg'
          >
            {stats.map(stat => (
              <div key={stat.label} className='flex flex-col-reverse'>
                <dt className='mt-1 text-xs sm:text-sm text-muted-foreground'>
                  {stat.label}
                </dt>
                <dd className='font-bebasneue text-3xl sm:text-4xl text-accent leading-none'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        )}
      </motion.div>
    </section>
  )
}
