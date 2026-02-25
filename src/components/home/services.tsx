'use client'

import { services } from '@/shared/data/services'
import { motion } from 'framer-motion'

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id='services' className='py-20 relative overflow-hidden'>
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
            Our Services
          </h2>
          <p className='text-lg text-foreground/60 max-w-2xl mx-auto'>
            Comprehensive solutions tailored to elevate your digital presence
            and achieve your business goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid md:grid-cols-3 gap-8'
        >
          {services.map(service => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className='group relative'
              >
                <div className='relative p-8 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-all duration-300 bg-card/50 backdrop-blur'>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    className={`size-14 rounded-xl bg-linear-to-br ${service.color} p-3 mb-6 text-white`}
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Content */}
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-foreground/70 mb-6 line-clamp-3'>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className='space-y-2'>
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className='text-foreground/60 text-sm flex items-center gap-2'
                      >
                        <span
                          className={`size-1.5 rounded-full bg-linear-to-r ${service.color}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
