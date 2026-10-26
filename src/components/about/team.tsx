import { TEAM } from '@/shared/data/about'
import { fadeUp, stagger, VIEWPORT } from '@/lib/motion'
import { motion } from 'framer-motion'
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

export function Team() {
  return (
    <ParallaxSection
      id='team'
      className='py-16 sm:py-24 overflow-hidden bg-linear-to-b from-accent/50 via-accent/25 to-background'
    >
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          variants={stagger()}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='text-center mb-8 sm:mb-12'
        >
          <TagBadge label='Our People' icon='Users' className='mb-4' />
          <motion.h2 variants={fadeUp}>Meet The Team</motion.h2>
          <motion.p variants={fadeUp}>
            Meet the individuals behind Vanologia Solutio, each bringing unique
            skills and passion to every project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'
        >
          {TEAM.map(member => (
            <motion.div key={member.name} variants={fadeUp}>
              <Card className='pt-0 overflow-hidden h-full'>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
