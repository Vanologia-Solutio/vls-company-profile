'use client'

import { LINK_WHATSAPP } from '@/shared/data/contact'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 240)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappMessages = [
    {
      text: "I'm interested in starting a project",
      url: `${LINK_WHATSAPP}?text=${encodeURIComponent("Hi Vanologia Solutio! I'm interested in starting a project with you.")}`,
    },
    {
      text: 'Tell me more about your services',
      url: `${LINK_WHATSAPP}?text=${encodeURIComponent("Hello, I'd like to learn more about your digital services.")}`,
    },
    {
      text: 'I want to request a consultation',
      url: `${LINK_WHATSAPP}?text=${encodeURIComponent("I'd like to request a consultation for my business.")}`,
    },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className='fixed bottom-8 right-8 z-50'
        >
          {/* Quick Message Menu */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className='absolute bottom-20 right-0 bg-background border border-border rounded-md shadow-lg shadow-green-600/10 min-w-max overflow-hidden'
              >
                {whatsappMessages.map((msg, idx) => (
                  <a
                    key={idx}
                    href={msg.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block px-4 py-3 text-foreground text-sm whitespace-nowrap hover:bg-green-600 hover:text-primary transition-colors'
                    onClick={() => setShowMenu(false)}
                  >
                    {msg.text}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex flex-col items-center'
          >
            <motion.button
              onClick={() => setShowMenu(!showMenu)}
              className='relative w-14 h-14 bg-linear-to-br from-green-600 to-green-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300'
              whileHover={{
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              <AnimatePresence mode='wait'>
                {showMenu ? (
                  <motion.div
                    key='close'
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key='message'
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle size={24} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pulse Animation */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className='absolute inset-0 bg-green-600 rounded-full opacity-25'
              />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
