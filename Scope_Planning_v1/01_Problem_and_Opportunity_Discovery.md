# AI-Native Opportunity-to-Service Business Platform
## 1. Problem and Opportunity Discovery

**Document owner:** Mas
**Version:** 1.0
**Last updated:** August 2026

---

## Why this document exists

Most service ideas fail for a boring reason: nobody checked whether the problem was real and common before building something to solve it. This document sets out how we find real, recurring problems inside Swedish small and medium businesses, backed by actual evidence rather than a guess about what those businesses probably struggle with. Every claim that comes out of this process has to point back to something a real business actually said, posted, or did — no invented statistics, no rounding up a single anecdote into "a pattern."

The governing principle is simple: **Data becomes Evidence becomes a candidate Problem becomes a Validated Opportunity becomes a Service worth building.** Each arrow in that chain is a checkpoint, not a formality.

## Where the evidence comes from, and in what order we go looking

Not all data sources are worth the same effort. Some are free, official, and low-risk. Others require real legal judgment before touching them, and a few carry more cost than they're worth at this stage. The table below is how we decide what to build first.

| Priority | Source | What it costs | Where we stand legally | What it's actually given us |
|---|---|---|---|---|
| Build first | Arbetsförmedlingen (the Swedish public employment service, via its JobTech API) | Free, no key required | An official, open API built for exactly this kind of use | Rich, structured, reliable postings across every trade we've tested so far |
| Build first | Bolagsverket (Swedish Companies Registration Office) open data | Free | Official open API | Real company registration numbers, industry codes, basic facts |
| Build next | Adzuna | Free up to roughly 1,000 calls a month | Official API | Coverage across the UK, Germany, France, and the rest of Northwest Europe |
| Build next | Google Places | Pay per request | Official API | A low-risk way to read a business's public reputation |
| Worth a look, source by source | Public review platforms (the actual review text, not just the star rating) | Free to cheap | Generally fine to read; don't bulk-scrape a platform whose terms forbid it | A direct line to what customers complain about |
| Hold off until the above is exhausted | Reddit, Flashback, general business forums | Free to cheap | Check each platform's current terms before automating anything | Genuine, unfiltered language about pain points — but expensive to mine well |
| Hold off | Podcast transcription | Cheap to moderate, mostly transcription compute | Fine for public podcasts, provided we respect any stated reuse restrictions | Unproven value relative to the effort so far |
| Background signal only | App store reviews, Google Trends, published industry reports | Free to cheap | Generally fine as supporting context | Useful as a tie-breaker, never as the sole basis for a claim |
| Off the table without a licensed path | Any platform whose terms explicitly forbid automated collection — LinkedIn, Facebook, Amazon product and seller pages among them | — | Prohibited without an official API or licensing arrangement | — |

The rule we hold ourselves to: don't build a connector for anything below the top two tiers until those tiers have actually been worked through and a specific, named gap in the evidence justifies spending more time and taking on more risk.

## Getting the legal and privacy side right from the start

This work touches personal data — names attached to job postings, people who write in forums, business owners whose companies show up in our research. Under GDPR that means we need a documented reason for processing it (most likely "legitimate interest" for business-to-business outreach research, backed by an actual written justification, not an assumption), we only keep what the stated purpose requires, we've decided how long we keep it, and we have a plan for the day someone asks what we hold on them and wants it removed.

Before any new source gets automated, the same question gets asked: does this platform's terms of service actually allow this? If yes, build it. If no, is there an official API instead? If neither, the source gets skipped, full stop — no matter how good the data looks. Terms change, so this isn't a check we do once and forget.

As things stand, Arbetsförmedlingen, Bolagsverket, Adzuna, and Google Places are all official, low-risk sources. Reddit, Flashback, review sites, and general forums each need their own case-by-case look before anything gets automated against them.

## What we're actually looking for

Repetitive manual work. Administrative burden. Processes that eat more time than they should. Operational bottlenecks. Compliance and paperwork headaches. Communication breakdowns between a business and its customers or suppliers. Gaps between what software exists and what a business actually needs. Work a business already pays a person to do, badly or slowly. Errors that cost real money. And, underneath all of it, some credible sign that the business in question would actually pay to have the problem go away.

## The process, step by step

**1. Collect the raw material.** We query the Arbetsförmedlingen JobSearch API using its own occupation taxonomy — specific occupation-field and occupation-name identifiers — rather than free-text keyword search. We learned this the hard way: a plain keyword search for "café," for instance, mostly returns large retail chains, ski resorts, and municipal employers hiring café staff as a minor sideline, not the independent café owners we're actually trying to reach. Each employer gets resolved against Bolagsverket to attach a real company registration number. The output at this stage is raw JSON, exactly as received — nothing is filtered or judged yet.

**2. Keep everything, unchanged, forever.** Every document we collect gets stored with its source, its original URL, when we collected it, and its full original content. Nothing here gets edited or summarized. This sounds like overkill until the first time someone asks "where did that number come from" and we can actually answer.

**3. Bring it into one shape.** Arbetsförmedlingen's data doesn't look like Adzuna's, and neither looks like a forum post. Before anything useful can be done with this material, it gets mapped into one consistent internal format: source, timestamp, company, industry, title, main text, original link.

