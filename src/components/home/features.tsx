'use client'

import { features } from '@/shared/data/features'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Features() {
  return (
    <section className='py-20 bg-linear-to-b from-card/30 to-transparent relative'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
            Why Choose Vanologia Solutio?
          </h2>
          <p className='text-lg text-foreground/60 max-w-2xl mx-auto'>
            Proven expertise, reliable results, and genuine partnership in every
            project.
          </p>
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
              className={`p-6 rounded-xl border transition-all duration-300 ${
                feature.highlight
                  ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/10'
                  : 'border-border/50 bg-card/50'
              }`}
            >
              <div className='flex gap-4'>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className={`shrink-0 size-6 rounded-full flex items-center justify-center ${
                    feature.highlight
                      ? 'bg-primary text-white'
                      : 'bg-accent/20 text-accent'
                  }`}
                >
                  <Check size={16} />
                </motion.div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-foreground/70 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mt-20 p-8 rounded-2xl border border-border/50 bg-linear-to-br from-primary/5 to-accent/5'
        >
          <h3 className='text-2xl font-bold text-foreground mb-8 text-center'>
            Our Process
          </h3>
          <div className='grid md:grid-cols-4 gap-6'>
            {['Discovery', 'Strategy', 'Execution', 'Launch'].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className='text-center'
              >
                <div className='flex justify-center mb-4'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className='size-12 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg'
                  >
                    {i + 1}
                  </motion.div>
                </div>
                <h4 className='font-semibold text-foreground'>{step}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
