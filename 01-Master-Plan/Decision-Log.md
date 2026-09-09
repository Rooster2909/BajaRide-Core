# Decision Log

**Document Status**: ACTIVE REGISTER  
**Last Updated**: September 2026  
**Classification**: GOVERNANCE / TRACEABILITY

---

## I. Purpose

This document records all strategic, operational, and architectural decisions made for BajaRide. Each decision entry enables traceability, understanding of rationale, and future reconsideration if new evidence emerges.

---

## II. Decision Format

Each decision entry includes:

| Field | Description |
|-------|-------------|
| **ID** | Decision identifier (DEC-YYYY-NN) |
| **Title** | Clear, concise decision statement |
| **Date** | When the decision was made |
| **Category** | Strategic / Product / Operations / Technology / Financial / Legal |
| **Status** | ACTIVE / SUPERSEDED / UNDER REVIEW |
| **Rationale** | Why this decision was made |
| **Evidence** | What supported this decision |
| **Alternatives Considered** | Other options evaluated |
| **Impact** | Business, product, or operational consequences |
| **Dependencies** | What this decision affects |
| **Trigger for Review** | Conditions that would make this decision revisit |
| **Owner** | Who made/owns this decision |

---

## III. STRATEGIC DECISIONS

### DEC-2026-01: BajaRide is a Marketplace Platform, Not a Rental Company

| Field | Value |
|-------|-------|
| **Title** | Define BajaRide as technology platform + marketplace (asset-light), not traditional rental company |
| **Date** | 2026 (pre-September) |
| **Category** | STRATEGIC |
| **Status** | ACTIVE |
| **Rationale** | Scalability without capital intensity; network effects; focus on coordination not asset ownership |
| **Evidence** | Archivo-Maestro-2026.md; README.md; Project-State.md (all consistent) |
| **Alternatives Considered** | Fleet-based rental model; franchise model; hybrid model |
| **Impact** | CRITICAL — affects business model, funding strategy, operations, legal structure, technology |
| **Dependencies** | Unit economics; provider strategy; customer acquisition; operations model |
| **Trigger for Review** | If fleet ownership becomes strategically advantageous; if marketplace proves non-viable |
| **Owner** | Samuel Garcia (Founder) |

---

### DEC-2026-02: Unidad Cero (Can-Am X3) is PAUSED, Not Core Business

| Field | Value |
|-------|-------|
| **Title** | Can-Am Maverick X3 acquisition/operation is paused; future validation/demo tool only |
| **Date** | 2026 (pre-September) |
| **Category** | STRATEGIC |
| **Status** | ACTIVE |
| **Rationale** | Focus on marketplace platform first; avoid capital lock-in before proving model; unit can serve validation later |
| **Evidence** | Archivo-Maestro-2026.md; Project-State.md (explicit PAUSED status) |
| **Alternatives Considered** | Immediate acquisition; phased acquisition; use as marketing tool |
| **Impact** | CRITICAL — affects capital requirements, launch timeline, brand messaging |
| **Dependencies** | Funding strategy; MVP development; market validation |
| **Trigger for Review** | Successful MVP launch; secured funding; strategic partner interest; market opportunity window |
| **Owner** | Samuel Garcia (Founder) |

---

### DEC-2026-03: Initial Geography is Ensenada, Baja California

| Field | Value |
|-------|-------|
| **Title** | MVP and initial operations limited to Ensenada; expansion to BC and Norteamérica later |
| **Date** | 2026 (pre-September) |
| **Category** | STRATEGIC |
| **Status** | ACTIVE |
| **Rationale** | Manageable market for MVP validation; known ecosystem; proximity to potential markets |
| **Evidence** | Multiple documents (Archivo Maestro, README, Project State) |
| **Alternatives Considered** | Multi-city launch; tourist-only focus; Baja California-wide |
| **Impact** | HIGH — affects market research, operations, legal, marketing |
| **Dependencies** | Market validation results; operational capacity; legal requirements |
| **Trigger for Review** | MVP success/failure; market saturation; regulatory changes |
| **Owner** | Samuel Garcia (Founder) |

---

### DEC-2026-04: Initial Market Segment is UTV/Off-Road Experiences

| Field | Value |
|-------|-------|
| **Title** | MVP and initial launch focus on UTV and off-road recreational experiences |
| **Date** | 2026 (pre-September) |
| **Category** | STRATEGIC |
| **Status** | ACTIVE |
| **Rationale** | Clear market; seasonal demand; existing ecosystem; differentiator |
| **Evidence** | Multiple documents (consistent positioning) |
| **Alternatives Considered** | General tourism; luxury experiences; adventure tourism; water sports |
| **Impact** | HIGH — affects product, marketing, operations, legal/insurance |
| **Dependencies** | Market research; provider availability; demand validation |
| **Trigger for Review** | Market saturation; demand validation failure; competitor entry |
| **Owner** | Samuel Garcia (Founder) |