**4. Pull out the facts, not the conclusions.** From each normalized document we extract things that are directly observable and quotable: how a business wants to be contacted (a personal email address versus a company domain versus a proper applicant tracking system), whether a staffing agency is standing between us and the real employer, whether a big chain is quietly dominating a search that's supposed to surface small independent businesses, whether a job requires driving (a decent proxy for whether the business operates on-site at customers' locations or from a fixed shop), and language that hints at growth or at a role that's proven genuinely hard to fill. One honest caveat worth stating plainly: the structured "requirements" fields in Arbetsförmedlingen's data are very often empty even when the posting clearly lists requirements in plain text — so this step leans on reading the actual text, not just the structured fields, more than the raw schema would suggest it needs to.

**5. Turn evidence into a candidate problem — carefully.** This is the first point where judgment enters the process, and it's where the discipline matters most. We group the evidence, count how many independent postings actually support a pattern, assign an honest confidence level, and write down what it would take to be more sure. A pattern seen once gets flagged as exactly that — one data point, not a trend.

**6. Merge the duplicates.** Different businesses describe the same underlying problem in different words. "Too many manual bookings," "the phone never stops ringing for scheduling," and "we lose track of appointments" are very likely the same problem wearing three outfits. Once there's enough volume that spotting these by eye becomes impractical, this step groups them automatically.

**7. Try to prove ourselves wrong.** For every promising candidate, we actively look for reasons it might not hold up: is it already well served by existing tools? Is it too minor to justify anyone paying for a fix? Is it really just one company's quirk rather than a trade-wide pattern? We track evidence maturity explicitly — anecdotal, then repeated, then confirmed across independent sources, then strongly validated, then something we could put a number on, then, eventually, commercially proven.

**8. A human looks at what's left.** Before any service gets designed, someone reviews the short list of surviving candidates and asks the questions a spreadsheet can't: is this actually real, is the evidence independent of itself, is there someone reachable who'd actually buy a fix, and is there a realistic way to deliver one?

The output of that review is one or more Opportunity Briefs, and those briefs are what Document 2 starts from.

## What goes into an Opportunity Brief

The problem itself, who has it, the evidence behind it, why it actually matters to that business, how they're coping with it today, what's already out there trying to solve it, where the gap in those existing options sits, a rough sense of the economic value at stake, who the buyer would be, what would trigger them to act, whether AI genuinely suits this problem or is just fashionable here, the risks, the open questions, what research still needs doing, and a first pass at candidate service ideas.

## The fuller record we keep on each problem

Problem ID, a normalized one-line statement of the problem, a fuller description, the industry and business function it sits in, the role most affected, the size of business it tends to show up in, geography, links back to every piece of supporting evidence, how many times it's been observed, how many independent sources back it, when it was first and last seen, whether it's trending up or down, how severe and how frequent it is, our best estimate of the time and money it costs, what already exists to solve it and how good that is, how dissatisfied people seem with the current options, any regulatory angle, how well AI actually fits, how automatable it is, technical constraints, any sign someone would pay, and our confidence in all of the above.

## Scoring an opportunity without collapsing it too early

We keep several scores separate rather than mashing them into one number before we understand what we're looking at: how strong the problem itself is, how strong the evidence is, the economic value at stake, how big the gap in existing solutions really is, how well AI suits the work, how commercially realistic it is, how complex it would be to deliver, and only then an overall opportunity score built from the rest.

## What we've already found, and why it matters

We didn't start this process from a blank page. Manual testing across four Swedish trades — hairdressers, electricians, plumbers, and café/barista roles — already turned up patterns worth building the next round of work around, rather than rediscovering from scratch:

Hairdressers and barbers mostly run their hiring through a personal email address rather than any formal system — that held for roughly two out of every three postings we looked at. Website quality among them varies a lot more than expected: one salon we checked had a genuinely modern booking system and its own online shop, but a blog that hadn't been touched since 2021 — which suggests the real gap for a business like that isn't "get online," it's "keep the marketing alive once it's built."

Electricians told a different story entirely. Most of the postings we sampled were placed by a staffing agency, not the business itself — meaning the actual employer, and whatever problems it has, is often invisible behind a professional recruiter's front door. Mining job postings alone won't reach these businesses; a direct company lookup is the better route for this trade.

Plumbers showed no agency involvement at all in our sample, and a real, recurring signal of roles that are genuinely hard to fill — chronic or "always hiring" language showed up in around 40% of what we looked at. One plumbing business we checked had an excellent, professionally maintained website with strong local search visibility, and was still short-staffed. For a business like that, the bottleneck clearly isn't marketing — it's capacity.

Café and barista searches taught us something about the data itself, not just about cafés: a plain search on shared terminology gets swamped by large chains and public employers who happen to run a café counter as a minor part of a much bigger operation. Before treating a category's results as representative of small independent businesses, known large employers need to be filtered out by their company registration number.

And one pattern held across every trade we've looked at so far: real salary figures almost never appear in the structured data fields. That's very likely a reflection of how Swedish collective bargaining works, not a business problem worth chasing.

The practical takeaway for Document 2: there's no single service idea that fits an entire trade. "Build them a website" is the right pitch for a business with no web presence at all, and the wrong pitch for one that already has a strong site and simply can't hire fast enough. The service has to match the business, not the category it happens to sit in.
