# Decision Log

**Document Status**: ACTIVE REGISTRY  
**Last Updated**: September 9, 2026  
**Classification**: STRATEGIC / MASTER PLAN  
**Owner**: BajaRide Strategy Team

---

## I. Overview

This document registers all strategic decisions that define BajaRide's direction, model, priorities, and commitments. Each decision includes the what, why, when, evidence, impacts, and reversibility conditions.

---

## II. Critical Strategic Decisions

### DECISION 1: BajaRide Business Definition

| Field | Value |
|-------|-------|
| **Decision** | BajaRide is a technology platform and marketplace specializing in off-road experiences, NOT a vehicle rental company or fleet owner. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | September 2026 (reinforced) |
| **Evidence** | Archivo-Maestro-2026.md, README.md, 07-AI-System/Project-State.md, 08-Investors/Project-State.md |
| **Rationale** | Asset-light model provides scalability without capital-intensive fleet ownership. Platform aggregates third-party supply. |
| **Documents Affected** | All strategic and investor-facing documents |
| **Implications** | No vehicle acquisition, no direct operations staff, focus on technology and coordination layer |
| **Reversible?** | No — core to business model |
| **Dependent Decisions** | All financial, operational, legal, and technical decisions flow from this definition |

---

### DECISION 2: Asset-Light Operating Model

| Field | Value |
|-------|-------|
| **Decision** | BajaRide operates as an asset-light marketplace. Vehicles, equipment, and guides are owned and operated by third-party providers/owners. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | September 2026 (reinforced) |
| **Evidence** | Archivo-Maestro-2026.md: "BajaRide opera bajo un modelo asset-light y no depende de poseer una flota propia" |
| **Rationale** | Reduces capital requirements, accelerates launch, improves unit economics, enables rapid scaling |
| **Documents Affected** | Financial model, operations plan, legal framework, investor narrative |
| **Implications** | Revenue via take rate; providers absorb capital and operational risk |
| **Reversible?** | No — fundamental business model |
| **Tension Points** | Must ensure provider revenue share remains attractive enough to guarantee supply |

---

### DECISION 3: Initial Geography: Ensenada, Baja California

| Field | Value |
|-------|-------|
| **Decision** | BajaRide's initial market and MVP launch geography is Ensenada, Baja California. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | 2026 (consistent across all documents) |
| **Evidence** | Archivo-Maestro-2026.md, README.md, 08-Investors/Project-State.md |
| **Rationale** | Proximity to off-road infrastructure (Baja 500, desert terrain), tourist market, existing ecosystem |
| **Documents Affected** | Market research, financial model (local unit economics), operations |
| **Implications** | Legal/regulatory compliance with Baja California and Mexico; operations anchored in Ensenada hub |
| **Reversible?** | Partially — can expand to other geographies after Ensenada validation |
| **Expansion Path** | After MVP success: other Baja California locations → broader Mexico → USA/North America |

---

### DECISION 4: Initial Market Segment: UTV/Off-Road Experiences

| Field | Value |
|-------|-------|
| **Decision** | BajaRide's initial market focus is on curated off-road experiences (UTV, ATV, desert tours, adventure activities). |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | 2026 (consistent across all documents) |
| **Evidence** | Archivo-Maestro-2026.md, README.md, 08-Investors/Project-State.md, 02-Finance/BR-02.1 |
| **Rationale** | High demand in Ensenada; existing event ecosystem (Baja 500); clear user demographic; provider availability |
| **Documents Affected** | Market research, financial model, MVP spec, operations |
| **Implications** | Insurance, liability, regulatory focus on adventure activities; supplier relationship with UTV/ATV owners |
| **Reversible?** | Partially — can add other experience categories (hiking, camping, etc.) after MVP success |
| **Scope Boundary** | MVP launch focuses on UTV/off-road only; other categories are P2/P3 features |

---

### DECISION 5: Unidad Cero (Can-Am Maverick X3) is PAUSED

