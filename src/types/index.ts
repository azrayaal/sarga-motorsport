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

export type EventStatus = 'Registration Open' | 'Selling Fast' | 'Coming Soon'

export interface SeasonEvent {
  id: string
  title: string
  /** Discipline tag shown top-left (e.g. "Grand Prix", "Rallycross"). */
  category: string
  status: EventStatus
  /** Display date, e.g. "20 Nov 2026". */
  dateLabel: string
  /** ISO date the per-card countdown targets. */
  startsAt: string
  venue: string
  /** Price label, e.g. "IDR 250k" or "Free". */
  priceFrom: string
  /** Local cover asset. */
  image: string
  /** Where the card links to. */
  href: string
  featured?: boolean
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

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  /** Local cover asset (mirrored from news.sarga.co). */
  image: string
  /** Full article URL on news.sarga.co. */
  href: string
}
