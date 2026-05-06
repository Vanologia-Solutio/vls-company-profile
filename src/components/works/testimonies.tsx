import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { motion, Variants } from 'framer-motion'
import { Star } from 'lucide-react'
import { TagBadge } from '../ui/tag-badge'

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

const testimonials = [
  {
    id: 1,
    name: 'Silvia Cang',
    role: 'Owner, Central Medica Lampung',
    text: 'Vanologia built a reliable ERP system that streamlined our inventory, reporting, and daily operations. It significantly reduced manual work and improved our overall efficiency.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Enrico Chen',
    role: 'Owner, Hemat Indonesia',
    text: 'The package tracking system with barcode and webcam integration transformed how we handle logistics. Our inspection process is now faster, more accurate, and fully trackable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Boby Cheung',
    role: 'Owner, CM Gestun',
    text: 'Our company profile website not only improved our brand presence but also helped us reach more customers online. The team delivered a clean, professional result on time.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ekawati',
    role: 'Owner, Neo Meridian Therapy',
    text: 'The POS and reservation system simplified our sales and booking process. The seamless integration with our printer and reporting tools made daily operations much smoother.',
    rating: 5,
  },
]

export function Testimonies() {
  return (
    <section className='relative py-16 sm:py-24 bg-linear-to-b from-background via-accent/5 to-background'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-8 sm:mb-12'
        >
          <TagBadge label='Testimonies' icon='Quote' className='mb-4' />
          <motion.h2 variants={itemVariants}>What Our Clients Say</motion.h2>
          <motion.p variants={itemVariants}>
            See how we&apos;ve helped businesses transform their digital
            presence.
          </motion.p>
        </motion.div>

        <motion.div className='relative'>
          <Carousel
            className='w-full'
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map(testimonial => (
                <CarouselItem
                  key={testimonial.id}
                  className='pl-4 basis-full sm:basis-1/2 lg:basis-1/3'
                >
                  <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='rounded-md border border-border bg-card p-4 lg:p-6 text-center h-full flex flex-col justify-center hover:border-accent transition-all duration-250'
                  >
                    <div className='flex justify-center gap-1 mb-2.5'>
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className='size-4 fill-accent text-accent'
                          />
                        ),
                      )}
                    </div>
                    <blockquote className='italic mb-4'>
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    <div className='flex flex-col'>
                      <span className='sub text-accent'>
                        {testimonial.name}
                      </span>
                      <span className='text-sm text-muted-foreground'>
                        {testimonial.role}
                      </span>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='hidden md:block' />
            <CarouselNext className='hidden md:block' />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
