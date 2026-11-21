# Website redesign checklist (Website Lead, started 2026-11-21)

Brief: `docs/redesign-brief.md` (8 Nov) and HQ Lead's task of 21 Nov (Bart: "Yes, start it", board B-8).
Branch: `claude/website-redesign-16cbf0`. Nothing goes live or to main without Bart's yes.
Method copied from getstack.to: `~/Desktop/hq/05_stack/evidence/2026-11/landing-claude-design/`.
Working files: `docs/redesign/`. Tick each item in the commit that finishes it; add new items the moment they are found.

## 1. Measure (the bar)
- [x] Last 90 days: homepage visitors, how many reach a booking page, how many book (PostHog 97157, Cal.com) → `docs/redesign/baseline-2026-11-21.md`
- [x] Check the helper's numbers myself (re-run the key queries): 136 visitors → 2 booked, confirmed

## 2. Fable round 1
- [x] `copywriting-lens.md`: a section for web pages (hero, page order, a cold visitor's awareness)
- [x] `rules.md`: one line pointing to it
- [x] Big idea and positioning for the homepage
- [x] 3-4 hero headlines set against "Founders' Last Restart", why each converts better
- [x] Page order (him, the stakes, why it kept ending, client proof, the offer)
- [x] The quiz as a second door beside "Book a Restart Audit"
- [x] First name on /brief: test or not
- [x] Check every Fable claim and quote against its source

## 3. Bart's picks (one at a time, each with my pick)
- [x] Pick 1 put to Bart (2026-11-21): the hero, keep the headline, new line under it, proof on the first screen (board B-9). Bart asked whether it had been judged by the masters → Fable round 2 (`docs/redesign/fable-round-2-hero.md`), new pick put to him: "Get in shape one last time."
- [ ] First-screen proof: Ben F.'s conference message (23 Oct: closing party, long flight, weight held), Dan W.'s work-trip line as the fallback (already public). Ben's mirror voice note (20 Nov) for lower on the page. Bart, 21 Nov: no need to ask Ben; nameless, trimmed by cutting only (board B-10). Client words: HQ `02_clients/_private/testimonials/2026-11-21_homepage-proof-candidates.md` and `2026-11-20_ben-f_voice-note_mirror.md`
- [ ] Pick 2: the big idea and the line that stays (nine-months screenshot on the site, or Drew W.'s line)
- [ ] Pick 3: page order, incl. new "why it kept ending" section and "when things calm down" answer
- [ ] Pick 4: quiz as second door (yes; link under hero button + block after "why it kept ending")
- [ ] Pick 5: no first-name field on /brief
- [ ] Pick 6: lines the records don't back ("Trusted by the guys who built", "50+ founders coached", "10-15 lbs" in weeks 1-4, CFO "12%" is 12.7%, "most of the men I coach read for months", price answer vs booking form)

## 4. Claude Design
- [ ] Two homepage openings side by side, desktop and phone: (A) current look elevated, (B) Fable's free proposal
- [ ] Bart picks a look; it goes on every page (/brief, /book, /quiz too if B)
- [ ] Whole page built; branch preview link for his phone

## 5. Full copy pass
- [ ] Fable rewrites every section
- [ ] Cold reviewer: ten tests and the 17 slop tells on every line
- [ ] Every number, quote and claim traced to a source
- [x] Each client line on the page: Bart, 21 Nov: "We can use anything to make the website the best possible." Client lines from private chats stay nameless.
- [ ] Retired lines replaced: `src/data/homepage-content.ts` 145 ("never sticks") and 178 ("for good")

## 6. Live
- [ ] Bart's final yes
- [ ] Merge, deploy (confirm how: Cloudflare), verify live on phone and desktop
- [ ] Quiz door added to the homepage once /quiz is live (footer chat owns /quiz until then)
- [ ] Measure bookings for two weeks after; report to Bart and HQ Lead

## Found along the way
- 2026-11-21 (HQ Lead): client names in docs as First L. only (docs go to GitHub); private client words live in `docs/redesign/_private-*` (gitignored). Before any client line goes live: one-line question to Bart, "Ask <client> if this line can go on the homepage, without his name?" (voice.md rule 13). Early commits with full names squashed before any push.
- 2026-11-21: no named event on the Book buttons (autocapture only). Add `book_click` with the button's place on the page in the new build, so the new page can be compared click for click.
- 2026-11-21: deploy = Cloudflare Pages builds from main (git history "Retry the Pages build"); README's "Netlify" is out of date. A push to main is a deploy. Branch previews: confirm the Pages project name before the preview step.
