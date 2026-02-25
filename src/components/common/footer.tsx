'use client'

import logo from '@/assets/images/logo.webp'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      {
        title: 'Website Development',
        href: '/services',
      },
      {
        title: 'Graphic Design',
        href: '/services',
      },
      {
        title: 'Marketing Strategy',
        href: '/services',
      },
    ],
    Company: [
      {
        title: 'About Us',
        href: '/about',
      },
      {
        title: 'Our Team',
        href: '/about',
      },
      {
        title: 'Portfolio',
        href: '/work',
      },
    ],
  }

  return (
    <footer className='bg-card/50 border-t border-border relative'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12'>
        {/* Main Footer Content */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-12'>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col gap-2'
          >
            <Link href='/' className='shrink-0'>
              <Image
                src={logo}
                alt='Logo'
                width={100}
                height={100}
                className='h-6 w-auto sm:h-8'
              />
            </Link>
            <p className='text-foreground/60 text-sm leading-relaxed'>
              Transforming ideas into digital reality through innovative design
              and strategic development.
            </p>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
              >
                <h3 className='font-semibold text-foreground mb-4'>
                  {category}
                </h3>
                <ul className='space-y-2'>
                  {links.map(link => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className='text-foreground/60 hover:text-primary transition-colors text-sm'
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='grid md:grid-cols-3 gap-8 pb-12 border-b border-border/30'
        >
          <div className='flex items-start gap-3'>
            <Mail size={20} className='text-primary mt-1 shrink-0' />
            <div>
              <p className='text-foreground/60 text-sm'>Email</p>
              <a
                href='mailto:vanologiasolutio@outlook.com'
                className='text-foreground hover:text-primary transition-colors'
              >
                vanologiasolutio@outlook.com
              </a>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <Phone size={20} className='text-accent mt-1 shrink-0' />
            <div>
              <p className='text-foreground/60 text-sm'>Phone / WhatsApp</p>
              <a
                href='https://wa.me/6289523077397'
                target='_blank'
                className='text-foreground hover:text-primary transition-colors'
                rel='noopener noreferrer'
              >
                +62 895-2307-7397
              </a>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <MapPin size={20} className='text-primary mt-1 shrink-0' />
            <div>
              <p className='text-foreground/60 text-sm'>Location</p>
              <p className='text-foreground'>Tangerang, Banten, Indonesia</p>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='flex flex-col md:flex-row justify-center items-center py-8'
        >
          <p className='text-foreground/50 text-sm text-center'>
            &copy; {currentYear} Vanologia Solutio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
