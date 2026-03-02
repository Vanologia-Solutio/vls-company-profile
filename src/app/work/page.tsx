'use client'

import { projects, workStats } from "@/shared/data/works"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WorkPage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background to-secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Showcasing our latest projects and successful client collaborations
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {workStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground/70">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl border border-border bg-card">
                  {/* Project Image */}
                  <div className="w-full aspect-16/10 relative overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-[1.025] transition-all duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-primary text-sm font-semibold mb-2">{project.category}</p>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                      </div>
                      {project.link && (
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ArrowRight className="size-5 text-primary shrink-0" />
                          </Link>
                        </motion.div>
                      )}
                    </div>

                    <p className="text-foreground/70 mb-6 line-clamp-2">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let&apos;s create something amazing together. Get in touch with us today.
          </p>
          <motion.button
            className="px-8 py-3 bg-primary-foreground text-primary rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            <Link href='/contact'>
              Start Your Project
            </Link>
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}
