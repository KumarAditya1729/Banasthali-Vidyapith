import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DOMAIN = 'http://www.banasthali.org';
const SITEMAP_URL = 'http://www.banasthali.org/banasthali/wcms/en/home/sitemap/index.html';
const PHOTOGALLERY_URL = 'http://www.banasthali.org/banasthali/wcms/en/home/photogallery/index.html';

const SEED_URLS = [
  '/banasthali/wcms/en/home/index.html',
  '/banasthali/wcms/en/home/about-us/index.html',
  '/banasthali/wcms/en/home/about-us/history/index.html',
  '/banasthali/wcms/en/home/about-us/vision-mission/index.html',
  '/banasthali/wcms/en/home/about-us/five-fold_education/index.html',
  '/banasthali/wcms/en/home/academics/index.html',
  '/banasthali/wcms/en/home/admissions/index.html',
  '/banasthali/wcms/en/home/campus-life/index.html',
  '/banasthali/wcms/en/home/campus-life/hostels/index.html',
  '/banasthali/wcms/en/home/campus-life/library/index.html',
  '/banasthali/wcms/en/home/campus-life/gliding-flying-club/index.html',
  '/banasthali/wcms/en/home/campus-life/equestrian/index.html',
  '/banasthali/wcms/en/home/campus-life/sports/index.html',
  '/banasthali/wcms/en/home/research/index.html',
  '/banasthali/wcms/en/home/placements/index.html',
  '/banasthali/wcms/en/home/photogallery/index.html'
];

async function fetchUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BanasthaliImageScraper/1.0'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return await res.text();
  } catch (err) {
    return null;
  }
}

async function downloadImage(url, destPath) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BanasthaliImageScraper/1.0'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);
    if (!res.ok) return false;
    
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    if (buffer.length < 1000) return false; // Skip tiny icons/1x1 tracking pixels
    
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    return false;
  }
}

async function getPagesToScrape() {
  console.log(`Discovering pages from sitemap and seeds...`);
  const links = new Set(SEED_URLS);
  const html = await fetchUrl(SITEMAP_URL);
  
  if (html) {
    const regex = /href=["']([^"']+)["']/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
      let href = match[1].replace(/;jsessionid=[^?]+/i, '');
      if (href.startsWith('/banasthali/wcms/en/home/') || href.startsWith('/wcms/en/home/')) {
        if (href.startsWith('/wcms/')) href = '/banasthali' + href;
        if (href.includes('.html') || href.includes('photogallery')) {
          links.add(href);
        }
      }
    }
  }
  return Array.from(links);
}

function resolveUrl(base, relative) {
  if (!relative) return null;
  relative = relative.trim().replace(/;jsessionid=[^?]+/i, '');
  if (relative.startsWith('http://') || relative.startsWith('https://')) return relative;
  if (relative.startsWith('//')) return 'http:' + relative;
  if (relative.startsWith('/')) return BASE_DOMAIN + relative;
  
  // Resolve relative to current path
  const baseParts = base.split('/');
  baseParts.pop(); // Remove filename
  return baseParts.join('/') + '/' + relative;
}

