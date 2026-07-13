import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DOMAIN = 'http://www.banasthali.org';
const SITEMAP_URL = 'http://www.banasthali.org/banasthali/wcms/en/home/sitemap/index.html';

const SEED_URLS = [
  '/banasthali/wcms/en/home/index.html',
  '/banasthali/wcms/en/home/about-us/index.html',
  '/banasthali/wcms/en/home/academics/index.html',
  '/banasthali/wcms/en/home/admissions/index.html',
  '/banasthali/wcms/en/home/admissions/fee-structure/index.html',
  '/banasthali/wcms/en/home/admissions/how-to-apply/index.html',
  '/banasthali/wcms/en/home/campus-life/index.html',
  '/banasthali/wcms/en/home/research/index.html',
  '/banasthali/wcms/en/home/placements/index.html'
];

async function fetchUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BanasthaliDocScraper/1.0'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function downloadFile(url, destPath) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) BanasthaliDocScraper/1.0'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);
    if (!res.ok) return false;
    
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    if (buffer.length < 100) return false;
    
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch {
    return false;
  }
}

async function getPagesToScrape() {
  console.log(`Discovering pages from sitemap...`);
  const links = new Set(SEED_URLS);
  const html = await fetchUrl(SITEMAP_URL);
  
  if (html) {
    const regex = /href=["']([^"']+)["']/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
      let href = match[1].replace(/;jsessionid=[^?]+/i, '');
      if (href.startsWith('/banasthali/wcms/en/home/') || href.startsWith('/wcms/en/home/')) {
        if (href.startsWith('/wcms/')) href = '/banasthali' + href;
        if (href.includes('.html')) {
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
  
  const baseParts = base.split('/');
  baseParts.pop();
  return baseParts.join('/') + '/' + relative;
}

async function run() {
  console.log('=== Banasthali Vidyapith Documents (PDF/DOC) & Notifications Scraper ===');
  const pages = await getPagesToScrape();
  console.log(`Scanning ${pages.length} pages for documents and notifications...`);
  
  const docMap = new Map(); // url -> metadata
  const notifications = [];
  const seenNotif = new Set();

  const DOC_EXTENSIONS = /\.(?:pdf|doc|docx|xls|xlsx|ppt|pptx|txt|rtf|zip)$/i;

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

      // 1. Extract Document Links (PDF, DOC, XLS, PPT, etc.)
      const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
      let match;
      while ((match = aRegex.exec(html)) !== null) {
        const href = match[1];
        let linkText = match[2].replace(/<[^>]+>/g, '').trim();
        const cleanHref = href.split('?')[0].split('#')[0];

        if (DOC_EXTENSIONS.test(cleanHref)) {
          const docUrl = resolveUrl(fullUrl, href);
          if (docUrl && !docMap.has(docUrl)) {
            const extMatch = cleanHref.match(/\.([a-z0-9]+)$/i);
            const ext = extMatch ? extMatch[1].toUpperCase() : 'DOC';
            
            if (!linkText || linkText.length < 2) {
              const parts = cleanHref.split('/');
              linkText = parts[parts.length - 1];
            }

            let category = 'General';
            if (pagePath.includes('admission')) category = 'Admissions';
            else if (pagePath.includes('academic') || pagePath.includes('course') || pagePath.includes('scheme')) category = 'Academics & Syllabi';
            else if (pagePath.includes('placement')) category = 'Placements';
            else if (pagePath.includes('research')) category = 'Research';
            else if (pagePath.includes('about')) category = 'About & Governance';

            docMap.set(docUrl, {
              remoteUrl: docUrl,
              title: linkText,
              type: ext,
              sourcePage: pageTitle,
              category: category
            });
          }
        }

        // 2. Extract Notifications / Circulars / Notice Board items
        // Check if link text mentions Notice, Notification, Circular, Result, Exam, Admission 2024/2025/2026, Schedule, or News
        const lowerText = linkText.toLowerCase();
        if ((lowerText.includes('notice') || lowerText.includes('notification') || lowerText.includes('circular') || 
             lowerText.includes('result') || lowerText.includes('schedule') || lowerText.includes('bulletin') || 
             lowerText.includes('admission') || lowerText.includes('important') || lowerText.includes('news')) && linkText.length > 8) {
          
          const notifUrl = resolveUrl(fullUrl, href);
          const notifKey = linkText + '|' + (notifUrl || '');
          
          if (!seenNotif.has(notifKey)) {
            seenNotif.add(notifKey);
            notifications.push({
              title: linkText,
              url: notifUrl || fullUrl,
              sourcePage: pageTitle,
              date: new Date().toISOString().split('T')[0],
              isDocument: DOC_EXTENSIONS.test(cleanHref),
              category: lowerText.includes('admission') ? 'Admissions' : lowerText.includes('exam') || lowerText.includes('result') ? 'Examinations' : 'General Notice'
            });
          }
        }
      }
    }));
  }

  const allDocs = Array.from(docMap.values());
  console.log(`\nFound ${allDocs.length} unique documents (PDFs, Word Docs, Excel spreadsheets)!`);
  console.log(`Found ${notifications.length} notifications, notices, and circulars!`);

  // Prepare local download folder for documents
  const publicDir = path.join(__dirname, '../public/scraped-docs');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log(`\nDownloading documents to public/scraped-docs/...`);
  let downloadedCount = 0;

  for (let i = 0; i < allDocs.length; i += 4) {
    const batch = allDocs.slice(i, i + 4);
    await Promise.all(batch.map(async (docObj, idx) => {
      const urlParts = docObj.remoteUrl.split('/');
      let filename = urlParts[urlParts.length - 1].replace(/[^a-zA-Z0-9._-]/g, '_');
      if (!filename || filename.length < 4) filename = `doc_${i + idx}.${docObj.type.toLowerCase()}`;
      
      const uniqueFilename = `${i + idx}_${filename}`;
      const destPath = path.join(publicDir, uniqueFilename);
      
      const success = await downloadFile(docObj.remoteUrl, destPath);
      if (success) {
        docObj.localPath = `/scraped-docs/${uniqueFilename}`;
        docObj.downloaded = true;
        downloadedCount++;
        console.log(`[DOWNLOADED DOC] ${docObj.localPath} (${docObj.title})`);
      } else {
        docObj.downloaded = false;
        console.log(`[FAILED DOC] ${docObj.remoteUrl}`);
      }
    }));
  }

  console.log(`\n=== Documents & Notifications Scrape Complete! ===`);
  console.log(`Successfully downloaded ${downloadedCount} documents out of ${allDocs.length} discovered.`);

  // Save JSON catalogs
  const docsJsonPath = path.join(__dirname, '../src/data/banasthali_documents.json');
  fs.writeFileSync(docsJsonPath, JSON.stringify({
    metadata: {
      scrapedAt: new Date().toISOString(),
      totalDiscovered: allDocs.length,
      totalDownloaded: downloadedCount,
      localDirectory: '/scraped-docs'
    },
    documents: allDocs
  }, null, 2));
  console.log(`Saved document catalog to ${docsJsonPath}`);

  const notifJsonPath = path.join(__dirname, '../src/data/banasthali_notifications.json');
  fs.writeFileSync(notifJsonPath, JSON.stringify({
    metadata: {
      scrapedAt: new Date().toISOString(),
      totalNotifications: notifications.length
    },
    notifications: notifications
  }, null, 2));
  console.log(`Saved notifications catalog to ${notifJsonPath}`);
}

run();
