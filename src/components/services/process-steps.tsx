import { TagBadge } from '@/components/ui/tag-badge'
import { motion, Variants } from 'framer-motion'
import { Cpu, Pencil, Rocket, Target } from 'lucide-react'
import { Fragment } from 'react'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16 sm:mb-24'
        >
          <TagBadge label='How We Work' icon='Layers' className='mb-4' />
          <motion.h2 variants={itemVariants}>Our Proven Process</motion.h2>
          <motion.p variants={itemVariants}>
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

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className='relative'
                >
                  {/* Desktop Alternating Layout */}
                  <div className='hidden lg:flex lg:items-center lg:gap-12'>
                    {isEven ? (
                      <Fragment>
                        {/* Left Content */}
                        <motion.div
                          initial={{ opacity: 0, x: -24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className='flex-1 text-right'
                        >
                          <div className='space-y-1'>
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                              className='text-sm md:text-base text-accent font-semibold uppercase'
                            >
                              Step {idx + 1}
                            </motion.div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                          </div>
                        </motion.div>

                        {/* Center Timeline Marker */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
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

                        {/* Right Content - Empty for even */}
                        <div className='flex-1' />
                      </Fragment>
                    ) : (
                      <Fragment>
                        {/* Left Content - Empty for odd */}
                        <div className='flex-1' />

                        {/* Center Timeline Marker */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className='relative z-20 shrink-0'
                        >
                          <div className='size-16 rounded-full bg-background border-4 border-accent flex items-center justify-center'>
                            <Icon className='size-8 text-accent' />
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className='absolute inset-0 rounded-full border-4 border-accent/30'
                          />
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                          initial={{ opacity: 0, x: 24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className='flex-1'
                        >
                          <div className='space-y-1'>
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                              className='text-sm md:text-base text-accent font-semibold uppercase'
                            >
                              Step {idx + 1}
                            </motion.div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                          </div>
                        </motion.div>
                      </Fragment>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className='lg:hidden flex gap-6 pl-6'>
                    {/* Timeline Marker */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className='relative z-10 shrink-0 -ml-6 pt-1'
                    >
                      <div className='size-12 rounded-full bg-accent flex items-center justify-center'>
                        <Icon className='size-6 text-background' />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className='pb-8 pt-1'
                    >
                      <div className='space-y-1'>
                        <div className='text-sm md:text-base text-accent font-semibold uppercase'>
                          Step {idx + 1}
                        </div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
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
