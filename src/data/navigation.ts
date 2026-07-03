import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { label: 'Event', href: '#event' },
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Partners', href: '#partners' },
]

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Race',
    items: [
      { label: 'Event Overview', href: '#event' },
      { label: 'Weekend Schedule', href: '#schedule' },
      { label: 'The Circuit', href: '#about' },
    ],
  },
  {
    heading: 'Plan Your Visit',
    items: [
      { label: 'Tickets', href: '#event' },
      { label: 'Hospitality', href: '#event' },
      { label: 'Getting There', href: '#about' },
    ],
  },
  {
    heading: 'Partners',
    items: [
      { label: 'Our Partners', href: '#partners' },
      { label: 'Become a Sponsor', href: '#partners' },
      { label: 'Media Enquiries', href: '#partners' },
    ],
  },
]
