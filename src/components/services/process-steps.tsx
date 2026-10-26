import { TagBadge } from '@/components/ui/tag-badge'
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  stagger,
  VIEWPORT,
} from '@/lib/motion'
import { motion } from 'framer-motion'
import { Cpu, Pencil, Rocket, Target } from 'lucide-react'
import { Fragment } from 'react'

const processSteps = [
  {
    id: 1,
    icon: Target,
    title: 'Requirements Gathering',
    description:
      'We work closely with you to understand your vision, goals, and technical requirements in detail.',
  },
  {
    id: 2,
    icon: Pencil,
    title: 'Design & Planning',
    description:
      'Our team creates detailed designs, prototypes, and project roadmaps tailored to your needs.',
  },
  {
    id: 3,
    icon: Cpu,
    title: 'Development & Implementation',
    description:
      'Building robust, scalable solutions using cutting-edge technologies and best practices.',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Launch & Optimization',
    description:
      'Rigorous testing, deployment, and continuous optimization for peak performance.',
  },
]

export function ProcessSteps() {
  return (
    <section className='relative py-16 sm:py-24 bg-linear-to-b from-background via-accent/5 to-background'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          variants={stagger()}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='text-center mb-16 sm:mb-24'
        >
          <TagBadge label='How We Work' icon='Layers' className='mb-4' />
          <motion.h2 variants={fadeUp}>Our Proven Process</motion.h2>
          <motion.p variants={fadeUp}>
            A strategic approach that transforms your vision into reality
            through careful planning and execution.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className='relative'>
          {/* Vertical Timeline Line for Desktop */}
          <div className='hidden lg:block absolute left-1/2 top-16 bottom-0 w-0.5 bg-linear-to-b from-accent via-accent/50 to-accent/0 -translate-x-1/2' />

          {/* Vertical Timeline Line for Mobile */}
          <div className='lg:hidden absolute left-6 top-6 bottom-0 w-0.5 bg-linear-to-b from-accent via-accent/50 to-accent/0' />

          {/* Process Steps */}
          <div className='space-y-8 lg:space-y-24'>
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0

              const content = (
                <div className='space-y-1'>
                  <div className='text-sm md:text-base text-accent font-semibold uppercase'>
                    Step {idx + 1}
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              )

              const marker = (
                <motion.div
                  variants={scaleIn}
                  className='relative z-20 shrink-0'
                >
                  <div className='size-16 rounded-full bg-background border-4 border-accent flex items-center justify-center'>
                    <Icon className='size-8 text-accent' />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className='absolute inset-0 rounded-full border-4 border-accent/25'
                  />
                </motion.div>
              )

              // One trigger per step; children only declare where they come
              // from, so nothing re-triggers or stacks transforms.
              return (
                <motion.div
                  key={step.id}
                  variants={stagger(0.12)}
                  initial='hidden'
                  whileInView='visible'
                  viewport={VIEWPORT}
                  className='relative'
                >
                  {/* Desktop Alternating Layout */}
                  <div className='hidden lg:flex lg:items-center lg:gap-12'>
                    {isEven ? (
                      <Fragment>
                        <motion.div
                          variants={fadeLeft}
                          className='flex-1 text-right'
                        >
                          {content}
                        </motion.div>
                        {marker}
                        <div className='flex-1' />
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className='flex-1' />
                        {marker}
                        <motion.div variants={fadeRight} className='flex-1'>
                          {content}
                        </motion.div>
                      </Fragment>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className='lg:hidden flex gap-6 pl-6'>
                    <motion.div
                      variants={scaleIn}
                      className='relative z-10 shrink-0 -ml-6 pt-1'
                    >
                      <div className='size-12 rounded-full bg-accent flex items-center justify-center'>
                        <Icon className='size-6 text-background' />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeRight} className='pb-8 pt-1'>
                      {content}
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className='mt-16 flex justify-center' />
        </div>
      </div>
    </section>
  )
}
