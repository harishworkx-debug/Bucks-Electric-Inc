# Initial Technical & Local SEO Audit Report
**Website:** [https://www.buckselectricsd.com/](https://www.buckselectricsd.com/)  
**Client:** Buck's Electric Inc  
**Address:** 1720A Samco Rd, Rapid City, SD 57702  
**Phone:** +1 605-343-5630  
**Audit Date:** November 2026  
**Auditor:** Senior Technical SEO Specialist & Local SEO Strategist  

---

## 1. Executive Summary

This initial audit evaluated the search engine discoverability, crawlability, indexing health, local search presence, and on-page technical performance of **Buck's Electric Inc** (`https://www.buckselectricsd.com/`). 

Buck's Electric Inc is an authentic, licensed electrical contractor based in Rapid City, South Dakota, operating from a physical shop at 1720A Samco Rd and holding a verified **4.8-star rating across 9 genuine Google reviews**. The business possesses substantial real-world credibility—including praise for master technicians Dale and Dana on commercial showroom installations, whole-home rewiring, and service panel replacements.

However, the initial technical audit revealed severe architectural and structural barriers that prevented Googlebot, Bingbot, and inspection tools from indexing the site's content.

### High-Level Audit Findings
| Category | Baseline State | Severity | Impact |
| :--- | :--- | :--- | :--- |
| **Rendering / Hydration** | Client-side only React (Vite SPA) returning empty `<div id="root"></div>` | **Critical** | Crawlers and inspection services received a fetch error or blank page; body content was unreadable. |
| **Metadata Consistency** | All 27 pages rendered identical default `<title>`: `Buck's Electric Inc \| Electrician in Rapid City, SD` | **Critical** | Massive duplicate title issue across all service and location URLs. |
| **Server Routing** | Direct sub-page refresh on Vercel/Netlify returned HTTP 404 Not Found | **Critical** | Any user or crawler accessing a deep URL directly received a 404 error. |
| **Google Maps URL** | Broken or unresolved link string in codebase | **High** | Lost local citation equity and review trust signals. |
| **Sitemap Structure** | Initial audit noted 25 URLs; true URL inventory is 27 distinct canonical routes | **Medium** | Needed synchronization between sitemap, canonical tags, and robots directives. |
| **Internal Linking** | Weak cross-linking; potential cannibalization between `/` and `/electrician-rapid-city-sd` | **High** | Diluted topical authority and internal PageRank flow. |
| **Structured Data** | Basic LocalBusiness schema lacked detailed reviews, geo-coordinates, and Service schemas | **Medium** | Missing rich snippet opportunities in search engine results pages (SERPs). |

---

## 2. Technical SEO & Architecture Audit

### 2.1 The React / Vite Client-Side Rendering Problem
When search engines or inspection tools requested deep routes such as `https://www.buckselectricsd.com/electrical-panel-upgrade-rapid-city-sd`, the server returned only the raw `index.html` application shell:
```html
<!doctype html>
<html lang="en">
  <head>
    <title>Buck's Electric Inc | Electrician in Rapid City, SD</title>
    <!-- Default metadata -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
#### Impact:
1. **Google Rendering Queue Delay**: While Googlebot can execute JavaScript, JS rendering is relegated to a second-wave rendering queue. If JavaScript execution timed out or failed, Google indexed a blank page.
2. **Third-Party Inspection Failures**: SEO crawlers, social scrapers (Facebook, LinkedIn, iMessage), and non-Google search engines (Bing, DuckDuckGo) do not fully render client-side JavaScript, reporting "fetch error" and unreadable page bodies.
3. **Duplicate Titles in Raw HTML**: Because the document `<title>` was only updated via client-side DOM manipulation (`document.title`), raw HTML requests for all 27 pages returned the exact same homepage title.

### 2.2 Server-Side Routing & HTTP Status (The 404 Error)
Single-page React applications handle routing in the browser via the HTML5 History API. When a user or crawler directly requested `https://www.buckselectricsd.com/service-areas`, the web server looked for a physical file at `/service-areas/index.html`. Because that file did not exist on the static file server, the platform returned a **404 Not Found** response.
* **Resolution Requirement**: Implement platform rewrite rules (`vercel.json` and `public/_redirects`) to forward all route requests to `index.html` while simultaneously establishing static pre-rendering (SSG) so that physical, crawlable HTML files exist for every URL.

### 2.3 Canonical URL & Domain Protocol Consistency
* **Canonical Format**: Every URL must specify a self-referencing canonical tag pointing to `https://www.buckselectricsd.com/<path>`.
* **Trailing Slashes**: Inconsistent trailing slashes (`/service-areas/` vs `/service-areas`) cause duplicate content issues if both resolve with 200 status codes.
* **Protocol & Subdomain Redirection**: HTTP must redirect (301) to HTTPS, and non-www (`buckselectricsd.com`) must permanently redirect (301) to www (`www.buckselectricsd.com`).

---

## 3. URL Architecture & Sitemap Audit

Recounting the complete website inventory reveals **27 distinct URLs** (not 25 as originally estimated in early audits):

### Complete URL Breakdown
1. **Core Hub Pages (5)**:
   - `/` (Homepage)
   - `/about-us` (Company background & master electrician credentials)
   - `/electrical-services` (Service category index)
   - `/service-areas` (Regional Black Hills coverage hub)
   - `/contact-us` (Direct phone consultation & shop address)
2. **Individual Electrical Service Pages (10)**:
   - `/electrical-repair-rapid-city-sd`
   - `/electrical-installation-rapid-city-sd`
   - `/electrical-panel-upgrade-rapid-city-sd`
   - `/lighting-installation-rapid-city-sd`
   - `/electrical-wiring-rapid-city-sd`
   - `/commercial-electrician-rapid-city-sd`
   - `/electrical-troubleshooting-rapid-city-sd`
   - `/outlet-and-switch-installation-rapid-city-sd`
   - `/ev-charger-installation-rapid-city-sd`
   - `/generator-installation-rapid-city-sd`
3. **Location Landing Pages (10)**:
   - `/electrician-rapid-city-sd`
   - `/electrician-box-elder-sd`
   - `/electrician-black-hawk-sd`
   - `/electrician-summerset-sd`
   - `/electrician-piedmont-sd`
   - `/electrician-hill-city-sd`
   - `/electrician-keystone-sd`
   - `/electrician-sturgis-sd`
   - `/electrician-spearfish-sd`
   - `/electrician-custer-sd`
4. **Legal & Compliance Pages (2)**:
   - `/privacy-policy`
   - `/terms-and-conditions`

---

## 4. Competitive & Local Search Landscape

### 4.1 Rapid City Market Analysis
The electrical contracting market in Rapid City and Pennington County includes well-established regional contractors:
* **Wires R Us (787wire.com)**: Emphasizes extensive regional coverage, consumer financing, and multi-service specialization.
* **Mr. Electric of the Black Hills**: National franchise presence with aggressive paid search and local directory citations.
* **Mick's Electric**: High local name recognition with deep commercial and residential history.
* **Formanek Electric**: Established local competitor.

### 4.2 Bucks Electric Competitive Advantages
To outrank established competitors, Bucks Electric must leverage authentic local E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness):
1. **Authentic Technicians**: Dale and Dana have verified, named praise in Google reviews.
2. **Physical Rapid City Headquarters**: 1720A Samco Rd, Rapid City, SD 57702 (not a virtual office or P.O. Box).
3. **Transparent Service Area Model**: Honest dispatching from Rapid City across the Black Hills with real drive times and distances, rather than deceptive "fake storefronts" in neighboring towns.
4. **Permit Compliance**: Permitted work compliant with the South Dakota Electrical Commission and National Electrical Code (NEC).
5. **Verified Third-Party Credentials**: BuildZoom verified contractor badge, licensed and $2M insured.