---

### DEC-2026-05: Asset-Light Model — No Fleet Ownership

| Field | Value |
|-------|-------|
| **Title** | BajaRide operates asset-light; does not purchase, own, or directly operate vehicles |
| **Date** | 2026 (pre-September) |
| **Category** | STRATEGIC |
| **Status** | ACTIVE |
| **Rationale** | Capital efficiency; scalability; liability containment; focus on platform |
| **Evidence** | Archivo-Maestro-2026.md (explicit statement) |
| **Alternatives Considered** | Owned fleet model; lease model; franchise model |
| **Impact** | CRITICAL — affects capital structure, liability, operations, unit economics |
| **Dependencies** | Provider recruitment strategy; commission structure; insurance model |
| **Trigger for Review** | Inability to find quality providers; market demands owned asset |
| **Owner** | Samuel Garcia (Founder) |

---

### DEC-2026-06: Parallel Development Strategy — Documentation + Research + MVP

| Field | Value |
|-------|-------|
| **Title** | Do NOT wait for complete documentation before MVP development; execute in parallel |
| **Date** | 2026 (September) |
| **Category** | STRATEGIC |
| **Status** | ACTIVE |
| **Rationale** | MVP serves as validation instrument; discovers requirements; reduces time to market |
| **Evidence** | Archivo-Maestro-2026.md; investor priority for documentation + pitch deck |
| **Alternatives Considered** | Waterfall (complete docs first); pure agile (minimal docs) |
| **Impact** | HIGH — affects timeline, resource allocation, uncertainty tolerance |
| **Dependencies** | MVP scope clarity; documentation architecture; team capability |
| **Trigger for Review** | If MVP development reveals fundamental strategy flaws |
| **Owner** | Samuel Garcia / Product Team |

---

### DEC-2026-07: Technology Stack — Flutter (Frontend) + Node.js/TypeScript (Backend)

| Field | Value |
|-------|-------|
| **Title** | Use Flutter/Dart for mobile frontend; Node.js/TypeScript for backend API |
| **Date** | 2026 (pre-September) |
| **Category** | TECHNOLOGY |
| **Status** | ACTIVE |
| **Rationale** | Cross-platform mobile; TypeScript type safety; Node.js scalability; team familiarity (TBD) |
| **Evidence** | Archivo-Maestro-2026.md |
| **Alternatives Considered** | React Native; Swift/Kotlin; Python/Django; Go |
| **Impact** | HIGH — affects architecture, hiring, development speed, maintenance |
| **Dependencies** | Team skills; library maturity; scaling needs |
| **Trigger for Review** | Team skill gaps; performance issues; scaling requirements |
| **Owner** | CTO / Tech Lead (TBD) |
| **⚠ Flagged (2026-09-09)** | BRfinal consolidation surfaced founder context describing an earlier, different technical track (Flask/Stripe, later Next.js 15) that is not visible anywhere in this repository and is not reconciled with this decision. See DEC-2026-16 below. This decision remains ACTIVE as the repo's documented stack; it has not been confirmed or reversed. |

---

### DEC-2026-08: Hub is Future Operational Layer, Not MVP Requirement

| Field | Value |
|-------|-------|
| **Title** | Hub (operational coordination point) is future-phase component; not required for MVP |
| **Date** | 2026 (implied in model) |
| **Category** | OPERATIONAL |
| **Status** | ACTIVE |
| **Rationale** | Simplify MVP scope; test marketplace coordination first; add operational layer post-validation |
| **Evidence** | Model definition in Archivo Maestro; MVP scope planning |
| **Alternatives Considered** | Hub mandatory in MVP; Hub optional; no Hub planned |
| **Impact** | MEDIUM — affects MVP scope, operations complexity, scaling timeline |
| **Dependencies** | Scaling success; operational challenges; market demand |
| **Trigger for Review** | MVP operational constraints; scaling beyond 1-region capacity |
| **Owner** | Operations Lead (TBD) |

---

### DEC-2026-09: Priority is Investor Presentation Document + Pitch Deck, Then MVP

