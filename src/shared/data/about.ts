interface Stats {
  heroStats: { label: string; value: string }[]
  aboutStats: { label: string; value: string }[]
}

export const STATS: Stats = {
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

export const TEAM: Team[] = [
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
    role: 'Visual & Graphic Designer',
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
    role: 'Frontend Developer',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/member-profiles/eugene.webp',
    bio: 'Specializing in web design and user experience',
    socialLinks: {
      instagram: 'https://www.instagram.com/udanjin',
      linkedin: 'https://www.linkedin.com/in/eugenesalimw',
      github: 'https://www.github.com/udanjin',
    },
  },
  {
    name: 'Christian Joy Samuel Tanadi',
    role: 'Tech Lead',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/member-profiles/joy.webp',
    bio: 'Specializing in system design, architecture, and product strategy',
    socialLinks: {
      instagram: 'https://www.instagram.com/__christianjoy',
      linkedin: 'https://www.linkedin.com/in/christian-joy',
      github: 'https://github.com/christianjoy96',
    },
  },
  {
    name: 'Vinkent Gunawan',
    role: 'Software Engineer',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/member-profiles/vinkent.webp',
    bio: 'Specializing in backend engineering and API development',
    socialLinks: {
      instagram: 'https://www.instagram.com/vinkent_gunawan',
      linkedin: 'https://www.linkedin.com/in/vinkent-gunawan-b431351b8',
      github: 'https://github.com/VinkentG',
    },
  },
]
