import data from '@/assets/images/bg/data.webp'
import design from '@/assets/images/bg/design.webp'
import saas from '@/assets/images/bg/saas.webp'
import webdev from '@/assets/images/bg/webdev.webp'
import { TagBadge } from '@/components/ui/tag-badge'
import { cn } from '@/lib/utils'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

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

const SERVICES = [
  {
    id: '01',
    title: 'Web & System Development',
    description:
      'We build custom, scalable web & system solutions tailored to your specific business needs. From initial concept and design to development, deployment, and ongoing maintenance, we ensure secure, high-performance systems that streamline operations and enhance user engagement.',
    image: webdev,
  },
  {
    id: '02',
    title: 'SaaS & Digital Platforms',
    description:
      'Transforming ideas into SaaS and digital platforms tailored to your specific business needs. From initial concept and design to development, deployment, and ongoing maintenance, we ensure secure, high-performance platforms that streamline operations and enhance user engagement.',
    image: saas,
  },
  {
    id: '03',
    title: 'Visual Graphic Design',
    description:
      'Elevate your brand with stunning visual designs that capture attention and communicate your message effectively. From brand identity and logos to marketing materials and social media graphics, we create visuals that resonate with your audience.',
    image: design,
  },
  {
    id: '04',
    title: 'Data Solutions',
    description:
      'Unlock the power of your data with our comprehensive data solutions. We help you collect, analyze, and visualize data to make informed business decisions, optimize processes, and drive growth through data-driven insights.',
    image: data,
  },
]

export function ListServices() {
  return (
    <section className='py-16 sm:py-24'>
      <div className='max-w-6xl mx-auto space-y-12 px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-2xl md:max-w-3xl'
        >
          <TagBadge label='Our Expertise' icon='Package' className='mb-4' />
          <motion.h3 variants={itemVariants} className='mb-2'>
            Web System Development, Digital Platform, Visual Graphic Design, and
            Data Solution, all in One Place.
          </motion.h3>
          <motion.p variants={itemVariants}>
            We provide a complete suite of digital transformation services,
            ensuring your business has the tools, visuals, and insights it needs
            to succeed in the modern market.
          </motion.p>
        </motion.div>

        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid md:grid-cols-2 gap-4 md:gap-12 items-center'
            >
              <div
                className={cn(
                  'group rounded-lg overflow-hidden aspect-3/2 border backdrop-blur-sm transition-all duration-250 relative',
                  isEven ? 'order-1' : 'order-1 md:order-2',
                )}
              >
                <div className='absolute z-30 inset-0 bg-linear-to-br from-accent/20 via-accent/10 to-transparent' />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-cover grayscale-50'
                />
              </div>
              <div
                className={cn(
                  'space-y-2.5',
                  isEven
                    ? 'order-2 text-left'
                    : 'order-2 md:order-1 md:text-right',
                )}
              >
                <div>
                  <span className='sub'>#{service.id}</span>
                  <h5>{service.title}</h5>
                </div>
                <p>{service.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
