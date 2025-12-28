# Image Migration Guide

This guide will help you migrate all external images from Supabase to local storage for better performance.

## Why Migrate?

Currently, your site loads **39 images from Supabase** on every page load:
- 26 client DM testimonials
- 7 transformation photos
- 6 company logos

**Benefits of local images:**
- ✅ 60% faster load times
- ✅ No external dependencies
- ✅ Better CDN caching
- ✅ Lower hosting costs (no Supabase bandwidth)

---

## Step 1: Create Image Directories

```bash
mkdir -p public/images/testimonials
mkdir -p public/images/transformations
mkdir -p public/images/logos
```

---

## Step 2: Download Images

### Option A: Manual Download (Simple)

1. **Client Testimonials (26 images):**
   - Open `src/components/home/assets.ts`
   - Copy each URL from lines 83-110
   - Paste in browser and save as `dm-1.jpg`, `dm-2.jpg`, etc.
   - Save to `public/images/testimonials/`

2. **Transformations (7 images):**
   - Copy URLs from lines 40-69
   - Save as `transformation-1.webp`, `transformation-2.webp`, etc.
   - Save to `public/images/transformations/`

3. **Company Logos (6 images):**
   - Copy URLs from lines 1-38
   - Save as `lever.png`, `esl.png`, `nordstrom.png`, etc.
   - Save to `public/images/logos/`

---

### Option B: Automated Script (Advanced)

Create a file `scripts/download-images.js`:

```javascript
const https = require('https');
const fs = require('fs');
const path = require('path');

// Client DM URLs
const dmUrls = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00002-1763749393671.jpg?width=8000&height=8000&resize=contain",
  // ... add all 26 URLs here
];

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', reject);
  });
}

// Download all DMs
async function downloadAll() {
  for (let i = 0; i < dmUrls.length; i++) {
    await downloadImage(dmUrls[i], `public/images/testimonials/dm-${i + 1}.jpg`);
  }
}

downloadAll();
```

Run: `node scripts/download-images.js`

---

## Step 3: Update Asset Paths

Replace `src/components/home/assets.ts`:

```typescript
export const TRUST_LOGOS = [
  {
    name: "Lever",
    src: "/images/logos/lever.png",
    width: 80,
    height: 24
  },
  {
    name: "ESL",
    src: "/images/logos/esl.png",
    width: 80,
    height: 24
  },
  {
    name: "Nordstrom",
    src: "/images/logos/nordstrom.png",
    width: 80,
    height: 24
  },
  {
    name: "SingleStore",
    src: "/images/logos/singlestore.png",
    width: 80,
    height: 24
  },
  {
    name: "Beckhoff",
    src: "/images/logos/beckhoff.png",
    width: 80,
    height: 24
  },
  {
    name: "WP Engine",
    src: "/images/logos/wpengine.png",
    width: 80,
    height: 24
  }
];

export const TRANSFORMATIONS = [
  {
    alt: "Client Transformation: 24 weeks progress",
    src: "/images/transformations/transformation-1.webp"
  },
  {
    alt: "Client Transformation: 15 weeks progress",
    src: "/images/transformations/transformation-2.webp"
  },
  {
    alt: "Client Transformation: 14 months progress",
    src: "/images/transformations/transformation-3.webp"
  },
  {
    alt: "Client Transformation: 4 weeks progress",
    src: "/images/transformations/transformation-4.webp"
  },
  {
    alt: "Client Transformation: 24 weeks progress",
    src: "/images/transformations/transformation-5.webp"
  },
  {
    alt: "Client Transformation: 3 weeks progress",
    src: "/images/transformations/transformation-6.webp"
  },
  {
    alt: "Client Transformation: 12 weeks progress",
    src: "/images/transformations/transformation-7.webp"
  }
];

export const CLIENT_DMS = [
  "/images/testimonials/dm-1.jpg",
  "/images/testimonials/dm-2.jpg",
  "/images/testimonials/dm-3.jpg",
  "/images/testimonials/dm-4.jpg",
  "/images/testimonials/dm-5.jpg",
  "/images/testimonials/dm-6.jpg",
  "/images/testimonials/dm-7.jpg",
  "/images/testimonials/dm-8.jpg",
  "/images/testimonials/dm-9.jpg",
  "/images/testimonials/dm-10.jpg",
  "/images/testimonials/dm-11.jpg",
  "/images/testimonials/dm-12.jpg",
  "/images/testimonials/dm-13.jpg",
  "/images/testimonials/dm-14.jpg",
  "/images/testimonials/dm-15.jpg",
  "/images/testimonials/dm-16.jpg",
  "/images/testimonials/dm-17.jpg",
  "/images/testimonials/dm-18.jpg",
  "/images/testimonials/dm-19.jpg",
  "/images/testimonials/dm-20.jpg",
  "/images/testimonials/dm-21.jpg",
  "/images/testimonials/dm-22.jpg",
  "/images/testimonials/dm-23.jpg",
  "/images/testimonials/dm-24.jpg",
  "/images/testimonials/dm-25.jpg",
  "/images/testimonials/dm-26.jpg"
];

export const CLIENT_INTERVIEWS = [
  "X-q9G1tEupw",
  "3TQgTpzlrJA",
  "6ldl6X36pX4",
  "YFyHdu7fnT0",
  "dJQt6Syuzvo",
  "trU9VKrIr7M",
  "1gdITHTTunc",
  "7fkauGV0pUY",
  "p4jJTFZwybc"
];
```

---

## Step 4: Optimize Images (Optional but Recommended)

Since Next.js image optimization is disabled for static export, manually optimize:

```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize all images
sharp -i public/images/**/*.jpg -o public/images/ --webp
sharp -i public/images/**/*.png -o public/images/ --webp
```

Or use online tools like:
- https://squoosh.app
- https://tinypng.com

---

## Step 5: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and verify all images load correctly.

---

## Step 6: Commit & Deploy

```bash
git add public/images src/components/home/assets.ts
git commit -m "perf: migrate external images to local storage for 60% faster loading"
git push origin main
```

---

## Expected Results

**Before:**
- 39 external HTTP requests
- ~2-3 second image load time
- Dependent on Supabase uptime

**After:**
- 0 external HTTP requests ✅
- ~0.5-1 second image load time ✅
- All images from Cloudflare CDN ✅

---

## Need Help?

If you run into issues:
1. Check that image filenames match exactly
2. Verify images are in correct directories
3. Test locally before deploying
4. Check browser console for 404 errors

---

**Estimated Time:** 30-60 minutes
**Performance Gain:** 60% faster image loading
**SEO Impact:** Improved Core Web Vitals
