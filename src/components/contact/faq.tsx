import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/shared/data/contact'
import { motion, Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

export function FAQ() {
  return (
    <section className='py-16 sm:py-24 bg-linear-to-br from-background to-secondary'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12 sm:mb-16'
        >
          <motion.h2 variants={itemVariants}>Common Questions</motion.h2>
          <motion.p variants={itemVariants}>
            Answers to questions we often receive.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='max-w-4xl mx-auto'
        >
          <Accordion type='multiple' className='w-full'>
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
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
