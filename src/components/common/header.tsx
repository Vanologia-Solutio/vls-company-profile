'use client'

import logoDark from '@/assets/images/logo-dark.webp'
import logo from '@/assets/images/logo.webp'
import { EASE_OUT } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from '../theme-provider'
import { Separator } from '../ui/separator'

export default function Header() {
  const { isDark, toggleTheme, mounted } = useTheme()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsScrolled(latest > 36)
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
        'fixed top-0 w-full z-50 transition-all duration-250 font-bebasneue',
        isScrolled || isOpen
          ? 'bg-background/80 backdrop-blur-sm py-5 border-b border-border/60 rounded-b-md'
          : 'bg-transparent py-7',
      )}
    >
      <nav className='max-w-6xl mx-auto px-4 flex items-center justify-between'>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className='flex items-center gap-2'
        >
          <Link href='/' className='shrink-0'>
            <Image
              src={logo}
              alt='Logo'
              width={100}
              height={100}
              loading='eager'
              className='h-6 w-auto sm:h-8 dark:hidden'
            />
            <Image
              src={logoDark}
              alt='Logo'
              width={100}
              height={100}
              loading='eager'
              className='hidden h-6 w-auto sm:h-8 dark:block'
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex items-center gap-8'>
          {navItems.map(({ label, href }, i) => (
            <motion.span
              key={href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: EASE_OUT,
                delay: 0.1 + i * 0.06,
              }}
              className={cn(
                'text-xl tracking-wide hover:text-accent transition-colors relative group',
                isActive(href) ? 'text-accent' : 'text-foreground',
              )}
            >
              <Link
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-0.5 bg-accent group-hover:w-full transition-all duration-250',
                    isActive(href) ? 'w-full' : 'w-0',
                  )}
                />
              </Link>
            </motion.span>
          ))}
        </div>

        {/* Right side actions */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.3 }}
          className='flex items-center gap-4 md:gap-8'
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className='hidden md:flex p-1.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors'
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
        </motion.div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className='md:hidden'
        >
          <div className='max-w-6xl mx-auto px-4 pt-4 flex flex-col gap-2.5'>
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(href) ? 'page' : undefined}
                className={cn(
                  'transition-colors text-lg tracking-wide font-medium',
                  isActive(href) ? 'text-accent' : 'text-foreground',
                )}
              >
                {label}
              </Link>
            ))}
            <Separator />
            <div className='flex items-center justify-between'>
              <span className='text-lg tracking-wide font-medium text-foreground'>
                Switch Theme
              </span>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className='p-1.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors'
                aria-label='Toggle theme'
              >
                {mounted && isDark ? (
                  <Sun className='size-5 text-accent' />
                ) : (
                  <Moon className='size-5 text-accent' />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
