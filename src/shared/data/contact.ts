import { Mail, MapPin, Phone } from 'lucide-react'
import { ElementType } from 'react'

interface ContactInfo {
  icon: ElementType
  title: string
  value: string
  description: string
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    value: 'vanologiasolutio@outlook.com',
    description: 'We typically respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+62 895-2307-7397',
    description: 'Available Monday to Friday, 9-5 EST',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Tangerang, Banten, Indonesia',
    description: 'Visit our office or work remotely',
  },
]

interface FAQ {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  {
    q: 'What is your typical project timeline?',
    a: 'Project timelines vary based on complexity and scope. Most projects take 4-12 weeks from discovery to launch.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes! We provide maintenance, updates, and support packages tailored to your needs.',
  },
  {
    q: 'What is your pricing structure?',
    a: 'We offer flexible pricing models including project-based, retainer, and hourly billing options.',
  },
  {
    q: 'Can you work with remote teams?',
    a: 'Absolutely! We have experience collaborating with distributed teams and can adjust communication as needed.',
  },
]
