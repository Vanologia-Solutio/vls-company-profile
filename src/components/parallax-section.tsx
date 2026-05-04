'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
  id?: string
  className?: string
}

export function ParallaxSection({
  children,
  offset = 50,
  id,
  className = '',
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <div ref={ref} id={id} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
