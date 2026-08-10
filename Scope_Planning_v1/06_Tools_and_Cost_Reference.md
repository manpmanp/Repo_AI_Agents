# AI-Native Opportunity-to-Service Business Platform
## 6. Tools and Cost Reference

**Document owner:** Mas
**Version:** 1.0
**Last updated:** August 2026

---

## Why this document exists

Every other document in this plan names a tool category — "a database," "a server," "an AI model." None of them say what it costs. That's a gap worth closing before committing to anything, because the honest answer for a solo operator watching every krona is that most of what this business needs in its first few months is free or very close to it. What follows is a practical price list, organized cheapest option first, so a decision can be made against a real number rather than a category name.

Prices below reflect roughly what things cost as of August 2026. This space moves fast — treat every figure here as a starting estimate worth double-checking at the point of actually signing up, not a locked-in quote. Anything marked "promo" in particular deserves a second look at the renewal price, not just the price on the signup page.

## Running scripts and agents on a schedule

| Tier | Option | Cost | Notes |
|---|---|---|---|
| Free | GitHub Actions, scheduled workflow | $0 on public repos; 2,000 free minutes/month on private ones | The right fit for daily or weekly batch jobs. Nothing to manage. Timing can drift a little under load — not a concern at this stage. |
| Free | Your own laptop, run by hand or via cron | $0 | Fine while prototyping. Not something to rely on for a job that has to run unattended every day. |
| Cheap | Hetzner Cloud VPS (CX22) | roughly €4-5/month | 2 vCPU, 4GB RAM. The best value once something genuinely needs to run around the clock — a headless browser, for instance. |
| Cheap | Railway or Render | roughly $5-7/month per service, usage-based | The easiest deploy experience by far. Costs more than Hetzner once usage grows. |
| Medium | DigitalOcean Droplet | roughly $6-12/month | Similar to Hetzner, more region choices, a bit pricier. |
| Medium | AWS EC2 or Google Cloud Compute | $10-50+/month, varies a lot | Worth it once a specific cloud-native integration actually calls for it — not before. |

**Where to start:** GitHub Actions, until something genuinely needs to run continuously — then one Hetzner CX22.

## Where the data actually lives

| Tier | Option | Cost | Notes |
|---|---|---|---|
| Free | A local file — SQLite, JSON, or CSV | $0 | The correct choice while still prototyping. No network to configure, nothing to set up. |
| Free | MongoDB Atlas, free tier (M0) | $0, permanently | 512MB cap, but a solid first real database once one is actually needed. |
| Free | Supabase, free tier | $0 | Managed Postgres plus auth and storage. 500MB, and it pauses after a period of inactivity. |
| Cheap | MongoDB Atlas M2/M5 | roughly $9-25/month | Worth it once storage passes 512MB or an always-on database becomes necessary. |
| Cheap | Supabase Pro | roughly $25/month | Once the free tier's limits start getting in the way. |
| Medium | A managed Postgres instance (AWS RDS, Neon Pro, etc.) | $20-100+/month | Justified once there's real, multi-customer scale to support. |

**Where to start:** local SQLite while prototyping, MongoDB Atlas's free tier for the first real, deployed pipeline. Upgrade only once the 512MB ceiling is actually hit, not in anticipation of it.

## What the AI models themselves cost

Roughly, per million tokens, as of August 2026 — worth checking the provider's own pricing page before setting a budget, since this changes often:

| Model tier | Input, per 1M tokens | Output, per 1M tokens | Where it fits in this business |
|---|---|---|---|
| Small, fast | ~$1 | ~$5 | High-volume, simple work: flagging keywords, basic classification |
| Mid-tier | ~$2-3 | ~$10-15 | Evidence extraction, problem extraction, most of the actual agent reasoning |
| Top-tier | ~$5 | ~$25 | Reserved for the genuinely hard reasoning steps, used sparingly on purpose |

Worth using from the very first pipeline: prompt caching (roughly 90% cheaper on anything already cached), batch processing for anything that doesn't need to happen in real time (roughly half the cost), and routing the easy, high-volume work to a cheaper model rather than defaulting everything to the most capable one out of convenience.

**A sanity check worth keeping in mind:** processing a few hundred job postings through evidence and problem extraction should land somewhere in the low tens of dollars, not the hundreds. If a test run comes in noticeably higher than that, the likely culprit is inefficiency — sending raw HTML instead of cleaned text, for instance — not an unavoidable cost of doing the work.

## Getting a domain, eventually

| Tier | Option | Cost | Notes |
|---|---|---|---|
| Cheap | A .se domain through Loopia | Promotional pricing sometimes near $0-5 for the first year; renewal typically around 250-350 SEK/year (roughly $25-35) | Pay attention to the renewal price, not just the number on the signup page — the promo is usually a first-year-only deal. |
| Cheap | A .com through Namecheap or Porkbun | roughly $9-15 the first year, $13-20 on renewal | A reasonable choice if a .se isn't essential for credibility with Swedish customers specifically. |
| Medium | Premium or short domains | $50-500+ | Not a concern at this stage of the business. |

**Worth waiting on:** there's little reason to buy a domain before there's an actual service and a customer-facing reason to point it somewhere.

## Looking up Swedish companies

| Tier | Option | Cost | Notes |
|---|---|---|---|
| Free | Bolagsverket's open data and API | $0 | The official registry — company number, industry code, the basic facts. |
| Free | JobTech (Arbetsförmedlingen) API and its Taxonomy API | $0 | No key needed. The primary source for job postings in this plan. |
| Free | Adzuna API | $0 up to roughly 1,000 calls/month | Covers the UK, Germany, France, and the rest of Northwest Europe. |
| Cheap to medium | allabolag.se's or Ratsit's commercial API | Pricing on request — plan for roughly $20-100+/month depending on volume | Only needed once detailed financials go beyond what Bolagsverket's free data offers. |
| Cheap | Google Places API | Pay per request, after a free monthly credit | Used sparingly — weekly rather than daily — to keep the cost of reputation checks under control. |

## Scheduling, automation, and the small stuff

| Tier | Option | Cost | Notes |
|---|---|---|---|
| Free | GitHub Actions cron | $0 | Covers most of what needs scheduling in this business. |
| Free | Google Sheets, or just a local spreadsheet | $0 | Genuinely enough for early manual tracking, before any database exists. |
| Cheap | Zapier or Make.com's starter tier | roughly $10-30/month | Only worth it once there's real no-code integration glue to build — not an early need. |
| Cheap | Streamlit Community Cloud | free tier available | A reasonable MVP dashboard, before a custom frontend is worth the effort. |

## What not to spend money on yet

Worth holding off on until there's at least one paying customer, or a specific, proven need: Elasticsearch or OpenSearch, Temporal, Dagster, or Prefect, a custom React or Next.js frontend, multi-tenant infrastructure, and any enterprise-tier vendor contract. Every one of these solves a problem this business doesn't have yet — and won't, until it's grown considerably past where it stands today.

## A rough sense of monthly cost by stage

| Stage of the business | Rough monthly cost |
|---|---|
| Local prototype, manual validation | $0-10 — essentially just AI API test calls |
| A scheduled pipeline with one real database | $10-40 |
| First real service, first paying customer | $40-150 — a domain, possibly a small VPS, more AI usage |
| Multiple paying customers | Scales with actual usage — worth re-pricing properly at that point, not guessing |
