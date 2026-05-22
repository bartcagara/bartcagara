'use client'
import { useEffect } from 'react'

/**
 * Renders the inline Cal.com calendar. Assumes <CalScript /> has been mounted
 * higher in the tree (the namespace + UI config live there).
 */
export function CalendarEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.textContent = `
      if (window.Cal && window.Cal.ns && window.Cal.ns["discovery-call"]) {
        Cal.ns["discovery-call"]("inline", {
          elementOrSelector: "#my-cal-inline-discovery-call",
          config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
          calLink: "bartcagara/discovery-call"
        });
      }
    `
    document.head.appendChild(script)
    return () => { script.remove() }
  }, [])

  return (
    <div
      id="my-cal-inline-discovery-call"
      className="w-full min-h-[700px]"
    />
  )
}
