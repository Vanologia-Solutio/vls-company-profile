import { Variants, motion } from 'framer-motion'
import { Heart, Lightbulb, Target, Users } from 'lucide-react'
import { ParallaxSection } from '../parallax-section'

const VALUES = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace cutting-edge technologies and creative thinking to solve complex problems.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'Honesty and transparency guide every decision we make with our clients.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We consistently deliver quality solutions that exceed expectations.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Success comes from working together as a unified team toward shared goals.',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const CoreValues = () => {
  return (
    <ParallaxSection
      id='core-values'
      className='py-16 sm:py-24 overflow-hidden bg-linear-to-b bg-background via-accent/25 to-accent/50'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-8 sm:mb-12'
        >
          <motion.h2 variants={itemVariants}>Our Core Values</motion.h2>
          <motion.p variants={itemVariants}>
            These principles guide everything we do and define who we are as a
            company.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {VALUES.map(value => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className='group relative p-4 sm:p-6 rounded-2xl bg-linear-to-br from-card to-background border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-250'
              >
                <div className='absolute inset-0 rounded-2xl bg-linear-to-br from-accent/10 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-250' />
                <div className='relative z-10'>
                  <div className='inline-flex items-center justify-center size-8 sm:size-10 rounded-xl bg-linear-to-br from-accent/20 to-accent/5 border border-accent/20 mb-2.5 group-hover:scale-105 group-hover:rotate-6 transition-all duration-250'>
                    <Icon className='size-4 text-accent' />
                  </div>
                  <h5 className='leading-relaxed group-hover:text-accent transition-all duration-250'>
                    {value.title}
                  </h5>
                  <p className='line-clamp-3'>{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
