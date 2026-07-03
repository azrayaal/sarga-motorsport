import type { Pillar, Stat } from '@/types'

export const aboutIntro =
  'SARGA Motorsport brings top-tier wheel-to-wheel racing to the heart of the city. ' +
  'A floodlit street circuit, three days of on-track action and a festival built ' +
  'around the sport — engineered from the ground up to be like nothing before.'

export const stats: Stat[] = [
  { value: 5.1, suffix: ' km', label: 'Circuit Length' },
  { value: 21, label: 'Corners' },
  { value: 340, suffix: ' km/h', label: 'Top Speed' },
  { value: 120, suffix: 'k', label: 'Weekend Capacity' },
]

export const pillars: Pillar[] = [
  {
    title: 'The Circuit',
    description:
      'Twenty-one corners threading the downtown grid, from tight hairpins to a ' +
      '1.2 km flat-out straight past the waterfront.',
  },
  {
    title: 'Night Racing',
    description:
      'Every session runs under permanent floodlighting, turning the skyline into ' +
      'the backdrop for the fastest cars on the planet.',
  },
  {
    title: 'The Festival',
    description:
      'Grandstands, fan zones, live music and pit-lane access wrap three days of ' +
      'racing into a single motorsport weekend.',
  },
  {
    title: 'The Legacy',
    description:
      'A ten-year commitment to the city — building talent, jobs and a home for ' +
      'the championship for a generation of fans.',
  },
]
