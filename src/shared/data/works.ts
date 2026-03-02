export const workStats: { id: number, title: string, value: string }[] = [
  { id: 1, title: 'Projects Completed', value: '50+' },
  { id: 2, title: 'Happy Clients', value: '15+' },
  { id: 3, title: 'Team Members', value: '10' },
  { id: 4, title: 'Years Experience', value: '1+' }
]

interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'pureroutepeptides',
    title: 'Pure Route Peptides',
    category: 'E-commerce Development',
    description: 'Pure Route Peptides is a business that sells peptides in the USA. Custom built website with a modern design, responsive layout, admin panel, and mailing system.',
    image: 'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/pureroutepeptides.webp',
    tags: ['Next.js', 'PostgreSQL', 'Shadcn UI'],
    link: 'https://pureroutepeps.com',
  },
  {
    id: 'sinaroganindustri',
    title: 'Sinar Ogan Industri',
    category: 'E-commerce Development',
    description: 'Sinar Ogan Industri is a business that sells disposable medical supplies. Website with Midtrans integration for payment gateway, and admin panel for managing the business.',
    image: 'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/sinaroganindustri.webp',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Midtrans'],
  },
  {
    id: 'neomeridian',
    title: 'Neo Meridian',
    category: 'Point of Sale System Development',
    description: 'A system that allows the business to manage their sales and inventory with a seamless integration to thermal printer to print receipts.',
    image: 'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/neomeridian.webp',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Ant Design'],
  },
  {
    id: 'centralmedica',
    title: 'Central Medica Lampung',
    category: 'ERP System Development',
    description: 'Central Medica Lampung is a business that sells medical equipment and supplies. ERP system for the business.',
    image: 'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/centralmedica.webp',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Shadcn UI'],
  },
  {
    id: 'hematindonesia',
    title: 'Hemat Indonesia',
    category: 'Package Tracking System Development',
    description: 'Hemat Indonesia is a online store focusing on daily goods. Package tracking system including webcam and barcode scanner integration for package inspection.',
    image: 'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/hematindonesia.webp',
    tags: ['Next.js', 'Fiber', 'Google Cloud Platform', 'PostgreSQL', 'Shadcn UI'],
  },
  {
    id: 'vanologiasolutioprofile',
    title: 'Vanologia Solutio Profile',
    category: 'Company Profile Web Page',
    description: 'Company profile web page for Vanologia Solutio. A simple and clean web page with a modern design.',
    image: 'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/vanologiasolutioprofile.webp',
    tags: ['Next.js', 'TypeScript', 'Shadcn UI'],
    link: 'https://www.vanologiasolutio.my.id',
  },
  {
    id: 'vanologiasolutiolibrary',
    title: 'Vanologia Solutio Library',
    category: 'Library System Development',
    description: 'Knowledge base system for Vanologia Solutio. A system that allows the business to manage their documents, videos, and other resources.',
    image: 'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/vanologiasolutiolibrary.webp',
    tags: ['Next.js', 'Google Cloud Platform', 'PostgreSQL', 'Shadcn UI'],
    link: 'https://library.vanologiasolutio.my.id',
  },
]
