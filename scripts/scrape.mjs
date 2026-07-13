import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DOMAIN = 'http://www.banasthali.org';
const SITEMAP_URL = 'http://www.banasthali.org/banasthali/wcms/en/home/sitemap/index.html';

// Comprehensive seed URLs covering all major university sections
const SEED_URLS = [
  '/banasthali/wcms/en/home/index.html',
  '/banasthali/wcms/en/home/about-us/index.html',
  '/banasthali/wcms/en/home/about-us/history/index.html',
  '/banasthali/wcms/en/home/about-us/vision-mission/index.html',
  '/banasthali/wcms/en/home/about-us/five-fold-education/index.html',
  '/banasthali/wcms/en/home/about-us/management/index.html',
  '/banasthali/wcms/en/home/about-us/honours-awards/index.html',
  '/banasthali/wcms/en/home/academics/index.html',
  '/banasthali/wcms/en/home/academics/courses/index.html',
  '/banasthali/wcms/en/home/academics/curriculum/index.html',
  '/banasthali/wcms/en/home/admissions/index.html',
  '/banasthali/wcms/en/home/admissions/fee-structure/index.html',
  '/banasthali/wcms/en/home/admissions/how-to-apply/index.html',
  '/banasthali/wcms/en/home/admissions/faq/index.html',
  '/banasthali/wcms/en/home/campus-life/index.html',
  '/banasthali/wcms/en/home/campus-life/hostels/index.html',
  '/banasthali/wcms/en/home/campus-life/library/index.html',
  '/banasthali/wcms/en/home/campus-life/gliding-flying-club/index.html',
  '/banasthali/wcms/en/home/campus-life/equestrian/index.html',
  '/banasthali/wcms/en/home/campus-life/sports/index.html',
  '/banasthali/wcms/en/home/research/index.html',
  '/banasthali/wcms/en/home/research/aim-act/index.html',
  '/banasthali/wcms/en/home/placements/index.html',
  '/banasthali/wcms/en/home/placements/recruiters/index.html'
];

async function fetchUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BanasthaliScraper/1.0'
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

async function getSitemapLinks() {
  console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
  const links = new Set(SEED_URLS);
  const html = await fetchUrl(SITEMAP_URL);
  
  if (html) {
    const regex = /href=["']([^"']+)["']/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
      let href = match[1];
      // Remove session ID like ;jsessionid=...
      href = href.replace(/;jsessionid=[^?]+/i, '');
      if (href.startsWith('/banasthali/wcms/en/home/') || href.startsWith('/wcms/en/home/')) {
        if (href.startsWith('/wcms/')) {
          href = '/banasthali' + href;
        }
        if (href.includes('.html') && !href.includes('photogallery')) {
          links.add(href);
        }
      }
    }
  } else {
    console.warn('Could not fetch sitemap HTML, relying on comprehensive seed URLs.');
  }
  return Array.from(links);
}

function extractCleanText(html) {
  // Extract Title
  let title = 'Banasthali Page';
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch && titleMatch[1]) {
    title = titleMatch[1].replace('- Welcome to Banasthali Vidyapith', '').trim();
  }

  // Strip scripts, styles, comments, and headers/navigation
  let clean = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<div[^>]*id=["'](?:newheader|uppermenu|leftnav|footer)["'][^>]*>[\s\S]*?<\/div>/gi, ' ');

  // Strip HTML tags
  clean = clean.replace(/<[^>]+>/g, '\n');

  // Decode HTML entities
  clean = clean
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Clean and deduplicate lines
  const lines = clean.split('\n')
    .map(l => l.trim())
    .filter(l => {
      // Filter out short links or menu noise
      if (l.length < 30) return false;
      if (l.includes('DOWNLOADS') || l.includes('PHOTOGALLERY') || l.includes('SITEMAP') || l.includes('FEEDBACK')) return false;
      if (l.includes('var GB_') || l.includes('function(') || l.includes('gtag(')) return false;
      return true;
    });

  const uniqueLines = [...new Set(lines)];
  return { title, text: uniqueLines.join('\n\n') };
}

async function scrapePage(urlPath) {
  const fullUrl = BASE_DOMAIN + urlPath;
  const html = await fetchUrl(fullUrl);
  if (!html) {
    console.warn(`[SKIP] Could not load: ${urlPath}`);
    return null;
  }

  const { title, text } = extractCleanText(html);
  if (text.length < 50) {
    console.warn(`[SKIP] Not enough text content: ${urlPath}`);
    return null;
  }

  console.log(`[SUCCESS] Scraped: ${title} (${urlPath})`);
  return {
    url: fullUrl,
    path: urlPath,
    title: title,
    content: text
  };
}

async function run() {
  console.log('=== Banasthali Vidyapith Complete Web Scraper (Zero-Dependency) ===');
  const allLinks = await getSitemapLinks();
  console.log(`\nDiscovered ${allLinks.length} unique pages to scrape.`);
  
  const results = {
    metadata: {
      scrapedAt: new Date().toISOString(),
      totalPagesScraped: 0,
      sourceDomain: BASE_DOMAIN
    },
    sections: {
      about: [],
      academics: [],
      admissions: [],
      campus_life: [],
      research: [],
      placements: [],
      other: []
    }
  };

  let count = 0;
  // Scrape in batches of 4
  const BATCH_SIZE = 4;
  for (let i = 0; i < allLinks.length; i += BATCH_SIZE) {
    const batch = allLinks.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(batch.map(link => scrapePage(link)));
    
    for (const res of batchResults) {
      if (res) {
        count++;
        // Categorize into sections
        if (res.path.includes('about-us') || res.path.includes('about')) {
          results.sections.about.push(res);
        } else if (res.path.includes('academics')) {
          results.sections.academics.push(res);
        } else if (res.path.includes('admissions')) {
          results.sections.admissions.push(res);
        } else if (res.path.includes('campus-life') || res.path.includes('campus')) {
          results.sections.campus_life.push(res);
        } else if (res.path.includes('research')) {
          results.sections.research.push(res);
        } else if (res.path.includes('placements') || res.path.includes('recruiter')) {
          results.sections.placements.push(res);
        } else {
          results.sections.other.push(res);
        }
      }
    }
  }

  results.metadata.totalPagesScraped = count;
  console.log(`\n=== Scrape Complete! Successfully extracted ${count} pages across all university sections. ===`);

  const legacyPath = path.join(__dirname, '../src/data/legacyData.json');
  const completePath = path.join(__dirname, '../src/data/banasthali_complete_data.json');
  
  fs.writeFileSync(legacyPath, JSON.stringify(results, null, 2));
  fs.writeFileSync(completePath, JSON.stringify(results, null, 2));
  
  console.log(`\nSaved structured JSON data to:\n1. ${completePath}\n2. ${legacyPath}`);
}

run();
