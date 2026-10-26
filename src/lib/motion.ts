import type { Transition, Variants } from 'framer-motion'

// Shared animation presets so every section moves with the same rhythm.
// Only opacity and transforms are animated (GPU-composited, no layout work).

export const EASE_OUT: Transition['ease'] = [0.22, 1, 0.36, 1]

const DISTANCE = 24
const DURATION = 0.6

// Trigger slightly before the element is fully on screen, only once.
// A negative bottom margin (instead of `amount`) still fires for very tall
// elements and for elements sitting at the very bottom of the page.
export const VIEWPORT = { once: true, margin: '0px 0px -64px 0px' } as const

const reveal = (from: {
  x?: number
  y?: number
  scale?: number
}): Variants => ({
  hidden: { opacity: 0, ...from },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: DURATION, ease: EASE_OUT },
  },
})

export const fadeUp = reveal({ y: DISTANCE })
export const fadeDown = reveal({ y: -DISTANCE })
export const fadeLeft = reveal({ x: -DISTANCE })
export const fadeRight = reveal({ x: DISTANCE })
export const fadeIn = reveal({})
export const scaleIn = reveal({ scale: 0.92 })

// Parent only orchestrates timing; it never fades itself, so children
// don't get a doubled (parent × child) opacity fade.
export const stagger = (
  staggerChildren = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})
