# AI-Native Opportunity-to-Service Business Platform
## 3. Technical Architecture and Implementation

**Document owner:** Mas
**Version:** 1.0
**Last updated:** August 2026

---

## The principle behind every technical decision here

Technology in this business exists to support a paying step in the plan — not the other way around. Every choice below is judged against a simple question: what does the business actually need right now to sell and deliver its next service? The architecture principles that guide all of it: keep things modular, keep sources independent of each other, make results reproducible, keep everything traceable back to its source, version what changes, default to secure, always leave room for a human to override the system, make execution observable, keep it testable, deploy incrementally, and stay aware of cost at every step.

## The technology stack, matched to where the business actually is

It's tempting to build toward the eventual, mature version of this platform from day one. That temptation is worth resisting. The table below sequences the stack by the phase in which each piece actually earns its keep — building ahead of that point is effort spent on a problem the business doesn't have yet.

**Programming language, from the very first line of code:** Python, with any additional language brought in only when a specific need genuinely calls for it.

**Storage:** a local SQLite file or flat files while the data and its shape are still changing week to week — this isn't a shortcut, it's the right tool for a moving target. MongoDB Atlas's free tier comes in once a schedule and real history matter. A paid database tier only gets justified once the free tier's limits are actually hit, not before.

**Collection:** official APIs first — Arbetsförmedlingen, Bolagsverket, Adzuna, Google Places. Scraping tools like Playwright or Scrapy are reserved for the specific sources confirmed to have no API, and only brought in once the API-based sources are already working reliably.

**AI and language processing:** a model API from the first phase onward, routed by how demanding the task actually is — cheaper models for high-volume, simple work, stronger ones for extraction and real reasoning. Embedding models and dedicated NLP tooling wait until problem clustering needs them at a volume where eyeballing duplicates by hand stops being practical. Retrieval-augmented generation waits until a specific service actually requires a customer-facing knowledge base.

**Search infrastructure:** not needed until data volume and query patterns genuinely outgrow a standard database. Provisioning this early is a cost with no corresponding benefit yet.

**Orchestration:** a scheduled job and a handful of plain scripts cover the business's needs for a long time. A dedicated orchestration framework is worth adopting only once branching and retries across many interdependent jobs actually exceed what a scheduler can reasonably manage.

**Dashboards:** a spreadsheet or plain script output is enough at first. A lightweight internal dashboard earns its place once there's discovery output worth reviewing regularly. A full customer-facing frontend waits until there's a paying customer who needs to see something themselves.

## How data actually flows through the discovery engine

```text
Source Connectors -> Raw Evidence Lake -> Cleaning -> Normalization ->
Evidence Extraction -> Entity Resolution -> Problem Extraction ->
Problem Clustering -> Problem Intelligence Database -> Opportunity Scoring
```

Entity resolution — matching a company name to its actual, canonical Swedish company registration number — happens immediately after normalization, not as an afterthought. Every enrichment step that comes after it, whether that's financial data, a check on the business's website, or its online reputation, depends on having a reliable key to join on. A fuzzy name match isn't good enough once real money is riding on the accuracy of the data.

## The shape of an agent

```text
Agent -> System instructions -> Context -> Skills -> Tools -> Memory/state -> Model -> Output validator -> Audit log
```

Agents only get access to the tools the currently sold service actually needs — not the full range of imaginable integrations. Permissions follow least-privilege from the start: read, write, send, financial, administrative, and destructive actions are all kept as separate, deliberately granted permissions, never bundled together by default.

## Knowledge the system can draw on

A customer-facing knowledge base gets built once a specific service actually requires one — not speculatively. One principle holds from the very first customer onward regardless: nothing belonging to one customer should ever be visible in another customer's context. That's a design discipline worth keeping from day one, even before the formal infrastructure to enforce it at scale exists — it's cheap to hold the line early and expensive to retrofit later.

## What the data model needs to track

