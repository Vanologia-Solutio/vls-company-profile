import { Badge } from '@/components/ui/badge'
import { PROJECTS } from '@/shared/data/works'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const MAX_TAGS = 5

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function Projects() {
  return (
    <section className='py-16 sm:py-24 max-w-6xl mx-auto px-4'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8'
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            variants={itemVariants}
            viewport={{ once: true }}
            key={index}
            className='group relative aspect-3/2 overflow-hidden rounded-md shadow-sm outline outline-transparent hover:outline-accent hover:shadow-lg transition-all duration-250'
          >
            <div className='z-20 absolute size-full inset-0 bg-linear-to-t from-card via-card/50 to-transparent flex flex-col items-start justify-end gap-1.5 p-4'>
              <div>
                <p className='text-xs font-medium uppercase text-primary'>
                  {project.category}
                </p>
                <h4>{project.title}</h4>
              </div>
              <div className='flex flex-wrap gap-2'>
                {project.tags.slice(0, MAX_TAGS).map((tag, i) => (
                  <Badge key={i}>{tag}</Badge>
                ))}
                {project.tags.length > MAX_TAGS && (
                  <Badge>+{project.tags.length - MAX_TAGS}</Badge>
                )}
              </div>
            </div>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-cover group-hover:scale-105 transition-all duration-250'
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
