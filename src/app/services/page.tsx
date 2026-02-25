'use client'

import { detailedServices, processSteps } from '@/shared/data/services'
import { motion } from 'framer-motion'
import { BarChart3, Users, Zap } from 'lucide-react'

export default function ServicesPage() {
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
      transition: { duration: 0.8 },
    },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background to-secondary'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-7xl mx-auto text-center'
        >
          <h1 className='text-5xl sm:text-6xl font-bold text-foreground mb-6'>
            Our <span className='text-primary'>Services</span>
          </h1>
          <p className='text-xl text-foreground/70 leading-relaxed'>
            Comprehensive digital solutions designed to transform your business
            and drive growth
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-3 gap-8'
          >
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group'
                >
                  <div className='size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors'>
                    <IconComponent className='size-6 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold text-foreground mb-4'>
                    {service.title}
                  </h3>
                  <p className='text-foreground/70 mb-6'>
                    {service.description}
                  </p>
                  <ul className='space-y-3'>
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-3 text-sm text-foreground/80'
                      >
                        <div className='size-2 bg-primary rounded-full' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-secondary'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
              Our Process
            </h2>
            <p className='text-lg text-foreground/70'>
              A structured approach to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-4 gap-8'
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='relative'
              >
                <div className='bg-background rounded-xl p-8 border border-border h-full'>
                  <div className='text-4xl font-bold text-primary mb-4'>
                    {step.number}
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-foreground/70'>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
              Why Choose Us
            </h2>
            <p className='text-lg text-foreground/70'>
              Excellence in every project we undertake
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-3 gap-8'
          >
            {[
              {
                icon: Zap,
                title: 'Fast Turnaround',
                description:
                  'We deliver quality results without compromising on speed',
              },
              {
                icon: BarChart3,
                title: 'Data-Driven',
                description:
                  'Every strategy is backed by analytics and market research',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description:
                  'Your success is our priority with dedicated account management',
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='text-center p-8 rounded-xl bg-linear-to-br from-primary/5 to-accent/5'
                >
                  <div className='size-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <IconComponent className='size-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-foreground/70'>{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
