'use client'

import logo from '@/assets/images/logo.webp'
import { cn } from '@/lib/utils'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '../theme-provider'

export default function Header() {
  const { isDark, toggleTheme, mounted } = useTheme()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsScrolled(latest > 48)
  })

  const navItems: { label: string; href: string }[] = [
    { label: 'Services', href: '/services' },
    { label: 'Works', href: '/works' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-250',
        isScrolled
          ? 'bg-background border-b border-border/60 py-5'
          : 'bg-transparent py-7',
      )}
    >
      <nav className='max-w-6xl mx-auto px-4 flex items-center justify-between'>
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
              loading='eager'
              className='h-6 w-auto sm:h-8'
            />
          </Link>
        </motion.div>

        <div className='hidden md:flex items-center gap-8'>
          {navItems.map(({ label, href }, i) => (
            <motion.span
              key={href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className='font-medium text-foreground hover:text-accent transition-colors relative group'
            >
              <Link href={href}>
                {label}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-250' />
              </Link>
            </motion.span>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className='p-1.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors'
          aria-label='Toggle theme'
        >
          {mounted && isDark ? (
            <Sun className='size-5' />
          ) : (
            <Moon className='size-5' />
          )}
        </motion.button>

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
