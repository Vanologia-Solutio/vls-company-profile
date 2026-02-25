interface Feature {
  title: string
  description: string
  highlight: boolean
}

export const features: Feature[] = [
  {
    title: 'Modern Technology Stack',
    description:
      'We use cutting-edge technologies to build fast, secure, and scalable solutions for your business.',
    highlight: true,
  },
  {
    title: 'Agile Development Process',
    description:
      'Iterative approach ensures continuous improvement and flexibility throughout the project lifecycle.',
    highlight: false,
  },
  {
    title: 'Transparent Communication',
    description:
      'Regular updates and clear reporting keep you informed every step of the way.',
    highlight: false,
  },
  {
    title: 'Performance-First',
    description:
      'Lightning-fast load times and optimized performance across all devices and browsers.',
    highlight: true,
  },
  {
    title: 'SEO Optimized',
    description:
      'Built-in SEO best practices ensure your site ranks well and drives organic traffic.',
    highlight: false,
  },
  {
    title: 'Professional Support',
    description:
      'Dedicated support team available to assist you with any questions or issues.',
    highlight: false,
  },
]
