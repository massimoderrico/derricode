# Derricode Tennessee 10K Leads

**Derricode Tennessee 10K Leads — README:** 

**Purpose:** Public-business lead research for Tennessee suburban and Tennessee markets focused on roofing, solar installation, and related trades.

**Research date:** 2026-07-27

**Target:** 10,000 deduplicated businesses; current file is a verified partial checkpoint.

**Exact count:** 13

**New rows this rerun:** 2

**Batch progress:** Rerun checkpoint completed with 2 added rows; 11 original seed rows preserved.

**Sources used:** Local Firecrawl public search/scrape API at http://127.0.0.1:3002; official business websites returned by search or directly verified; prior workbook seed.

**Methodology:** Public trade/locality search and page extraction; deduplication by normalized business name/domain/phone. Unknown retained when not confirmed.

**Website-quality screen:** Evidence-based statuses only: extraction failure/unreachable or concrete missing contact/locality signals. Needs review is not an aesthetic judgment.

**Owner enrichment:** Unknown unless a person is explicitly linked to the business via an official page or public professional profile. No owner identities inferred.

**Mockups:** No HTML mockups created; Mockup HTML Path is Not created.

**Limitations / blocker:** Target not reached. Local Firecrawl search returned finite/overlapping results, then returned empty result sets for subsequent locality queries; page extraction throughput is bounded. Public search integration also returned no usable results. Further expansion would require additional accessible public sources or service availability; no records were fabricated.

**Compliance:** Public business data only; no logins, private profiles, CAPTCHA solving, access-control bypasses, guessed owners, or fabricated contacts. Respect source terms, robots.txt, rate limits, and applicable privacy/marketing laws.

**Verification:** Reopened and saved with openpyxl; Leads rows=13; seed rows preserved; every row has Source URL and Research Date.

