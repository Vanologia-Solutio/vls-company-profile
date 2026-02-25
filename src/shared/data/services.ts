import { Code2, Globe, Palette, TrendingUp } from 'lucide-react'
import { ElementType } from 'react'

interface Service {
  id: number | string
  icon: ElementType
  title: string
  description: string
  features: string[]
  color?: string
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 1,
    icon: Globe,
    title: 'Website Development',
    description:
      'Custom-built, responsive websites that convert visitors into customers. From concept to launch, we handle every detail.',
    features: [
      'Responsive Design',
      'Fast Performance',
      'SEO Optimized',
      'Scalable Architecture',
    ],
    color: 'from-primary to-accent',
  },
  {
    id: 2,
    icon: Palette,
    title: 'Graphic Design',
    description:
      'Compelling visual identities that tell your story. Beautiful design that resonates with your audience.',
    features: [
      'Brand Identity',
      'UI/UX Design',
      'Marketing Materials',
      'Illustration',
    ],
    color: 'from-accent to-primary',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description:
      'Data-driven marketing campaigns that reach your target audience and deliver measurable results.',
    features: [
      'SEO Strategy',
      'Content Marketing',
      'Social Media',
      'Analytics',
    ],
    color: 'from-primary to-accent',
  },
]

export const detailedServices: Service[] = [
  {
    id: 'website-development',
    icon: Code2,
    title: 'Website Development',
    description:
      'Custom-built, responsive websites tailored to your brand and business needs.',
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO-Friendly Architecture',
      'E-Commerce Integration',
      'CMS Implementation',
    ],
  },
  {
    id: 'graphic-design',
    icon: Palette,
    title: 'Graphic Design',
    description:
      'Creative visual designs that capture your brand identity and engage audiences.',
    features: [
      'Logo Design',
      'Brand Identity',
      'UI/UX Design',
      'Social Media Graphics',
      'Poster Design',
    ],
  },
  {
    id: 'marketing-strategy',
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description:
      'Data-driven marketing solutions to grow your reach and maximize conversions.',
    features: [
      'Digital Strategy',
      'Social Media Marketing',
      'Content Marketing',
      'SEO & SEM',
      'Analytics & Reporting',
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We understand your business, goals, and target audience through detailed consultation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We develop a comprehensive strategy aligned with your objectives and market positioning.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'Our team brings the strategy to life with quality deliverables and regular updates.',
  },
  {
    number: '04',
    title: 'Optimization',
    description:
      'We continuously monitor, analyze, and optimize for better results and success.',
  },
]
