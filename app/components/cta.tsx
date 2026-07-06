import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { Reveal } from './reveal'
import { DOWNLOAD_URL } from '../lib/links'

export function CTA() {
  return (
    <section id="download" className="relative py-20 md:py-48 border-t border-line overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-[520px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(32,200,238,0.20), transparent 70%)',
        }}
      />
      <div
        className="hero-halo"
        style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '640px', height: '640px' }}
      />
      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-fore font-display font-black text-[34px] sm:text-[44px] md:text-[64px] lg:text-[72px] leading-[1] tracking-[-0.03em] [text-wrap:balance]">
            Stop testing
            <br />
            <span className="text-mute">against production.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-7 text-soft text-[17px] leading-[1.6] max-w-[58ch] mx-auto [text-wrap:pretty]">
            Source under PolyForm Noncommercial 1.0. macOS today. Windows and
            Linux next.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-5">
            <a
              href={DOWNLOAD_URL}
              className="group inline-flex items-center gap-2 h-[52px] px-7 rounded-[10px] grad-cta cta-shadow text-[#031018] font-display font-bold text-[14px] uppercase tracking-[0.12em] hover:-translate-y-[1px] transition-all active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Download for macOS
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/docs"
              className="group inline-flex items-center gap-1.5 h-[52px] text-fore font-display font-bold text-[12px] uppercase tracking-[0.14em] hover:text-accent transition-colors"
            >
              Read the docs
              <ArrowRight size={13} weight="bold" className="opacity-60 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 label-tag text-mute">
            Apple Silicon + Intel · macOS 12+
          </div>
        </Reveal>
      </div>
    </section>
  )
}
