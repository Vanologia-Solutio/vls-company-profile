import { cn, DynamicIcon } from '@/lib/utils'
import { motion, Variants } from 'framer-motion'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

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
      variants={itemVariants}
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
