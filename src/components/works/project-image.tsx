import { cn } from '@/lib/utils'
import type { Project } from '@/shared/data/works'
import Image from 'next/image'

interface ProjectImageProps {
  project: Pick<Project, 'title' | 'category' | 'image'>
  sizes: string
  priority?: boolean
  // Hide the text in the placeholder for small thumbnails
  compact?: boolean
  className?: string
}

// Renders the project thumbnail, or a branded placeholder until one exists.
// Must be placed inside a `relative` container with a size/aspect ratio.
export function ProjectImage({
  project,
  sizes,
  priority,
  compact,
  className,
}: ProjectImageProps) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} preview`}
        fill
        sizes={sizes}
        priority={priority}
        className={cn('object-cover', className)}
      />
    )
  }

  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()

  return (
    <div
      role='img'
      aria-label={`${project.title} preview`}
      className={cn(
        'absolute inset-0 overflow-hidden bg-linear-to-br from-accent/25 via-card to-accent/5',
        className,
      )}
    >
      <div
        aria-hidden
        className='absolute inset-0 opacity-60'
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <span
        aria-hidden
        className='absolute -right-[0.05em] -bottom-[0.2em] font-bebasneue leading-none text-[10rem] sm:text-[14rem] text-transparent opacity-30 [-webkit-text-stroke:2px_var(--color-accent)]'
      >
        {initials}
      </span>
      {!compact && (
        <div className='absolute inset-0 flex flex-col justify-end p-5 sm:p-8'>
          <span className='text-xs font-semibold uppercase tracking-wider text-accent'>
            {project.category}
          </span>
          <span className='font-bebasneue text-3xl sm:text-5xl leading-none tracking-wide text-foreground'>
            {project.title}
          </span>
        </div>
      )}
    </div>
  )
}
