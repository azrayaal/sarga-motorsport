import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  /** Show the two-line event descriptor beside the mark. */
  withText?: boolean
  tone?: 'light' | 'dark'
}

/** SARGA wordmark — a pair of forward-raked speed slashes plus lettering. */
export function Logo({ className, withText = true, tone = 'light' }: LogoProps) {
  const text = tone === 'light' ? 'text-bone' : 'text-ink'
  const sub = tone === 'light' ? 'text-ash' : 'text-smoke'

  return (
    <a href="#top" className={cn('flex items-center gap-3', className)}>
      <svg viewBox="0 0 44 32" className="h-7 w-auto" aria-hidden="true">
        <path d="M2 30 L18 2 h9 L11 30 Z" fill="var(--color-molten)" />
        <path d="M20 30 L36 2 h9 L29 30 Z" fill="currentColor" className={text} />
      </svg>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className={cn('font-display text-base font-extrabold italic tracking-tight', text)}>
            SARGA
          </span>
          <span className={cn('mt-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.22em]', sub)}>
            Motorsport
          </span>
        </span>
      )}
    </a>
  )
}
