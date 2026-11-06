import { CaseStudy } from '@/components/works/case-study'
import {
  getAdjacentProjects,
  getProject,
  getProjectTestimonial,
  PROJECTS,
} from '@/shared/data/works'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

// Only the slugs listed in PROJECTS exist; everything else 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return PROJECTS.map(project => ({ slug: project.id }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  const title = `${project.title} Case Study | Vanologia Solutio`
  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      images: project.image
        ? [{ url: project.image, alt: project.title }]
        : undefined,
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(project.id)

  return (
    <CaseStudy
      project={project}
      testimonial={getProjectTestimonial(project.id)}
      prev={prev}
      next={next}
    />
  )
}
