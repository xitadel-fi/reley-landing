import { ArrowRight, BookOpen, Lightning, FileCode, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import { Reveal } from './reveal'
import { HeroParticles } from './hero-particles'
import { DOWNLOAD_URL } from '../lib/links'

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 pb-20 md:pt-36 md:pb-40 overflow-hidden"
    >
      <div className="hero-orb" />
      <div
        className="hero-halo"
        style={{ top: '18%', right: '-6%', width: '520px', height: '520px' }}
      />
      <div
        className="hero-halo"
        style={{ top: '52%', left: '-8%', width: '420px', height: '420px', animationDelay: '2.5s' }}
      />
      <div className="accent-glow absolute inset-x-0 top-0 h-[560px] pointer-events-none" />
      <HeroParticles />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1.12fr] gap-10 lg:gap-16 items-center">
          <div className="lg:pt-2">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 sheen-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green blink" />
                <span className="label-tag text-soft">LiteSVM · Local Sandbox</span>
              </div>
            </Reveal>
            <Reveal>
              <h1 className="text-fore font-display font-black text-[34px] sm:text-[42px] md:text-[58px] lg:text-[68px] leading-[1.04] tracking-[-0.028em] [text-wrap:balance]">
                Lightweight Solana mainnet
                <br />
                <span className="text-mute">on your laptop.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 sm:mt-7 max-w-[54ch] text-soft text-[15.5px] sm:text-[17.5px] leading-[1.55] [text-wrap:pretty]">
                Clone any Solana program into a local SVM sandbox. Patch PDA
                state, simulate transactions, publish a local JSON-RPC
                endpoint.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={DOWNLOAD_URL}
                  className="group inline-flex items-center gap-2 h-[48px] px-6 rounded-[10px] grad-cta cta-shadow text-[#031018] font-display font-bold text-[13.5px] uppercase tracking-[0.12em] hover:-translate-y-[1px] transition-all active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Download for macOS
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="/docs"
                  className="group inline-flex items-center gap-2 h-[48px] px-4 rounded-[10px] text-fore font-display font-bold text-[12px] uppercase tracking-[0.14em] hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent/60"
                >
                  <BookOpen size={16} weight="regular" />
                  Read the docs
                  <ArrowRight
                    size={13}
                    weight="bold"
                    className="opacity-60 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-[440px]">
                <Stat k="0.84s" v="Program cached" />
                <Stat k="47" v="Accounts hydrated" />
                <Stat k="24" v="RPC methods" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <div className="relative">
              {/* halo */}
              <div className="absolute -inset-12 rounded-[28px] bg-[radial-gradient(60%_60%_at_70%_0%,rgba(32,200,238,0.28),transparent_70%),radial-gradient(50%_60%_at_15%_60%,rgba(38,205,211,0.14),transparent_70%)] blur-2xl pointer-events-none" />

              {/* window */}
              <div className="relative float-y">
                <div className="shine-edge rounded-[16px]">
                  <div className="relative rounded-[16px] border border-line-strong sheen-1 overflow-hidden code-shadow">
                    <div className="flex items-center gap-2 px-4 h-[38px] border-b border-line bg-[rgba(9,23,33,0.55)] backdrop-blur-md">
                      <div className="flex gap-1.5">
                        <span className="h-[10px] w-[10px] rounded-full bg-[rgba(212,249,255,0.14)]" />
                        <span className="h-[10px] w-[10px] rounded-full bg-[rgba(212,249,255,0.14)]" />
                        <span className="h-[10px] w-[10px] rounded-full bg-[rgba(212,249,255,0.14)]" />
                      </div>
                      <span className="ml-3 font-mono text-[11px] text-mute">
                        reley · pamm · env/current-local-clean
                      </span>
                      <span className="ml-auto inline-flex items-center gap-1.5 font-display font-bold text-[10.5px] text-fore uppercase tracking-[0.18em]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-ping" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
                        </span>
                        live
                      </span>
                    </div>
                    <img
                      src="/docs/ui/workflow-detail.webp"
                      alt="Reley app showing a step-by-step test running on a local copy of a Solana app"
                      loading="eager"
                      className="block w-full h-auto"
                    />
                  </div>
                </div>

                {/* floating annotation chips */}
                <div className="hidden md:block">
                  <div
                    className="absolute -left-6 top-[24%] z-10 rounded-[12px] border border-line-strong sheen-1 backdrop-blur-md px-3.5 py-2.5 shadow-[0_18px_40px_-16px_rgba(2,23,33,0.7)]"
                    style={{ animation: 'float-y 9s ease-in-out infinite' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-[8px] bg-accent/15 text-accent inline-flex items-center justify-center border border-accent/25">
                        <CheckCircle size={15} weight="fill" />
                      </span>
                      <div>
                        <div className="label-tag text-mute">Cloned</div>
                        <div className="font-mono text-[12.5px] text-fore mt-0.5">
                          MET_DLMM + 47 accts
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -right-6 top-[6%] z-10 rounded-[12px] border border-line-strong sheen-1 backdrop-blur-md px-3.5 py-2.5 shadow-[0_18px_40px_-16px_rgba(2,23,33,0.7)]"
                    style={{ animation: 'float-y 8s ease-in-out infinite', animationDelay: '1.5s' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-[8px] bg-surface-2 text-soft inline-flex items-center justify-center border border-line">
                        <FileCode size={15} weight="regular" />
                      </span>
                      <div>
                        <div className="label-tag text-mute">IDL</div>
                        <div className="font-mono text-[12.5px] text-fore mt-0.5">
                          anchor v0.30.1
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -right-4 bottom-[12%] z-10 rounded-[12px] border border-line-strong sheen-1 backdrop-blur-md px-3.5 py-2.5 shadow-[0_18px_40px_-16px_rgba(2,23,33,0.7)]"
                    style={{ animation: 'float-y 10s ease-in-out infinite', animationDelay: '2.8s' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-[8px] bg-accent/12 text-accent inline-flex items-center justify-center border border-accent/25">
                        <Lightning size={15} weight="fill" />
                      </span>
                      <div>
                        <div className="label-tag text-mute">Patch</div>
                        <div className="font-mono text-[12.5px] text-fore mt-0.5">
                          pool.admin → wallet
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-l-2 border-accent/40 pl-3.5">
      <div className="font-display font-black text-[24px] text-fore tracking-[-0.02em] tabular-nums">
        {k}
      </div>
      <div className="mt-1 label-tag text-mute leading-snug">
        {v}
      </div>
    </div>
  )
}
