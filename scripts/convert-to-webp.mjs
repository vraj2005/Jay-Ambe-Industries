import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const SHOULD_DELETE_PNG = process.argv.includes('--delete');

// Files in codebase that reference images
const CODE_FILES_TO_UPDATE = [
  path.resolve('data/products.ts'),
  path.resolve('components/Navbar.tsx'),
  path.resolve('components/Footer.tsx'),
  path.resolve('app/about/page.tsx'),
];

/**
 * Recursively find all .png files in a folder
 */
function getAllPngFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllPngFiles(fullPath, arrayOfFiles);
    } else if (file.toLowerCase().endsWith('.png')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function convertPngToWebp() {
  console.log('🔍 Scanning public/ directory for PNG images...');
  const pngFiles = getAllPngFiles(PUBLIC_DIR);
  console.log(`📸 Found ${pngFiles.length} PNG images to convert.\n`);

  let totalOriginalSize = 0;
  let totalConvertedSize = 0;
  let successCount = 0;

  for (const pngPath of pngFiles) {
    const webpPath = pngPath.slice(0, -4) + '.webp';
    const originalSize = fs.statSync(pngPath).size;
    totalOriginalSize += originalSize;

    try {
      await sharp(pngPath)
        .webp({ quality: 88, effort: 6 })
        .toFile(webpPath);

      const convertedSize = fs.statSync(webpPath).size;
      totalConvertedSize += convertedSize;

      const savedPercent = (((originalSize - convertedSize) / originalSize) * 100).toFixed(1);
      const relativePath = path.relative(PUBLIC_DIR, pngPath);
      console.log(`✓ ${relativePath} -> .webp (${savedPercent}% smaller)`);

      if (SHOULD_DELETE_PNG) {
        fs.unlinkSync(pngPath);
      }

      successCount++;
    } catch (err) {
      console.error(`✗ Failed to convert ${pngPath}:`, err.message);
    }
  }

  // Update references in code
  console.log('\n📝 Updating image references in codebase (.png -> .webp)...');
  for (const filePath of CODE_FILES_TO_UPDATE) {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      const updatedContent = content.replace(/\.png/g, '.webp');
      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✓ Updated: ${path.relative(process.cwd(), filePath)}`);
      }
    }
  }

  const savedMB = ((totalOriginalSize - totalConvertedSize) / (1024 * 1024)).toFixed(2);
  const totalOriginalMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
  const totalConvertedMB = (totalConvertedSize / (1024 * 1024)).toFixed(2);

  console.log('\n=============================================');
  console.log(`🎉 Conversion Completed!`);
  console.log(`• Images converted: ${successCount} / ${pngFiles.length}`);
  console.log(`• Original size:   ${totalOriginalMB} MB`);
  console.log(`• New WebP size:    ${totalConvertedMB} MB`);
  console.log(`• Bandwidth saved:  ${savedMB} MB (${(((totalOriginalSize - totalConvertedSize) / totalOriginalSize) * 100).toFixed(1)}% reduction)`);
  if (!SHOULD_DELETE_PNG) {
    console.log(`• Note: Original .png files were kept. Run with '--delete' to remove them.`);
  } else {
    console.log(`• Note: Original .png files were deleted.`);
  }
  console.log('=============================================\n');
}

convertPngToWebp();
