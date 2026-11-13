# 90-Day SEO Execution Roadmap
**Website:** [https://www.buckselectricsd.com/](https://www.buckselectricsd.com/)  
**Client:** Buck's Electric Inc  
**Target Completion:** 90 Days Post-Deployment  

---

## 1. Roadmap Overview & Timeline

This roadmap outlines the strategic phases required to establish, grow, and convert organic search traffic for Buck's Electric Inc in Rapid City and the Black Hills region.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             90-DAY SEO ROADMAP                              │
└─────────────────────────────────────────────────────────────────────────────┘
  Phase 1 (Days 1–15): Technical SEO Foundation       [COMPLETED & VERIFIED]
  Phase 2 (Days 16–30): Content & Internal Linking    [COMPLETED & VERIFIED]
  Phase 3 (Days 31–60): Local SEO & Citations         [ACTIONABLE WORKFLOW]
  Phase 4 (Days 61–90): Measurement & Optimization    [ONGOING MONITORING]
```

---

## 2. Phase-by-Phase Action Plan

### Phase 1: Technical SEO Foundation (Days 1–15)
*Objective: Eliminate all crawlability, rendering, indexing, and routing barriers.*

* **Status**: **100% Implemented & Verified in Codebase**
* **Completed Milestones**:
  1. [x] **Static Site Pre-rendering (SSG)**: Replaced client-side empty `<div id="root"></div>` with static pre-rendered HTML across all 27 pages (`scripts/prerender.js`).
  2. [x] **Sub-Route 404 Prevention**: Added server rewrite rules in `vercel.json` and `public/_redirects`.
  3. [x] **Canonical URLs**: Configured absolute self-referencing canonical tags on all 27 routes.
  4. [x] **Non-WWW to WWW Redirection**: Configured permanent 301 redirection to canonical `www.buckselectricsd.com`.
  5. [x] **Robots.txt & XML Sitemap**: Configured `public/robots.txt` and automated `public/sitemap.xml` containing all 27 canonical URLs.
  6. [x] **Structured Data**: Injected JSON-LD schemas for `Electrician`, `Organization`, `WebSite`, `Service`, `BreadcrumbList`, and `FAQPage`.
  7. [x] **Core Web Vitals Optimization**: Set `fetchpriority="high"` on hero images and `loading="lazy"` on below-the-fold media.

---

### Phase 2: Content Optimization & Internal Linking (Days 16–30)
*Objective: Build topical relevance, eliminate keyword cannibalization, and establish crawlable internal PageRank flow.*

* **Status**: **100% Implemented & Verified in Codebase**
* **Completed Milestones**:
  1. [x] **Homepage Content Rewrite**: Updated H1 (`Trusted Electrical Contractor in Rapid City, South Dakota`), H2s, and body text matching client capability.
  2. [x] **Anti-Cannibalization Architecture**: Differentiated `/` (Brand/Overview) from `/electrician-rapid-city-sd` (Hyper-local Rapid City community landing page).
  3. [x] **10 Service Page Deep Dives**: Added technical content covering NEC load calculations, 200A panel upgrades, Level 2 EV charging specifications, and 3-phase commercial distribution.
  4. [x] **10 Location Pages with Travel Logistics**: Added verified mileage, travel times, and landmark clusters from 1720A Samco Rd.
  5. [x] **Contextual Internal Linking**: Updated sidebar and body links to use 100% descriptive anchor texts (e.g., `Electrical Panel Upgrade in Rapid City`, `Electrician in Rapid City, SD`).
  6. [x] **Educational Learning Hub**: Published 8 topical guides in `src/data/guides.ts` cross-linking to commercial services.

---

### Phase 3: Local SEO, Citations & Review Velocity (Days 31–60)
*Objective: Elevate local prominence in the Rapid City Google Local Map Pack and secure authoritative local citations.*

* **Status**: **Actionable Post-Deployment Protocol**
* **Milestones & Deliverables**:
  1. [ ] **Google Search Console Sitemap Submission**: Submit `https://www.buckselectricsd.com/sitemap.xml` and verify 27 discovered URLs.
  2. [ ] **Google Business Profile (GBP) Audit**:
     - Ensure NAP matches `1720A Samco Rd, Rapid City, SD 57702`, Phone: `(605) 343-5630`.
     - Populate GBP Services tab with all 10 core services.
     - Upload 10+ real project photos (commercial showroom, panel before/after, service vans).
  3. [ ] **Review Acceleration Workflow**:
     - Implement post-job review request system (SMS/email) using `https://maps.app.goo.gl/ez95mPFgytMtX7Va8`.
     - Target: Increase verified reviews from 9 to 20+ within 60 days.
     - Respond professionally to all existing and new reviews.
  4. [ ] **Tier 1 Citation Verification**:
     - Verify Bing Places for Business via GBP import.
     - Verify Yelp for Business profile.
     - Check BBB accredited business status for South Dakota.
     - Update BuildZoom permit records.
  5. [ ] **Local Authority Outreach**:
     - Explore Rapid City Chamber of Commerce membership.
     - Submit to Black Hills Home Builders Association directory.

---

### Phase 4: Growth, Query Analysis & Conversion Optimization (Days 61–90)
*Objective: Analyze Google Search Console search queries, optimize click-through rates (CTR), and maximize phone call conversions.*

* **Status**: **Ongoing Optimization Workflow**
* **Milestones & Deliverables**:
  1. [ ] **Search Console Query Analysis**:
     - Filter queries by impression volume.
     - Identify queries ranking in positions 4–15 (striking distance).
     - Refine title tags and meta descriptions for low-CTR pages to improve organic click-through.
  2. [ ] **Investigate Unindexed Pages**:
     - Review GSC **Indexing → Pages** report.
     - Verify zero pages remain under "Discovered – currently not indexed" or "Soft 404".
  3. [ ] **Conversion Rate Optimization (CRO)**:
     - Monitor click-to-call conversions on `tel:+16053435630`.
     - Monitor estimate form submissions.
     - Ensure mobile sticky call buttons remain frictionless across iOS and Android browsers.
  4. [ ] **Content Expansion**:
     - Publish 2–4 additional technical guides from the 15-topic content strategy based on actual customer search queries.

---

## 3. Key Performance Indicators (KPIs) & Target Metrics

| Metric | Baseline (Pre-Implementation) | 30-Day Target | 60-Day Target | 90-Day Target |
| :--- | :--- | :--- | :--- | :--- |
| **Indexed Pages in GSC** | Incomplete / Empty CSR shell | 25+ Canonical URLs | All 27 Canonical URLs | All 27 Canonical URLs |
| **Total Monthly Impressions** | Baseline / Negligible | +50% | +150% | +300% |
| **Total Monthly Organic Clicks**| Baseline | +25% | +75% | +150% |
| **Average Organic CTR** | Unknown | 3.0% | 4.5% | 5.5%+ |
| **Google Map Pack Rankings** | Limited | Top 5 Rapid City | Top 3 Rapid City | Dominant Top 3 Map Pack |
| **Google Review Count** | 9 Reviews (4.8★) | 12 Reviews | 18 Reviews | 25+ Reviews |
| **Monthly Inbound Phone Calls** | Baseline | Tracked Growth | +35% Growth | +70% Growth |

---

## 4. Governance & Verification Protocol

* Every code change must be verified using `node scripts/verify-prerender.js` before deploying to production.
* Never publish fabricated reviews, fake business addresses, or low-quality automated backlinks.
* Maintain South Dakota Electrical Commission code standards across all advertised capabilities.

