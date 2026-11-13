# Internal Linking & Information Architecture Strategy
**Website:** [https://www.buckselectricsd.com/](https://www.buckselectricsd.com/)  
**Client:** Buck's Electric Inc  

---

## 1. Information Architecture & Site Hierarchy

Internal linking establishes clear relationships between pages, passes PageRank (link equity) across the website, and guides search engine crawlers through thematic topic clusters.

### Site Architecture Diagram
```
                     [ Homepage (/) ]
                     ├── Brand Authority, Master Credentials, 4.8★ Reviews
                     └── Top-Level Navigational Links
                            │
            ┌───────────────┴───────────────┐
            ▼                               ▼
[ Services Hub (/electrical-services) ]    [ Areas Hub (/service-areas) ]
  ├── 10 Service Cards                       ├── 10 Community Cards
  └── 6 Featured Guides                      └── Regional Travel Context
            │                                       │
      ┌─────┴─────┐                           ┌─────┴─────┐
      ▼           ▼                           ▼           ▼
[ 10 Services ]  [ Guides ]             [ 10 Locations ]  [ Rapid City Hub ]
- Panel Upgrade  - EV Guide             - Box Elder       (/electrician-rapid-city-sd)
- EV Charger     - Panel Signs          - Spearfish       ├── Hyper-Local Context
- Commercial     - Rewiring             - Sturgis         ├── Neighborhoods
- Repairs        - Generators           - Black Hawk      └── 10 Service Links
      │                │                      │
      └────────────────┴──────────────────────┘
            │ Contextual Cross-Links & Clear Anchor Text
            ▼
   [ Contact Us (/contact-us) ]
```

---

## 2. Descriptive Anchor Text Rules

Generic anchor text such as *"Click Here"*, *"Learn More"*, or *"Read More"* provides zero semantic signal to search engines. 

### Implemented Anchor Text Standards:
* ❌ **Bad (Generic)**: *"Click here to see our panel work."*
* ✅ **Good (Descriptive)**: *"Explore our [Electrical Panel Upgrade in Rapid City](https://www.buckselectricsd.com/electrical-panel-upgrade-rapid-city-sd) services."*
* ❌ **Bad (Vague)**: *"We also do lighting. Read more."*
* ✅ **Good (Descriptive)**: *"Upgrade to recessed LED lighting with our [Lighting Installation in Rapid City](https://www.buckselectricsd.com/lighting-installation-rapid-city-sd) team."*
* ❌ **Bad (Unclear)**: *"Check our location."*
* ✅ **Good (Descriptive)**: *"Learn about our work as a [Licensed Electrician in Rapid City, SD](https://www.buckselectricsd.com/electrician-rapid-city-sd)."*

---

## 3. Contextual Cross-Linking Matrix

### 3.1 Service-to-Service Cross-Linking (Sidebar & Body)
Every service page features a contextual sidebar and related services section linking to high-affinity services:

| Current Service Page | Contextual Sidebar Links | Relevant Rationale |
| :--- | :--- | :--- |
| **`/electrical-panel-upgrade-rapid-city-sd`** | • `EV Charger Installation in Rapid City`<br>• `Electrical Installation in Rapid City`<br>• `Commercial Electrician in Rapid City`<br>• `Electrician in Rapid City, SD` | Panel upgrades are typically triggered by adding EV chargers, central heat pumps, or commercial machinery. |
| **`/ev-charger-installation-rapid-city-sd`** | • `Electrical Panel Upgrade in Rapid City`<br>• `Electrical Installation in Rapid City`<br>• `Electrical Wiring in Rapid City`<br>• `Electrician in Rapid City, SD` | EV chargers draw 40A to 60A and frequently require service capacity evaluations or panel upgrades. |
| **`/commercial-electrician-rapid-city-sd`** | • `Electrical Panel Upgrade in Rapid City`<br>• `Lighting Installation in Rapid City`<br>• `Electrical Repair in Rapid City`<br>• `Electrician in Rapid City, SD` | Commercial facilities require 3-phase panel distribution, warehouse LED high-bays, and machinery circuits. |
| **`/electrical-repair-rapid-city-sd`** | • `Electrical Troubleshooting in Rapid City`<br>• `Electrical Wiring in Rapid City`<br>• `Electrical Panel Upgrade in Rapid City`<br>• `Electrician in Rapid City, SD` | Repairs frequently reveal underlying circuit faults or overloaded panel buses requiring upgrades. |
| **`/generator-installation-rapid-city-sd`** | • `Electrical Panel Upgrade in Rapid City`<br>• `Electrical Installation in Rapid City`<br>• `Commercial Electrician in Rapid City`<br>• `Electrician in Rapid City, SD` | Generator transfer switches must interface directly with the main electrical service panel. |

---

### 3.2 Location-to-Service Cross-Linking
To prevent location landing pages from becoming thin "orphan" pages, every location page renders interactive cards for **all 10 electrical services**, passing contextual link equity:
* `Electrical Repair in Rapid City`
* `Electrical Installation in Rapid City`
* `Electrical Panel Upgrade in Rapid City`
* `Lighting Installation in Rapid City`
* `Electrical Wiring in Rapid City`
* `Commercial Electrician in Rapid City`
* `Electrical Troubleshooting in Rapid City`
* `Outlet & Switch Installation in Rapid City`
* `EV Charger Installation in Rapid City`
* `Generator Installation in Rapid City`

---

### 3.3 Guide-to-Service Cross-Linking (Topical Authority Clustering)
Each of the 8 educational guides connects directly to its corresponding commercial service landing page with descriptive anchor text:

```
[Guide: Signs Your Electrical Panel Needs an Upgrade]
       └── Anchor: "Electrical Panel Upgrade in Rapid City" ──► [/electrical-panel-upgrade-rapid-city-sd]

[Guide: Level 2 EV Charger Installation: What Homeowners Should Know]
       └── Anchor: "EV Charger Installation in Rapid City" ──► [/ev-charger-installation-rapid-city-sd]

[Guide: Common Electrical Problems Homeowners Should Never Ignore]
       └── Anchor: "Electrical Repair in Rapid City" ──► [/electrical-repair-rapid-city-sd]

[Guide: What to Know Before Rewiring an Older Home]
       └── Anchor: "Electrical Wiring in Rapid City" ──► [/electrical-wiring-rapid-city-sd]

[Guide: How to Prepare Your Property for a Generator Installation]
       └── Anchor: "Generator Installation in Rapid City" ──► [/generator-installation-rapid-city-sd]

[Guide: When Should You Call a Commercial Electrician?]
       └── Anchor: "Commercial Electrician in Rapid City" ──► [/commercial-electrician-rapid-city-sd]
```

---

## 4. Keyword Cannibalization Prevention: `/` vs `/electrician-rapid-city-sd`

A critical requirement of this SEO plan is preventing Google from splitting ranking signals between the homepage and the Rapid City location page.

| Factor | Homepage (`/`) | Rapid City Hub (`/electrician-rapid-city-sd`) |
| :--- | :--- | :--- |
| **Search Query Target** | Brand queries, broad electrical contracting | High-intent local searches: "electrician Rapid City", "electrician near me" |
| **H1 Heading** | `Trusted Electrical Contractor in Rapid City, South Dakota` | `Electrician in Rapid City, SD` |
| **Primary Breadcrumb** | `Home` | `Home → Service Areas → Rapid City, SD` |
| **Internal Linking Role** | High-level distribution of PageRank | Hyper-local destination receiving links from service sidebars |
| **Geographic Scope** | Regional Black Hills Overview | Neighborhood-specific: West Boulevard, Robbinsdale, Canyon Lake, Red Rocks |
| **Conversion Intent** | General company evaluation & phone inquiries | Immediate service dispatch and neighborhood repair booking |

---

## 5. Fully Implemented Bidirectional Crawl Mesh (Zero Orphan Architecture)

With the latest implementation, the website achieves an airtight internal linking mesh designed specifically for Googlebot discovery and rapid indexing:

### 1. Two-Way Service ⟷ Location Mesh (100 Contextual Connections)
* **Every Service Page (10)** features a dedicated *"Black Hills Service Areas"* section linking to all 10 location pages (`/electrician-[city]-sd`) with descriptive anchor text like `Electrician in Spearfish, SD`.
* **Every Location Page (10)** features an *"Available Services"* grid rendering cards linking directly to all 10 individual service pages (`/[service-slug]`).

### 2. Peer-to-Peer Regional Clustering (90 Neighboring Connections)
* **Every Location Page** now includes an *"Other Black Hills communities served near [City]"* section linking directly to all other 9 neighboring towns plus `/service-areas`. This allows Googlebot to hop seamlessly between adjacent cities during a single crawl pass.

### 3. Symmetrical Hub-and-Spoke Pages
* **`/electrical-services`** links to all 10 Services, all 10 Service Areas, and top educational guides.
* **`/service-areas`** links to all 10 Service Areas, all 10 Services, and dispatch logistics.

### 4. Global Crawl Redundancy (Header & Footer)
* The pre-rendered DOM of **every single page** contains full HTML links to all 10 services, all 10 locations, and all company pages in both the desktop/mobile navigation and the footer.

### 5. Crawl Depth & Orphan Page Audit
* **Orphan Pages:** 0 (Zero).
* **Maximum Crawl Depth:** 2 clicks from Homepage to any subpage.
* **Pre-rendered HTML Delivery:** 100% complete static HTML rendered for Googlebot, eliminating JavaScript-dependent link discovery latency.


