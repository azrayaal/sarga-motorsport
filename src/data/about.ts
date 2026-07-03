import type { Pillar, Stat } from '@/types'

export const aboutIntro =
  'SARGA Motorsport is Indonesia’s home for wheel-to-wheel racing. From grand-prix ' +
  'street circuits to rallycross, drift and speed series, we run a nationwide ' +
  'championship that puts homegrown talent on a world-class stage — and keeps fans ' +
  'at the heart of every round.'

/** Sits in the accent box at the bottom of the pillar column. */
export const aboutHighlight = {
  title: 'SARGA Motorsport',
  note: 'Est. 2021 · Jakarta, Indonesia',
}

export const stats: Stat[] = [
  { value: 6, label: 'Rounds / Season' },
  { value: 4, label: 'Race Disciplines' },
  { value: 6, label: 'Host Cities' },
  { value: 250, suffix: 'k', label: 'Fans / Season' },
]

export const pillars: Pillar[] = [
  {
    title: 'Multi-Discipline Racing',
    description:
      'One championship across grand prix, rallycross, drift and speed — a full ' +
      'calendar of motorsport gathered under a single banner.',
  },
  {
    title: 'Homegrown Talent',
    description:
      'A ladder for Indonesian drivers and teams, from grassroots karting to the ' +
      'national grid and the world stage beyond.',
  },
  {
    title: 'Circuits Nationwide',
    description:
      'Racing at the country’s landmark venues — from Mandalika and Sentul to ' +
      'floodlit street circuits in the capital.',
  },
  {
    title: 'Fan-First Experience',
    description:
      'Grandstands, fan zones, live music and pit access turn every round into a ' +
      'weekend built around the fans.',
  },
]
