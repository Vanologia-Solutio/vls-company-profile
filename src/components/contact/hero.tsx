import { PageHero } from '@/components/common/page-hero'
import { EMAIL, LINK_WHATSAPP, LOCATION, PHONE } from '@/shared/data/contact'

export function Hero() {
  return (
    <PageHero
      breadcrumb='Contact'
      watermark='CONTACT'
      badge={{ label: "Let's Connect", icon: 'Link' }}
      title='Get In Touch'
      highlight='With Us'
      description={
        <>
          Have a project in mind? We&apos;d love to discuss how we can help
          transform your vision into reality. Reach out to us today.
        </>
      }
      chips={[
        { label: EMAIL, icon: 'Mail', href: `mailto:${EMAIL}` },
        { label: PHONE, icon: 'Phone', href: LINK_WHATSAPP },
        { label: LOCATION, icon: 'MapPin' },
      ]}
    />
  )
}
