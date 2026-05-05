import { STATS } from '@/shared/data/about'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export function Stats() {
  return (
    <section id='stats'>
      <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pb-24'>
        {STATS.aboutStats.map((stat, index) => {
          const value = stat.value.includes('+')
            ? Number(stat.value.replace('+', ''))
            : Number(stat.value)
          const suffix = stat.value.includes('+') ? '+' : ''
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='text-center'
            >
              <CountUp
                end={value}
                suffix={suffix}
                duration={3}
                className='text-3xl sm:text-4xl font-bold text-primary mb-2'
              />
              <div className='text-muted-foreground'>{stat.label}</div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
