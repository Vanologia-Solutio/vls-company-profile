import contactImage from '@/assets/images/bg/wa.webp'
import { CONTACT_INFO, LINK_WHATSAPP } from '@/shared/data/contact'
import { motion, Variants } from 'framer-motion'
import { Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '../ui/craft-button'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function Details() {
  return (
    <section className='pt-16 sm:pt-24 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 pb-16 sm:pb-24'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {CONTACT_INFO.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className='group relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-card to-background border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-250'
              >
                <div className='absolute inset-0 rounded-2xl bg-linear-to-br from-accent/10 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-250' />
                <div className='relative z-10'>
                  <div className='inline-flex items-center justify-center size-10 sm:size-12 rounded-xl bg-linear-to-br from-accent/20 to-accent/5 border border-accent/20 mb-4 group-hover:scale-105 group-hover:rotate-6 transition-all duration-250'>
                    <Icon className='size-5 sm:size-6 text-accent' />
                  </div>
                  <h5 className='leading-relaxed group-hover:text-accent transition-all duration-250'>
                    {info.title}
                  </h5>
                  {info.title === 'Email' && (
                    <a
                      href={`mailto:${info.value}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {info.value}
                    </a>
                  )}
                  {info.title === 'Phone' && (
                    <a
                      href={`https://wa.me/${info.value.replace('+62 ', '62').replaceAll('-', '')}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {info.value}
                    </a>
                  )}
                  {info.title === 'Location' && (
                    <p className='text-primary'> {info.value}</p>
                  )}
                  <p>{info.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className='relative py-12 sm:py-16'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src={contactImage}
            alt='Ilustrasi Tim'
            fill
            className='object-cover grayscale-50 opacity-10'
          />
        </div>
        <div className='relative z-10 max-w-6xl mx-auto px-4 space-y-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <motion.h3 variants={itemVariants}>
              Chat With Us on <span className='text-green-600'>WhatsApp</span>
            </motion.h3>
            <motion.p variants={itemVariants}>
              The fastest way to connect with our experts and get your project
              started.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='text-center'
          >
            <CraftButton
              size='xl'
              className='bg-green-600 w-full sm:w-auto'
              asChild
            >
              <Link
                href={LINK_WHATSAPP}
                target='_blank'
                rel='noopener noreferrer'
              >
                <CraftButtonLabel>Contact via WhatsApp</CraftButtonLabel>
                <CraftButtonIcon>
                  <Send className='transition-transform duration-500 group-hover:rotate-45 text-foreground' />
                </CraftButtonIcon>
              </Link>
            </CraftButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <p className='max-w-2xl md:max-w-3xl mx-auto'>
              Our dedicated team is ready to assist you. Reach out via WhatsApp
              for a free consultation, technical inquiries, or to discuss how we
              can help scale your digital presence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
