'use client'

import { cn } from '@/lib/utils'
import { PROJECTS } from '@/shared/data/works'
import { motion, Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { badgeVariants } from '../ui/badge'
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

export function Works() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const featuredWorks = PROJECTS.slice(0, 5)
  const intersectionRatios = useRef<number[]>(
    new Array(featuredWorks.length).fill(0),
  )

  useEffect(() => {
    const currentCardRefs = cardRefs.current

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = currentCardRefs.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            intersectionRatios.current[index] = entry.intersectionRatio
          }
        })

        let maxRatio = 0
        let maxIndex = 0
        intersectionRatios.current.forEach((ratio, index) => {
          if (ratio > maxRatio) {
            maxRatio = ratio
            maxIndex = index
          }
        })

        if (maxRatio > 0) {
          setCurrentWorkIndex(maxIndex)
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '0px',
      },
    )

    currentCardRefs.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      currentCardRefs.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className='relative bg-linear-to-b from-background via-accent/15 to-accent/30 py-16 sm:py-24'>
      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        className='text-center space-y-4 mb-12 sm:mb-16 px-4'
      >
        <TagBadge label='Our Portfolio' icon='Briefcase' />
        <motion.h2 variants={itemVariants}>Recent Works</motion.h2>
      </motion.div>

      {/* Parallax Vertical Scroll Layout */}
      <div ref={containerRef}>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12'>
            {/* Sticky Information Panel - Left Side (Desktop Only) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='hidden lg:block lg:col-span-2 lg:sticky lg:top-32 h-fit'
            >
              <div className='space-y-6'>
                {/* Current Project Info */}
                <div className='space-y-4'>
                  <motion.span
                    key={`category-${currentWorkIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className='inline-block text-sm font-semibold text-accent uppercase tracking-wider'
                  >
                    {featuredWorks[currentWorkIndex].category}
                  </motion.span>

                  <motion.h2
                    key={`title-${currentWorkIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                  >
                    {featuredWorks[currentWorkIndex].title}
                  </motion.h2>

                  <motion.p
                    key={`desc-${currentWorkIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {featuredWorks[currentWorkIndex].description}
                  </motion.p>
                </div>

                {/* Tags */}
                <div>
                  <span className='sub mb-2.5'>What we&apos;ve done</span>
                  <motion.div
                    key={`tags-${currentWorkIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className='flex flex-wrap gap-2'
                  >
                    {featuredWorks[currentWorkIndex].tags.map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className={cn(badgeVariants({ variant: 'default' }))}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Progress Indicator */}
                <div className='pt-8 border-t border-border'>
                  <div className='flex items-center justify-between mb-3'>
                    <span className='text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
                      Project
                    </span>
                    <span className='text-sm font-bold text-accent'>
                      {String(currentWorkIndex + 1).padStart(2, '0')} /{' '}
                      {String(featuredWorks.length).padStart(2, '0')}
                    </span>
                  </div>
                  <motion.div className='w-full h-2 bg-muted rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{
                        width: `${((currentWorkIndex + 1) / featuredWorks.length) * 100}%`,
                      }}
                      transition={{ duration: 0.6 }}
                      className='h-full bg-accent rounded-full'
                    />
                  </motion.div>
                </div>

                {/* Call to Action */}
                <CraftButton size='xl' asChild>
                  <Link href='/works'>
                    <CraftButtonLabel>View Other Works</CraftButtonLabel>
                    <CraftButtonIcon>
                      <ArrowUpRight className='transition-transform duration-500 group-hover:rotate-45' />
                    </CraftButtonIcon>
                  </Link>
                </CraftButton>
              </div>
            </motion.div>

            {/* Vertical Cards with Parallax - Right Side */}
            <div className='space-y-8 col-span-1 lg:col-span-3'>
              {featuredWorks.map((work, index) => (
                <motion.div
                  ref={el => {
                    if (el) cardRefs.current[index] = el
                  }}
                  key={work.id}
                  className={cn(
                    'group rounded-lg overflow-hidden bg-card border backdrop-blur-sm transition-all duration-300',
                    index === currentWorkIndex
                      ? 'shadow-2xl shadow-accent/20'
                      : 'grayscale-80',
                  )}
                >
                  <div className='overflow-hidden w-full aspect-3/2'>
                    <Image
                      src={work.image}
                      alt='Placeholder'
                      fill
                      className='object-cover'
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
