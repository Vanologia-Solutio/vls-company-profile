import { Award, Lightbulb, Target, Users } from 'lucide-react'
import { ElementType } from 'react'

interface Stats {
  heroStats: { label: string; value: string }[]
  aboutStats: { label: string; value: string }[]
}

export const stats: Stats = {
  heroStats: [
    { label: 'Projects', value: '50+' },
    { label: 'Clients', value: '15+' },
    { label: 'Team', value: '10' },
  ],
  aboutStats: [
    { label: 'Projects', value: '50+' },
    { label: 'Happy Clients', value: '15+' },
    { label: 'Team Members', value: '10' },
    { label: 'Years Active', value: '1+' },
  ],
}

interface Value {
  icon: ElementType
  title: string
  description: string
}

export const values: Value[] = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We stay ahead of industry trends and leverage cutting-edge technologies to deliver modern solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We work closely with our clients, treating them as partners in achieving shared goals.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'Quality and precision are at the core of everything we do. We never compromise on standards.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description:
      'Transparency, honesty, and accountability guide all our business relationships and decisions.',
  },
]

interface Team {
  name: string
  role: string
  image: string
  bio: string
  socialLinks: {
    instagram?: string
    linkedin?: string
    github?: string
    behance?: string
    dribbble?: string
    pinterest?: string
    reddit?: string
    youtube?: string
    tiktok?: string
    twitch?: string
    soundcloud?: string
    spotify?: string
  }
}

export const team: Team[] = [
  {
    name: 'Ryu Alvano',
    role: 'Founder & Lead Developer',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/member-profiles/ryu.webp',
    bio: 'Specializing in software engineering and integration services',
    socialLinks: {
      instagram: 'https://www.instagram.com/ryu_alv',
      linkedin: 'https://www.linkedin.com/in/ryualvano',
      github: 'https://www.github.com/BlvckM1nds',
    },
  },
  {
    name: 'Kimmy Marvin Sasmita',
    role: 'Graphic Design Specialist',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/member-profiles/kimmy.webp',
    bio: 'Specializing in branding and visual identity',
    socialLinks: {
      instagram: 'https://www.instagram.com/kimmy.marv',
      linkedin: 'https://www.linkedin.com/in/kimmymarvinsasmita',
      behance: 'https://www.behance.net/kimmymarvinsasmita',
    },
  },
  {
    name: 'Eugene Salim Wijaya',
    role: 'Frontend Developer Specialist',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/member-profiles/eugene.webp',
    bio: 'Specializing in web design and user experience',
    socialLinks: {
      instagram: 'https://www.instagram.com/udanjin',
      linkedin: 'https://www.linkedin.com/in/eugenesalimw',
      github: 'https://www.github.com/udanjin',
    },
  },
]
