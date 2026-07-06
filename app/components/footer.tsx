import { GithubLogo } from '@phosphor-icons/react/dist/ssr'
import { Brand } from './brand'
import { DOWNLOAD_URL } from '../lib/links'

type Link = { label: string; href: string }
const LINKS: { group: string; items: Link[] }[] = [
  {
    group: 'Product',
    items: [
      { label: 'Desktop app', href: DOWNLOAD_URL },
      { label: 'CLI', href: '/docs/cli' },
      { label: 'JSON-RPC server', href: '/docs/rpc' },
    ],
  },
  {
    group: 'Docs',
    items: [
      { label: 'Overview', href: '/docs' },
      { label: 'Install', href: '/docs/install' },
      { label: 'First sandbox', href: '/docs/first-session' },
    ],
  },
  {
    group: 'Legal',
    items: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-line sheen-1">
      <div className="mx-auto max-w-[1320px] px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12">
          <div>
            <Brand />
            <p className="mt-5 text-mute text-[13.5px] leading-[1.6] max-w-[34ch]">
              SVM sandbox for Solana programs. Built for protocol developers
              who need to test what mainnet won&apos;t let them.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://xitadel.fi"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[12.5px] text-soft hover:text-fore transition-colors"
              >
                <span className="label-tag text-mute group-hover:text-accent transition-colors">
                  Built by
                </span>
                <span className="font-display font-black text-fore tracking-[0.14em] uppercase text-[13px]">
                  Xitadel
                </span>
                <span className="text-accent">↗</span>
              </a>
              <a
                href="https://github.com/hoangtuanictvn/reley"
                className="inline-flex items-center gap-2 font-mono text-[12.5px] text-soft hover:text-fore transition-colors"
              >
                <GithubLogo size={15} weight="regular" />
                hoangtuanictvn/reley
              </a>
            </div>
          </div>
          {LINKS.map((col) => (
            <div key={col.group}>
              <div className="label-tag text-mute mb-4">{col.group}</div>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-soft hover:text-fore text-[14px] transition-colors"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 label-tag text-mute">
            <span>PolyForm Noncommercial 1.0</span>
            <a href="/privacy" className="hover:text-fore transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-fore transition-colors">
              Terms
            </a>
            <span className="hidden sm:inline text-line-strong">·</span>
            <a
              href="https://xitadel.fi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fore transition-colors"
            >
              A Xitadel product
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