**The core entities:** Source, Evidence, Organization, Industry, Business Function, Problem, Opportunity, Service, Agent, Skill, Tool, Workflow, Customer, Execution, Evaluation, Incident.

Early on, only Source, Evidence, Organization, and Problem really matter — the rest populate naturally as services and customers come into existence. Every result the system produces should be traceable back through the chain that created it: the output, the agent that made it, the workflow it ran in, the model and version used, the skill and its version, every tool call along the way, the evidence retrieved, and finally the original source. This isn't bureaucracy for its own sake — it's what lets us tell a skeptical customer exactly why the system said what it said.

## Keeping the system secure without over-building too early

From the very first script: validate anything that touches external data (a scraped job posting is not trusted content, and should never be treated as one), and secrets never live in code or in a prompt. Once real customers exist, this expands to full authentication, authorization, tenant isolation, encryption at rest, audit logging, rate limiting, abuse prevention, and proper backup and recovery.

AI systems carry their own specific risks worth assessing from the first working pipeline: prompt injection (text scraped from the open web can contain instructions aimed at the model — treat it as data to analyze, never as a command to follow), data leaking out where it shouldn't, tools being misused, permissions granted more broadly than necessary, the system confidently taking an action it shouldn't have, malicious documents, untrusted content pulled from the web, and, once there's more than one customer, the risk of one customer's data leaking into another's.

## Knowing what the system is actually doing

Once anything runs unattended, it needs to be watched: how the workflow executes, what the agents do, every model call, latency, token spend, cost, tool failures, retries, escalations, human approvals, and the quality of what comes out the other end. Every meaningful run should carry a correlation ID from the start — trying to add this after the fact, once there's a backlog of unlabeled logs, is far more painful than including it from day one.

Drift is worth watching for from the first unattended run too: source data changing shape without warning (APIs do this more often than anyone expects), model behavior shifting, regulations changing, third-party APIs changing, and the underlying business economics moving.

## Testing, matched to what's actually at stake

From the first pipeline: basic tests on the code that parses and normalizes incoming data, since this breaks silently and often the moment a source changes its schema without telling anyone. Once a labeled evaluation set exists (see Document 4), every new prompt, model, skill, or tool version gets checked against it before it's trusted in production — this is the regression gate, and it's non-negotiable once it exists. Once there's a live service with real customer traffic, the fuller testing discipline applies: integration tests, workflow tests, security tests, load tests, end-to-end tests.

## Deploying without over-engineering the early stages

In the early phases, one environment is enough — a laptop, then a scheduled cloud job. There's no need for a formal staging environment until there's a production service with real users worth protecting from a bad deploy. Once real customers exist, proper development, staging, and production separation earns its keep, along with automated testing, static analysis, build, deployment, migration, and rollback. One thing worth doing correctly from the very first customer, because it's cheap now and expensive to retrofit: keep customer-specific configuration completely separate from the application's own logic.

## Keeping costs under control

Route tasks to the cheapest model that can actually do them well, use prompt caching wherever the same context gets reused, batch anything that doesn't need to happen in real time, and put a hard budget limit on every automated pipeline from the day it starts running unattended — a misconfigured loop calling an expensive model repeatedly is a real, not hypothetical, way to lose money quickly. See Document 6 for the actual numbers behind these decisions.

## The build order, at a glance

| Phase | What it focuses on | Where the detail lives |
|---|---|---|
| 0 | Proving the idea manually, no code at all | Document 7, Phase 0 |
| 1 | A local prototype — SQLite, not a managed database yet | Document 7, Phase 1 |
| 2 | A scheduled pipeline that runs without supervision | Document 7, Phase 2 |
| 3 | A real evaluation baseline | Document 7, Phase 3 |
| 4 | Selling and manually delivering one real service | Document 7, Phase 4 |
| 5 | Turning that proven service into something repeatable — the agent and orchestration layer gets built only now, after the sale, not before | Document 7, Phase 5 |
| 6 and beyond | Supporting multiple clients, and automating operations, monitoring, and maintenance | Document 7, Phase 6+ |
