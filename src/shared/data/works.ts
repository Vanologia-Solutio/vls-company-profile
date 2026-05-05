export const workStats: { id: number; title: string; value: string }[] = [
  { id: 1, title: 'Projects Completed', value: '50+' },
  { id: 2, title: 'Happy Clients', value: '15+' },
  { id: 3, title: 'Team Members', value: '10' },
  { id: 4, title: 'Years Experience', value: '1+' },
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

export const PROJECTS: Project[] = [
  {
    id: 'medilink',
    title: 'MediLink',
    category: 'Healthcare Supply Chain Management System',
    description:
      'MediLink is a system that allows the business to manage their medical equipment and supplies with a modern design, responsive layout, admin panel, and inventory tracking system.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/medilink.webp',
    tags: [
      'SaaS',
      'Inventory Management',
      'In-app Notification System',
      'B2B2C Schema Support',
      'Admin Panel',
    ],
    link: 'https://medilink.vanologiasolutio.my.id',
  },
  {
    id: 'cmgestun',
    title: 'CM Gestun',
    category: 'Company Profile Web Page',
    description:
      'CM Gestun is a business that sells medical equipment and supplies. Company profile web page for the business.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/cmgestun.webp',
    tags: ['Company Profile', 'Branding', 'SEO Optimization'],
    link: 'https://cmgestun.com/',
  },
  {
    id: 'pureroutepeptides',
    title: 'Pure Route Peptides',
    category: 'E-commerce',
    description:
      'Pure Route Peptides is a business that sells peptides in the USA. Custom built website with a modern design, responsive layout, admin panel, and mailing system.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/pureroutepeps.webp',
    tags: [
      'E-commerce',
      'Mailing System',
      'Voucher & Coupon System',
      'Admin Panel',
    ],
    link: 'https://pureroutepeps.com',
  },
  {
    id: 'neomeridian',
    title: 'Neo Meridian Therapy',
    category: 'Point of Sale System',
    description:
      'A system that allows the business to manage their sales and inventory with a seamless integration to thermal printer to print receipts.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/neomeridian.webp',
    tags: [
      'Point of Sale',
      'Reservation System',
      'Thermal Printer',
      'Reporting System',
      'Admin Panel',
    ],
  },
  {
    id: 'hematindonesia',
    title: 'Hemat Indonesia',
    category: 'Package Tracking System',
    description:
      'Hemat Indonesia is a online store focusing on daily goods. Package tracking system including webcam and barcode scanner integration for package inspection.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/hematindonesia.webp',
    tags: [
      'Package Tracker',
      'Webcam & Barcode Scanner',
      'Cloud Infrastructure',
      'Admin Panel',
    ],
  },
  {
    id: 'sinaroganindustri',
    title: 'Sinar Ogan Industri',
    category: 'E-commerce',
    description:
      'Sinar Ogan Industri is a business that sells disposable medical supplies. Website with Midtrans integration for payment gateway, and admin panel for managing the business.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/sinaroganindustri.webp',
    tags: [
      'E-commerce',
      'Payment Gateway',
      'Recommendation System',
      'Admin Panel',
    ],
  },
  {
    id: 'centralmedica',
    title: 'Central Medica Lampung',
    category: 'ERP System',
    description:
      'Central Medica Lampung is a business that sells medical equipment and supplies. ERP system for the business.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/centralmedicalampung.webp',
    tags: ['Inventory Management', 'Reporting System', 'Admin Panel'],
  },
  {
    id: 'vanologiasolutiolibrary',
    title: 'Vanologia Solutio Library',
    category: 'Library System',
    description:
      'Knowledge base system for Vanologia Solutio. A system that allows the business to manage their documents, videos, and other resources.',
    image:
      'https://rexrvbbxzcvutieztyao.supabase.co/storage/v1/object/public/work-thumbnails/vlslibrary.webp',
    tags: [
      'Library System',
      'Documentation',
      'File Management System',
      'Admin Panel',
      'Cloud Infrastructure',
    ],
    link: 'https://library.vanologiasolutio.my.id',
  },
]
