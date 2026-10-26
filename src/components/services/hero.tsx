import { PageHero } from '@/components/common/page-hero'

export function Hero() {
  return (
    <PageHero
      breadcrumb='Services'
      watermark='SERVICES'
      badge={{ label: 'What We Do Best', icon: 'Handshake' }}
      title='Services Built for'
      highlight='Growth'
      description='Comprehensive digital solutions tailored to accelerate your business transformation and maximize your competitive advantage in the market.'
      chips={[
        { label: 'Web & System Development', icon: 'Code' },
        { label: 'SaaS & Digital Platforms', icon: 'Layers' },
        { label: 'Visual Graphic Design', icon: 'Palette' },
        { label: 'Data Solutions', icon: 'ChartColumn' },
      ]}
    />
  )
}