| Field | Value |
|-------|-------|
| **Title** | Immediate priority: complete investor documentation; simultaneously develop MVP; then launch |
| **Date** | 2026 (September) |
| **Category** | STRATEGIC |
| **Status** | ACTIVE |
| **Rationale** | Funding enables operations; MVP validates market; parallel execution is critical |
| **Evidence** | Archivo-Maestro-2026.md section 7 |
| **Alternatives Considered** | MVP first then fundraise; fundraise only; documentation only |
| **Impact** | CRITICAL — affects timeline and resource allocation |
| **Dependencies** | Investor readiness; MVP scope; team capacity |
| **Trigger for Review** | If investor fundraising stalls; if MVP reveals need for strategic change |
| **Owner** | Samuel Garcia / Investor Relations (TBD) |

---

## IV. OPERATIONAL DECISIONS

### DEC-2026-10: MVP Scope — Define Exact In/Out Before Development

| Field | Value |
|-------|-------|
| **Title** | Create explicit MVP Product Definition with clear scope boundaries |
| **Date** | 2026 (September) |
| **Category** | PRODUCT |
| **Status** | ACTIVE |
| **Rationale** | Prevent scope creep; enable focused development; communicate to stakeholders |
| **Evidence** | BLOQUE 6 requirement; marketplace MVP best practice |
| **Alternatives Considered** | Iterative MVP; full feature set; minimal viable product |
| **Impact** | HIGH — affects development timeline, resource needs, quality |
| **Dependencies** | Product definition completion; team agreement; investor input |
| **Trigger for Review** | If MVP scope proves unviable; if critical feature missing |
| **Owner** | Product Manager (TBD) |

---

### DEC-2026-11: Provider Acquisition Prioritizes Quality Over Volume in MVP

| Field | Value |
|-------|-------|
| **Title** | MVP launch focuses on curated provider set (quality, reliability, verified) not mass recruitment |
| **Date** | 2026 (September — implied) |
| **Category** | OPERATIONAL |
| **Status** | PENDING VALIDATION |
| **Rationale** | User experience quality; reduces operational overhead; enables market proof |
| **Evidence** | Asset-light model; MVP focus |
| **Alternatives Considered** | Open provider marketplace; franchise; partnerships |
| **Impact** | MEDIUM — affects supply, launch speed, unit economics |
| **Dependencies** | Provider recruitment strategy; vetting criteria; onboarding process |
| **Trigger for Review** | If provider scarcity becomes bottleneck; if user demand exceeds supply |
| **Owner** | Operations / Provider Partnerships (TBD) |

---

## V. FINANCIAL DECISIONS

### DEC-2026-12: Primary Revenue Model is Take Rate on Bookings (GMV-based)

| Field | Value |
|-------|-------|
| **Title** | Revenue primarily from marketplace take rate (percentage of booking value) |
| **Date** | 2026 (September) |
| **Category** | FINANCIAL |
| **Status** | ACTIVE |
| **Rationale** | Aligned with marketplace model; incentive alignment with volume growth; standard in industry |
| **Evidence** | Financial Model Overview; marketplace best practice |
| **Alternatives Considered** | Subscription fee; listing fee; commission hybrid; premium features |
| **Impact** | CRITICAL — affects unit economics, provider attractiveness, pricing strategy |
| **Dependencies** | Take rate percentage (TBD); booking volume; provider payout structure |
| **Trigger for Review** | If take rate proves uncompetitive; if provider churn high |
| **Owner** | CFO / Finance Lead (TBD) |

---

### DEC-2026-13: Funding Structure — PENDING USER DECISION

| Field | Value |
|-------|-------|
| **Title** | PENDING USER DECISION: Choose between SAFE, equity, or hybrid funding approach |
| **Date** | 2026 (September) |
| **Category** | FINANCIAL |
| **Status** | PENDING USER DECISION |
| **Rationale** | Different structures have different implications for control, dilution, investor relations |
| **Evidence** | Historical discussion of SAFE 3-tranche structure ($150K historical target) |
| **Alternatives Considered** | SAFE (convertible); Series Seed; equity direct; friends & family; grants |
| **Impact** | CRITICAL — affects cap table, control, investor profile, dilution |
| **Dependencies** | Target raise amount (TBD); investor preferences; legal review |
| **Next Steps** | 1. Validate funding requirement via financial model; 2. Conduct legal review; 3. User decision |
| **Owner** | Samuel Garcia / Advisor

---

## VI. LEGAL/TRUST DECISIONS

### DEC-2026-14: Legal Framework Development — PENDING EXTERNAL REVIEW

