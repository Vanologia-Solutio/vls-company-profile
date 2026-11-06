import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { fadeUp, stagger, VIEWPORT } from '@/lib/motion'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/shared/data/works'
import { TagBadge } from '../ui/tag-badge'

export function Testimonies() {
  return (
    <section className='relative py-16 sm:py-24 bg-linear-to-b from-background via-accent/5 to-background'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          variants={stagger()}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='text-center mb-8 sm:mb-12'
        >
          <TagBadge label='Testimonies' icon='Quote' className='mb-4' />
          <motion.h2 variants={fadeUp}>What Our Clients Say</motion.h2>
          <motion.p variants={fadeUp}>
            See how we&apos;ve helped businesses transform their digital
            presence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='relative'
        >
          <Carousel
            className='w-full'
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {TESTIMONIALS.map(testimonial => (
                <CarouselItem
                  key={testimonial.id}
                  className='pl-4 basis-full sm:basis-1/2 lg:basis-1/3'
                >
                  <div className='rounded-md border border-border bg-card p-4 lg:p-6 text-center h-full flex flex-col justify-center hover:border-accent transition-colors duration-250'>
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='flex justify-center gap-3 mt-6 sm:mt-8'>
              <CarouselPrevious className='static size-10 translate-y-0' />
              <CarouselNext className='static size-10 translate-y-0' />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
