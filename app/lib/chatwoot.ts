'use client'

const BASE_URL = 'https://app.chatwoot.com'
const WEBSITE_TOKEN = 'kE6fQdvCgkWJdHycM3zqBkom'

let loaded = false

declare global {
  interface Window {
    chatwootSettings?: { position: string; type: string; launcherTitle: string }
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void
    }
  }
}

export function loadChatwoot(): void {
  if (typeof window === 'undefined' || loaded) return

  loaded = true
  window.chatwootSettings = { position: 'right', type: 'standard', launcherTitle: '' }

  const script = document.createElement('script')
  script.src = `${BASE_URL}/packs/js/sdk.js`
  script.async = true
  script.onload = () => {
    window.chatwootSDK?.run({ websiteToken: WEBSITE_TOKEN, baseUrl: BASE_URL })
  }
  document.head.appendChild(script)
}
