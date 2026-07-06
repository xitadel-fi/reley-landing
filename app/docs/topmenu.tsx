'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TOP_MENU, topKeyFor } from './nav-config'
import { clsx } from '../components/clsx'

export function TopMenu() {
  const path = usePathname()
  const active = topKeyFor(path)

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 border-b border-line bg-[rgba(9,23,33,0.70)] backdrop-blur-[20px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="flex items-center gap-1 h-[52px] overflow-x-auto">
          {TOP_MENU.map((m) => {
            const isActive = active === m.key
            return (
              <Link
                key={m.key}
                href={m.href}
                className={clsx(
                  'relative inline-flex items-center h-full px-4 font-display font-bold text-[12px] uppercase tracking-[0.12em] shrink-0 transition-colors',
                  isActive ? 'text-fore' : 'text-mute hover:text-fore',
                )}
              >
                {m.label}
                {isActive && (
                  <span className="absolute left-3 right-3 bottom-0 h-[2px] grad-accent-bar rounded-sm" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
