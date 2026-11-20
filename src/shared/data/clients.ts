import type { StaticImageData } from 'next/image'

export interface Client {
  // Used as the logo's alt text.
  name: string
  // A remote URL (its host must be allowed in `images.remotePatterns` in
  // next.config.ts) or an imported local image. Clients with an empty logo
  // are left out of the "Trusted by" marquee.
  logo: string | StaticImageData
}

const LOGO_BASE_URL =
  'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/logos'

// File name in the Supabase `logos` bucket, e.g. logo('aristee') -> .../logos/aristee.webp
const logo = (file: string) => `${LOGO_BASE_URL}/${file}.webp`

export const clients: Client[] = [
  { name: 'Mega Grosir Hemat', logo: logo('megagrosirhemat') },
  { name: 'Hemat Indonesia', logo: logo('hematindonesia') },
  { name: 'Central Medica Lampung', logo: logo('centralmedicalampung') },
  { name: 'Setigi Heni & Cinta Food', logo: logo('setigiheni') },
  { name: 'Klinik Kecantikan Aristée', logo: logo('aristeebeautyclinic') },
  { name: 'Pure Route Peptides', logo: logo('pureroutepeps') },
  { name: 'Neo Meridian Therapy', logo: logo('neomeridiantherapy') },
  { name: 'CM Gestun', logo: logo('cmgestun') },
  { name: "Laurent's Delight", logo: logo('laurentsdelight') },
]
