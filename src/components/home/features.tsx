'use client'

import { cn } from '@/lib/utils'
import { features } from '@/shared/data/features'
import { motion, Variants } from 'framer-motion'
import { Check } from 'lucide-react'
import { ParallaxSection } from '../parallax-section'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Features() {
  return (
    <ParallaxSection
      id='features'
      className='relative py-16 sm:py-24 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-4'>
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-8 sm:mb-12'
        >
          <motion.h2 variants={itemVariants}>
            Why Choose Vanologia Solutio?
          </motion.h2>
          <motion.p variants={itemVariants}>
            Proven expertise, reliable results, and genuine partnership in every
            project.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                'p-6 rounded-xl border transition-all duration-250',
                feature.highlight
                  ? 'border-accent/50 bg-accent/5 shadow-lg shadow-primary/10'
                  : 'border-border bg-card/50',
              )}
            >
              <div className='flex gap-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className={cn(
                    'shrink-0 size-6 rounded-full flex items-center justify-center',
                    feature.highlight
                      ? 'bg-accent text-white'
                      : 'bg-accent/20 text-accent',
                  )}
                >
                  <Check size={16} />
                </motion.div>
                <div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
