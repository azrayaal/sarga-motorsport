import { Instagram, Youtube, Twitch, Facebook } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { footerNav } from '@/data/navigation'
import { event } from '@/data/event'

const socials = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
  { label: 'Twitch', icon: Twitch, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-void">
      <div className="hazard absolute inset-x-0 top-0 h-1 opacity-90" />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-ash">
              {event.title} · {event.city}, {event.country}. {event.dateLabel}.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center border border-bone/15 text-ash transition-colors hover:border-molten hover:text-molten"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-smoke">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-ash transition-colors hover:text-bone"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-6 text-xs text-smoke sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SARGA Motorsport. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-bone">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-bone">
              Terms of Use
            </a>
            <a href="#" className="transition-colors hover:text-bone">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
