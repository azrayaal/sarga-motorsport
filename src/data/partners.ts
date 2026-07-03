import type { Partner, TierGroup } from '@/types'

/**
 * Every partner in one flat list — the source of truth. The Partners
 * section groups them by tier at render time, so adding a sponsor is a
 * one-line change here.
 */
export const partners: Partner[] = [
  { name: 'Vortex Energy', wordmark: 'VORTEX', descriptor: 'Title Partner', tier: 'title' },

  { name: 'Meridian Bank', wordmark: 'MERIDIAN', tier: 'founding' },
  { name: 'Astra Auto Group', wordmark: 'ASTRA', tier: 'founding' },
  { name: 'Nusantara Air', wordmark: 'NUSANTARA', tier: 'founding' },
  { name: 'Halcyon Resorts', wordmark: 'HALCYON', tier: 'founding' },

  { name: 'Orbit Telecom', wordmark: 'ORBIT', tier: 'presenting' },
  { name: 'Forge Tyres', wordmark: 'FORGE', tier: 'presenting' },
  { name: 'Lumen Watches', wordmark: 'LUMEN', tier: 'presenting' },
  { name: 'Pacific Oil', wordmark: 'PACIFIC', tier: 'presenting' },
  { name: 'Verde Beverages', wordmark: 'VERDE', tier: 'presenting' },

  { name: 'Nimbus Cloud', wordmark: 'NIMBUS', tier: 'official' },
  { name: 'Ironclad Security', wordmark: 'IRONCLAD', tier: 'official' },
  { name: 'Solace Hotels', wordmark: 'SOLACE', tier: 'official' },
  { name: 'Kilograph Media', wordmark: 'KILOGRAPH', tier: 'official' },
  { name: 'Delta Logistics', wordmark: 'DELTA', tier: 'official' },
  { name: 'Aria Apparel', wordmark: 'ARIA', tier: 'official' },
]

const tierOrder: { tier: TierGroup['tier']; label: string }[] = [
  { tier: 'title', label: 'Title Partner' },
  { tier: 'founding', label: 'Founding Partners' },
  { tier: 'presenting', label: 'Presenting Partners' },
  { tier: 'official', label: 'Official Partners' },
]

/** Grouped view for the Partners section. Derived — never edit by hand. */
export const partnerTiers: TierGroup[] = tierOrder.map(({ tier, label }) => ({
  tier,
  label,
  partners: partners.filter((p) => p.tier === tier),
}))
