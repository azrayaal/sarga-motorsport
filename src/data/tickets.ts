export interface TicketTier {
  id: string
  name: string
  from: number
  zone: string
  perks: string[]
  featured?: boolean
}

export const currency = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

export const ticketTiers: TicketTier[] = [
  {
    id: 'general',
    name: 'General Admission',
    from: 149,
    zone: 'Trackside Terraces',
    perks: ['3-day trackside access', 'Fan zone entry', 'Big-screen replays'],
  },
  {
    id: 'grandstand',
    name: 'Main Grandstand',
    from: 389,
    zone: 'Pit Straight',
    perks: ['Reserved seat', 'View of the grid & podium', 'Pit-straight action'],
    featured: true,
  },
  {
    id: 'club',
    name: 'Apex Club',
    from: 940,
    zone: 'Turn 1 Complex',
    perks: ['Premium seating', 'Lounge & catering', 'Fast-track entry'],
  },
  {
    id: 'paddock',
    name: 'Paddock Suite',
    from: 2450,
    zone: 'Pit Building',
    perks: ['Open bar & dining', 'Pit-lane walk', 'Driver appearances'],
  },
]
