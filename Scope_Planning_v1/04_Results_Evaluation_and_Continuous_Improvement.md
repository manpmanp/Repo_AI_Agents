# AI-Native Opportunity-to-Service Business Platform
## 4. Results, Evaluation and Continuous Improvement

**Document owner:** Mas
**Version:** 1.0
**Last updated:** August 2026

---

## The question this document answers

Building a discovery pipeline and a service around it proves nothing on its own. What matters is whether the problem we found was real, whether the service actually fixed it, whether the customer got value worth paying for, whether the system held up under real use, and whether all of that is still true six months later. This document is how we keep ourselves honest about that, rather than assuming things are working because the system runs without crashing.

## Where evaluation actually starts

Long before there's a production pipeline worth measuring, there's a labeled set of known-correct answers to measure it against. That set comes from the manual evidence and problem extraction work already completed by hand across four job categories (see Document 1, Section on seed evidence) — every new trade tested manually from here on adds to it. Without this, "the extraction is 85% accurate" is a number with nothing real behind it.

From there, evaluation runs in a few connected passes. First, we check whether automated extraction actually agrees with our own manual judgment — precision, recall, how well duplicate problems get merged, whether the evidence behind a claim is genuinely independent, and both the false positives and the false negatives. No new prompt, model, or skill version goes into production without clearing this check against the labeled set; that's the regression gate referenced throughout Document 3.

Once a service has real customers, a second pass checks whether our original read on the opportunity actually held up: did demand match what we predicted, did people pay what we thought they would, was the urgency real, did competition show up the way we expected, was the problem as easy or as hard to solve as we thought. This is less a technical exercise than an honest look at whether our judgment is improving over time.

And for each delivered service specifically, we track whether it's actually doing its job: how often tasks complete successfully, how accurate the output is, how often a human has to step in, the error rate, and — the numbers that matter most to the business — time saved, cost saved, revenue impact, and whether the customer is satisfied enough to keep paying.

## Judging an agent fairly

An agent's quality gets assessed on more than whether it produced an answer: was the answer correct, was it complete, was it actually grounded in real evidence rather than invented, did it pick the right tool for the job, did it execute that tool correctly, did it follow policy, how robust was it under messy input, and what did it cost in money and time.

One thing worth being deliberate about: a model's own claim that it's confident is not the same thing as it actually being right, and shouldn't be treated as such. Real confidence gets built from the quality of the evidence behind an answer, the quality of what was retrieved, whether independent checks agree with each other, rule-based validation, and how the system has actually performed on similar cases before.

## The numbers that actually matter to the business

Discovery: how much new evidence comes in each day, how many new problems surface each week, how many get fully validated each month, how often independent sources confirm the same thing, and what share of opportunities actually convert into something worth pursuing.

Sales: leads, qualified leads, meetings booked, proposals sent, the conversion rate through all of it, what it costs to land a customer, how long the sales cycle runs, and the average size of a contract.

Delivery: how long it takes to set a new customer up, the cost of serving each one, how much of the work is actually automated versus done by hand, how often a human needs to intervene, the support load, and the margin left over once everything's accounted for.

Customer value: hours saved, cost reduced, revenue added, errors avoided, faster response times, whether customers stick around, and whether they buy more over time.

None of these are worth tracking before the activity behind them exists — a sales dashboard with nothing to show yet just creates false urgency and noise.

## Watching the system in production

For the discovery pipeline on its own: uptime, latency, failure rate, cost, and tool errors. Once real customers are involved, that expands to integration health, escalations, customer activity, and the outcomes the service is actually producing for them.

Worth watching continuously, not just when something visibly breaks: the shape of source data quietly changing (APIs do this without warning more often than seems reasonable), model behavior shifting between versions, regulatory changes, API changes from third parties, and shifts in the underlying business economics that made a service worth offering in the first place.

## How the system gets better over time

```text
Production execution
    ->
Collect the outcome
    ->
Evaluate it
    ->
Notice a failure or a decline in quality
    ->
Work out the actual cause
    ->
Propose a fix
    ->
Test the fix properly
    ->
Get human sign-off where it's needed
    ->
Deploy it
    ->
Keep watching
```

Every meaningful failure gets classified rather than just retried: was it bad input, missing information, a retrieval miss, a reasoning error, a broken tool, a broken integration, a flawed prompt or skill, a model failure, a business-rule failure, or a breakdown in a human process somewhere upstream. Retrying blindly without understanding which of these happened just delays finding out something is actually wrong.

Improvement draws on customer feedback, support conversations, failed runs, human corrections, new evidence, new regulation, new models, new tools, cost shifts, and what competitors are doing. When a skill needs fixing, the fix follows a real path: find the root cause, change the skill, add the failing case to the evaluation set so it can never silently regress again, run the regression test, version it, and deploy it. Model upgrades get the same treatment as any other controlled release — checked for quality, cost, latency, reliability, security, and regression risk against the evaluation set before anything switches over.

## The life of a single service, and when to walk away from one

```text
Idea -> Research -> Problem validated -> Service hypothesis -> Prototype
-> Pilot -> Paid service -> Productized -> Managed service ->
Scale -> Retirement or replacement
```

At every one of those stages, there's a real decision to make: keep going, change course, pause, kill it, or replace it with something better. A service is worth reconsidering honestly when customers clearly aren't getting enough value from it, when it costs too much to acquire a customer for it, when delivering it doesn't actually make economic sense, when accuracy isn't good enough, when a human has to intervene too often for it to scale, when a competitor has closed the gap it used to fill, or when a regulatory change makes the whole approach impractical. None of these are failures of the plan — they're the plan working as intended.

## The loop the whole business runs on

```text
Market -> Evidence -> Problems -> Opportunities -> Services -> Customers
-> Outcomes -> Evaluation -> New evidence
```

This is what a business that actually learns from its own results looks like in practice — discovery feeding real services, real services feeding real customer outcomes, and those outcomes feeding straight back into sharper discovery next time around.
