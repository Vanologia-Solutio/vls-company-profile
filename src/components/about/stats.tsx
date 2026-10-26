import { STATS } from '@/shared/data/about'
import { scaleIn, stagger, VIEWPORT } from '@/lib/motion'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export function Stats() {
  return (
    <section id='stats'>
      <motion.div
        variants={stagger(0.1)}
        initial='hidden'
        whileInView='visible'
        viewport={VIEWPORT}
        className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pb-24'
      >
        {STATS.aboutStats.map((stat, index) => {
          const value = stat.value.includes('+')
            ? Number(stat.value.replace('+', ''))
            : Number(stat.value)
          const suffix = stat.value.includes('+') ? '+' : ''
          return (
            <motion.div key={index} variants={scaleIn} className='text-center'>
              <CountUp
                end={value}
                suffix={suffix}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
                className='text-3xl sm:text-4xl font-bold text-primary mb-2'
              />
              <div className='text-muted-foreground'>{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
