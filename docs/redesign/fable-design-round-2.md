# Homepage design, round 2 (Fable as art director, 21 Nov 2026)

For the Website Lead and the builder. I opened all 56 round-1 screenshots and the build source. Copy is untouched. Sizes are CSS px (the phone shots are 2x). Nothing committed.

## 1. Verdict

Round 1 is one design shown twice. Same type, same header, same photo, same boxes; B only swaps grey bands for rules and bleeds some pictures. Both are tidy and neither would be remembered. Three things hold both back: the proof is staged without care (five lead messages at five different text sizes, nine webcam frames in nine colour casts), every object wears the same border-plus-shadow so nothing is more important than anything else, and the best thing in the hero photo is cropped out on a phone.

**Phone, A**
- `A-phone-01` Lands: photo, two-tone headline, read in two seconds. Wrong: 56px of header (name, unapproved line, an avatar of the face that is 40px below it). The crop stops at the boy's chest, so you lose the one detail that tells the story: father and son both have their hands in their pockets. Headline is tracked so tight the word spaces close ("Getinshape"); same on every heading. Button bottom sits at 677px, cut off on a 664px-tall screen.
- `A-phone-02` The navy band with "Weight stayed at exactly 200." is the one confident screen in round 1. "Shirt off" below it should be the quietest screen on the page and is set like any other; "In a minute." has no weight.
- `A-phone-03` Message text is about 13px next to 18px body, inside three nested dark boxes (bubble, wallpaper, border), bubbles sliced at both edges. The grey band (#F6F7F9) is too close to white to see.
- `A-phone-04`, `-05` MJ's poster catches him blank. White play squares sit on ten faces like stickers. MJ is there twice. Nine rooms, nine colour casts: reads cheap, not like a wall. The two before/afters are the strongest pictures on the page.
- `A-phone-06`, `-07` Phil's message is at 26px, twice Drew's. The message row puts an unreadable 9px thread beside a 20px one. The testimonial card has dead space under the text.
- `A-phone-08`, `-09` The longest run with nothing to look at (about 1.5 screens of list). The 01-02-03 squares on a line are any software site's "how it works". Adrian's message (17px text) is the best-staged message; copy that scale everywhere.
- `A-phone-10`, `-11` The headshot is bigger than the hero and reads LinkedIn. The numbers card looks like a spreadsheet; 24px is not "the numbers large".
- `A-phone-12`, `-13` The close leads with a before/after photo; the fixed copy leads with the lake message. The pale band is washed out. The footer rule collides with the band edge (`A-phone-13`, y 540).

**Phone, B** (only where it differs)
- `B-phone-03`, `-06`, `-08`, `-10` Messages sit at a 10px gutter while text sits at 20px, and the shadow runs off the right edge of the screen. The shadow is navy on a navy picture, so it disappears.
- `B-phone-04` Best phone screen of the round: video and faces edge to edge is a wall. It also puts MJ directly under MJ. `B-phone-05` MJ's quote comes after nine other men, cut off from his video.
- `B-phone-07` 180px hole inside the testimonial card. `B-phone-11` "A YEAR LATER" and "LDL cholesterol" both wrap: cramped.

**Desktop**
- `A-desktop-01`, `-02` and `B-desktop-01`, `-02` The hero is about 1,200px tall: the second screen is trouser legs, grass and blank white. The photo file is 800x1200 and is drawn 720 to 840px wide, so it is soft on any modern screen. `B-desktop-01` is still the best frame of the round because it shows both pairs of hands in pockets.
- `A-desktop-05` The wall becomes a filmstrip of nine 120px tiles. `B-desktop-05`, `-06` Tiles at 240px from a 240px source: this is the softness. MJ's head is cropped at the top and he sits next to himself.
- `A-desktop-06`, `B-desktop-07`, `-09`, `-10` Messages blown up to 520 to 680px wide with 30 to 38px text: billboards. Drew's call message is taller than the screen.
- `B-desktop-08`, `-11` Three left edges in one view (56, 186, 380/420). `A-desktop-08` step numbers on one screen, their text on the next. `A-desktop-11` questions stop at 820px with the right third empty.
- `B-desktop-15` Closing headline breaks into five lines across two screens. `A-desktop-09` (message left, caption and button right) is the best desktop moment.

## 2. The real B: "Labelled like his clients"

**The idea.** Bart's before/after photos already have a format nobody else has: two halves, a navy label on top ("24 WEEKS"), BC in the corner. B makes the whole page speak in that format. Every picture, message and video carries the same navy label saying who or when, and everything that is a then-and-now is drawn as two halves. No header, no bands, no decoration: a white page, pictures edge to edge, labels, and his words.

**Signature device: the plate.** Navy #09071D rectangle, sharp corners, white Inter 800 capitals, 11px phone / 12px desktop, letter-spacing 0.06em, padding 7px 10px. It sits on the top-left corner of an object, overlapping the top edge by 12px (top-centre on two-half objects, matching the burned-in ones). It only ever holds words already in the fixed copy:
hero photo "BART CAGARA" · Ben's quote "BEN F., FOUNDER" · messages "DREW W., CEO", "PHIL D.", "ADRIAN K., GROUP CFO" · video "MJ H." · steps "WEEKS 1-4", "WEEKS 5-12", "WEEKS 13-24" · numbers "LDL CHOLESTEROL", "TESTOSTERONE". The second half of each name line ("the day after a call", "on vacation", "co-founder, former college athlete") stays as text under the object: 15px/22px phone, 16px/24px desktop, #456D8B. The dash-and-name pattern goes.

**Type (Inter only; phone / desktop).** All headings: weight 900, letter-spacing -0.03em, word-spacing 0.06em.
| | Phone | Desktop |
|---|---|---|
| H1 | 44/44 | 96/92 |
| Client's line (Ben F.) | 48/48 | 112/106 |
| H2 | 36/38 | 64/64 |
| Closer lines ("Then you fire me." at H2 size; "My son is watching.", "He's not exaggerating.", "In a minute.") | 26/30, 800 | 40/44 |
| MJ's quote | 24/30, 700 | 36/44 |
| Body, full ink #09071D, never grey | 18/28 | 21/32, max 560px wide |
| Step rows | 17/26 | 18/28 |
| Card numbers | 56, 900 | 72 |
| Button, capitals | 15, 800, 56 tall, full width (350) | 16, 60 tall, padding 0 32 |
The biggest type on the page is a client's sentence, not Bart's headline. That is on purpose.

**Colour.** White ground from top to the last section. Ink #09071D: text, plates, 2px borders. #456D8B: second line of the H1 and footer line, every shadow, context lines, the "then" numbers. #E8EFF5: the "then" half of a two-half card, hairlines. One navy screen only: the last section (#09071D ground, white type, white button with #456D8B shadow). #0A1A32 is the button hover. #1B415D is not used on this page.

**Space.** Phone gutter 20px for everything, no exceptions. Between sections 96px phone / 160px desktop; the two type-only screens (Ben F., "Shirt off") get 128 / 200. Picture to heading 32; heading to body 20; paragraphs 16; body to button 32. Desktop: 1,200px wide, 12 columns, 24px gaps.

**Rule for pictures.** A picture that touches both screen edges has no border and no shadow. Anything else gets a 2px ink border (photos, cards) or none (dark message screenshots) and a hard shadow in #456D8B: 6px phone, 8px desktop.

**Hero, phone.** No header bar. Photo edge to edge, 390x360, `object-position: 50% 6%`, and it must show from Bart's hair to the boy's hands in his pockets (in the 800x1200 file: y 60 to y 760). Plate "BART CAGARA" 20px in from the top-left. Then 20px, H1 (two lines, second in #456D8B), 12px, subhead, 20px, button, 10px, "45 minutes, on video, with me." Test at 390x664: the whole button is visible. If it is not, shorten the photo to no less than 340; never shrink type.
**Hero, desktop.** Total height 100svh, capped at 820. Photo in columns 1-5 at 480x720 (the file cannot go wider; see section 4), uncropped, plate on its corner, 8px shadow. Text in columns 7-12, bottom-aligned with the photo. Ben F. is the next screen: first sentence at 24px, his line at 112px from column 1, plate and context line under.

**Desktop grid rule, the second thing that makes it his: evidence left, Bart right.** Columns 1-5 hold what someone showed or said (message, photo, video). Columns 7-12 hold Bart's words. Section 2 leaves the left empty on purpose: the picture is the reader's own kids. In section 4 the right stays empty beside Phil's message: Bart says nothing there. One left edge for evidence (column 1), one for text (column 7), no third.

**Messages.** Crop each lead screenshot to the bubbles plus 10px of wallpaper. Scale each so its text reads 16px (plus or minus 1) on screen: all five the same. Phone: 310px wide, hard against the left gutter with 40px of air on the right, the way an incoming message sits in a chat. Desktop: 400px wide, never more. Keep the real timestamp. No border, blue shadow, plate on the corner.

**Section rhythm, phone.** (P = picture edge to edge, M = message, W = words only.)
1. P hero, W. Then W: Ben F.
2. W: "Shirt off". Heading, four lines, 128px of air above and below. "In a minute." alone at 26px.
3. M Drew, H2, body, button.
4. H2. P: MJ's video at 16:9 with plate; his quote directly under it. Then the faces: 8 tiles, 4 across, 2 rows, 2px gaps, edge to edge (97px each), first name and initial at 11px under each. P: the two before/afters stacked, 2px gap, no frame. M: Phil. Then the three swipe rows.
5. M Drew, H2, the one line, three step cards (2px border, shadow, plate with the weeks, "01" at 32px in #456D8B beside the name at 28px, items as rows split by 1px #E8EFF5 lines, no dashes; a 2px ink line 24px tall joins the cards at left 40px). "Then you fire me." M Adrian, caption, button.
6. P: headshot at 390x312, `object-position: 50% 25%`. H2, body. Numbers as two two-half cards, 350x132 each, 12px apart: 2px border, shadow, split down the middle by a 2px ink line, left half #E8EFF5 with "THEN" (11px capitals) and the number in #456D8B, right half white with "A YEAR LATER" and the number in ink, plate top-centre. It is his before/after format made of numbers. Body, closer, link.
7. W: H2, three rows, 2px ink line on top, 1px lines between, plus sign turns 45 degrees when open.
8. Navy. Lead image, H2, line, closer, white button. Footer on white.
Desktop keeps the order: sections 3, 5, 6, 8 as evidence left / words right, top-aligned; section 4 video in columns 1-8 with the quote in 9-12 bottom-aligned, eight faces in one row, before/afters side by side; section 7 heading left, questions right; step cards three across.

**Motion, CSS only.** (1) Landing: an object with a shadow enters lifted (`translate(-6px,-6px)`, shadow 12px) and settles to rest (shadow 6px) once, 280ms ease-out, using `animation-timeline: view()` inside `@supports`; browsers without it show the rest state. (2) Button: hover and press move it 4px into its shadow. (3) Face tiles go from grey to colour on hover and focus, 150ms. Nothing else moves; all of it off under `prefers-reduced-motion`.

**What carries to /brief, /book, /quiz.** Inter, the five bleu colours, sharp corners, the hard offset shadow, the button, the two-tone headline once per page. New and shared: the plate, the picture rule, the type scale.

## 3. A: from clean to premium, inside its own language

1. Headings: letter-spacing -0.045em to -0.03em, word-spacing 0.06em. Opens the word spaces on every heading.
2. One shadow: the build mixes 2, 3 and 4px in two colours. Objects 6px phone / 8px desktop in #456D8B, buttons 4px #456D8B. Never a navy shadow on a dark picture.
3. Three grounds only: white, #E8EFF5, #09071D. Drop #F6F7F9. Navy twice, as bookends: Ben F.'s quote and the last section.
4. One spacing step for sections: 96 phone / 144 desktop (today 48 to 128).
5. A keeps its framed look, so frame the hero too on a phone: photo inset 20px, 2px border, 6px shadow, 350x340, same hands-in-pockets crop. That is the honest difference from B (framed objects on bands against bare pictures on white).
6. Desktop hero: 100svh capped at 820, photo cropped (`object-position: 50% 8%`), no legs-and-grass second screen.
7. Messages: same rules as B (16px apparent text, 350 wide phone, 420 desktop, cropped to the bubbles). Phil's goes left-aligned on the grid, not centred.
8. Numbers card: numbers at 44px phone / 56 desktop; stack the label over the two numbers on a phone so nothing wraps.
9. Steps: desktop row text 18px, not 16; numbers and their text on one screen (40px under the one line, not 100).
10. Testimonial cards: height from content, name 20px under the text, text 17px. Swipe rows: one tile height (360 phone / 320 desktop), width from the picture's own shape.
11. Questions on desktop: heading in columns 1-5, questions in 6-12.
12. Footer rule: 48px of white between the band and the rule.

## 4. Fixes for both

- **Header.** Remove "Fitness Coach to Founders" and the avatar. A: "BART CAGARA" alone, 14px, 800, 48px bar, no rule. B: no bar; the name is the plate on the photo. If a line is ever wanted there, the only approved one is the footer's "Founder's pace. Athlete's body."; I would leave it in the footer.
- **MJ twice.** Drop tile `3TQgTpzlrJA`. Eight tiles: 4x2 on a phone, one row of eight on desktop.
- **Soft thumbnails.** The files are 480x360 and the client is the left half: 240px of picture. So: never draw a tile wider than 130px (97 on a phone); zoom each to 230% width so the black bars on five of them fall outside the tile; `filter: grayscale(1) contrast(1.08)` on all eight, which hides the blur and the nine colour casts at once and makes MJ's colour video the one thing that stands out. Nothing downloaded.
- **Play marks.** Remove the white squares. Large video: one 56px navy square with a white triangle, flush in the bottom-left corner. Tiles: a 20px navy corner with a white triangle.
- **MJ's poster.** Without making a new image: `preload="metadata"` and `#t=<seconds>` on the video source to start on a frame where he looks at the camera. Pick the second by eye. Check on an iPhone.
- **Large video crop.** 16:9, whole head in frame, never cropped to a square (`B-desktop-05`).
- **Clipped.** Message shadows off the right edge (`B-phone-03`, `-06`); sliced bubbles (`A-phone-03`); table wraps (`B-phone-11`); closing headline (`B-desktop-15`: 64px, max 4 lines).
- **Body text is never grey** and never under 17px.

## Not confirmed, and where I looked

- **A larger hero photo.** Only `public/images/home/bart-and-son-2.webp` (800x1200) exists in the repo. If Bart has the original, both heroes can go bigger on desktop. Not looked for outside the repo.
- **Button wording (a fix, not a question).** The build says "BOOK RESTART AUDIT". The fixed copy and `fable-round-1.md` line 66 (the wording Bart approved for every button) say "Book a Restart Audit". Put the "a" back on all four buttons. I did not open the quiz code to check `BOOK_BUTTON` itself.
- **The closing image.** Copy: the lake message (`dm-6`). Build: a before/after photo, presumably because the sender's name is not on file. The man in it (bald, red beard, "24 WEEKS") looks like MJ H. again; judged by eye only. Lead's call.
- **Names under the eight faces.** Still not on file; round 1 shows none.
- **Phone fold.** 390x664 is my assumption for the visible screen; nobody has measured Bart's readers' phones.
- **`animation-timeline: view()`** on current iPhone Safari: not tested. The fallback is the still page.
