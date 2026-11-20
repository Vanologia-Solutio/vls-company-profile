import { cn } from '@/lib/utils'
import { clients } from '@/shared/data/clients'
import Image from 'next/image'

interface TrustedByProps {
  className?: string
}

// Infinite horizontal marquee. The list is rendered twice and the track is
// shifted by -50%, so the loop is seamless. Pure CSS: pauses on hover and
// stops entirely for users who prefer reduced motion.
export function TrustedBy({ className }: TrustedByProps) {
  // Only clients with a logo are shown; hide the strip until one is set.
  const withLogo = clients.filter(client => client.logo)
  if (withLogo.length === 0) return null

  const items = [...withLogo, ...withLogo]

  return (
    <div className={cn('w-full space-y-4', className)}>
      <div className='group relative overflow-hidden mask-x-from-85% mask-x-to-100%'>
        <ul className='flex w-max animate-marquee motion-reduce:animate-none'>
          {items.map((client, i) => (
            <li
              key={`${client.name}-${i}`}
              aria-hidden={i >= withLogo.length}
              className='mx-6 sm:mx-10 flex items-center shrink-0'
            >
              <Image
                src={client.logo}
                alt={client.name}
                // Remote URLs need intrinsic dimensions; the rendered size
                // comes from the classes below (fixed height, auto width).
                {...(typeof client.logo === 'string' && {
                  width: 160,
                  height: 40,
                })}
                // Dark mode: grayscale + invert flips dark logos to light while
                // keeping the tonal contrast between their parts (no flat
                // silhouette); hover restores the original colours.
                className='h-8 sm:h-10 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-75 dark:invert dark:hover:invert-0'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
