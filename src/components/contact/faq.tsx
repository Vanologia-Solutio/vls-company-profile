import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/shared/data/contact'
import { fadeUp, stagger, VIEWPORT } from '@/lib/motion'
import { motion } from 'framer-motion'

export function FAQ() {
  return (
    <section className='py-16 sm:py-24 bg-linear-to-br from-background to-secondary'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          variants={stagger()}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='text-center mb-12 sm:mb-16'
        >
          <motion.h2 variants={fadeUp}>Common Questions</motion.h2>
          <motion.p variants={fadeUp}>
            Answers to questions we often receive.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='max-w-4xl mx-auto'
        >
          <Accordion type='multiple' className='w-full'>
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeUp}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>
                    <h5 className='font-normal'>{faq.q}</h5>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
