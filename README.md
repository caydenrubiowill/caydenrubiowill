# Hi, I'm Cayden Williams 👋

I'm a **Computer Science (Cybersecurity) student at Arizona State University** building practical security skills through hands-on labs, endpoint-security work, technical experimentation, and independent projects.

My current focus is cybersecurity — especially **security engineering, offensive security, system security, and detection**. I also have a background building AI-assisted systems and multi-agent workflows, which I’m increasingly interested in applying to security problems.

---

## 🔐 Cybersecurity

I’m developing hands-on experience across web security, operating systems, networking fundamentals, and endpoint security.

Current work and training includes:

- Authorized web-security labs using **Nmap, Gobuster, curl, Linux CLI, and HTTP tooling**
- Service and port enumeration, endpoint discovery, HTTP headers, cookies, and sessions
- Authentication and authorization testing, including access-control / IDOR concepts
- API discovery and file-upload validation testing in controlled environments
- **Windows endpoint-security auditing and hardening with PowerShell**
- Security posture review across BitLocker, TPM, Secure Boot, firewall, logging, local policy, Defender/third-party AV context, services, updates, exploit mitigations, NTLM posture, application control, and legacy network settings
- Building repeatable security tooling with structured reports, sanitization, rollback records, benchmark mappings, and verification
- **TryHackMe Jr Penetration Tester** learning path — in progress
- Member of the **Hacking Club at ASU**, building toward more CTF and collaborative security experience

I try to treat labs like real engineering work: understand the system, collect evidence, document what happened, identify why it matters, and verify changes instead of simply running tools.

---

## 🔭 Selected Projects

### Windows Endpoint Security Lab — *v0.2.0 / Validation Ongoing*

I built a modular **PowerShell Windows endpoint assessment and hardening framework** for evaluating a Windows 11 system, documenting security posture, planning remediation, and verifying changes.

Current v0.2.0 includes:

- **72 security checks** across System, Identity, Network, Defense, Logging, PowerShell, Services, and Updates
- Coverage for controls including Kernel DMA Protection, exploit mitigations, Credential Guard, Windows Hello, NTLM session security, DNS over HTTPS, WPAD, legacy TLS, Remote Assistance, application-control posture, and point-and-print security
- Context-aware findings using PASS / WARNING / FAIL / INFO / SKIPPED / ERROR states
- Structured **JSON, CSV, Markdown, and self-contained HTML reports**
- A remediation engine covering **48 checks** (**40 Low-risk, 8 Medium-risk**) with `-WhatIf`, confirmation, pre-change state validation, automatic re-testing, change records, rollback support, and tamper detection
- A **before/after comparison system** that highlights improvements, regressions, unchanged controls, score/count deltas, and produces a self-contained comparison report
- A data-level **sanitizer** that removes hostnames, usernames, SIDs, SSIDs, private/public IPs, MAC addresses, and emails before evidence is published
- **217 framework mappings across 70 checks**, spanning MITRE ATT&CK, CIS Windows 11 control titles, and Microsoft security-baseline paths where verified
- Dependency-free validation plus a Pester 5 suite
- **102 self-test cases** covering discovery, schema validation, malformed definitions, duplicate IDs, sanitization, comparison behavior, remediation records, rollback integrity, and WhatIf safety
- Compatibility validation under both **PowerShell 7.6.5** and **Windows PowerShell 5.1**

The current test gate passes **102/102 on both PowerShell engines**, and full audits complete with **zero ERROR findings** on both.

The project has already surfaced real hardening opportunities on the test endpoint, including drive encryption, password-policy, network-protocol, firewall-logging, PowerShell-logging, NTLM auditing/session-security, WPAD, Remote Assistance, Kernel DMA Protection, and application-control posture.

**Current boundary:** audit/reporting, sanitization, schema validation, comparison, and WhatIf remediation paths are validated. Real Apply/Rollback has intentionally not yet been exercised against the machine; the next milestone is an elevated **before → approved low-risk hardening → after → compare** cycle with sanitized evidence.

*The full repository is currently maintained locally with documentation, generated check catalog, sanitized sample output, tests, architecture notes, changelog, and project-status documentation. Public repository push is the next publishing step.*

### NewGenAI TV Network / Agent Ops System — *Active Development*

[View repository →](https://github.com/caydenrubiowill/NewGenAI-TV-Network)

This originally started as an AI-assisted animation/production experiment, but the part I find most technically interesting is the **agent orchestration and decision system behind it**.

The project includes a human-gated multi-stage workflow, persistent creative memory, structured model outputs, validation and recovery behavior, and an experimental multi-agent development engine where multiple ideation agents generate competing candidates that move through deterministic gates, specialist reviews, producer synthesis, bounded revision, and final human approval.

That work pushed me to think about problems that also matter in security engineering: **trust boundaries, validation, failure handling, persistent state, controlled autonomy, human approval, deterministic stop conditions, and verifying AI-generated output rather than blindly accepting it.**

### ReachLineAZ — *Archived Prototype*

[View repository →](https://github.com/caydenrubiowill/ReachLineAZ-Prototype)

An earlier AI-assisted automation prototype for inbound lead follow-up. It included workflow design, a website and legal pages, a lead-tracking schema, and automation planning. The business concept was discontinued, but I keep the repository as a record of earlier systems and automation work.

### Next Up

**Guarded AI SOC / Detection Lab** — planned project exploring SIEM telemetry, attack simulation, detection engineering, and guarded AI-assisted security analysis. *Planned — not started.*

---

## 🧰 Technical Toolkit

**Security**  
Nmap · Gobuster · curl · HTTP/session analysis · web enumeration · access-control testing · endpoint-security assessment · Windows hardening · security-control validation

**Systems**  
Windows 11 · Linux CLI · PowerShell 5.1/7 · Windows security controls · networking fundamentals · system troubleshooting

**Development & Tools**  
Git · GitHub · PowerShell scripting · structured testing · JSON/CSV/Markdown/HTML reporting · schema validation · technical documentation · React/JavaScript exposure

**AI-Assisted Engineering**  
Claude · Claude Code · Codex · ChatGPT · prompt/system design · agent workflows · human-in-the-loop controls · output validation

---

## 🎯 Current Focus

- Security engineering and system hardening
- Offensive security / red-team fundamentals
- Networking and operating-system security
- Detection engineering and security operations
- CTFs and hands-on security labs
- Secure and responsible use of AI in technical and security workflows

---

## 🎓 Education & Community

**Arizona State University**  
B.S. Computer Science — Cybersecurity

**Hacking Club at ASU**  
Member — developing practical security skills through community learning and future CTF participation

---

## 🧠 AI + Security

Before cybersecurity became my primary focus, I spent significant time experimenting with AI-assisted systems, workflow orchestration, persistent memory, agent coordination, human approval gates, and failure handling.

I see that background as a useful complement to security rather than a separate identity. I’m especially interested in how AI-enabled systems can be **validated, constrained, monitored, and safely incorporated into security workflows**.

---

## 📫 Connect

- [LinkedIn](https://www.linkedin.com/in/cayden-williams-742547416)
- [NewGenAI TV Network / Agent Ops](https://github.com/caydenrubiowill/NewGenAI-TV-Network)
- [ReachLineAZ Prototype](https://github.com/caydenrubiowill/ReachLineAZ-Prototype)

---

*Early in my cybersecurity career, but actively building, testing, documenting, and learning.*
