import fs from 'node:fs';
import path from 'node:path';

const routes = [
  '/',
  '/about-us',
  '/electrical-services',
  '/service-areas',
  '/contact-us',
  '/privacy-policy',
  '/terms-and-conditions',
  '/electrical-repair-rapid-city-sd',
  '/electrical-installation-rapid-city-sd',
  '/electrical-panel-upgrade-rapid-city-sd',
  '/lighting-installation-rapid-city-sd',
  '/electrical-wiring-rapid-city-sd',
  '/commercial-electrician-rapid-city-sd',
  '/electrical-troubleshooting-rapid-city-sd',
  '/outlet-and-switch-installation-rapid-city-sd',
  '/ev-charger-installation-rapid-city-sd',
  '/generator-installation-rapid-city-sd',
  '/electrician-rapid-city-sd',
  '/electrician-box-elder-sd',
  '/electrician-black-hawk-sd',
  '/electrician-summerset-sd',
  '/electrician-piedmont-sd',
  '/electrician-hill-city-sd',
  '/electrician-keystone-sd',
  '/electrician-sturgis-sd',
  '/electrician-spearfish-sd',
  '/electrician-custer-sd',
];

console.log(`--- Verifying all ${routes.length} pre-rendered pages in dist/ ---`);

let errorCount = 0;

for (const route of routes) {
  const filePath = route === '/' ? 'dist/index.html' : path.join('dist', route.slice(1), 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ MISSING FILE: ${filePath}`);
    errorCount++;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const title = content.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = content.match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1];
  const h1 = content.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const canonical = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
  const robots = content.match(/<meta\s+name="robots"\s+content="([^"]+)"/)?.[1];
  const hasJsonLd = content.includes('application/ld+json');
  const rootContent = content.match(/<div id="root">([\s\S]*?)<\/div>/)?.[1] || '';
  const hasPrerenderedHtml = rootContent.trim().length > 100;

  if (!title || !desc || !h1 || !canonical || !hasJsonLd || !hasPrerenderedHtml) {
    console.warn(`⚠️ Warning for ${route}: title=${!!title}, desc=${!!desc}, h1=${!!h1}, canonical=${!!canonical}, jsonld=${hasJsonLd}, html=${hasPrerenderedHtml}`);
    errorCount++;
  } else {
    console.log(`✅ [${route}]`);
    console.log(`   Title: ${title}`);
    console.log(`   H1: ${h1}`);
    console.log(`   Robots: ${robots}`);
    console.log(`   Size: ${content.length} bytes (HTML content: ${rootContent.length} bytes)`);
  }
}

if (errorCount === 0) {
  console.log(`\n🎉 All ${routes.length} pages verified with 100% complete titles, H1s, meta descriptions, canonicals, and raw HTML bodies!`);
} else {
  console.error(`\n❌ Found ${errorCount} errors or warnings.`);
  process.exit(1);
}
