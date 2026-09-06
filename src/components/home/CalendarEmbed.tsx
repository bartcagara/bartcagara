'use client'
import { useEffect, useRef } from 'react'

const CAL_NAMESPACE = 'discovery-call'
const EMBED_ELEMENT_ID = 'my-cal-inline-discovery-call'

type CalNamespace = (action: string, options: Record<string, unknown>) => void

/**
 * Renders the inline Cal.com calendar. Assumes <CalScript /> has been mounted
 * higher in the tree (the namespace + UI config live there).
 *
 * CalScript loads via its own effect, so the namespace may not exist yet the
 * moment this mounts — we retry until it appears instead of checking once and
 * silently rendering an empty box.
 */
export function CalendarEmbed() {
  const initialized = useRef(false)

  useEffect(() => {
    let cancelled = false
    let attempts = 0

    const tryInit = () => {
      if (cancelled || initialized.current) return
      const cal = (window as { Cal?: { ns?: Record<string, CalNamespace> } }).Cal
      const ns = cal?.ns?.[CAL_NAMESPACE]
      if (ns) {
        initialized.current = true
        ns('inline', {
          elementOrSelector: `#${EMBED_ELEMENT_ID}`,
          config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
          calLink: 'bartcagara/discovery-call',
        })
        return
      }
      // Retry for up to ~30s (CalScript defines the queue shim synchronously
      // in its own effect, so in practice this resolves within a tick or two).
      attempts += 1
      if (attempts < 150) setTimeout(tryInit, 200)
    }

    tryInit()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      id={EMBED_ELEMENT_ID}
      className="w-full min-h-[700px]"
    />
  )
}