| Field | Value |
|-------|-------|
| **Title** | Develop legal framework for marketplace operation; requires professional legal review |
| **Date** | 2026 (September) |
| **Category** | LEGAL |
| **Status** | PENDING EXTERNAL REVIEW |
| **Rationale** | Marketplace requires clear provider/user/platform responsibilities; Mexico jurisdiction |
| **Evidence** | Knowledge Recovery Matrix; regulatory requirement |
| **Alternatives Considered** | Self-serve (risky); full legal team (expensive); hybrid approach |
| **Impact** | CRITICAL — affects operations, liability, user/provider confidence |
| **Dependencies** | Legal advisor; Mexican law expertise; insurance broker |
| **Next Steps** | Engage legal counsel; review framework documents; finalize terms |
| **Owner** | Legal Advisor (TBD) |

---

### DEC-2026-15: KYC/KYB Implementation — MVP vs. Phased Approach

| Field | Value |
|-------|-------|
| **Title** | PENDING USER DECISION: Implement full KYC/KYB in MVP vs. phased approach |
| **Date** | 2026 (September) |
| **Category** | LEGAL / OPERATIONAL |
| **Status** | PENDING USER DECISION |
| **Rationale** | Fraud prevention vs. friction; regulatory compliance vs. speed to market |
| **Evidence** | Onfido mentioned historically but not contracted |
| **Alternatives Considered** | Basic ID verification in MVP; full KYC/KYB MVP; no verification MVP |
| **Impact** | MEDIUM-HIGH — affects user onboarding friction, fraud risk, compliance |
| **Dependencies** | Regulatory requirements; fraud risk assessment; user research |
| **Next Steps** | 1. Consult legal on Mexican requirements; 2. Risk assessment; 3. MVP scope decision |
| **Owner** | Legal / Compliance / Product (TBD)

---

## VI-B. TECHNOLOGY DECISIONS UNDER REVIEW

### DEC-2026-16: Technology Stack Ambiguity — PENDING USER DECISION

| Field | Value |
|-------|-------|
| **Title** | PENDING USER DECISION: Reconcile the Flutter/Node.js stack (DEC-2026-07) with an earlier technical track described in prior founder working sessions (Flask + Stripe, later a pivot toward Next.js 15) |
| **Date** | 2026-09-09 |
| **Category** | TECHNOLOGY |
| **Status** | PENDING USER DECISION |
| **Rationale** | This repository contains zero source code, so neither track can be verified from repo evidence alone. Proceeding with technical documents (Data-Model.md, Architecture.md, API-Requirements.md) without resolving this risks building specs for a stack that doesn't match whatever code, if any, currently exists elsewhere. |
| **Evidence** | DEC-2026-07 (Flutter/Node.js, ACTIVE in this repo); `BRfinal-Knowledge-Consolidation-2026.md` Section II.A (Flask/Stripe/Windsurf/Next.js — recovered from prior sessions, unverified against this repo) |
| **Alternatives Considered** | (1) Confirm Flutter/Node.js as definitive, treat Flask/Next.js work as abandoned; (2) Confirm Next.js 15 is definitive, update DEC-2026-07 accordingly; (3) Determine the Flask/Next.js work lives in a separate repository that should be linked/merged; (4) Treat all prior technical work as exploratory and start architecture fresh |
| **Impact** | HIGH — blocks `Data-Model.md`, `Architecture.md`, `API-Requirements.md` from being written with confidence |
| **Dependencies** | Founder confirmation; possible discovery of a separate code repository |
| **Next Steps** | Founder confirms which stack (if any) is definitive before `Architecture.md` is drafted |
| **Owner** | Samuel Garcia (Founder) — cannot be resolved by document audit alone |

---

## VII. UNDER REVIEW / TBD

### TBD-2026-01: Insurance Strategy

**Status**: REQUIRES EXTERNAL REVIEW  
**Topic**: What insurance is required? Provider self-insured vs. platform policy vs. hybrid?  
**AXA Status**: CONSIDERED (historical mention) but NOT CONTRACTED  
**Next**: Engage insurance broker; analyze liability; model costs

---

### TBD-2026-02: Payment Processing Partner

**Status**: REQUIRES EXTERNAL VALIDATION  
**Topic**: Stripe, Braintree, or local processor? When to integrate?  
**Historical Mentions**: Stripe, Braintree (CONSIDERED, not committed)  
**Next**: Evaluate options; model transaction costs; MVP payment strategy

---

## VIII. CHANGES TO THIS LOG

When a new strategic decision is made:

1. Add entry to this log
2. Document in full format above
3. Update affected module documents
4. Update cross-reference matrix
5. Commit with clear message

---

**Log Maintained By**: Documentation Team  
**Last Audit**: September 2026  
**Next Review**: When new major decision made  
**Related Documents**: Knowledge-Recovery-Matrix.md, Archivo-Maestro-2026.md
