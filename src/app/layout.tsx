import FloatingWhatsAppButton from '@/components/common/floating-whatsapp-button'
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Bebas_Neue, Courgette, Heebo } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const courgette = Courgette({
  weight: ['400'],
  variable: '--font-courgette',
  subsets: ['latin'],
})

const bebasneue = Bebas_Neue({
  weight: ['400'],
  variable: '--font-bebasneue',
  subsets: ['latin'],
})

const heebo = Heebo({
  variable: '--font-heebo',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vanologia Solutio | Your Digital Transformation Partner',
  description:
    'Transform your business with cutting-edge digital solutions. We deliver innovative technology for modern enterprises.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${courgette.variable} ${bebasneue.variable} ${heebo.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <NextTopLoader
            color='#CA2424'
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing='ease'
            speed={200}
            zIndex={99999}
          />
          <Header />
          {children}
          <Footer />
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
