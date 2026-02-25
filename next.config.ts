import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rexrvbbxzcvutieztyao.supabase.co',
      },
    ],
  },
}

export default nextConfig