async function run() {
  console.log('=== Banasthali Vidyapith Image Scraper & Downloader ===');
  const pages = await getPagesToScrape();
  console.log(`Scanning ${pages.length} pages for images...`);
  
  const imageMap = new Map(); // url -> metadata

  // Also fetch photogallery specifically and look for select options or links
  const galleryHtml = await fetchUrl(PHOTOGALLERY_URL);
  if (galleryHtml) {
    // Extract any .jpg/.png/.gif in gallery
    const imgRegex = /(?:src|href|value)=["']([^"']+\.(?:jpg|jpeg|png|gif))["']/gi;
    let match;
    while ((match = imgRegex.exec(galleryHtml)) !== null) {
      const imgUrl = resolveUrl(PHOTOGALLERY_URL, match[1]);
      if (imgUrl && !isNoiseImage(imgUrl)) {
        imageMap.set(imgUrl, {
          remoteUrl: imgUrl,
          alt: 'Photo Gallery Image',
          sourcePage: 'Photo Gallery',
          category: 'gallery'
        });
      }
    }
  }

  function isNoiseImage(url) {
    const lower = url.toLowerCase();
    if (lower.includes('spcr.gif') || lower.includes('go_but.gif') || lower.includes('bullet') || 
        lower.includes('line.gif') || lower.includes('shadow') || lower.includes('logo') ||
        lower.includes('bg.gif') || lower.includes('dot.gif') || lower.includes('icon')) {
      return true;
    }
    return false;
  }

  // Scan all pages
  const BATCH_SIZE = 8;
  for (let i = 0; i < pages.length; i += BATCH_SIZE) {
    const batch = pages.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async (pagePath) => {
      const fullUrl = BASE_DOMAIN + pagePath;
      const html = await fetchUrl(fullUrl);
      if (!html) return;
      
      let pageTitle = 'Banasthali Page';
      const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
      if (titleMatch && titleMatch[1]) {
        pageTitle = titleMatch[1].replace('- Welcome to Banasthali Vidyapith', '').trim();
      }

      // Extract <img> src
      const imgTagRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let match;
      while ((match = imgTagRegex.exec(html)) !== null) {
        const src = match[1];
        const imgUrl = resolveUrl(fullUrl, src);
        if (imgUrl && !isNoiseImage(imgUrl) && !imageMap.has(imgUrl)) {
          // Try to get alt text
          let alt = '';
          const altMatch = match[0].match(/alt=["']([^"']*)["']/i);
          if (altMatch) alt = altMatch[1].trim();

          let category = 'general';
          if (pagePath.includes('about')) category = 'about';
          else if (pagePath.includes('academic')) category = 'academics';
          else if (pagePath.includes('admission')) category = 'admissions';
          else if (pagePath.includes('campus')) category = 'campus_life';
          else if (pagePath.includes('research')) category = 'research';
          else if (pagePath.includes('placement')) category = 'placements';

          imageMap.set(imgUrl, {
            remoteUrl: imgUrl,
            alt: alt || pageTitle,
            sourcePage: pageTitle,
            category: category
          });
        }
      }

      // Also check for direct links to images (<a href="...jpg">)
      const aRegex = /<a[^>]+href=["']([^"']+\.(?:jpg|jpeg|png|gif))["'][^>]*>/gi;
      while ((match = aRegex.exec(html)) !== null) {
        const imgUrl = resolveUrl(fullUrl, match[1]);
        if (imgUrl && !isNoiseImage(imgUrl) && !imageMap.has(imgUrl)) {
          imageMap.set(imgUrl, {
            remoteUrl: imgUrl,
            alt: pageTitle + ' Attachment',
            sourcePage: pageTitle,
            category: 'gallery'
          });
        }
      }
    }));
  }

  const allImages = Array.from(imageMap.values());
  console.log(`\nFound ${allImages.length} unique authentic image URLs!`);

  // Prepare local download folder
  const publicDir = path.join(__dirname, '../public/scraped-images');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log(`\nDownloading valid images to public/scraped-images/...`);
  let downloadedCount = 0;

  for (let i = 0; i < allImages.length; i += 5) {
    const batch = allImages.slice(i, i + 5);
    await Promise.all(batch.map(async (imgObj, idx) => {
      // Create clean filename
      const urlParts = imgObj.remoteUrl.split('/');
      let filename = urlParts[urlParts.length - 1].replace(/[^a-zA-Z0-9._-]/g, '_');
      if (!filename || filename.length < 4) filename = `image_${i + idx}.jpg`;
      
      // Prefix with index to ensure uniqueness
      const uniqueFilename = `${i + idx}_${filename}`;
      const destPath = path.join(publicDir, uniqueFilename);
      
      const success = await downloadImage(imgObj.remoteUrl, destPath);
      if (success) {
        imgObj.localPath = `/scraped-images/${uniqueFilename}`;
        imgObj.downloaded = true;
        downloadedCount++;
        console.log(`[DOWNLOADED] ${imgObj.localPath} (from ${imgObj.sourcePage})`);
      } else {
        imgObj.downloaded = false;
        console.log(`[FAILED/TINY] ${imgObj.remoteUrl}`);
      }
    }));
  }

  console.log(`\n=== Image Scrape & Download Complete! ===`);
  console.log(`Successfully downloaded ${downloadedCount} real images out of ${allImages.length} discovered.`);

  // Save JSON catalog
  const jsonPath = path.join(__dirname, '../src/data/banasthali_images.json');
  fs.writeFileSync(jsonPath, JSON.stringify({
    metadata: {
      scrapedAt: new Date().toISOString(),
      totalDiscovered: allImages.length,
      totalDownloaded: downloadedCount,
      localDirectory: '/scraped-images'
    },
    images: allImages
  }, null, 2));

  console.log(`Saved complete image catalog to ${jsonPath}`);
}

run();
