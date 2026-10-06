/**
 * Reference-counted body scroll lock.
 *
 * Multiple overlays (mobile menu, image modal) can request a lock at the
 * same time; the body only unlocks when every holder has released. This
 * replaces each component mutating document.body.style.overflow directly,
 * where whichever unmounted last would clobber the other's state.
 */
let lockCount = 0;

export function lockBodyScroll(): void {
  lockCount += 1;
  document.body.style.overflow = "hidden";
}

export function unlockBodyScroll(): void {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = "";
  }
}
