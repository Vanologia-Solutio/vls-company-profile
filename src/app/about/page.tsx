'use client'

import { stats, team, values } from '@/shared/data/about'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div>
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-linear-to-br from-background to-secondary'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
        >
          <h1 className='text-5xl sm:text-6xl font-bold text-foreground mb-6'>
            About <span className='text-primary'>Vanologia Solutio</span>
          </h1>
          <p className='text-xl text-foreground/70 leading-relaxed'>
            A creative digital agency dedicated to transforming businesses
            through innovative design and technology
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className='py-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <div>
              <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-6'>
                Our Story
              </h2>
              <p className='text-lg text-foreground/70 leading-relaxed mb-6'>
                Vanologia Solutio was founded with a clear vision: to help
                businesses thrive in the digital age. What began as a small team
                of passionate developers and designers has grown into a dynamic
                digital agency, partnering with clients across various
                industries to deliver innovative and impactful solutions.
              </p>
              <p className='text-lg text-foreground/70 leading-relaxed mb-6'>
                Our journey has been marked by countless successful projects,
                meaningful client relationships, and a commitment to continuous
                innovation. We&apos;ve evolved from a small team of passionate
                developers and designers to a comprehensive digital
                transformation partner.
              </p>
              <p className='text-lg text-foreground/70 leading-relaxed'>
                Today, we combine strategic thinking, technical expertise, and
                creative excellence to deliver solutions that drive real
                business results for our clients.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border'>
              {stats.aboutStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='text-3xl sm:text-4xl font-bold text-primary mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-foreground/70'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-secondary'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
              Our Values
            </h2>
            <p className='text-lg text-foreground/70'>
              These principles guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className='bg-background rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow'
                >
                  <div className='size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                    <IconComponent className='size-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {value.title}
                  </h3>
                  <p className='text-foreground/70'>{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
              Meet Our Team
            </h2>
            <p className='text-lg text-foreground/70'>
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow'
              >
                <div className='relative aspect-square overflow-hidden w-full'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes='width: 100%, height: 100%'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-foreground mb-1'>
                    {member.name}
                  </h3>
                  <p className='text-primary font-semibold text-sm mb-3'>
                    {member.role}
                  </p>
                  <p className='text-foreground/70'>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-primary-foreground mb-6'>
            Let&apos;s Work Together
          </h2>
          <p className='text-lg text-primary-foreground/90 mb-8'>
            Ready to transform your business? Get in touch with our team today.
          </p>
          <motion.button
            className='px-8 py-3 bg-primary-foreground text-primary rounded-full font-semibold hover:shadow-lg transition-shadow'
          >
            <Link href='/contact'>
              Get in Touch
            </Link>
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}
