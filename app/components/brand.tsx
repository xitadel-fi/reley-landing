import { clsx } from './clsx'

export function Brand({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-3 font-display font-black text-[18px] tracking-[0.14em] uppercase',
        className,
      )}
    >
      <RelayMark size={34} />
      <span className="text-fore">RELEY</span>
    </span>
  )
}

/**
 * Reley mark — cyan "R" glyph with teal accent dot inside a subtle sheen tile.
 * Retains the R + dot composition of the original mark, restyled to the
 * Xitadel palette: #20C8EE R, #26CDD3 dot, translucent white-alpha tile.
 */
export function RelayMark({
  size = 22,
  variant = 'flat',
}: {
  size?: number
  variant?: 'flat' | 'gradient'
}) {
  const gradId = `reley-r-grad-${size}`
  const rFill = variant === 'gradient' ? `url(#${gradId})` : '#20C8EE'
  const dotFill = variant === 'gradient' ? '#72E1EE' : '#26CDD3'
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className="shrink-0"
      fill="none"
    >
      <rect
        x="0.5"
        y="0.5"
        width="63"
        height="63"
        rx="14"
        fill="rgba(212,249,255,0.04)"
        stroke="rgba(212,249,255,0.14)"
      />
      <path
        fill={rFill}
        fillRule="evenodd"
        d="M18 16h17.5c6.4 0 10.5 3.7 10.5 9.5 0 4.2-2.1 7.4-5.8 8.8L48 48h-9l-7-12h-5v12H18V16zm9 8v6h8c2.1 0 3.4-1.1 3.4-3s-1.3-3-3.4-3h-8z"
      />
      <circle cx="49" cy="15" r="3.5" fill={dotFill} />
      {variant === 'gradient' && (
        <defs>
          <linearGradient id={gradId} x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BCDA" />
            <stop offset="1" stopColor="#72E1EE" />
          </linearGradient>
        </defs>
      )}
    </svg>
  )
}
