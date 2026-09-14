# AIRLOCK

**External security infrastructure for autonomous AI agents**

> **AI agents should not be trusted to police themselves.**

AIRLOCK is an AI-security research and engineering project exploring an independent security boundary around autonomous agents.

As agents gain access to tools, data, credentials, external systems, and other agents, model-level safeguards are only part of the security problem. AIRLOCK asks a broader question:

**How can we enforce security around an AI agent even if the agent itself becomes compromised, manipulated, or untrustworthy?**

## Current status — Milestone 1 verified

The project has moved beyond architecture into a working local reference implementation.

Milestone 1 currently demonstrates, in a controlled environment:

- **AEGIS** — cryptographically signed agent identity, scoped authority, delegation, and revocation
- **AIRLOCK** — an external reference monitor that evaluates agent requests before actions are allowed
- **MIRAGE** — a synthetic environment used after quarantine for controlled interaction and observation
- **BEACON** — chained security telemetry, signed evidence, and deterministic incident correlation

The implementation enforces independent identity binding, least-privilege capability checks, quarantine state transitions, ancestor-aware authority withdrawal, and signed security evidence.

A deterministic demonstration shows an in-scope action being allowed, unauthorized actions being denied, a higher-risk action triggering quarantine, subsequent activity being routed into MIRAGE, and BEACON producing a signed critical incident timeline.

The current verification gate passes **309 automated tests**. The project has also completed separate design and code adversarial-review passes; confirmed findings from those reviews were fixed and covered with regression tests.

## Research direction

AIRLOCK currently combines four connected security areas:

- **AIRLOCK** — external control and containment
- **AEGIS** — verifiable agent identity and authorization
- **BEACON** — detection, evidence, and cross-event correlation
- **MIRAGE** — controlled isolation and defensive deception

Together, they explore how autonomous-agent environments could support independent oversight, enforceable boundaries, incident detection, containment, and post-incident accountability.

## What this is — and is not

This is a **research prototype**, not a production security product.

Milestone 1 runs in a controlled local environment. It does not yet claim process isolation, hardware-backed identity, production credential brokering, real-model containment, or a hardened network security boundary.

Those limitations are intentional and documented because the goal is to test each security assumption rather than hide it.

## Public scope

The implementation repository remains private while the system is actively being developed and reviewed.

This public page documents the thesis, verified milestones, and research direction without publishing the full enforcement logic, experimental design, or implementation blueprint.

## Next research milestone

The next major step is to strengthen the boundary itself: process-isolate the agent behind a narrow channel, expand incident correlation and operator recovery, and place a real read-only external adapter behind the same authorization and evidence pipeline.

## Core thesis

**Regulation and policy can define what autonomous AI systems should be allowed to do. Security engineering still has to make those boundaries enforceable.**

## About me

I'm **Cayden Williams**, a Computer Science (Cybersecurity) student at Arizona State University building hands-on work in security engineering, systems security, AI-agent workflows, and autonomous-agent security.

I'm actively interested in **cybersecurity, AI-security, security-engineering, and research internship opportunities** where I can contribute, learn from experienced teams, and keep developing this work.

For additional projects and contact information, see my [GitHub profile](./README.md).
