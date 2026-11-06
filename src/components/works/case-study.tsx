'use client'

import { CTA } from '@/components/cta'
import { Badge } from '@/components/ui/badge'
import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '@/components/ui/craft-button'
import { TagBadge } from '@/components/ui/tag-badge'
import { LivePreviewButton } from '@/components/works/project-actions'
import { ProjectImage } from '@/components/works/project-image'
import {
  EASE_OUT,
  fadeLeft,
  fadeUp,
  scaleIn,
  stagger,
  VIEWPORT,
} from '@/lib/motion'
import { DynamicIcon } from '@/lib/utils'
import {
  getHostname,
  type Project,
  type Testimonial,
} from '@/shared/data/works'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Lock,
  Quote,
  Star,
} from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface CaseStudyProps {
  project: Project
  testimonial?: Testimonial
  prev: Project
  next: Project
}

const GRID_MASK =
  'radial-gradient(ellipse 80% 70% at 25% 20%, black 20%, transparent 75%)'

const ruleVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: EASE_OUT } },
}

export function CaseStudy({
  project,
  testimonial,
  prev,
  next,
}: CaseStudyProps) {
  return (
    <main>
      <CaseStudyHero project={project} />

      <div className='max-w-6xl mx-auto px-4'>
        <Section index='01' label='Background' title='The Challenge'>
          <motion.p variants={fadeUp} className='text-sm text-foreground/85'>
            {project.background.overview}
          </motion.p>
          <motion.ul variants={stagger(0.08)} className='mt-8 grid gap-3'>
            {project.background.challenges.map(challenge => (
              <motion.li
                key={challenge}
                variants={fadeUp}
                className='flex gap-3 rounded-lg border border-border bg-card p-4'
              >
                <CircleAlert size={16} className='text-accent mt-0.5' />
                <p className='text-sm text-foreground/85'>{challenge}</p>
              </motion.li>
            ))}
          </motion.ul>
        </Section>

        <Section index='02' label='Objectives' title='What We Set Out to Do'>
          <motion.ol
            variants={stagger(0.08)}
            className='grid sm:grid-cols-2 gap-4'
          >
            {project.objectives.map((objective, idx) => (
              <motion.li
                key={objective}
                variants={fadeUp}
                className='relative overflow-hidden rounded-lg border border-border bg-card p-5'
              >
                <span
                  aria-hidden
                  className='absolute -top-3 right-3 font-bebasneue text-7xl leading-none text-accent/10'
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className='sub text-accent'>
                  Goal {String(idx + 1).padStart(2, '0')}
                </span>
                <p className='mt-1 text-sm text-foreground/85'>{objective}</p>
              </motion.li>
            ))}
          </motion.ol>
        </Section>

        <Section index='03' label='Solution' title='How We Solved It'>
          <motion.p variants={fadeUp} className='text-sm text-foreground/85'>
            {project.solution.approach}
          </motion.p>

          <motion.div
            variants={stagger(0.08)}
            className='mt-8 grid sm:grid-cols-2 gap-4'
          >
            {project.solution.features.map(feature => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className='group relative p-4 sm:p-6 rounded-2xl bg-linear-to-br from-card to-background border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-[border-color,box-shadow] duration-250'
              >
                {/* Hover glow: opacity only, so the card never shifts */}
                <div className='absolute inset-0 rounded-2xl bg-linear-to-br from-accent/10 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-250' />
                <div className='relative z-10'>
                  <div className='inline-flex items-center justify-center size-8 sm:size-10 rounded-xl bg-linear-to-br from-accent/20 to-accent/5 border border-accent/20 mb-2.5'>
                    <DynamicIcon
                      name={feature.icon}
                      className='size-4 text-accent'
                    />
                  </div>
                  <h5 className='text-2xl group-hover:text-accent transition-colors duration-250'>
                    {feature.title}
                  </h5>
                  <p className='text-sm'>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className='mt-8'>
            <span className='sub mb-2.5'>Scope of Work</span>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map(tag => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </motion.div>
        </Section>
      </div>

      <Results project={project} />

      {testimonial && <ClientQuote testimonial={testimonial} />}

      <ProjectNavigation prev={prev} next={next} />

      <CTA />
    </main>
  )
}

function CaseStudyHero({ project }: { project: Project }) {
  const meta = [
    { label: 'Client', value: project.client },
    { label: 'Industry', value: project.industry },
    { label: 'Platform', value: project.platform },
    { label: 'Category', value: project.type },
  ]

  return (
    <section className='relative overflow-hidden pt-32 sm:pt-40'>
      {/* Blueprint grid */}
      <div
        aria-hidden
        className='absolute inset-0 opacity-70 dark:opacity-50'
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />
      <div
        aria-hidden
        className='absolute -top-24 -left-24 size-96 rounded-full bg-accent/15 blur-3xl'
      />

      <motion.div
        variants={stagger(0.1, 0.1)}
        initial='hidden'
        animate='visible'
        className='relative z-10 max-w-6xl mx-auto px-4'
      >
        <motion.nav
          variants={fadeUp}
          aria-label='Breadcrumb'
          className='flex items-center gap-1.5 text-sm text-muted-foreground mb-6'
        >
          <Link href='/' className='hover:text-accent transition-colors'>
            Home
          </Link>
          <ChevronRight className='size-3.5' />
          <Link href='/works' className='hover:text-accent transition-colors'>
            Works
          </Link>
          <ChevronRight className='size-3.5' />
          <span className='text-foreground truncate'>{project.title}</span>
        </motion.nav>

        <TagBadge label={project.category} icon='Briefcase' className='mb-4' />

        <motion.h1 variants={fadeUp} className='max-w-4xl'>
          {project.title}{' '}
          <span className='text-transparent bg-clip-text bg-linear-to-b from-accent to-accent/65'>
            Case Study
          </span>
        </motion.h1>

        <motion.div
          variants={ruleVariants}
          className='mt-4 h-1 w-20 rounded-full bg-accent origin-left'
        />

        <motion.p variants={fadeUp} className='mt-6 max-w-2xl md:max-w-3xl'>
          {project.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className='mt-8 flex flex-col sm:flex-row gap-3 sm:items-center'
        >
          {project.link && (
            <LivePreviewButton
              link={project.link}
              size='xl'
              className='w-full sm:w-auto bg-accent text-accent-foreground border-transparent'
            />
          )}
          <CraftButton
            size='xl'
            className={
              project.link
                ? 'w-full sm:w-auto bg-background text-foreground border border-accent/30'
                : 'w-full sm:w-auto'
            }
            asChild
          >
            <Link href='/contact'>
              <CraftButtonLabel>Start a Similar Project</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowUpRight className='transition-transform duration-500 group-hover:rotate-45' />
              </CraftButtonIcon>
            </Link>
          </CraftButton>
        </motion.div>

        <motion.dl
          variants={fadeUp}
          className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-lg border border-border bg-border'
        >
          {meta.map(item => (
            <div key={item.label} className='bg-card/90 backdrop-blur-sm p-4'>
              <dt className='text-xs uppercase tracking-wider text-muted-foreground'>
                {item.label}
              </dt>
              <dd className='mt-1 text-sm sm:text-base font-medium'>
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div variants={scaleIn} className='mt-10 sm:mt-12'>
          <BrowserFrame project={project} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function BrowserFrame({ project }: { project: Project }) {
  const address = project.link
    ? getHostname(project.link)
    : 'Private system · available on request'

  return (
    <div className='rounded-xl border border-border bg-card shadow-2xl shadow-accent/10 overflow-hidden'>
      <div className='flex items-center gap-3 h-10 px-4 border-b border-border bg-muted/40'>
        <div aria-hidden className='flex gap-1.5'>
          <span className='size-2.5 rounded-full bg-accent/70' />
          <span className='size-2.5 rounded-full bg-muted-foreground/40' />
          <span className='size-2.5 rounded-full bg-muted-foreground/40' />
        </div>
        <div className='flex-1 flex justify-center min-w-0'>
          {project.link ? (
            <Link
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex max-w-xs w-full items-center justify-center gap-1.5 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground hover:text-accent transition-colors truncate'
            >
              <Lock className='size-3 shrink-0' />
              <span className='truncate'>{address}</span>
            </Link>
          ) : (
            <span className='inline-flex max-w-xs w-full items-center justify-center gap-1.5 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground'>
              <Lock className='size-3 shrink-0' />
              <span className='truncate'>{address}</span>
            </span>
          )}
        </div>
        <div aria-hidden className='w-10.5' />
      </div>
      <div className='relative aspect-3/2 sm:aspect-video'>
        <ProjectImage
          project={project}
          priority
          sizes='(min-width: 1152px) 1152px, 100vw'
          className='object-top'
        />
      </div>
    </div>
  )
}

function Section({
  index,
  label,
  title,
  children,
}: {
  index: string
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section className='py-12 sm:py-20 border-b border-border last:border-b-0'>
      <div className='grid lg:grid-cols-12 gap-6 lg:gap-12'>
        <motion.div
          variants={fadeLeft}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='lg:col-span-4'
        >
          <div className='lg:sticky lg:top-32 space-y-1'>
            <div className='flex items-center gap-3'>
              <span className='font-bebasneue text-2xl text-accent leading-none'>
                {index}
              </span>
              <span className='h-px w-8 bg-accent/40' />
              <span className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                {label}
              </span>
            </div>
            <h3>{title}</h3>
          </div>
        </motion.div>
        <motion.div
          variants={stagger()}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='lg:col-span-8'
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

function Results({ project }: { project: Project }) {
  return (
    <section className='relative py-16 sm:py-24 bg-linear-to-b from-background via-accent/10 to-background'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          variants={stagger()}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='text-center mb-10 sm:mb-14'
        >
          <TagBadge label='Results' icon='TrendingUp' className='mb-4' />
          <motion.h2 variants={fadeUp}>Success Indicators</motion.h2>
          <motion.p variants={fadeUp} className='max-w-2xl mx-auto'>
            How the solution changed day-to-day operations for {project.client}.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='grid sm:grid-cols-3 gap-4 sm:gap-6'
        >
          {project.results.metrics.map(metric => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              className='relative overflow-hidden rounded-lg border border-border bg-card p-6 text-center'
            >
              <div
                aria-hidden
                className='absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent'
              />
              <div className='font-bebasneue text-5xl sm:text-6xl leading-none text-accent'>
                {metric.value}
              </div>
              <div className='mt-2 font-semibold'>{metric.label}</div>
              <p className='mt-1 text-sm'>{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.ul
          variants={stagger(0.08)}
          initial='hidden'
          whileInView='visible'
          viewport={VIEWPORT}
          className='mt-8 sm:mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4 rounded-lg border border-border bg-card/60 backdrop-blur-sm p-6'
        >
          {project.results.outcomes.map(outcome => (
            <motion.li key={outcome} variants={fadeUp} className='flex gap-3'>
              <CircleCheck className='size-4 shrink-0 text-accent mt-0.5' />
              <p className='text-sm text-foreground/85'>{outcome}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function ClientQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section className='pb-12 sm:pb-20 px-4'>
      <motion.figure
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        viewport={VIEWPORT}
        className='relative max-w-4xl mx-auto rounded-xl border border-accent/30 bg-card p-6 sm:p-10 text-center overflow-hidden'
      >
        <Quote
          aria-hidden
          className='absolute -top-4 -left-4 size-32 text-accent/10 rotate-180'
        />
        <div className='flex justify-center gap-1 mb-4'>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className='size-4 fill-accent text-accent' />
          ))}
        </div>
        <blockquote className='relative text-lg sm:text-xl italic leading-relaxed'>
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
        <figcaption className='mt-6 flex flex-col'>
          <span className='sub text-accent'>{testimonial.name}</span>
          <span className='text-sm text-muted-foreground'>
            {testimonial.role}
          </span>
        </figcaption>
      </motion.figure>
    </section>
  )
}

function ProjectNavigation({ prev, next }: { prev: Project; next: Project }) {
  return (
    <section className='max-w-6xl mx-auto px-4 py-12 sm:py-16 border-t border-border'>
      <div className='flex items-center justify-between mb-6'>
        <span className='sub'>More Case Studies</span>
        <Link
          href='/works'
          className='text-sm text-muted-foreground hover:text-accent transition-colors'
        >
          View all works
        </Link>
      </div>
      <motion.div
        variants={stagger(0.1)}
        initial='hidden'
        whileInView='visible'
        viewport={VIEWPORT}
        className='grid sm:grid-cols-2 gap-4'
      >
        <NavCard project={prev} direction='prev' />
        <NavCard project={next} direction='next' />
      </motion.div>
    </section>
  )
}

function NavCard({
  project,
  direction,
}: {
  project: Project
  direction: 'prev' | 'next'
}) {
  const isNext = direction === 'next'
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/works/${project.id}`}
        className={
          'group flex items-center gap-4 rounded-lg border border-border bg-card p-3 hover:border-accent/60 transition-colors ' +
          (isNext ? 'sm:flex-row-reverse sm:text-right' : '')
        }
      >
        <div className='relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-md'>
          <ProjectImage
            project={project}
            compact
            sizes='96px'
            className='group-hover:scale-110 transition-transform duration-500'
          />
        </div>
        <div className='min-w-0 flex-1'>
          <span
            className={
              'inline-flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground ' +
              (isNext ? 'sm:flex-row-reverse' : '')
            }
          >
            {isNext ? (
              <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
            ) : (
              <ArrowLeft className='size-3.5 transition-transform group-hover:-translate-x-0.5' />
            )}
            {isNext ? 'Next project' : 'Previous project'}
          </span>
          <h5 className='truncate group-hover:text-accent transition-colors'>
            {project.title}
          </h5>
          <p className='text-xs sm:text-sm truncate'>{project.category}</p>
        </div>
      </Link>
    </motion.div>
  )
}
