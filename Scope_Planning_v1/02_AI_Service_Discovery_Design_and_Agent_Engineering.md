# AI-Native Opportunity-to-Service Business Platform
## 2. AI Service Discovery, Design, Decomposition and Agent Engineering

**Document owner:** Mas
**Version:** 1.0
**Last updated:** August 2026

---

## What this document is for

A validated problem from Document 1 isn't a business yet — it's a hypothesis. This document is about the step most technical plans skip past too quickly: turning that hypothesis into something a real business will actually pay for, and only after that's proven, building the automation that makes delivering it repeatable and cheap.

One framing to hold onto throughout: nobody buys "an AI agent." They buy hours saved, revenue gained, or a mistake that stops happening. Every section below is written with that in mind, and nothing past the manual-sale checkpoint in Section 3 gets built until a real customer has said yes.

## Choosing how to actually solve the problem

For every validated problem, the instinct to reach straight for "build an AI agent" needs to be resisted long enough to consider the full range of options: a manual service done by a person, ordinary software, a simple automated workflow, an AI-assisted process, a single agent, several agents working together, a human-and-AI hybrid, a managed service, a fully productized offering, or, sometimes, nothing more exotic than an existing SaaS tool the business could just buy today.

AI gets ruled out, not defaulted into, when a plain deterministic workflow already does the job, when adding AI adds cost without adding value, when the accuracy the task demands is beyond what current models reliably deliver, when the work genuinely needs human judgment more than pattern-matching, or when a conventional piece of software already solves this well and cheaply. The output of this exercise is a short list of realistic options per problem — including the ones we rejected, and why — narrowed down to the one or two hypotheses worth actually pursuing.

A concrete illustration from our own findings: a plumbing business with a strong, professionally built website but a genuine staffing shortage shouldn't be pitched "we'll build you a website" — that's solving a problem they don't have. The right pitch there is something that addresses capacity or scheduling. A business with no web presence at all is the opposite case, and the basic website-and-booking pitch is exactly right for them. Same trade, same category, different actual problem.

## Writing the service down properly

Once a hypothesis is chosen, it needs to become a real, describable offer: who it's for, who inside that business makes the buying decision, who actually uses it day to day, what problem it solves, what changes once it's in place, what triggers a business to want it, what goes in and comes out, roughly how it works, where a human needs to stay involved, what it needs to connect to, what data it touches, what security and compliance it has to respect, what "good" looks like as a service level, what happens when it fails, how it's priced, and how success gets measured.

Write all of this in plain business terms — revenue increased, cost reduced, hours saved, mistakes avoided — not as a description of an AI system. If the one-pager reads like a product spec for engineers rather than something you could hand to a shop owner, it's not ready yet.

## The step that actually matters most: sell it before building it

Before a single agent gets designed, the service defined above needs to be sold and delivered by hand — by a person, personally, even if that person is doing the work clumsily and slowly the first few times — to real businesses matching the target profile.

This exists because it's the cheapest possible way to find out whether the whole hypothesis is right. A "no" here, after a few weeks of honest outreach, costs very little. The same "no," discovered after months spent building agents nobody asked for, costs a great deal more — in time, in money, and in the harder-to-measure cost of losing momentum on the whole project.

The outcome of this step is binary and both outcomes are useful: either there's a paying customer, in which case the rest of this document applies, or there's a clear, evidence-backed reason it didn't land, in which case the right move is back to Document 1 with a different candidate problem — not a redesign of the same pitch.

## Breaking the sold service into buildable pieces

With a real, paid engagement behind us, the service can now be decomposed properly: the business outcome it delivers, the process that produces that outcome, the subprocesses inside it, the individual tasks, the decisions made along the way, what goes in and out of each one, the tools involved, and where a human needs to sign off. Every task gets classified — is it a plain software operation, fetching data, transforming it, classifying it, extracting something from it, generating something new, reasoning through a judgment call, supporting a decision without making it, taking an action outside the system, requiring a human's approval, or handling an exception?

For each task, ask plainly whether it can be fully automated, whether it actually needs a model at all or whether ordinary code would do, and what happens when the system isn't confident in its own output. This map is far more accurate written after the service has actually been delivered once by hand than it would have been written from imagination beforehand.

## Deciding how many agents this actually needs

Extra agents are extra things to build, test, and maintain — they're only worth creating when splitting the work genuinely improves reliability, keeps context manageable, tightens security, makes testing easier, allows specialization, or improves auditability. Building a small fleet of agents because it looks more sophisticated on a slide is a real, common mistake, and one this plan is explicitly trying to avoid.

When agents are genuinely warranted, common roles include an intake agent, a research agent, one that extracts information from documents, one that classifies, one that plans, one that supports a decision without making it outright, one that handles communication, one that schedules, a quality-check agent, one that monitors, and one that escalates. For a first service, this usually means one to three agents, not a dozen.

Every agent that does get built needs a clear contract: its purpose, what inputs it's allowed to see, what context it needs, what tools it can use, what it's permitted to do, the shape of its expected output, how confident it needs to be before acting, what it does when something fails, when it escalates to a human, what it logs, and how it gets tested.

## How the pieces talk to each other

The basic shape of a workflow: something triggers it, the system takes in what's needed, checks it, plans a response, runs the specialist tasks, verifies the result, brings in a human if required, delivers the outcome, and records what happened. Agents pass structured messages to each other — typed objects, explicit status, references back to the evidence they used, a confidence level, clear error codes — rather than dumping long, unstructured conversation between them. Structured messages are easier to test, easier to debug at 11pm when something breaks, and easier to explain to a customer who asks what went wrong.

## Turning what works into something reusable

A skill, in this plan, is a packaged, reusable capability — its purpose, what needs to be true before it runs, its inputs, the actual procedure, the tools it uses, its constraints, what "good" looks like, how it handles failure, worked examples, and a set of tests that prove it still works after a change.

Skills come from real work, not from imagination: build something manually first, prove on a real engagement that it works, pull out the reusable procedure, generalize it a little, add validation and tests, package it, version it, and reuse it on the next service. Start the skill library with only what the first paid engagement actually required. The eventual shape of a fuller library — covering intake, research, document handling, email, scheduling, invoicing, support, reporting, sales, onboarding, compliance, monitoring — is where this is heading, not where it starts.

## How a service is put together, end to end

```text
Customer Interface
      |
Service Orchestrator
      |
Agent Layer
      |
Skills
      |
Tools / Integrations
      |
Business Systems
      |
Database / Knowledge Base
```

Certain moments always require a human to say yes before the system proceeds: anything involving money, anything with legal or compliance weight, anything irreversible, sensitive communication with a customer, any output the system isn't confident about, and anything genuinely out of the ordinary.

## How a single service matures

Specification, then the manual sale and delivery that everything else depends on, then a small working prototype of the automated version, then testing it against the real cases from that manual delivery, then hardening it — proper error handling, visibility into what it's doing, security, permissions, sensible retries, escalation paths, and cost limits — and finally productizing it: reusable skills, templates, configuration, a real onboarding process, automated deployment, and documentation someone other than the founder could follow.

## Where this is all heading

A one-off engagement, done by hand for one customer, becomes a productized service, becomes a reusable agent system, becomes something configurable across multiple clients, becomes a managed service, and potentially, eventually, a product in its own right. The thing worth protecting through all of that growth isn't the prompts — it's the process knowledge, the skills, the orchestration logic, the integrations, and the tests that prove it all still works. That's the actual intellectual property this business is building.
