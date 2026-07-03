import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { navItems } from '@/data/navigation'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-bone/10 bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ash transition-colors hover:text-bone"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-molten transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button as="a" href="#event" size="sm" className="hidden sm:inline-flex">
            Buy Tickets
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-bone lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          'overflow-hidden border-t border-bone/10 bg-ink/95 backdrop-blur-md transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden',
          open ? 'max-h-96' : 'max-h-0 border-transparent',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-2xl font-bold uppercase italic text-bone"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <Button as="a" href="#event" size="md" className="w-full">
              Buy Tickets
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
