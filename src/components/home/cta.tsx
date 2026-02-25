'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Background Elements */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className='absolute inset-0 bg-linear-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-3xl'
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative z-10 text-center p-8 sm:p-12 md:p-16'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6'
          >
            <Zap size={16} className='text-primary' />
            <span className='text-sm text-foreground/80'>Ready to Start?</span>
          </motion.div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight'>
            Let&apos;s Build Something{' '}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary'>
              Amazing Together
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed'>
            Whether you&apos;re a startup looking to establish your digital
            presence or an established business ready for transformation,
            we&apos;re here to help you succeed.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <button className='px-8 py-3 bg-linear-to-r from-primary to-accent text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium flex items-center gap-2 group'>
              Schedule a Consultation
              <ArrowRight
                size={20}
                className='group-hover:translate-x-1 transition-transform'
              />
            </button>
            <button className='px-8 py-3 border border-primary/30 text-foreground rounded-full hover:bg-primary/5 transition-colors font-medium'>
              View Portfolio
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
