'use client'

import logoBg from '@/assets/images/bg/logo.jpg'
import { TagBadge } from '@/components/ui/tag-badge'
import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

interface TransformState {
  rotateX: number
  rotateY: number
  scale: number
}

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const lastMousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current

    if (!container || !image) return

    let rect: DOMRect
    let centerX: number
    let centerY: number

    const updateTransform = (mouseX: number, mouseY: number) => {
      if (!rect) {
        rect = container.getBoundingClientRect()
        centerX = rect.left + rect.width / 2
        centerY = rect.top + rect.height / 2
      }

      const relativeX = mouseX - centerX
      const relativeY = mouseY - centerY

      const containerTransform: TransformState = {
        rotateX: -relativeY * 0.035,
        rotateY: relativeX * 0.035,
        scale: 1.025,
      }

      const imageTransform: TransformState = {
        rotateX: -relativeY * 0.025,
        rotateY: relativeX * 0.025,
        scale: 1.05,
      }

      return { containerTransform, imageTransform }
    }

    const animate = () => {
      const { containerTransform, imageTransform } = updateTransform(
        lastMousePosition.current.x,
        lastMousePosition.current.y,
      )

      container.style.transform = `perspective(1000px) rotateX(${containerTransform.rotateX}deg) rotateY(${containerTransform.rotateY}deg) scale3d(${containerTransform.scale}, ${containerTransform.scale}, ${containerTransform.scale})`
      container.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.25)'

      image.style.transform = `perspective(1000px) rotateX(${imageTransform.rotateX}deg) rotateY(${imageTransform.rotateY}deg) scale3d(${imageTransform.scale}, ${imageTransform.scale}, ${imageTransform.scale})`

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseEnter = () => {
      container.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease'
      image.style.transition = 'transform 0.2s ease'
      animate()
    }

    const handleMouseLeave = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      container.style.transform =
        'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      container.style.boxShadow =
        '0 12px 16px -4px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      container.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease'

      image.style.transform =
        'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      image.style.transition = 'transform 0.5s ease'
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className='py-16 sm:py-24'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='order-2 md:order-1 max-w-2xl md:max-w-3xl'
        >
          <TagBadge label='Our Story' icon='ScrollText' className='mb-4' />
          <motion.h3 variants={itemVariants} className='mb-2'>
            Fueled by Technology, Driven by Partnership.
          </motion.h3>
          <motion.p variants={itemVariants} className='mb-2.5'>
            We build more than just software, we forge lasting partnerships. At
            Vanologia Solutio, every line of code is crafted with purpose, every
            design decision is made with your goals in mind, and every solution
            is built to scale with your vision.
          </motion.p>
          <motion.p variants={itemVariants} className='mb-2.5'>
            Our journey has been marked by countless successful projects,
            meaningful client relationships, and a commitment to continuous
            innovation. We&apos;ve evolved from a small team of passionate
            developers and designers to a comprehensive digital transformation
            partner.
          </motion.p>
          <motion.p variants={itemVariants}>
            Today, we combine strategic thinking, technical expertise, and
            creative excellence to deliver solutions that drive real business
            results for our clients.
          </motion.p>
        </motion.div>

        <div className='order-1 md:order-2'>
          <motion.div
            ref={containerRef}
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            className='relative aspect-video rounded-xl overflow-hidden shadow-lg bg-muted'
          >
            <div ref={imageRef} className='w-full h-full relative'>
              <Image
                src={logoBg}
                alt='Vanologia Solutio'
                fill
                className='object-cover'
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
