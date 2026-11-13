# Google Search Console & Indexing Execution Checklist
**Website:** [https://www.buckselectricsd.com/](https://www.buckselectricsd.com/)  
**Target Search Engine:** Google (Googlebot Desktop & Googlebot Smartphone)  
**Total URLs to Index:** 27  

---

## 1. Overview & Realistic Expectations

Google does not guarantee instantaneous indexing for every submitted URL. Google's automated systems evaluate crawl budget, site authority, content uniqueness, and technical rendering quality before adding pages to the primary search index.

With the static site pre-rendering (SSG) pipeline now live on Bucks Electric, the critical technical hurdle (empty client-side rendering) has been removed. Follow this checklist to submit, inspect, and monitor all 27 pages in Google Search Console.

---

## 2. Step-by-Step Google Search Console Action Plan

### Step 1: Verify Domain Ownership
1. Open [Google Search Console](https://search.google.com/search-console/).
2. Select **Add Property** and choose the **Domain** property type: `buckselectricsd.com`.
3. Copy the provided `google-site-verification` TXT record.
4. Log into the DNS management console for `buckselectricsd.com` (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.) and add the TXT record to the root domain (`@`).
5. Click **Verify** in Search Console.
   > *Note:* If using URL-prefix properties instead of domain properties, create and verify both `https://www.buckselectricsd.com/` and `https://buckselectricsd.com/`.

---

### Step 2: Submit the Corrected XML Sitemap
1. Navigate to **Indexing → Sitemaps** in the left-hand navigation.
2. In the "Add a new sitemap" input field, enter:
   ```
   sitemap.xml
   ```
   *(Full URL: `https://www.buckselectricsd.com/sitemap.xml`)*
3. Click **Submit**.
4. Confirm that the status reports **Success** and that **27 discovered pages** are registered.
   > *Troubleshooting:* If Search Console reports "Could not fetch", wait 15 minutes and resubmit, ensuring the live URL `https://www.buckselectricsd.com/sitemap.xml` returns a clean HTTP 200 response in your browser.

---

### Step 3: URL Inspection & Live Test Workflow
Inspect priority URLs to verify that Googlebot receives the pre-rendered HTML:

1. Copy the target URL (e.g., `https://www.buckselectricsd.com/`).
2. Paste into the top search bar (**Inspect any URL**).
3. Click **Test Live URL**.
4. Review the live test results:
   - **URL is available to Google**: Must report green checkmark.
   - **Crawl allowed**: `Yes`
   - **Page fetch**: `Successful`
   - **Indexing allowed**: `Yes`
   - **User-declared canonical**: Must match the tested URL exactly.
   - **View Tested Page → HTML**: Confirm that the HTML contains the full page text, H1 heading, and schema rather than `<div id="root"></div>`.
   - **View Tested Page → Screenshot**: Confirm that the visual rendering shows the complete page design.
5. Click **Request Indexing**.

---

### Step 4: Priority Queue for Requesting Indexing
Google Search Console imposes daily limits on manual "Request Indexing" submissions (typically 10-15 requests per day). Prioritize your requests in this order:

#### Day 1 Priority (Core Brand & High-Intent Services):
1. `https://www.buckselectricsd.com/` (Homepage)
2. `https://www.buckselectricsd.com/electrician-rapid-city-sd` (Rapid City Hub)
3. `https://www.buckselectricsd.com/electrical-panel-upgrade-rapid-city-sd`
4. `https://www.buckselectricsd.com/ev-charger-installation-rapid-city-sd`
5. `https://www.buckselectricsd.com/commercial-electrician-rapid-city-sd`
6. `https://www.buckselectricsd.com/electrical-repair-rapid-city-sd`
7. `https://www.buckselectricsd.com/about-us`
8. `https://www.buckselectricsd.com/contact-us`

#### Day 2 Priority (Secondary Services & Growth Locations):
9. `https://www.buckselectricsd.com/electrical-installation-rapid-city-sd`
10. `https://www.buckselectricsd.com/electrical-wiring-rapid-city-sd`
11. `https://www.buckselectricsd.com/generator-installation-rapid-city-sd`
12. `https://www.buckselectricsd.com/lighting-installation-rapid-city-sd`
13. `https://www.buckselectricsd.com/electrical-troubleshooting-rapid-city-sd`
14. `https://www.buckselectricsd.com/outlet-and-switch-installation-rapid-city-sd`
15. `https://www.buckselectricsd.com/electrician-box-elder-sd`
16. `https://www.buckselectricsd.com/electrician-spearfish-sd`
17. `https://www.buckselectricsd.com/electrician-sturgis-sd`

#### Day 3 Priority (Remaining Locations & Supporting Hubs):
18. `https://www.buckselectricsd.com/electrical-services`
19. `https://www.buckselectricsd.com/service-areas`
20. `https://www.buckselectricsd.com/electrician-black-hawk-sd`
21. `https://www.buckselectricsd.com/electrician-summerset-sd`
22. `https://www.buckselectricsd.com/electrician-piedmont-sd`
23. `https://www.buckselectricsd.com/electrician-hill-city-sd`
24. `https://www.buckselectricsd.com/electrician-keystone-sd`
25. `https://www.buckselectricsd.com/electrician-custer-sd`
26. `https://www.buckselectricsd.com/privacy-policy`
27. `https://www.buckselectricsd.com/terms-and-conditions`

---

## 3. Monitoring the Page Indexing Report

Navigate to **Indexing → Pages** weekly and investigate the following diagnostic categories:

| Status Category | Normal Target | Action Required if Triggered |
| :--- | :--- | :--- |
| **Indexed** | 25 to 27 pages | Target state. Verify that organic impressions are growing. |
| **Discovered – currently not indexed** | 0 | Google found the URL but has not crawled it yet. Usually resolves within 1–2 weeks once internal links are crawled. |
| **Crawled – currently not indexed** | 0 | Google crawled the page but decided not to index it. Indicates content needs more local proof, unique FAQs, or external citations. |
| **Duplicate without user-selected canonical** | 0 | Ensure canonical tags are properly rendered in static HTML (Fixed in SSG). |
| **Excluded by ‘noindex’ tag** | 0 (or 2 if legal pages noindexed) | Verify no commercial service or location pages are flagged. |
| **Soft 404** | 0 | Page returns 200 but looks empty to Google. (Fixed by SSG pre-rendering). |
| **Not found (404)** | 0 | Verify platform rewrite rules in `vercel.json` are operating. |

---

## 4. Search Performance & Query Tracking

Navigate to **Performance → Search Results** and track progress across these key metrics:

1. **Total Clicks & Total Impressions**:
   - Expect impressions to ramp up within 14–30 days as pages are indexed.
   - Click-through rate (CTR) should average 3%–8% for high-intent local queries.
2. **Top Search Queries to Monitor**:
   - `electrician Rapid City SD`
   - `electrical contractor Rapid City SD`
   - `electrical repair Rapid City`
   - `electrical panel upgrade Rapid City`
   - `EV charger installation Rapid City`
   - `electrician Box Elder SD`
   - `electrician near me`
3. **Query Optimization Action**:
   - Identify queries with high impressions but low CTR (Position 4–10). Test refining page titles and meta descriptions with stronger local call-to-actions (e.g., adding phone number, "Same-Day Response", or "4.8★ Rated").

