/**
 * Smoothly scrolls to an element by id, compensating for the fixed navbar.
 * Returns true if the element was found and scroll initiated.
 */
export function scrollToId(id: string, extraPadding = 16): boolean {
  if (typeof window === "undefined") return false;
  const el = document.getElementById(id);
  if (!el) return false;
  const nav = document.querySelector("nav");
  const navHeight = nav?.getBoundingClientRect().height ?? 0;
  const targetY =
    el.getBoundingClientRect().top + window.scrollY - navHeight - extraPadding;
  window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
  if (typeof history !== "undefined" && history.replaceState) {
    history.replaceState(null, "", `#${id}`);
  }
  return true;
}

/**
 * Returns the target id if `href` is an in-page hash link on the current
 * pathname (e.g. "#x" or "/x#y" when on "/x"), otherwise null.
 */
export function getSamePageHashId(href: string): string | null {
  if (typeof window === "undefined") return null;
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  const path = href.slice(0, hashIndex);
  const id = href.slice(hashIndex + 1);
  if (!id) return null;
  const normalized = path === "" ? window.location.pathname : path;
  return normalized === window.location.pathname ? id : null;
}
