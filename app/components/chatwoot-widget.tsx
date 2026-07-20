'use client'

import { useEffect } from 'react'
import { loadChatwoot } from '../lib/chatwoot'

export function ChatwootWidget() {
  useEffect(() => {
    loadChatwoot()
  }, [])

  return null
}
