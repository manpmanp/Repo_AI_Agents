# AI-Native Opportunity-to-Service Business Platform
## 7. Realistic Timeline and Phasing (Solo Builder)

**Document owner:** Mas
**Version:** 1.0
**Last updated:** August 2026

---

## Why a timeline document, specifically

A five-document business plan can make a year of real work feel like it might fit into a long weekend, simply because nobody wrote the actual hours down next to each step. This document does that. It lays out a phase-by-phase build order for one person working on this alongside everything else in life, with an honest time estimate for each phase — a realistic one, assuming steady, focused effort, and a pessimistic one, assuming the normal friction of solo building: interruptions, false starts, and the debugging surprises that never show up in a plan. Treat the pessimistic number as the one to actually build a schedule around.

Each phase below covers its purpose, what actually happens during it, the tools involved, what comes out the other end, how that feeds the next phase, and where it sits in the overall plan.

## Phase 0 — Prove the idea by hand, no code

The point of this phase is simple: find out, cheaply, whether mining job postings and public text for operational patterns actually surfaces problems real businesses would pay to fix — before writing a single line of infrastructure. In practice that means reading 20 to 30 postings by hand across three or four target trades, checking a handful of the resulting companies' websites, and running evidence and problem extraction manually, by pasting text into an AI chat rather than automating anything. All it takes is a browser, a spreadsheet or a plain notebook, and one AI chat window.

What comes out is a short, honest write-up of the patterns that actually held up per trade, quoting the source postings as evidence, alongside an equally honest list of what didn't pan out. Those confirmed patterns become the seed data for the evaluation work in Document 4, and they decide which trades get prioritized once real building starts in Phase 1.

This is, without much competition, the highest-leverage phase in the whole plan — every phase after it is more expensive to redo than this one is to get right the first time.

**Time estimate:** realistically 1-2 weeks. Pessimistically 3-4 weeks, especially if the first patterns tried don't hold up and other trades need testing before something sticks.

## Phase 1 — A working prototype, still just local

Here the confirmed method from Phase 0 becomes a small, actually-working script — still with no cloud infrastructure behind it. That means a Python script calling the Arbetsförmedlingen and JobTech Taxonomy APIs directly, storing results in a local SQLite file, and running evidence extraction through an AI API on the collected text. Python, the `requests` library, SQLite, and an AI API are the whole toolkit (see Document 6 for what that actually costs).

The result is a script, runnable on a laptop, that reliably reproduces the Phase 0 findings across a larger sample — 200 to 500 postings, spanning three or four trades. This script becomes the direct ancestor of the discovery pipeline's data-collection layer; Phase 2 hardens and schedules it rather than rebuilding it from scratch. This is also the point where the discovery approach from Document 1 and the technical architecture in Document 3 actually meet in working code, at the smallest scale that still counts as real.

**Time estimate:** realistically 1-2 weeks for someone learning the tools as they go. Pessimistically 4-6 weeks, once API quirks, taxonomy mapping trial and error, and ordinary environment setup friction are accounted for.

## Phase 2 — Running on its own, and remembering what it's seen

The Phase 1 script needs to run unattended, on a schedule, and hold onto its history — without history, signals like repeat postings or a company's hiring pattern over time simply don't exist. Storage moves from local SQLite to MongoDB Atlas's free tier, execution moves to a scheduled GitHub Actions workflow, and a company-resolution step gets added — matching each employer to its real Swedish organisationsnummer — along with basic logging so failures don't disappear silently.

What comes out is a pipeline that runs daily or weekly without anyone watching it, builds up history over time, and produces a dataset organized around real companies that can be queried whenever it's needed. That dataset becomes the direct input for both the evaluation work in Document 4 and the service-design work in Document 2.

**Time estimate:** realistically 1-2 weeks. Pessimistically 3-4 weeks, mostly from the ordinary friction of cloud and secrets configuration the first time through.

## Phase 3 — Proving the extraction can actually be trusted

This phase builds the labeled ground-truth set and checks whether automated problem extraction is genuinely reliable — not just reasonable-sounding. The Phase 0 manual findings become the initial labeled set; the automated pipeline's extraction runs against those same postings and gets compared side by side. Automated output on new data only earns trust once it matches manual judgment closely enough on this known set — not before.

