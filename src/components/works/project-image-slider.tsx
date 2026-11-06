'use client'

import { cn } from '@/lib/utils'
import { getProjectImages, type Project } from '@/shared/data/works'
import useEmblaCarousel from 'embla-carousel-react'
import { useInView, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ProjectImage } from './project-image'

interface ProjectImageSliderProps {
  project: Pick<Project, 'title' | 'category' | 'image' | 'images'>
  sizes: string
  // Pause autoplay, e.g. while the parent card is hovered or focused
  paused?: boolean
  // Time each slide stays on screen
  interval?: number
  // Extra wait before the first slide change, to desync cards in a grid
  startDelay?: number
  // Applied to the carousel viewport (use for hover zoom)
  className?: string
}

// Auto-sliding gallery of a project's screenshots. Falls back to the single
// cover image (or branded placeholder) when there's only one image.
// Must be placed inside a `relative` container with a size/aspect ratio.
export function ProjectImageSlider({
  project,
  sizes,
  paused = false,
  interval = 4000,
  startDelay = 0,
  className,
}: ProjectImageSliderProps) {
  const images = getProjectImages(project)
  const hasMany = images.length > 1

  const rootRef = useRef<HTMLDivElement>(null)
  const inView = useInView(rootRef, { margin: '0px 0px -10% 0px' })
  const reduceMotion = useReducedMotion()

  // Dragging is off: the card is a stretched link, so swipes would fight
  // with clicks. Navigation is via autoplay, arrows and dots.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: false,
    duration: 32,
    active: hasMany,
  })
  const [selected, setSelected] = useState(0)
  // Bumped on manual navigation so autoplay restarts its countdown
  const [resetKey, setResetKey] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect).on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect).off('reInit', onSelect)
    }
  }, [emblaApi])

  const playing = hasMany && inView && !paused && !reduceMotion
  // `startDelay` only applies to the very first cycle; after a manual
  // click the countdown restarts from a plain `interval`
  const startedRef = useRef(false)

  useEffect(() => {
    if (!emblaApi || !playing) return
    const firstWait = startedRef.current ? interval : interval + startDelay
    startedRef.current = true
    let intervalId: ReturnType<typeof setInterval> | undefined
    const timeoutId = setTimeout(() => {
      emblaApi.scrollNext()
      intervalId = setInterval(() => emblaApi.scrollNext(), interval)
    }, firstWait)
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [emblaApi, playing, interval, startDelay, resetKey])

  const go = useCallback(
    (action: 'prev' | 'next' | number) => {
      if (!emblaApi) return
      if (action === 'prev') emblaApi.scrollPrev()
      else if (action === 'next') emblaApi.scrollNext()
      else emblaApi.scrollTo(action)
      setResetKey(key => key + 1)
    },
    [emblaApi],
  )

  if (!hasMany) {
    return (
      <ProjectImage project={project} sizes={sizes} className={className} />
    )
  }

  return (
    <div
      ref={rootRef}
      role='region'
      aria-roledescription='carousel'
      aria-label={`${project.title} screenshots`}
      className='absolute inset-0'
    >
      {/* Wrapper takes `className` so hover transforms don't clash with
          Embla's own transform on the track */}
      <div ref={emblaRef} className={cn('h-full overflow-hidden', className)}>
        <div className='flex h-full'>
          {images.map((src, index) => (
            <div
              key={src}
              role='group'
              aria-roledescription='slide'
              aria-label={`${index + 1} of ${images.length}`}
              className='relative h-full min-w-0 shrink-0 grow-0 basis-full'
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                sizes={sizes}
                className='object-cover object-top'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade keeps the dots readable on light screenshots */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background/60 to-transparent'
      />

      {/* Controls sit above the card's stretched link (z-10) */}
      <SlideButton
        direction='prev'
        label={`Previous ${project.title} screenshot`}
        onClick={() => go('prev')}
      />
      <SlideButton
        direction='next'
        label={`Next ${project.title} screenshot`}
        onClick={() => go('next')}
      />

      <div className='absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-background/70 px-2 py-1.5 backdrop-blur-sm'>
        {images.map((src, index) => {
          const active = index === selected
          return (
            <button
              key={src}
              type='button'
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={active}
              onClick={() => go(index)}
              className={cn(
                'relative h-1.5 cursor-pointer overflow-hidden rounded-full transition-[width,background-color] duration-300',
                active
                  ? 'w-5 bg-foreground/25'
                  : 'w-1.5 bg-foreground/35 hover:bg-foreground/60',
              )}
            >
              {active && (
                <span
                  // Re-mount restarts the fill whenever the timer restarts
                  key={`${selected}-${resetKey}-${playing}`}
                  className='absolute inset-y-0 left-0 rounded-full bg-accent'
                  style={
                    playing
                      ? {
                          animation: `slider-progress ${interval}ms linear forwards`,
                        }
                      : { width: '100%' }
                  }
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SlideButton({
  direction,
  label,
  onClick,
}: {
  direction: 'prev' | 'next'
  label: string
  onClick: () => void
}) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
  return (
    <button
      type='button'
      aria-label={label}
      onClick={onClick}
      className={cn(
        'absolute top-1/2 z-20 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-[opacity,background-color,color] duration-300 hover:bg-accent hover:text-accent-foreground',
        // Always visible on touch screens, revealed on hover/focus otherwise
        'opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 focus-visible:opacity-100',
        direction === 'prev' ? 'left-3' : 'right-3',
      )}
    >
      <Icon className='size-4' />
    </button>
  )
}
