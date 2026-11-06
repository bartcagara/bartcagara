'use client'
import { useEffect, useRef } from 'react'
import { CAL_LINK, bootCal, getCalNamespace } from '@/lib/cal'

const EMBED_ELEMENT_ID = 'my-cal-inline-discovery-call'
/* Cal's booker takes a couple of seconds to draw; start about a screen ahead. */
const NEAR_MARGIN = '800px 0px'

/**
 * Renders the inline Cal.com calendar, loading Cal.com itself: on /book and
 * /brief/confirmed at once, the calendar being what the visitor came for.
 * bootCal() defines the namespace synchronously.
 *
 * `loadWhenNear` (the home page's last section) waits until the visitor has
 * scrolled close to it, so it is ready when he arrives and nothing goes to
 * Cal.com for anyone who doesn't get there.
 *
 * `forwardUtm` hands the page's utm_* parameters to the booker, so Cal.com
 * keeps them on the booking (/book uses it).
 */
export function CalendarEmbed({
  forwardUtm = false,
  loadWhenNear = false,
}: { forwardUtm?: boolean; loadWhenNear?: boolean } = {}) {
  const initialized = useRef(false)

  useEffect(() => {
    const load = () => {
      if (initialized.current) return
      initialized.current = true
      bootCal()
      const utm = forwardUtm
        ? Object.fromEntries(
            [...new URLSearchParams(window.location.search)].filter(([key]) => key.startsWith('utm_'))
          )
        : {}
      getCalNamespace()?.('inline', {
        elementOrSelector: `#${EMBED_ELEMENT_ID}`,
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', ...utm },
        calLink: CAL_LINK,
      })
    }

    const element = document.getElementById(EMBED_ELEMENT_ID)
    if (!loadWhenNear || !element) {
      load()
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect()
          load()
        }
      },
      { rootMargin: NEAR_MARGIN }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [forwardUtm, loadWhenNear])

  return (
    <div
      id={EMBED_ELEMENT_ID}
      className="w-full min-h-[700px]"
    />
  )
}
