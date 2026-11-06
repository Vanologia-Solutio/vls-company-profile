'use client'

import { EASE_OUT, fadeLeft, fadeUp, stagger, VIEWPORT } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { PROJECTS } from '@/shared/data/works'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { badgeVariants } from '../ui/badge'
import { TagBadge } from '../ui/tag-badge'
import { ProjectActions } from '../works/project-actions'
import { ProjectImageSlider } from '../works/project-image-slider'

export function Works() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  // Only projects with an uploaded thumbnail are featured on the home page
  const featuredWorks = PROJECTS.filter(project => project.image).slice(0, 5)
  const currentWork = featuredWorks[currentWorkIndex]
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
        variants={stagger()}
        initial='hidden'
        whileInView='visible'
        viewport={VIEWPORT}
        className='text-center space-y-4 mb-12 sm:mb-16 px-4'
      >
        <TagBadge label='Our Portfolio' icon='Briefcase' />
        <motion.h2 variants={fadeUp}>Recent Works</motion.h2>
      </motion.div>

      {/* Parallax Vertical Scroll Layout */}
      <div ref={containerRef}>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12'>
            {/* Sticky Information Panel - Left Side (Desktop Only) */}
            <motion.div
              variants={fadeLeft}
              initial='hidden'
              whileInView='visible'
              viewport={VIEWPORT}
              className='hidden lg:block lg:col-span-2 lg:sticky lg:top-32 h-fit'
            >
              <div className='space-y-6'>
                {/* Current Project Info */}
                <div className='space-y-4'>
                  <motion.span
                    key={`category-${currentWorkIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className='inline-block text-sm font-semibold text-accent uppercase tracking-wider'
                  >
                    {currentWork.category}
                  </motion.span>

                  <motion.h2
                    key={`title-${currentWorkIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT, delay: 0.05 }}
                  >
                    {currentWork.title}
                  </motion.h2>

                  <motion.p
                    key={`desc-${currentWorkIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT, delay: 0.1 }}
                  >
                    {currentWork.description}
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
                    {currentWork.tags.map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: EASE_OUT,
                          delay: idx * 0.04,
                        }}
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
                  <div className='w-full h-2 bg-muted rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: (currentWorkIndex + 1) / featuredWorks.length,
                      }}
                      transition={{ duration: 0.6, ease: EASE_OUT }}
                      className='h-full bg-accent rounded-full origin-left'
                    />
                  </div>
                </div>

                {/* Call to Action */}
                <div className='space-y-4'>
                  <ProjectActions id={currentWork.id} link={currentWork.link} />
                  <Link
                    href='/works'
                    className='group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors'
                  >
                    View all works
                    <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:rotate-45' />
                  </Link>
                </div>
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
                  variants={fadeUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={VIEWPORT}
                  className={cn(
                    'group relative rounded-lg overflow-hidden bg-card border backdrop-blur-sm transition-[box-shadow,filter] duration-300',
                    index === currentWorkIndex
                      ? 'lg:shadow-2xl lg:shadow-accent/20'
                      : 'lg:grayscale-80',
                  )}
                >
                  <div className='relative overflow-hidden w-full aspect-3/2'>
                    <ProjectImageSlider
                      project={work}
                      sizes='(min-width: 1024px) 60vw, 100vw'
                      // Offset neighbouring cards so they don't all slide at once
                      startDelay={(index % 3) * 900}
                      className='transition-transform duration-500 group-hover:scale-105'
                    />
                    {/* Link overlays the image; slider controls sit above it (z-20) */}
                    <Link
                      href={`/works/${work.id}`}
                      aria-label={`Read the ${work.title} case study`}
                      className='absolute inset-0 z-10'
                    >
                      <span className='absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 backdrop-blur-sm px-3 py-1.5 text-xs font-medium opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-300'>
                        Read case study
                        <ArrowUpRight className='size-3.5' />
                      </span>
                    </Link>
                  </div>

                  {/* Project info (mobile / tablet, where the sticky panel is hidden) */}
                  <div className='lg:hidden p-4 sm:p-5 space-y-3'>
                    <div className='space-y-1'>
                      <p className='text-xs font-semibold uppercase tracking-wider text-accent'>
                        {work.category}
                      </p>
                      <h4>{work.title}</h4>
                      <p className='line-clamp-2'>{work.description}</p>
                    </div>
                    <div className='flex flex-wrap items-center gap-2'>
                      <Link
                        href={`/works/${work.id}`}
                        className='inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-foreground'
                      >
                        Read Case Study
                        <ArrowUpRight className='size-3.5' />
                      </Link>
                      {work.link && (
                        <Link
                          href={work.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-3.5 py-1.5 text-xs font-medium'
                        >
                          <ExternalLink className='size-3.5' />
                          Live Preview
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className='lg:hidden text-center pt-2'>
                <Link
                  href='/works'
                  className='inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors'
                >
                  View all works
                  <ArrowUpRight className='size-4' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
