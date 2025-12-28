#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting automated image migration...\n');

// Image URLs from Supabase
const LOGOS = [
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_5-1763745254207.png?width=8000&height=8000&resize=contain", name: "lever.png" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_7-1763745253676.png?width=8000&height=8000&resize=contain", name: "esl.png" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_4-1763745253679.png?width=8000&height=8000&resize=contain", name: "nordstrom.png" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_6-1763745253724.png?width=8000&height=8000&resize=contain", name: "singlestore.png" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_1-1763745253708.png?width=8000&height=8000&resize=contain", name: "beckhoff.png" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_2-1763745253710.png?width=8000&height=8000&resize=contain", name: "wpengine.png" }
];

const TRANSFORMATIONS = [
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image_7-1763739441227.webp?width=8000&height=8000&resize=contain", name: "transformation-1.webp" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image_1-1763739441227.webp?width=8000&height=8000&resize=contain", name: "transformation-2.webp" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image_5-1763739441212.webp?width=8000&height=8000&resize=contain", name: "transformation-3.webp" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image_2-1763739441220.webp?width=8000&height=8000&resize=contain", name: "transformation-4.webp" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image_3-1763739441230.webp?width=8000&height=8000&resize=contain", name: "transformation-5.webp" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image_4-1763739441227.webp?width=8000&height=8000&resize=contain", name: "transformation-6.webp" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image_6-1763739441232.webp?width=8000&height=8000&resize=contain", name: "transformation-7.webp" }
];

const DMS = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00002-1763749393671.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00012-1763749485245.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00001-1763749393635.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00003-1763749393641.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00004-1763749393664.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00005-1763749393724.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00006-1763749393858.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00007-1763749393807.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00008-1763749393772.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00009-1763749393843.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00010-1763749393855.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00011-1763749485163.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00013-1763749485133.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00014-1763749485150.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00015-1763749485145.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00016-1763749485143.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00017-1763749485183.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00018-1763749485166.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00019-1763749485192.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00020-1763749485198.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00021-1763749558727.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00022-1763749558736.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00023-1763749558738.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00024-1763749558740.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00025-1763749558750.jpg?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/dm-screenshot-00026-1763749558750.jpg?width=8000&height=8000&resize=contain"
];

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

// Main function
async function migrateImages() {
  try {
    // Create directories
    console.log('📁 Creating directories...');
    const dirs = [
      'public/images/logos',
      'public/images/transformations',
      'public/images/testimonials'
    ];

    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`   ✓ Created ${dir}`);
      }
    });

    console.log('\n📥 Downloading images...\n');

    // Download logos
    console.log('🏢 Logos (6 images):');
    for (let i = 0; i < LOGOS.length; i++) {
      const filepath = path.join('public/images/logos', LOGOS[i].name);
      process.stdout.write(`   [${i+1}/6] ${LOGOS[i].name}... `);
      await downloadImage(LOGOS[i].url, filepath);
      console.log('✓');
    }

    // Download transformations
    console.log('\n💪 Transformations (7 images):');
    for (let i = 0; i < TRANSFORMATIONS.length; i++) {
      const filepath = path.join('public/images/transformations', TRANSFORMATIONS[i].name);
      process.stdout.write(`   [${i+1}/7] ${TRANSFORMATIONS[i].name}... `);
      await downloadImage(TRANSFORMATIONS[i].url, filepath);
      console.log('✓');
    }

    // Download DMs
    console.log('\n💬 Client Testimonials (26 images):');
    for (let i = 0; i < DMS.length; i++) {
      const filepath = path.join('public/images/testimonials', `dm-${i+1}.jpg`);
      process.stdout.write(`   [${i+1}/26] dm-${i+1}.jpg... `);
      await downloadImage(DMS[i], filepath);
      console.log('✓');
    }

    // Update assets.ts
    console.log('\n📝 Updating assets.ts...');
    const newContent = `export const TRUST_LOGOS = [
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
`;

    fs.writeFileSync('src/components/home/assets.ts', newContent);
    console.log('   ✓ Updated src/components/home/assets.ts');

    console.log('\n✅ Migration complete!\n');
    console.log('📊 Summary:');
    console.log('   • Downloaded 6 company logos');
    console.log('   • Downloaded 7 transformation images');
    console.log('   • Downloaded 26 client testimonial DMs');
    console.log('   • Updated assets.ts with local paths');
    console.log('\n🎉 All 39 images are now local!');
    console.log('\n🧪 Next steps:');
    console.log('   1. Test locally: npm run dev');
    console.log('   2. Check that all images load at http://localhost:3000');
    console.log('   3. Commit: git add -A && git commit -m "perf: migrate external images to local storage"');
    console.log('   4. Push: git push origin main\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

migrateImages();
