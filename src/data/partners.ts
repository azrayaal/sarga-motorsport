import type { Partner, TierGroup } from '@/types'

/**
 * Every partner in one flat list — the source of truth. The Partners
 * section groups them by tier at render time, so adding a sponsor is a
 * one-line change here.
 */
export const partners: Partner[] = [
  { name: 'Pertamina', wordmark: 'PERTAMINA', descriptor: 'Title Partner', tier: 'title' },

  { name: 'Bank Mandiri', wordmark: 'MANDIRI', tier: 'founding' },
  { name: 'Astra International', wordmark: 'ASTRA', tier: 'founding' },
  { name: 'Telkomsel', wordmark: 'TELKOMSEL', tier: 'founding' },
  { name: 'Garuda Indonesia', wordmark: 'GARUDA', tier: 'founding' },

  { name: 'Gojek', wordmark: 'GOJEK', tier: 'presenting' },
  { name: 'Tokopedia', wordmark: 'TOKOPEDIA', tier: 'presenting' },
  { name: 'Bank BCA', wordmark: 'BCA', tier: 'presenting' },
  { name: 'Indomie', wordmark: 'INDOMIE', tier: 'presenting' },
  { name: 'Aqua', wordmark: 'AQUA', tier: 'presenting' },

  { name: 'Eiger', wordmark: 'EIGER', tier: 'official' },
  { name: 'Erigo', wordmark: 'ERIGO', tier: 'official' },
  { name: 'Polytron', wordmark: 'POLYTRON', tier: 'official' },
  { name: 'Kapal Api', wordmark: 'KAPAL API', tier: 'official' },
  { name: 'Traveloka', wordmark: 'TRAVELOKA', tier: 'official' },
  { name: 'Kompas', wordmark: 'KOMPAS', tier: 'official' },
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
