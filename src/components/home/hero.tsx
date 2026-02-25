'use client'

import { stats } from '@/shared/data/about'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Grid background effect */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.05) 25%, rgba(124, 58, 237, 0.05) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.05) 75%, rgba(124, 58, 237, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.05) 25%, rgba(124, 58, 237, 0.05) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.05) 75%, rgba(124, 58, 237, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className='absolute top-20 right-10 size-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50'
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className='absolute bottom-20 left-10 size-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50'
      />

      <div className='max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex justify-center mb-8'
        >
          <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30'>
            <Sparkles size={16} className='text-primary' />
            <span className='text-sm text-foreground/80'>
              Digital Innovation Starts Here
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6'>
            <h1>Transform Your Digital</h1>
            <TypeAnimation
              sequence={['Vision', 2000, 'Presence', 2000, 'Future', 2000]}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary after:content-['|'] after:ml-1 after:animate-blink after:text-primary/80"
              wrapper='span'
              speed={50}
            />
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl md:max-w-3xl'
        >
          End-to-end website development, stunning graphic design, and strategic
          marketing solutions. We build digital experiences that drive real
          business results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'
        >
          <Link
            href='/contact'
            className='px-8 py-3 bg-linear-to-r from-primary to-accent text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium flex items-center gap-2 group'
          >
            Start Your Project
            <ArrowRight
              size={20}
              className='group-hover:translate-x-1 transition-transform'
            />
          </Link>
          <Link
            href='/work'
            className='px-8 py-3 border border-primary/30 text-foreground rounded-full hover:bg-primary/5 transition-colors font-medium'
          >
            Explore Our Works
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 grid grid-cols-3 gap-8'
        >
          {stats.heroStats.map((stat, i) => (
            <div key={i} className='text-center'>
              <div className='text-3xl sm:text-4xl font-bold text-primary mb-2'>
                {stat.value}
              </div>
              <div className='text-foreground/60 text-sm'>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
