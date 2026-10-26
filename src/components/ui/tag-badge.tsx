import { fadeUp } from '@/lib/motion'
import { cn, DynamicIcon } from '@/lib/utils'
import { motion } from 'framer-motion'

export function TagBadge({
  label,
  icon,
  className,
}: {
  label: string
  icon: string
  className?: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'inline-flex items-center gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-accent/10 border border-accent/30',
        className,
      )}
    >
      <DynamicIcon name={icon} className='text-accent size-2.5 sm:size-4' />
      <span className='text-xs sm:text-sm font-medium text-foreground'>
        {label}
      </span>
    </motion.div>
  )
}
