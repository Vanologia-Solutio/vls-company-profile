'use client'

import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from '@/components/ui/craft-button'
import { TagBadge } from '@/components/ui/tag-badge'
import { motion, Variants } from 'framer-motion'
import { ArrowUpLeft } from 'lucide-react'
import Link from 'next/link'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function TermsOfServicePage() {
  return (
    <main className='pt-32 pb-20 bg-linear-to-b from-accent/10 via-accent/25 to-accent/10'>
      <motion.section
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        id='privacy-policy'
        className='max-w-6xl mx-auto px-4 space-y-6'
      >
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <TagBadge
            icon='ShieldCheck'
            label='Your Privacy Matters'
            className='mb-4'
          />
          <motion.h1 variants={itemVariants}>Privacy Policy</motion.h1>
          <motion.span variants={itemVariants} className='sub'>
            Effective date: May 11, 2026
          </motion.span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.p variants={itemVariants} className='mb-4'>
            Welcome to Vanologia Solutio. Your privacy is important to us, and
            we are committed to protecting any information shared through this
            website. This Privacy Policy explains how information may be
            collected, used, and protected when you access or interact with our
            website. By using this website, you agree to the practices described
            in this policy.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Information We Collect
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              Vanologia Solutio may collect limited information when users
              interact with the website, contact us through available
              communication channels, or access external links connected to our
              services.
            </p>
            <p>
              The information collected may include your name, email address,
              phone number, inquiry details, and basic website usage data. In
              addition, our website may automatically collect anonymous
              analytics information such as browser type, device information,
              pages visited, and general interaction behavior for performance
              monitoring purposes.
            </p>
            <p>
              This website does not provide account registration, login systems,
              or user authentication features.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            How We Use Information
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              Any information collected through the website is used solely to
              support communication, improve website functionality, and enhance
              overall user experience. This may include responding to inquiries,
              providing information regarding our services, monitoring website
              performance, and maintaining website security.
            </p>
            <p>
              Vanologia Solutio does not sell, rent, or distribute personal
              information to third parties for marketing purposes.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Analytics and Cookies
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              Our website may use basic analytics tools and cookies to
              understand visitor activity and improve website performance. These
              tools may collect anonymized information such as:
            </p>
            <ul className='list-disc list-inside leading-relaxed text-muted-foreground'>
              <li>Device and browser type</li>
              <li>General geographic region</li>
              <li>Pages visited</li>
              <li>Session duration and interaction behavior</li>
            </ul>
            <p>
              Cookies help improve usability and functionality during your
              browsing experience. Users may disable cookies through their
              browser settings if preferred.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            External Links
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              This website may contain links to third-party platforms and
              services, including WhatsApp, Instagram, email services, or other
              external websites. Once you leave our website, Vanologia Solutio
              is not responsible for the privacy practices, content, or policies
              of those external platforms.
            </p>
            <p>
              Users are encouraged to review the privacy policies of any
              third-party services they access through external links provided
              on this website.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Data Protection
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              Vanologia Solutio takes reasonable measures to help protect
              information submitted through this website. While we strive to
              maintain secure systems and communication channels, no method of
              online transmission or digital storage can be guaranteed to be
              completely secure.
            </p>
            <p>
              By using this website, users acknowledge and accept these inherent
              security limitations.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Intellectual Property
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              All content available on this website, including text, graphics,
              branding elements, visuals, and design materials, is the property
              of Vanologia Solutio unless otherwise stated. Unauthorized
              reproduction, distribution, or misuse of website content is
              prohibited without prior written permission.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Changes to This Policy
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              This Privacy Policy may be updated periodically to reflect changes
              in our services, website functionality, or applicable regulations.
              Any updates will be published on this page along with the revised
              &quot;Last Updated&quot; date.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Contact
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              If you have questions regarding this Privacy Policy or the
              handling of information related to this website, you may contact
              us through:
            </p>
            <ul className='list-disc list-inside leading-relaxed text-muted-foreground'>
              <li>Website: https://www.vanologiasolutio.my.id/</li>
              <li>Email: vanologiasolutioVoutlook.com</li>
              <li>Instagram: @vanologiasolutio</li>
              <li>Phone/WhatsApp: +6289523077397</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <CraftButton size='xl' asChild>
            <Link href='/'>
              <CraftButtonLabel>Back to Home</CraftButtonLabel>
              <CraftButtonIcon>
                <ArrowUpLeft className='transition-transform duration-500 group-hover:-rotate-45 text-foreground' />
              </CraftButtonIcon>
            </Link>
          </CraftButton>
        </motion.div>
      </motion.section>
    </main>
  )
}
