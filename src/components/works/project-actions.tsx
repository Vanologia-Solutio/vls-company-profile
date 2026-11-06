import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '@/components/ui/craft-button'
import { cn } from '@/lib/utils'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface ProjectActionsProps {
  id: string
  link?: string
  size?: 'lg' | 'xl'
  className?: string
}

// "Read Case Study" + optional "Live Preview" button pair
export function ProjectActions({
  id,
  link,
  size = 'lg',
  className,
}: ProjectActionsProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <CraftButton size={size} asChild>
        <Link href={`/works/${id}`}>
          <CraftButtonLabel>Read Case Study</CraftButtonLabel>
          <CraftButtonIcon>
            <ArrowUpRight className='transition-transform duration-500 group-hover:rotate-45' />
          </CraftButtonIcon>
        </Link>
      </CraftButton>
      {link && <LivePreviewButton link={link} size={size} />}
    </div>
  )
}

export function LivePreviewButton({
  link,
  size = 'lg',
  className,
}: {
  link: string
  size?: 'lg' | 'xl'
  className?: string
}) {
  return (
    <CraftButton
      size={size}
      className={cn(
        'bg-background text-foreground border border-accent/30',
        className,
      )}
      asChild
    >
      <Link href={link} target='_blank' rel='noopener noreferrer'>
        <CraftButtonLabel>Live Preview</CraftButtonLabel>
        <CraftButtonIcon>
          <ExternalLink className='size-3.5' />
        </CraftButtonIcon>
      </Link>
    </CraftButton>
  )
}