| Field | Value |
|-------|-------|
| **Decision** | Unidad Cero (Can-Am X3 vehicle) acquisition and operation are temporarily PAUSED. It is NOT the center of BajaRide business. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | September 2026 (reinforced in Archivo-Maestro) |
| **Evidence** | Archivo-Maestro-2026.md: "La Unidad Cero (Can-Am X3) queda PAUSADA temporalmente"; 07-AI-System/Project-State.md |
| **Rationale** | Unidad Cero became a distraction from core marketplace strategy; maintaining asset-light model requires no owned vehicles |
| **Documents Affected** | Strategic planning, financial model, operations |
| **Implications** | No capital allocation to Unidad Cero; no operational staff assigned; platform operates without it |
| **Reversible?** | Yes — can resume after successful MVP funding and market validation |
| **Conditions to Resume** | Successful MVP launch, adequate funding, strategic alignment with marketplace maturity, market demand validation |
| **Current Role** | Future option for validation, demonstration, or brand activation (post-funding) |

---

### DECISION 6: Parallel Development Strategy: Documentation + Research + MVP

| Field | Value |
|-------|-------|
| **Decision** | Development proceeds in parallel: strategic documentation, market research, and MVP development occur simultaneously, NOT sequentially. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | September 2026 |
| **Evidence** | Archivo-Maestro-2026.md mentions "Documento Base de Presentación para Inversionistas" + MVP; Knowledge-Recovery-Matrix Section V (Strategy is not "Investor Doc → Pitch → MVP") |
| **Rationale** | MVP serves as validation tool; prevents documentation paralysis; enables rapid learning cycles; accelerates market feedback |
| **Documents Affected** | Project roadmap, development methodology, investor communication |
| **Implications** | MVP may be incomplete vs. final product; docs may evolve as MVP reveals new insights; agile approach required |
| **Reversible?** | No — core to development philosophy |
| **Risk Management** | Investor documentation must clearly separate validated findings from MVP learnings |

---

### DECISION 7: Technology Stack: Flutter/Dart + Node.js/TypeScript

| Field | Value |
|-------|-------|
| **Decision** | Frontend: Flutter/Dart; Backend: Node.js/TypeScript; Cross-platform mobile-first approach. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | 2026 (consistent across all documents) |
| **Evidence** | Archivo-Maestro-2026.md, 07-AI-System/Project-State.md, 08-Investors/Project-State.md |
| **Rationale** | Flutter enables rapid cross-platform (iOS/Android) development; Node.js/TS enables rapid backend iteration |
| **Documents Affected** | 06-App/, technical architecture, development roadmap |
| **Implications** | Development team must be proficient in these stacks; no legacy system migration costs |
| **Reversible?** | Theoretically yes (rewrite), but not practical once development begins |
| **Alternatives Considered** | Not documented; assume competitive analysis supports this choice |

---

### DECISION 8: Repository is the Single Source of Truth

| Field | Value |
|-------|-------|
| **Decision** | BajaRide-Core GitHub repository is the single, authoritative source of truth for all strategic, operational, and technical documentation. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | September 2026 (explicit in BIC-1.md, README.md) |
| **Evidence** | BIC-1.md: "Veracidad y Consistencia"; README.md: "Este repositorio es la fuente central"; all docs reference this principle |
| **Rationale** | Prevents knowledge silos; enables AI agents to work autonomously; survives team changes; ensures consistency |
| **Documents Affected** | All; BIC-1.md (AI Constitution), 07-AI-System/Protocols.md |
| **Implications** | All decisions, investigations, findings, simulations must be documented in repo; no critical info stays in chat-only |
| **Reversible?** | No — fundamental to project governance |
| **Enforcement** | Every document must timestamp updates; no verbal-only decisions; all IAs must commit findings to repo |

---

### DECISION 9: Hub is a Future Operational Layer, Not MVP-Critical

