'use client'

import { motion, Variants } from 'framer-motion'
import { BarChart3, Code, Palette, Rocket, Shield, Zap } from 'lucide-react'
import { ParallaxSection } from '../parallax-section'
import { TagBadge } from '../ui/tag-badge'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Modern, responsive websites and applications built with cutting-edge technologies.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive designs that engage users and drive conversions.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Lightning-fast solutions that keep your users engaged and satisfied.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description:
      'Data-driven strategies that turn insights into actionable business outcomes.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description:
      'Enterprise-grade security measures to protect your digital assets.',
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description:
      'End-to-end solutions for modernizing your business operations.',
  },
]

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Services() {
  return (
    <ParallaxSection
      id='services'
      className='relative py-16 sm:py-24 overflow-hidden'
    >
      <div className='relative z-10 max-w-6xl mx-auto px-4'>
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-8 sm:mb-12'
        >
          <TagBadge label='What We Offer' icon='HandHelping' className='mb-4' />
          <motion.h2 variants={itemVariants}>Our Services</motion.h2>
          <motion.p variants={itemVariants}>
            Comprehensive digital solutions tailored to meet your unique
            business needs and drive growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className='group relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-card to-background border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-250'
              >
                <div className='absolute inset-0 rounded-2xl bg-linear-to-br from-accent/10 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-250' />
                <div className='relative z-10'>
                  <div className='inline-flex items-center justify-center size-10 sm:size-12 rounded-xl bg-linear-to-br from-accent/20 to-accent/5 border border-accent/20 mb-4 group-hover:scale-105 group-hover:rotate-6 transition-all duration-250'>
                    <Icon className='size-5 sm:size-6 text-accent' />
                  </div>
                  <h5 className='leading-relaxed group-hover:text-accent transition-all duration-250'>
                    {service.title}
                  </h5>
                  <p className='line-clamp-2'>{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
