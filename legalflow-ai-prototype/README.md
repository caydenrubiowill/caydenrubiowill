# LegalFlow AI - Human-Gated Legal Workflow Automation Prototype

**Built by Cayden Williams** - Computer Science (Cybersecurity) student at Arizona State University.

This is a small, role-specific proof of concept showing how I think about AI automation in a sensitive, document-heavy environment. It is intentionally **not** a legal-advice system and does not attempt to model a law firm's private internal processes.

## What the prototype demonstrates

A fictional inquiry moves through a bounded workflow:

`Intake -> Structured Extraction -> Completeness Check -> Internal Routing -> Staff Summary -> Validation -> Human Approval -> Audit Trail`

The interface demonstrates several principles I care about when building AI-assisted systems:

- **Small, specialized stages** instead of one giant prompt.
- **Structured outputs** that can be validated before downstream use.
- **Deterministic controls** for schemas, required fields, workflow state, and audit logging.
- **Human-in-the-loop approval** before anything client-facing or consequential happens.
- **Grounding checks** so generated summaries remain tied to source information.
- **Clear automation boundaries**: administrative assistance is different from professional judgment.
- **Auditability** so a reviewer can see what happened and when.

## Why it is a static demo

This repository is a front-end prototype and uses a deterministic in-browser simulation rather than sending data to a live model. That is deliberate: a hiring demo should not transmit fictional or real legal data to third-party APIs just to prove the UI concept.

In a production implementation, selected stages could call approved LLMs or internal services while deterministic code handles validation, permissions, logging, and state transitions.

## Production architecture I would explore after workflow discovery

```text
Existing intake / document system
          |
          v
   Orchestration layer
    /      |       \
Extract  Summarize  Classify     <- approved AI/model calls where useful
    \      |       /
     Structured schema
          |
   Deterministic validation
          |
   Human approval / exception queue
          |
 API / MCP / webhook integrations
          |
 Existing systems of record
          |
      Audit log
```

I would **not** choose integrations before learning the real workflow. My approach would be:

1. Observe the current process and the people who perform it.
2. Map inputs, decisions, handoffs, systems, and failure cases.
3. Pick one repetitive, bounded, high-value task.
4. Define a measurable baseline and success criteria.
5. Prototype with synthetic or appropriately protected data.
6. Validate outputs and failure modes.
7. Add human approval where judgment or risk requires it.
8. Integrate only after the prototype reliably improves the workflow.
9. Monitor, document, and iterate.

## Run it

No dependencies are required. Open `index.html` in a browser, or serve the folder with any static web server.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Safety / scope

- Synthetic data only.
- No legal advice.
- No real client information.
- No autonomous client communication.
- No production integrations.
- Human review is mandatory before downstream action.

## About me

I am an early-career technology builder studying Computer Science (Cybersecurity) at Arizona State University. I use tools such as ChatGPT, Claude, Claude Code, Codex, GitHub, and PowerShell to design, build, test, and refine AI-assisted workflows and software prototypes. I am especially interested in agent orchestration, persistent project context, verification, approval-gated automation, and making AI useful in real operational systems.

- GitHub: https://github.com/caydenrubiowill
- LinkedIn: https://www.linkedin.com/in/cayden-williams-742547416
