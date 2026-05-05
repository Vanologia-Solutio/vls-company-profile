import { TagBadge } from '@/components/ui/tag-badge'
import { motion, Variants } from 'framer-motion'

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

export function Hero() {
  return (
    <section className='pt-32 pb-20 bg-linear-to-br from-accent/20 via-accent/10 to-secondary'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='max-w-6xl mx-auto px-4'
      >
        <TagBadge label="Let's Connect" icon='Link' className='mb-4' />
        <motion.h1 variants={itemVariants}>Get In Touch With Us</motion.h1>
        <motion.p variants={itemVariants} className='max-w-2xl md:max-w-3xl'>
          Have a project in mind? We&apos;d love to discuss how we can help
          transform your vision into reality. Reach out to us today.
        </motion.p>
      </motion.div>
    </section>
  )
}
