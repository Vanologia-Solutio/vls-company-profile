'use client'

import logo from '@/assets/images/logo.webp'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navItems: { label: string; href: string }[] = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className='fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border'>
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-2'
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
        </motion.div>

        <div className='hidden md:flex items-center gap-8'>
          {navItems.map(({ label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='text-foreground/80 hover:text-primary transition-colors text-sm font-medium'
            >
              {label}
            </motion.a>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          href='/contact'
          className='hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-medium'
        >
          Get Started
        </motion.a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-foreground'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='md:hidden bg-card border-b border-border'
        >
          <div className='max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4'>
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className='text-foreground/80 hover:text-foreground transition-colors text-sm font-medium'
              >
                {label}
              </Link>
            ))}
            <Link
              href='/contact'
              onClick={() => setIsOpen(false)}
              className='w-full px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-medium mt-2 text-center'
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
