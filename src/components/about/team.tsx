import { TEAM } from '@/shared/data/about'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { ParallaxSection } from '../parallax-section'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { TagBadge } from '../ui/tag-badge'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Team() {
  return (
    <ParallaxSection
      id='team'
      className='py-16 sm:py-24 overflow-hidden bg-linear-to-b from-accent/50 via-accent/25 to-background'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-8 sm:mb-12'
        >
          <TagBadge label='Our People' icon='Users' className='mb-4' />
          <motion.h2 variants={itemVariants}>Meet The Team</motion.h2>
          <motion.p variants={itemVariants}>
            Meet the individuals behind Vanologia Solutio, each bringing unique
            skills and passion to every project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'
        >
          {TEAM.map(member => (
            <Card key={member.name} className='pt-0 overflow-hidden'>
              <CardContent className='relative aspect-square p-0'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='object-cover'
                />
              </CardContent>
              <CardHeader>
                <CardTitle className='text-lg md:text-xl'>
                  {member.name}
                </CardTitle>
                <CardDescription className='text-xs md:text-sm text-accent uppercase font-semibold'>
                  {member.role}
                </CardDescription>
                <CardDescription className='line-clamp-2'>
                  {member.bio}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
