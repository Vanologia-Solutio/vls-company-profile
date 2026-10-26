import { PageHero } from '@/components/common/page-hero'
import { STATS } from '@/shared/data/about'

export function Hero() {
  return (
    <PageHero
      breadcrumb='Works'
      watermark='WORKS'
      badge={{ label: 'Our Portfolio', icon: 'Briefcase' }}
      title='Projects That Made'
      highlight='an Impact'
      description={
        <>
          Discover how we&apos;ve transformed businesses through innovative
          digital solutions and strategic implementation.
        </>
      }
      stats={STATS.heroStats}
    />
  )
}
