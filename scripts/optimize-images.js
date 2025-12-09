const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
    const publicDir = path.join(__dirname, '../public');

    const images = [
        { input: 'fat.jpg', output: 'fat.webp' },
        { input: 'fit.jpg', output: 'fit.webp' }
    ];

    for (const img of images) {
        const inputPath = path.join(publicDir, img.input);
        const outputPath = path.join(publicDir, img.output);

        try {
            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);

            const inputStats = fs.statSync(inputPath);
            const outputStats = fs.statSync(outputPath);
            const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);

            console.log(`✓ ${img.input} → ${img.output}`);
            console.log(`  ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% reduction)`);
        } catch (error) {
            console.error(`✗ Error processing ${img.input}:`, error.message);
        }
    }

    console.log('\n✓ Image optimization complete!');
}

optimizeImages();
