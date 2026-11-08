import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://www.buckselectricsd.com';
const TODAY = new Date().toISOString().split('T')[0];

// Static core pages
const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about-us', changefreq: 'monthly', priority: '0.8' },
  { path: '/electrical-services', changefreq: 'weekly', priority: '0.9' },
  { path: '/service-areas', changefreq: 'weekly', priority: '0.9' },
  { path: '/contact-us', changefreq: 'monthly', priority: '0.8' },
];

// Extract services slugs from services.ts
const servicesContent = fs.readFileSync(path.join(rootDir, 'src', 'data', 'services.ts'), 'utf-8');
const serviceSlugs = [...servicesContent.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

// Extract area slugs from areas.ts
const areasContent = fs.readFileSync(path.join(rootDir, 'src', 'data', 'areas.ts'), 'utf-8');
const areaSlugs = [...areasContent.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

// Legal pages
const legalPages = [
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
`;

for (const page of staticPages) {
  xml += `  <url>
    <loc>${BASE_URL}${page.path === '/' ? '/' : page.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

xml += `
  <!-- Electrical Services in Rapid City, SD -->
`;
for (const slug of serviceSlugs) {
  xml += `  <url>
    <loc>${BASE_URL}/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

xml += `
  <!-- Black Hills & South Dakota Service Areas -->
`;
for (const slug of areaSlugs) {
  xml += `  <url>
    <loc>${BASE_URL}/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${slug.includes('rapid-city') ? '0.85' : '0.8'}</priority>
  </url>
`;
}

xml += `
  <!-- Legal & Policy Pages -->
`;
for (const page of legalPages) {
  xml += `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

xml += `</urlset>
`;

const outputPath = path.join(rootDir, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');
console.log(`Successfully generated sitemap.xml with ${staticPages.length + serviceSlugs.length + areaSlugs.length + legalPages.length} URLs at ${outputPath}`);