The output is a documented, honest precision-and-recall-style assessment, plus a labeled evaluation set that keeps growing. This becomes the regression test suite referenced throughout Document 4 — every future change to a prompt or model gets checked against it before it's trusted with real customer-facing work.

**Time estimate:** realistically about a week. Pessimistically 2-3 weeks, if the first extraction attempts need real back-and-forth on the prompt before they're good enough.

## Phase 4 — The decision gate: sell one thing, by hand

This is the phase the entire plan is really organized around. One validated problem — the strongest one to come out of Phases 0 through 3 — gets turned into a real offer, and that offer gets sold and manually delivered, by hand, to five or ten real businesses, without a single agent having been built yet. Whatever tools the service itself needs are the only tools involved here — often nothing more than email, a spreadsheet, and honest research; a domain or website only comes into play if the service genuinely requires something customer-facing.

Either a paying customer results, with real evidence the service is actually wanted, or a clear, honest "no" does — and both outcomes are genuinely useful. A "yes" justifies building the agent and skill architecture around this specific, now-proven service. A "no" sends things back to Phase 3 with a different candidate problem, which is a far cheaper lesson to learn here than after months spent building automation nobody asked for.

**Time estimate:** realistically 3-6 weeks — sales cycles move slowly even for small deals. Pessimistically 2-3 months, and it's entirely normal for the first hypothesis to fail and need a second attempt before something lands.

## Phase 5 — Making the proven service repeatable

Once Phase 4 has proven there's real demand, the minimum viable agent and skill architecture gets built to deliver that specific service repeatably, rather than by hand every single time. The manual delivery process gets broken into tasks, the deterministic parts get automated first, human review stays in place wherever there's real uncertainty, and whatever works gets packaged into a reusable skill. The toolkit here is an AI API with agent tooling, the Phase 2 database, and solid error handling and logging.

What comes out is a repeatable, partly automated version of the service that's already proven it sells — deliverable to a second and third customer with noticeably less manual effort than the first one took. Real usage data and real failures from here on directly shape the continuous-improvement loop and the delivery and support processes described in Documents 4 and 5.

**Time estimate:** realistically 4-8 weeks. Pessimistically 3-4 months — this is genuinely where most of the real engineering complexity in the whole plan lives.

## Phase 6 and beyond — Repeat, then grow

From here, Phases 3 through 5 repeat for additional problems and services once the first one is stable, and only at that point does heavier infrastructure — multi-tenant isolation, a real orchestration framework, a proper frontend, sales automation — become worth building. Each new service should get faster and cheaper to validate and build as the skill library, the evaluation set, and the underlying infrastructure all mature together.

What this phase produces isn't a fixed deliverable but an ongoing one: a small, growing portfolio of validated services, real revenue, and — for the first time — a genuine, evidence-based basis for deciding whether the heavier infrastructure described elsewhere in this plan is actually worth building.

**Time estimate:** open-ended by design. This is the operation of the business itself, not a phase with an end date.

## The whole plan, at a glance

| Phase | Realistic | Pessimistic | What it produces |
|---|---|---|---|
| 0 — Prove the idea by hand | 1-2 weeks | 3-4 weeks | Confirmed patterns, real evidence |
| 1 — Local prototype | 1-2 weeks | 4-6 weeks | A working local script |
| 2 — Scheduled pipeline | 1-2 weeks | 3-4 weeks | A deployed pipeline, accumulating data |
| 3 — Evaluation baseline | 1 week | 2-3 weeks | A labeled evaluation set, a real trust measurement |
| 4 — First sale, by hand | 3-6 weeks | 2-3 months | A real customer, or a real, honest "no" |
| 5 — Productize | 4-8 weeks | 3-4 months | A repeatable, automated service |
| **Total to a first repeatable, paying service** | **roughly 3-4 months** | **roughly 7-9 months** | |

That total is longer than a five-document architecture spec tends to feel like it should take. That gap is normal, and it's exactly the difference between planning a system on paper and actually building one, alone, one phase at a time.
