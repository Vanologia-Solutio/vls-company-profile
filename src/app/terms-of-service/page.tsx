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
    <main className='py-16 sm:py-24 bg-linear-to-b from-accent/15 via-accent/30 to-background'>
      <motion.section
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        id='terms-of-service'
        className='max-w-6xl mx-auto px-4 space-y-6'
      >
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <TagBadge
            icon='NotepadText'
            label='Terms of Service'
            className='mb-4'
          />
          <motion.h1 variants={itemVariants}>Terms of Service</motion.h1>
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
            Welcome to Vanologia Solutio. These Terms of Service govern your
            access to and use of this website and any related services provided
            by Vanologia Solutio. By accessing or using this website, you agree
            to comply with these terms. If you do not agree with any part of
            these Terms of Service, please discontinue the use of this website.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Use of the Website
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              This website is intended to provide information about Vanologia
              Solutio, including our services, portfolio, contact channels, and
              digital solutions offerings. Users may access and use the website
              for lawful purposes only.
            </p>
            <p>
              You agree not to misuse the website, attempt unauthorized access,
              disrupt website functionality, or use the website in any way that
              may harm Vanologia Solutio or other users.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Services and Project Agreements
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              Vanologia Solutio provides services related to web development,
              SaaS and digital platforms, visual and graphic design, as well as
              data and analytics solutions.
            </p>
            <p>
              All projects, collaborations, timelines, pricing, deliverables,
              revisions, and ownership details are subject to separate
              discussions, proposals, quotations, or written agreements between
              Vanologia Solutio and the client.
            </p>
            <p>
              Information presented on this website does not constitute a
              binding service agreement unless otherwise stated in a formal
              contract or proposal.
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
              All content available on this website, including but not limited
              to text, branding, graphics, visuals, logos, layouts, and design
              elements, is the intellectual property of Vanologia Solutio unless
              otherwise stated.
            </p>
            <p>
              Users may not reproduce, distribute, modify, republish, or
              commercially use any website content without prior written
              permission.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Third-Party Links
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              This website may contain links to third-party services and
              platforms, including WhatsApp, Instagram, email services, and
              other external websites.
            </p>
            <p>
              Vanologia Solutio is not responsible for the availability,
              content, privacy practices, or policies of any third-party
              platforms accessed through external links provided on this
              website.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Disclaimer
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              The information provided on this website is intended for general
              informational purposes only. While we strive to keep information
              accurate and up to date, Vanologia Solutio makes no guarantees
              regarding the completeness, accuracy, reliability, or availability
              of any content on the website.
            </p>
            <p>
              All services, recommendations, and digital solutions may vary
              depending on project scope, technical limitations, client
              requirements, and agreed deliverables.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Limitation of Liability
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              Vanologia Solutio shall not be held liable for any indirect,
              incidental, consequential, or business-related losses resulting
              from the use of this website, external platforms, or reliance on
              information presented on this website.
            </p>
            <p>
              Users access and use this website at their own discretion and
              risk.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h4 variants={itemVariants} className='leading-loose'>
            Modifications to the Terms
          </motion.h4>
          <motion.div variants={itemVariants} className='space-y-2.5'>
            <p>
              Vanologia Solutio reserves the right to modify or update these
              Terms of Service at any time without prior notice. Updated
              versions will be published on this page along with the revised
              &quot;Last Updated&quot; date.
            </p>
            <p>
              Continued use of the website after any changes constitutes
              acceptance of the updated terms.
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
