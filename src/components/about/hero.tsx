import { PageHero } from '@/components/common/page-hero'

export function Hero() {
  return (
    <PageHero
      breadcrumb='About'
      watermark='ABOUT'
      badge={{ label: 'Know More About Us', icon: 'LampDesk' }}
      title='Building the Future'
      highlight='Together'
      description={
        <>
          Discover the story behind Vanologia Solutio &mdash; our journey,
          values, and commitment to innovation.
        </>
      }
      chips={[
        { label: 'Innovation', icon: 'Lightbulb' },
        { label: 'Integrity', icon: 'Heart' },
        { label: 'Excellence', icon: 'Target' },
        { label: 'Collaboration', icon: 'Users' },
      ]}
    />
  )
}
