import { cn } from '@/lib/utils'
import { features } from '@/shared/data/features'
import { fadeLeft, fadeRight, fadeUp, stagger, VIEWPORT } from '@/lib/motion'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { ParallaxSection } from '../parallax-section'

export function Features() {
  return (
    <ParallaxSection
      id='features'
      className='relative py-16 sm:py-24 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto px-4'>
        {/* Header */}
        <motion.div
          variants={stagger()}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='text-center mb-8 sm:mb-12'
        >
          <motion.h2 variants={fadeUp}>Why Choose Vanologia Solutio?</motion.h2>
          <motion.p variants={fadeUp}>
            Proven expertise, reliable results, and genuine partnership in every
            project.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={stagger(0.08)}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='grid md:grid-cols-2 gap-8'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
              className={cn(
                'p-6 rounded-xl border',
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
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
