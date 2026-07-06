'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { GithubLogo, List, X } from '@phosphor-icons/react/dist/ssr'
import { Brand } from './brand'
import { clsx } from './clsx'
import { capture } from '../lib/posthog'

const PRIMARY = [
  { label: 'Sandbox', href: '/#sandbox' },
  { label: 'Patch', href: '/patch' },
  { label: 'RPC', href: '/rpc' },
  { label: 'Use cases', href: '/use-cases' },
  { label: 'Community', href: '/community' },
  { label: 'Download', href: '/download' },
  { label: 'Docs', href: '/docs' },
]

export function Nav() {
  const path = usePathname()
  const onDocs = path === '/docs' || path.startsWith('/docs/')
  const onUseCases = path === '/use-cases'
  const onPatch = path === '/patch'
  const onRpc = path === '/rpc'
  const onCloud = path === '/waitlist'
  const onDownload = path === '/download'
  const onCommunity = path === '/community' || path.startsWith('/community/')
  const onHome = path === '/'

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [path])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function isActive(href: string) {
    if (href === '/docs') return onDocs
    if (href === '/use-cases') return onUseCases
    if (href === '/patch') return onPatch
    if (href === '/rpc') return onRpc
    if (href === '/waitlist') return onCloud
    if (href === '/download') return onDownload
    if (href === '/community') return onCommunity
    if (href === '/#sandbox') return onHome
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[rgba(9,23,33,0.70)] backdrop-blur-[20px] border-b border-line" />
      <div className="relative mx-auto max-w-[1320px] h-[72px] px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="Reley home"
          className="flex items-center rounded-[6px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink shrink-0"
        >
          <Brand />
        </Link>
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-display font-bold text-[12px] uppercase tracking-[0.14em]">
          {PRIMARY.map((it) => {
            const active = isActive(it.href)
            return (
              <Link
                key={it.href}
                href={it.href}
                className={clsx(
                  'relative transition-colors',
                  active ? 'text-fore' : 'text-mute hover:text-fore',
                )}
              >
                {it.label}
                {active && (
                  <span className="absolute -bottom-[26px] left-0 right-0 h-[2px] grad-accent-bar rounded-sm" />
                )}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/waitlist"
            onClick={() => capture('cta_click', { id: 'nav_signup' })}
            className="inline-flex items-center gap-2 h-[36px] px-5 rounded-[8px] grad-cta cta-shadow text-[#031018] font-display font-bold text-[12px] uppercase tracking-[0.14em] hover:-translate-y-[1px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:translate-y-[1px]"
            aria-label="Sign up for the cloud waitlist"
          >
            Signup
          </Link>
          <a
            href="https://github.com/hoangtuanictvn/reley"
            aria-label="GitHub repository"
            className="hidden sm:inline-flex items-center justify-center h-[36px] w-[36px] rounded-[8px] text-soft hover:text-fore hover:bg-surface-1 border border-line transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <GithubLogo size={17} weight="regular" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-[36px] w-[36px] rounded-[8px] text-soft hover:text-fore hover:bg-surface-1 border border-line transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            {menuOpen ? <X size={18} weight="regular" /> : <List size={18} weight="regular" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] z-40">
          <div
            aria-hidden
            className="absolute inset-0 bg-[rgba(9,23,33,0.90)] backdrop-blur-[20px]"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative mx-auto max-w-[1320px] px-4 py-6">
            <nav className="flex flex-col gap-1">
              {PRIMARY.map((it) => {
                const active = isActive(it.href)
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={clsx(
                      'flex items-center justify-between rounded-[10px] px-4 py-3 text-[14px] font-display font-bold uppercase tracking-[0.12em] transition-colors border',
                      active
                        ? 'text-fore bg-surface-2 border-line-strong'
                        : 'text-soft hover:text-fore hover:bg-surface-1 border-line',
                    )}
                  >
                    <span>{it.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-accent blink" />}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/waitlist"
                onClick={() => capture('cta_click', { id: 'mobile_signup' })}
                className="inline-flex items-center justify-center gap-2 h-[46px] px-5 rounded-[10px] grad-cta cta-shadow text-[#031018] font-display font-bold text-[13px] uppercase tracking-[0.14em]"
              >
                Signup
              </Link>
              <a
                href="https://github.com/hoangtuanictvn/reley"
                className="inline-flex items-center justify-center gap-2 h-[46px] px-5 rounded-[10px] border border-line text-fore font-display font-bold text-[12px] uppercase tracking-[0.14em] hover:bg-surface-1 transition-colors"
              >
                <GithubLogo size={16} weight="regular" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
