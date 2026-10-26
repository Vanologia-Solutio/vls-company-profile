'use client'

import { MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'

export function MotionProvider({ children }: { children: ReactNode }) {
  // Respect the OS "reduce motion" setting: transforms are skipped,
  // opacity fades still run.
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>
}
