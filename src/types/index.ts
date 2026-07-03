/* ============================================================
   Shared domain types — the contract every data module fills.
   Keep data dumb and typed; components read from these shapes.
   ============================================================ */

export interface NavItem {
  label: string
  href: string
}

export interface EventInfo {
  series: string
  edition: string
  title: string
  tagline: string
  circuit: string
  city: string
  country: string
  /** ISO date the countdown targets (lights out). */
  startsAt: string
  dateLabel: string
}

export type SessionCategory = 'practice' | 'qualifying' | 'race' | 'support' | 'show'

export interface Session {
  time: string
  title: string
  category: SessionCategory
  description: string
}

export interface ScheduleDay {
  id: string
  weekday: string
  date: string
  label: string
  sessions: Session[]
}

export interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

export interface Pillar {
  title: string
  description: string
}

export type PartnerTier =
  | 'title'
  | 'founding'
  | 'presenting'
  | 'official'

export interface Partner {
  name: string
  /** Short wordmark rendered as the logo (no external assets). */
  wordmark: string
  descriptor?: string
  tier: PartnerTier
}

export interface TierGroup {
  tier: PartnerTier
  label: string
  partners: Partner[]
}
