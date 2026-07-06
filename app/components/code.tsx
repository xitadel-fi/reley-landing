import type { ReactNode } from 'react'

type Tok = { t: string; c?: 'cmd' | 'flag' | 'arg' | 'str' | 'kw' | 'fn' | 'num' | 'cm' | 'p' | 'op' }

function color(c?: Tok['c']) {
  switch (c) {
    case 'cmd': return 'text-[#72E1EE]'
    case 'flag': return 'text-[rgba(212,249,255,0.55)]'
    case 'arg': return 'text-[#D4F9FF]'
    case 'str': return 'text-[#24D1B1]'
    case 'kw': return 'text-[#26CDD3]'
    case 'fn': return 'text-[#72E1EE]'
    case 'num': return 'text-[#D0B053]'
    case 'cm': return 'text-[rgba(212,249,255,0.35)] italic'
    case 'p': return 'text-[#20C8EE]'
    case 'op': return 'text-[rgba(212,249,255,0.45)]'
    default: return 'text-[rgba(212,249,255,0.6)]'
  }
}

export function CodeLine({ tokens, indent = 0 }: { tokens: Tok[]; indent?: number }) {
  return (
    <div className="font-mono text-[12.5px] leading-[1.7] whitespace-pre">
      {' '.repeat(indent)}
      {tokens.map((tok, i) => (
        <span key={i} className={color(tok.c)}>{tok.t}</span>
      ))}
    </div>
  )
}

export function TerminalFrame({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`code-shadow rounded-[var(--radius-lg)] overflow-hidden sheen-1 border border-line ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-[rgba(9,23,33,0.55)] backdrop-blur-md">
        <div className="flex gap-1.5">
          <span className="h-[10px] w-[10px] rounded-full bg-[rgba(212,249,255,0.14)]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[rgba(212,249,255,0.14)]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[rgba(212,249,255,0.14)]" />
        </div>
        <span className="ml-3 font-mono text-[11px] text-mute">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}
