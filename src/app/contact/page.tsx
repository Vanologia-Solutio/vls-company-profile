'use client'

import { contactInfo, faqs } from '@/shared/data/contact'
import { motion } from 'framer-motion'

export default function ContactPage() {
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
      <section className='pt-32 pb-20 bg-linear-to-br from-background to-secondary'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
        >
          <h1 className='text-5xl sm:text-6xl font-bold text-foreground mb-6'>
            Get in <span className='text-primary'>Touch</span>
          </h1>
          <p className='text-xl text-foreground/70 leading-relaxed'>
            Have a project in mind? We&apos;d love to hear from you. Let&apos;s
            talk about how we can help.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-3 gap-8'
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow'
                >
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <IconComponent className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-2'>
                    {info.title}
                  </h3>
                  {info.title === 'Email' && (
                    <a
                      href={`mailto:${info.value}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-lg font-semibold text-primary hover:text-primary/80 hover:underline transition-colors'
                    >
                      {info.value}
                    </a>
                  )}
                  {info.title === 'Phone' && (
                    <a
                      href={`https://wa.me/${info.value.replace('+62 ', '62').replaceAll('-', '')}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-lg font-semibold text-primary hover:text-primary/80 hover:underline transition-colors'
                    >
                      {info.value}
                    </a>
                  )}
                  {info.title === 'Location' && (
                    <p className='text-lg font-semibold text-primary'>
                      {info.value}
                    </p>
                  )}
                  <p className='text-foreground/70 text-sm'>
                    {info.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-linear-to-br from-background to-secondary'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
              Common Questions
            </h2>
            <p className='text-lg text-foreground/70'>
              Answers to questions we often receive
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='space-y-6'
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='bg-card rounded-xl p-6 border border-border'
              >
                <h3 className='text-lg font-bold text-foreground mb-3'>
                  {faq.q}
                </h3>
                <p className='text-foreground/70'>{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