---

## 5. Google Business Profile & Local Citation Audit

* **Verified Business Name**: Buck's Electric Inc
* **Physical Address**: 1720A Samco Rd, Rapid City, SD 57702
* **Telephone**: +1 605-343-5630
* **Website**: `https://www.buckselectricsd.com/`
* **Google Maps Profile URL**: `https://maps.app.goo.gl/ez95mPFgytMtX7Va8`
* **Verified Customer Sentiment**: 4.8 / 5.0 stars from 9 customer reviews.
  - Reviews specifically highlight Dale's showroom wiring, basement rewiring, outlet installation, and fair pricing ($1,400–$1,600).
* **Deficiencies Identified**:
  - GBP link in codebase was previously broken or unresolved.
  - Review schema was absent from structured data.
  - Citations across secondary directories (Bing Places, Yelp, BBB) were inconsistent.

---

## 6. Audit Conclusion & Roadmap

The website possessed a modern aesthetic and well-structured React components, but technical SEO deficiencies (CSR empty shell, duplicate titles, missing 404 fallbacks, and lack of SSG pre-rendering) completely compromised search engine indexing.

**Primary Directive**: Transition the application to Static Site Pre-rendering (SSG), ensure all 27 pages have unique metadata and rich body content, resolve 404 rewrite handling, synchronize structured data schemas, and execute a structured internal linking model.

