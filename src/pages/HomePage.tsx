import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Marquee } from '@/components/ui/Marquee'
import { Hero } from '@/sections/Hero'
import { Event } from '@/sections/Event'
import { About } from '@/sections/About'
import { Schedule } from '@/sections/Schedule'
import { Partners } from '@/sections/Partners'
import { Newsletter } from '@/sections/Newsletter'

const marqueeItems = [
  'Lights Out November 20',
  'Sarga Street Circuit',
  '21 Corners',
  'Night Racing',
  'Like Nothing Before',
  '3 Days · 1 Winner',
]

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <div className="border-y border-bone/10 bg-carbon py-4">
          <Marquee items={marqueeItems} />
        </div>
        <Event />
        <About />
        <Schedule />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
