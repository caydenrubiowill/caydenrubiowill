# Architecture Notes

## Design goal

Demonstrate a safe automation pattern for a sensitive professional workflow without assuming access to any firm's internal systems or using real client information.

## Separation of responsibilities

| Stage | Best implementation pattern | Why |
|---|---|---|
| Intake capture | Deterministic application code | Preserve source data exactly |
| Fact extraction | LLM + strict schema | Convert unstructured notes into structured fields |
| Completeness | Rules + optional LLM | Required fields should be deterministic; semantic gaps may need model assistance |
| Routing | Rules first, model only when necessary | Routing should be explainable and constrained |
| Internal summary | LLM grounded to extracted facts | Good use of language-model compression |
| Validation | Deterministic + second-pass checks | Prevent unsupported claims and malformed output |
| Approval | Human | Professional judgment and consequential action stay with authorized staff |
| Audit trail | Deterministic logging | Reconstruct decisions and system behavior |

## Failure handling

A production version should fail closed. Invalid schema, missing required fields, model/API timeouts, confidence thresholds, unsupported statements, permission errors, or integration failures should route to an exception queue rather than silently continuing.

## Security questions before production

- What data may be sent to which model/provider?
- Are retention and training settings appropriate for the data classification?
- Which systems are authoritative sources of truth?
- What permissions should each agent/tool receive?
- What actions require attorney/staff approval?
- What must be logged, and what must never be logged?
- How are secrets stored and rotated?
- How are model/tool changes tested before deployment?

## Success metrics

A first pilot should measure a small number of concrete outcomes: staff time saved per matter, extraction accuracy, exception rate, rework rate, turnaround time, and reviewer satisfaction. Automation volume alone is not success if reliability or trust declines.
