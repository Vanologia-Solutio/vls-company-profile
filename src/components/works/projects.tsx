'use client'

import { Badge } from '@/components/ui/badge'
import { TagBadge } from '@/components/ui/tag-badge'
import { EASE_OUT, fadeUp, stagger, VIEWPORT } from '@/lib/motion'
import { cn } from '@/lib/utils'
import {
  getHostname,
  PROJECT_TYPES,
  PROJECTS,
  type Project,
  type ProjectType,
} from '@/shared/data/works'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ProjectImageSlider } from './project-image-slider'

const MAX_TAGS = 3

type Filter = 'All' | ProjectType

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const filters: { label: Filter; count: number }[] = [
    { label: 'All', count: PROJECTS.length },
    ...PROJECT_TYPES.map(type => ({
      label: type,
      count: PROJECTS.filter(project => project.type === type).length,
    })),
  ]

  const visible =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter(project => project.type === filter)

  return (
    <section className='py-16 sm:py-24 max-w-6xl mx-auto px-4'>
      <motion.div
        variants={stagger()}
        initial='hidden'
        whileInView='visible'
        viewport={VIEWPORT}
        className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12'
      >
        <div className='space-y-4'>
          <TagBadge label='Case Studies' icon='FileText' />
          <motion.h2 variants={fadeUp}>Selected Projects</motion.h2>
          <motion.p variants={fadeUp} className='max-w-xl'>
            Each project starts with a real business problem. Open a case study
            to see the background, our solution, and the results.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          role='tablist'
          aria-label='Filter projects'
          className='flex flex-wrap gap-2'
        >
          {filters.map(({ label, count }) => {
            const active = filter === label
            return (
              <button
                key={label}
                role='tab'
                aria-selected={active}
                onClick={() => setFilter(label)}
                className={cn(
                  'relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer',
                  active
                    ? 'border-accent text-accent-foreground'
                    : 'border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-accent/40',
                )}
              >
                {active && (
                  <motion.span
                    layoutId='works-filter'
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className='absolute inset-0 rounded-full bg-accent'
                  />
                )}
                <span className='relative'>{label}</span>
                <span
                  className={cn(
                    'relative text-xs tabular-nums',
                    active ? 'opacity-80' : 'opacity-60',
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.div layout className='grid sm:grid-cols-2 gap-6 md:gap-8'>
        <AnimatePresence mode='popLayout' initial={false}>
          {visible.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={VIEWPORT}
      className='group relative h-full flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 transition-[border-color,box-shadow] duration-300'
    >
      <div className='relative aspect-video overflow-hidden'>
        <ProjectImageSlider
          project={project}
          sizes='(min-width: 640px) 50vw, 100vw'
          // Offset neighbouring cards so they don't all slide at once
          startDelay={(index % 4) * 900}
          className='group-hover:scale-[1.025] transition-transform duration-500'
        />
        <span className='absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium'>
          {project.type}
        </span>
      </div>

      <div className='flex flex-1 flex-col gap-4 p-5 sm:p-6'>
        <div className='space-y-1.5'>
          <p className='text-xs font-semibold uppercase tracking-wider text-accent'>
            {project.category}
          </p>
          <h4>
            {/* Stretched link: the whole card opens the case study */}
            <Link
              href={`/works/${project.id}`}
              className='after:absolute after:inset-0 after:z-10 focus-visible:outline-none'
            >
              {project.title}
            </Link>
          </h4>
          <p className='text-sm line-clamp-2'>{project.description}</p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {project.tags.slice(0, MAX_TAGS).map(tag => (
            <Badge key={tag} variant='outline'>
              {tag}
            </Badge>
          ))}
          {project.tags.length > MAX_TAGS && (
            <Badge variant='outline'>+{project.tags.length - MAX_TAGS}</Badge>
          )}
        </div>

        <div className='mt-auto flex items-center justify-between gap-4 pt-4 border-t border-border'>
          <span className='inline-flex items-center gap-1.5 text-sm font-medium group-hover:text-accent transition-colors'>
            Read case study
            <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:rotate-45' />
          </span>
          {project.link && (
            <Link
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Open live preview of ${project.title} (${getHostname(project.link)})`}
              className='relative z-20 inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-3 py-1.5 text-xs font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors'
            >
              <ExternalLink className='size-3.5' />
              Live Preview
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
