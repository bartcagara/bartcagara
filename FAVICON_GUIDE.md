# Favicon Setup Guide

Your site currently doesn't have a favicon. Here's how to add one for perfect branding.

## What You Need

Create a simple logo/icon for your brand. Recommended: **Your initials "BC"** in your brand colors.

---

## Quick Setup (Recommended)

### 1. Create Your Favicon

Use an online tool like:
- **Favicon.io**: https://favicon.io/favicon-generator/
- **RealFaviconGenerator**: https://realfavicongenerator.net/

**Settings:**
- **Text:** BC
- **Background:** #09071D (bleu-nuit)
- **Font Color:** #FFFFFF (white)
- **Font:** Bold, modern sans-serif

---

### 2. Generate All Sizes

The tool will generate:
- `favicon.ico` (32x32)
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

---

### 3. Add to Your Project

**Next.js 13+ App Router (Easiest):**

Just add these files to `src/app/`:
```
src/app/
  ├── icon.png          (192x192)
  └── apple-icon.png    (180x180)
```

Next.js will automatically generate all favicon formats!

**OR use public folder (Traditional):**

Add to `public/`:
```
public/
  ├── favicon.ico
  ├── apple-touch-icon.png
  ├── icon-192.png
  └── icon-512.png
```

---

### 4. Update Root Layout (if using public/)

Add to `src/app/layout.tsx` in the `<head>` section:

```tsx
<head>
  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
  <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  {/* Existing meta tags... */}
</head>
```

---

## Design Recommendations

### Option 1: Text-Based (Simple)
- Text: **BC**
- Background: #09071D (bleu-nuit)
- Text Color: #FFFFFF (white)
- Font: Black/Extra Bold

### Option 2: Symbol (Advanced)
- Create a simple geometric icon representing fitness/strength
- Use brand colors: bleu-nuit (#09071D) and bleu-accent (#456D8B)

---

## Testing

After adding:

1. **Clear browser cache** (hard refresh: Cmd/Ctrl + Shift + R)
2. **Check in browser tab** - should see your icon
3. **Test on mobile** - add to home screen to see app icon
4. **Validate:** https://realfavicongenerator.net/favicon_checker

---

## File Sizes

Keep favicons small:
- `favicon.ico`: < 5KB
- `apple-touch-icon.png`: < 10KB
- `icon-192.png`: < 8KB
- `icon-512.png`: < 15KB

Use PNG with optimized compression.

---

## Next.js App Router (Automatic)

If you use the App Router method (`src/app/icon.png`), Next.js automatically:
- ✅ Generates all sizes
- ✅ Creates favicon.ico
- ✅ Adds proper meta tags
- ✅ Optimizes for performance

**Just add one file: `src/app/icon.png` (192x192)**

---

## Quick Win

**5-minute solution:**
1. Go to https://favicon.io/favicon-generator/
2. Text: "BC"
3. Background: #09071D
4. Font: Bold
5. Download ZIP
6. Add `icon.png` to `src/app/`
7. Done! ✅

---

**Your site will then have perfect branding across:**
- Browser tabs
- Bookmarks
- Mobile home screen
- Search results
- Social shares

Current status: ⚠️ No favicon (shows default browser icon)
After setup: ✅ Branded icon everywhere