| Field | Value |
|-------|-------|
| **Decision** | Hub (physical/operational coordination base) is part of the long-term model but NOT required for MVP launch. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | September 2026 (implied in Archivo-Maestro; Knowledge-Recovery-Matrix classifies as "MEDIUM priority") |
| **Evidence** | Model flow includes "Hub/Operations"; Hub mentioned in financial assumptions as TBD |
| **Rationale** | MVP can coordinate experiences digitally; Hub becomes valuable at scale or specific geographic density |
| **Documents Affected** | 05-Operations/, financial model, MVP spec |
| **Implications** | No hub capital costs in MVP budget; can be added post-funding based on demand |
| **Reversible?** | Yes — decision to build/rent hub can be made after MVP market validation |
| **Conditions** | Revisit once monthly active users and transaction volume reach defined thresholds |

---

### DECISION 10: Investor Documentation ≠ Guaranteed Funding

| Field | Value |
|-------|-------|
| **Decision** | Completion of investor presentation document and pitch deck is a strategic priority, but does not guarantee or presume funding. |
| **Status** | CONFIRMED / ACTIVE |
| **Date** | September 2026 |
| **Evidence** | Archivo-Maestro-2026.md lists investor materials as "corto plazo"; Knowledge-Recovery-Matrix distinguishes hypothesis from validated data |
| **Rationale** | Investor materials must be based on validated evidence; investors will perform due diligence; no assumptions about fundraising success |
| **Documents Affected** | 08-Investors/, financial model, MVP roadmap |
| **Implications** | All investor claims must be evidence-backed; simulations must be labeled; projections must include risk disclaimers |
| **Reversible?** | No — ethical and legal requirement |
| **Enforcement** | 08-Investors/Investor-Evidence-Matrix.md must separate validated findings from assumptions |

---

## III. Important Operating Assumptions (Not Yet Decisions)

These are working assumptions that guide planning but remain to be validated:

| Assumption | Status | Validation Required |
|-----------|--------|-------------------|
| UTV market exists and is underserved in Ensenada | HYPOTHESIS | Market research during MVP |
| Users will pay premium for curated, trusted experiences | HYPOTHESIS | Early user testing |
| Providers want access to marketplace distribution | HYPOTHESIS | Provider interviews |
| Take-rate model (typically 15-25%) is acceptable to providers | HYPOTHESIS | Competitive benchmarking |
| Hub will become operationally necessary at scale | HYPOTHESIS | Scaling analysis post-MVP |
| Insurance/liability can be managed via third-party coverage | HYPOTHESIS | Legal review (TBD) |
| $150K USD is sufficient to launch MVP | PROVISIONAL | Updated financial model (TBD) |

---

## IV. Decision Reversal Protocol

A decision can be reversed if:

1. **Evidence emerges** contradicting the original rationale
2. **Market conditions change** materially
3. **New information** becomes available that was unknown at decision time
4. **Explicit user/founder request** with documented reasoning

**Process**:
1. Document the reversal reason in this log
2. Update affected documents with "SUPERSEDED" marker
3. Archive old version with reversal annotation
4. Notify all stakeholders
5. Create new decision entry

---

## V. Next Decision Points (Pending User Input)

| Topic | Decision Required | Timeline | Owner |
|-------|-----------------|----------|-------|
| MVP Scope Boundaries | What features are P0 vs P1? | Pre-dev | Product |
| Provider Revenue Share | Exact take-rate percentage? | Pre-launch | Finance |
| Payment Processing | Which processor (Stripe, local, etc.)? | Pre-MVP | Finance/Legal |
| KYC Requirements | What user verification is mandatory MVP vs future? | Pre-MVP | Legal |
| Insurance Strategy | Self-insure, partner, or full third-party? | Pre-launch | Legal/Ops |
| Fundraising Target | Exact capital needed? Seed vs Series A? | Q4 2026 | Finance |

---

## VI. Document Synchronization

This Decision Log must be reviewed and updated whenever:

- A new strategic decision is made
- Evidence contradicts a past decision
- A decision affects multiple documents (all must be updated)
- Quarterly strategy review (minimum)

---

**Version**: 1.0  
**Created**: September 9, 2026  
**Next Review**: December 2026  
**Owner**: Rooster2909 / Strategy Team
