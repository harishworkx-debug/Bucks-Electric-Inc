import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');

console.log('--- Starting Static Site Pre-rendering (SSG) ---');

// 1. Build SSR bundle
console.log('1. Building SSR bundle with Vite...');
execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-ssr', {
  cwd: rootDir,
  stdio: 'inherit',
});

// 2. Import the compiled server entry
const ssrEntryPath = path.join(ssrDir, 'entry-server.js');
const { render, getAllRoutes } = await import(pathToFileURL(ssrEntryPath).href);

// 3. Read template index.html from dist
const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  throw new Error(`Master template not found at ${templatePath}. Run vite build first!`);
}
const template = fs.readFileSync(templatePath, 'utf-8');

// 4. Generate pre-rendered HTML for every route
const routes = getAllRoutes();
console.log(`2. Pre-rendering ${routes.length} static routes for Googlebot & crawlers...`);

for (const route of routes) {
  const { html, seo } = render(route);

  // Replace Title
  let pageHtml = template.replace(
    /<title>.*?<\/title>/i,
    `<title>${escapeHtml(seo.title)}</title>`
  );

  // Replace Meta Description
  pageHtml = pageHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`
  );

  // Replace Canonical Link (or add if missing)
  const canonicalTag = `<link rel="canonical" href="${seo.canonical}" />`;
  if (/<link\s+rel="canonical".*?\/?>/i.test(pageHtml)) {
    pageHtml = pageHtml.replace(/<link\s+rel="canonical".*?\/?>/i, canonicalTag);
  } else {
    pageHtml = pageHtml.replace('</head>', `  ${canonicalTag}\n  </head>`);
  }

  // Robots Tag
  const robotsTag = `<meta name="robots" content="${seo.noindex ? 'noindex, follow' : 'index, follow'}" />`;

  // Update OpenGraph & Twitter tags
  const ogTags = `
    ${robotsTag}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bucks Electric" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:image" content="${seo.image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${seo.image}" />
  `;

  // Inject JSON-LD Schema
  const jsonLdTag = `
    <script type="application/ld+json" data-page-jsonld="">
      ${JSON.stringify(seo.jsonLd)}
    </script>
  `;

  pageHtml = pageHtml.replace('</head>', `${ogTags}\n${jsonLdTag}\n  </head>`);

  // Inject Body Content
  pageHtml = pageHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

  // Determine destination path
  if (route === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), pageHtml, 'utf-8');
  } else {
    const routeDir = path.join(distDir, route.slice(1));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml, 'utf-8');
  }
}

// 5. Cleanup SSR directory
console.log('3. Cleaning up temporary SSR artifacts...');
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`✓ Successfully pre-rendered all ${routes.length} pages into static HTML!`);
console.log('✓ Googlebot & crawlers will now receive complete, readable HTML for every single page.');

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

