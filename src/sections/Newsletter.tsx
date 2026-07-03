import { useState } from 'react'
import type { FormEvent } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
  }

  return (
     <section
        className="relative overflow-hidden bg-molten bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-cubes.png')",
        }}
      >
      <div className="motif-diagonal absolute inset-0 opacity-20" />
      <Container className="relative py-16">
        <div className="flex flex-col items-center gap-7 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold uppercase italic text-white sm:text-5xl">
            Subscribe For The Latest Updates &amp; Exclusive Offers
          </h2>
          <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full border border-white/30 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/60 outline-none transition-colors focus:border-white"
            />
            <Button type="submit" variant="light" size="md" className="shrink-0">
              {sent ? 'Subscribed' : 'Subscribe'}
            </Button>
          </form>
          {sent && (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
              You&apos;re on the list — see you at the circuit.
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
