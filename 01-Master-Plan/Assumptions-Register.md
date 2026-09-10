# Assumptions Register

**Document Status**: ACTIVE REGISTRY  
**Last Updated**: September 9, 2026  
**Classification**: STRATEGIC / VALIDATION  
**Owner**: BajaRide Strategy & Research Team

---

## I. Overview

This document registers all working assumptions that guide BajaRide strategy, financial modeling, operations planning, and product development. Assumptions are explicitly tracked by category, status, evidence level, and validation method to prevent hypothesis from being confused with validated fact.

**Key Rule**: No assumption should be presented to investors or stakeholders as validated data without explicit evidence.

---

## II. Market Assumptions

### MARKET-M01: UTV/Off-Road Market Exists & is Underserved in Ensenada

| Field | Value |
|-------|-------|
| **Assumption** | The off-road experience market (UTV, ATV, desert tours) exists in Ensenada, Baja California and is currently underserved by organized, curated platforms. |
| **Category** | Market / Demand |
| **Status** | HYPOTHESIS |
| **Evidence Available** | Baja 500 event exists; historical mentions of Baja 500 interviews as validation opportunity. **Update 2026-09-09**: external secondary research confirms real tourism demand at scale (Ensenada: ~1.3M cruise passengers in 2025, +41.7% YoY; nature/adventure = 22.2% of stated travel motivation) and real existing off-road operators/pricing in-market. See `05-Operations/Market-Competitive-Research-2026.md`. |
| **Evidence Level** | LOW→MEDIUM — general tourism/off-road demand now has external evidence; BajaRide-specific demand (would tourists book *BajaRide*) still has zero direct evidence |
| **Validation Method** | Market research interviews during/after Baja 500; competitive analysis; search volume analysis |
| **Impact if False** | MVP market validation fails; entire business model may not apply to Ensenada |
| **Mitigation** | Secondary geography backups (other Baja CA locations, Cabo, etc.) |
| **Timeline for Validation** | Q4 2026 (during Baja 500) |
| **Owner** | Marketing / Operations |

---

### MARKET-M02: Users Will Pay Premium for Curated, Trusted Experiences

| Field | Value |
|-------|-------|
| **Assumption** | End users (tourists, recreation seekers) are willing to pay premium prices for professionally curated, verified, and insured off-road experiences vs. ad-hoc arrangements. |
| **Category** | Market / Demand |
| **Status** | HYPOTHESIS |
| **Evidence Available** | General knowledge of marketplace economics (Airbnb, Uber model); no specific user research |
| **Evidence Level** | MEDIUM — Industry experience exists; specific user research pending |
| **Validation Method** | User interviews; MVP launch with pricing testing; churn analysis; repeat booking rates |
| **Impact if False** | Users default to direct peer-to-peer arrangements; platform cannot extract value; revenue model breaks |
| **Mitigation** | Start with competitive pricing; early user feedback loop; rapid pricing iteration |
| **Timeline for Validation** | Q1 2027 (MVP launch) |
| **Owner** | Product / Marketing |

---

### MARKET-M03: Providers Want Access to Marketplace Distribution

| Field | Value |
|-------|-------|
| **Assumption** | UTV owners and experience operators want access to a marketplace platform for customer acquisition and convenience, even with take-rate fees. |
| **Category** | Market / Supply |
| **Status** | HYPOTHESIS |
| **Evidence Available** | Business model logic (similar to Uber, Airbnb); no direct provider interviews documented |
| **Evidence Level** | MEDIUM — Marketplace model proven elsewhere; Ensenada-specific validation pending |
| **Validation Method** | Provider interviews; signup/activation metrics; provider churn rates; satisfaction surveys |
| **Impact if False** | Providers refuse to list; supply remains fragmented; platform has no competitive advantage |
| **Mitigation** | Flexible pricing/rev-share model; direct outreach to key providers; co-development with early adopters |
| **Timeline for Validation** | Q4 2026 - Q1 2027 |
| **Owner** | Operations / Business Development |

---

### MARKET-M04: Market Size is X (TBD)

| Field | Value |
|-------|-------|
| **Assumption** | Total addressable market (TAM) in Ensenada for off-road experiences is sufficient to support 8-digit revenue potential. |
| **Category** | Market / TAM |
| **Status** | TBD — Not yet quantified |
| **Evidence Available** | None. **Update 2026-09-09**: raw inputs for a bottom-up estimate now exist externally (cruise passenger volume, YoY growth, nature/adventure travel share, average trip spend) — see `05-Operations/Market-Competitive-Research-2026.md` §5. No TAM figure has been calculated from these inputs; doing so would require additional unvalidated conversion/penetration assumptions. A historical $16.4M/year TAM figure exists from prior sessions with no visible methodology and remains unused — see `01-Master-Plan/BRfinal-Knowledge-Consolidation-2026.md` §II.D. |
| **Evidence Level** | ZERO→LOW — raw external inputs exist; no TAM has actually been calculated yet |
| **Validation Method** | Bottom-up: interview X providers, estimate capacity, calculate annual GMV; Top-down: tourism data, Baja 500 attendance, competitive estimates |
| **Impact if False** | Market too small; unit economics don't scale; geographic expansion required earlier |
| **Mitigation** | Diversify experience categories beyond UTV; expand geography sooner |
| **Timeline for Validation** | Q4 2026 (market research phase) |
| **Owner** | Marketing / Finance |

---

### MARKET-M05: Competitive Landscape is Fragmented

| Field | Value |
|-------|-------|
| **Assumption** | Off-road experience providers in Ensenada are currently fragmented (no dominant player), making market entry viable. |
| **Category** | Market / Competition |
| **Status** | HYPOTHESIS — direction supported by evidence, dominance not ruled out |
| **Evidence Available** | None documented. **Update 2026-09-09**: 8 real operators identified in Ensenada (ATV Ensenada Tours, ATV Ensenada Off Road Tours, Ride 2 go, Chylyca UTV Rentas, PITS Adventure Hub, Activities Ensenada, Rhino Off Road Tours, Baja Trip ATV Rental) with published pricing — consistent with a fragmented, multi-operator market rather than one dominant player, but no formal market-share analysis was done. See `05-Operations/Market-Competitive-Research-2026.md` §3, `05-Operations/Provider-Resource-Map.md`. |
| **Evidence Level** | ZERO→MEDIUM — real competitor list exists; fragmentation is a reasonable read of it, not a measured fact |
| **Validation Method** | Competitive analysis; provider interviews; Google/social media search; Baja 500 reconnaissance |
| **Impact if False** | Incumbent competitor with strong market position; need to differentiate significantly or enter adjacent market |
| **Mitigation** | Rapid MVP launch; community-first approach; unique technology/UX |
| **Timeline for Validation** | Q4 2026 |
| **Owner** | Marketing / Strategy |

---

## III. Demand & User Behavior Assumptions

### DEMAND-D01: Users are Primarily Tourists

| Field | Value |
|-------|-------|
| **Assumption** | Primary user segment is tourists visiting Ensenada seeking adventure/experience activities. |
| **Category** | Demand / User Segmentation |
| **Status** | HYPOTHESIS |
| **Evidence Available** | General knowledge of Ensenada tourism; Baja 500 event draws international visitors |
| **Evidence Level** | MEDIUM |
| **Validation Method** | User interviews; geographic analysis of MVP signups; user survey; booking origin tracking |
| **Impact if False** | Local residents may be primary market; different acquisition/retention strategies needed |
| **Mitigation** | Support both segments; adjust marketing |
| **Timeline for Validation** | Q1 2027 (MVP launch) |
| **Owner** | Marketing / Product |

---

### DEMAND-D02: Booking Window is Seasonal

| Field | Value |
|-------|-------|
| **Assumption** | Demand for off-road experiences in Ensenada follows seasonal pattern (peak: winter/spring, low: summer/fall). |
| **Category** | Demand / Seasonality |
| **Status** | HYPOTHESIS |
| **Evidence Available** | General Baja California tourism seasonality |
| **Evidence Level** | MEDIUM |
| **Validation Method** | Historical Baja 500 data; provider booking patterns; tourism statistics |
| **Impact if False** | Demand more consistent; fewer issues with cash flow volatility |
| **Mitigation** | Diversify experience types; expand to non-seasonal markets |
| **Timeline for Validation** | Ongoing (after MVP launch) |
| **Owner** | Finance / Operations |

---

### DEMAND-D03: Average Booking Value is $X (TBD)

| Field | Value |
|-------|-------|
| **Assumption** | Average end-user price per UTV experience booking is between $100-300 USD. |
| **Category** | Demand / Pricing |
| **Status** | TBD — Range estimated, not validated |
| **Evidence Available** | None documented; requires provider interviews |
| **Evidence Level** | ZERO |
| **Validation Method** | Provider interviews; competitive pricing analysis; MVP launch price testing |
| **Impact if False** | Revenue model requires adjustment; CAC/LTV math changes |
| **Mitigation** | Flexible pricing; rapid iteration based on market feedback |
| **Timeline for Validation** | Q4 2026 - Q1 2027 |
| **Owner** | Finance / Operations |

---

## IV. Supply-Side Assumptions

### SUPPLY-S01: Provider Supply Exists & is Accessible

| Field | Value |
|-------|-------|
| **Assumption** | Sufficient UTV owners and experience operators exist in/near Ensenada who are willing to participate in a marketplace. |
| **Category** | Supply / Provider Base |
| **Status** | HYPOTHESIS |
| **Evidence Available** | Baja 500 event implies local expertise; no formal supply audit conducted |
| **Evidence Level** | MEDIUM |
| **Validation Method** | Provider interviews; Baja 500 reconnaissance; geographic mapping of providers |
| **Impact if False** | Insufficient supply for MVP; need to recruit/incentivize providers heavily |
| **Mitigation** | Co-development model; early provider incentives; marketing to attract supply |
| **Timeline for Validation** | Q4 2026 |
| **Owner** | Operations / Business Development |

---

### SUPPLY-S02: Providers Accept Take-Rate Model (15-25%)

| Field | Value |
|-------|-------|
| **Assumption** | UTV owners and operators accept marketplace take-rate fees in the range of 15-25%, comparable to other platforms. |
| **Category** | Supply / Economics |
| **Status** | HYPOTHESIS |
| **Evidence Available** | Industry benchmarks (Airbnb ~3-4%, Uber 20-30%); no Ensenada-specific validation |
| **Evidence Level** | MEDIUM |
| **Validation Method** | Provider interviews; competitive analysis; MVP sign-up and activation rates |
| **Impact if False** | Providers demand higher rev-share; unit economics break; need alternative model |
| **Mitigation** | Flexible rev-share; value-add services (insurance, payments, support); rapid iteration |
| **Timeline for Validation** | Q4 2026 - Q1 2027 |
| **Owner** | Finance / Operations |

---

### SUPPLY-S03: Providers Can Manage Insurance & Liability

| Field | Value |
|-------|-------|
| **Assumption** | Providers can obtain/manage insurance coverage for UTV experiences or accept liability risk. |
| **Category** | Supply / Risk Management |
| **Status** | HYPOTHESIS |
| **Evidence Available** | None; legal/insurance landscape in Baja California not yet researched |
| **Evidence Level** | ZERO |
| **Validation Method** | Legal research; provider interviews; insurance broker consultation |
| **Impact if False** | BajaRide may need to provide/subsidize insurance; significantly increases costs |
| **Mitigation** | Partner with insurance provider (e.g., AXA mentioned historically); indemnity structure |
| **Timeline for Validation** | Q4 2026 (legal phase) |
| **Owner** | Legal / Operations |

---

## V. Financial Assumptions

### FINANCE-F01: Take-Rate is Sustainable at X%

| Field | Value |
|-------|-------|
| **Assumption** | A marketplace take-rate of 15-25% is sustainable long-term (covers platform costs + margin). |
| **Category** | Finance / Revenue Model |
| **Status** | HYPOTHESIS |
| **Evidence Available** | Industry benchmarks only; no BajaRide cost modeling |
| **Evidence Level** | MEDIUM |
| **Validation Method** | Detailed financial model (BR-02.x); cost build-up; competitive positioning; provider feedback |
| **Impact if False** | Needs higher take-rate (provider resistance) or alternative revenue streams |
| **Mitigation** | Diversify revenue (subscription, premium features, commissions on insurance); reduce costs |
| **Timeline for Validation** | Q4 2026 (financial model completion) |
| **Owner** | Finance |

---

### FINANCE-F02: Unit Economics are Positive at Ensenada Scale

| Field | Value |
|-------|-------|
| **Assumption** | Once a booking is secured, per-booking gross margin (revenue - payment processing - support) is positive. |
| **Category** | Finance / Unit Economics |
| **Status** | HYPOTHESIS |
| **Evidence Available** | None; requires detailed cost modeling |
| **Evidence Level** | ZERO |
| **Validation Method** | Financial model BR-02.4; early booking analysis; cost tracking post-MVP |
| **Impact if False** | Business model is fundamentally unprofitable; major strategy revision needed |
| **Mitigation** | Raise prices; reduce costs; change revenue model |
| **Timeline for Validation** | Q4 2026 (financial model) + Q1 2027 (MVP validation) |
| **Owner** | Finance / Product |

---

### FINANCE-F03: $150K USD is Sufficient to Launch MVP

| Field | Value |
|-------|-------|
| **Assumption** | Approximately $150,000 USD (mentioned historically) is sufficient to fund MVP development, launch, and 6-12 months of operations. |
| **Category** | Finance / Fundraising |
| **Status** | PROVISIONAL |
| **Evidence Available** | Historical estimate; not tied to detailed budget |
| **Evidence Level** | LOW |
| **Validation Method** | Detailed budget build-up (BR-02.9); development timeline; runway calculations |
| **Impact if False** | More/less capital needed; affects fundraising strategy and timeline |
| **Mitigation** | Detailed budget planning; cost controls; phased launch |
| **Timeline for Validation** | Q4 2026 (financial model finalization) |
| **Owner** | Finance |

---

### FINANCE-F04: CAC Payback Period is <X Months

| Field | Value |
|-------|-------|
| **Assumption** | Customer Acquisition Cost (CAC) for end users can be recovered within X months through repeat bookings and margins. |
| **Category** | Finance / Unit Economics |
| **Status** | TBD |
| **Evidence Available** | None |
| **Evidence Level** | ZERO |
| **Validation Method** | Financial model; MVP cohort analysis; LTV calculations |
| **Impact if False** | Business may require more capital; CAC reduction strategy needed |
| **Mitigation** | Organic growth; word-of-mouth; referral programs |
| **Timeline for Validation** | Q1-Q2 2027 (MVP running) |
| **Owner** | Finance / Marketing |

---

## VI. Operational Assumptions

### OPERATIONS-O01: Hub is Required Post-MVP at Scale

| Field | Value |
|-------|-------|
| **Assumption** | A physical operational hub/base in Ensenada becomes operationally and economically necessary once monthly bookings exceed X threshold. |
| **Category** | Operations / Infrastructure |
| **Status** | HYPOTHESIS |
| **Evidence Available** | Model includes Hub in long-term flow; no specific trigger points defined |
| **Evidence Level** | LOW |
| **Validation Method** | Scaling analysis; operational cost models; provider/user feedback post-MVP |
| **Impact if False** | Platform can scale without hub infrastructure; reduces capex requirements |
| **Mitigation** | Asset-light partnerships; virtual coordination |
| **Timeline for Validation** | Post-MVP (Q2 2027+) |
| **Owner** | Operations / Finance |

---

### OPERATIONS-O02: Providers Can Manage Booking/Cancellation Logistics

| Field | Value |
|-------|-------|
| **Assumption** | Providers can independently manage user communication, confirmations, cancellations, and day-of logistics through platform tools. |
| **Category** | Operations / Provider Capability |
| **Status** | HYPOTHESIS |
| **Evidence Available** | MVP UX assumptions; no user testing |
| **Evidence Level** | LOW |
| **Validation Method** | MVP launch; provider feedback; support ticket analysis |
| **Impact if False** | BajaRide must provide concierge/support service; increases operational cost |
| **Mitigation** | Enhanced platform tooling; provider training; support center |
| **Timeline for Validation** | Q1 2027 (MVP launch) |
| **Owner** | Product / Operations |

---

## VII. Technology Assumptions

### TECH-T01: Flutter/Dart + Node.js/TypeScript Enable Rapid MVP

| Field | Value |
|-------|-------|
| **Assumption** | Selected tech stack (Flutter/Dart frontend, Node.js/TypeScript backend) enables MVP launch within target timeline and budget. |
| **Category** | Technology / Architecture |
| **Status** | CONFIRMED |
| **Evidence Available** | Industry experience with these stacks; no specific project estimation |
| **Evidence Level** | MEDIUM |
| **Validation Method** | Development progress tracking; milestone completion; team feedback |
| **Impact if False** | Delays to MVP; cost overruns; may require team expansion or tech pivot |
| **Mitigation** | Agile development; clear scope boundaries; reusable components |
| **Timeline for Validation** | Ongoing (through MVP development) |
| **Owner** | Development |

---

### TECH-T02: Third-Party Integrations (Payments, KYC) Can Be Deferred

| Field | Value |
|-------|-------|
| **Assumption** | Complex integrations (payment processing, KYC verification) can be deferred to post-MVP phases; MVP can operate with manual/simplified processes. |
| **Category** | Technology / MVP Scope |
| **Status** | HYPOTHESIS |
| **Evidence Available** | MVP scope definition pending |
| **Evidence Level** | LOW |
| **Validation Method** | MVP spec review; integration complexity assessment; legal/compliance review |
| **Impact if False** | Integrations must be in MVP; extends timeline; increases complexity |
| **Mitigation** | Early integration testing; third-party partnership engagement |
| **Timeline for Validation** | Pre-MVP (before development starts) |
| **Owner** | Product / Development |

---

## VIII. Legal & Compliance Assumptions

### LEGAL-L01: Mexican Liability Framework is Manageable

| Field | Value |
|-------|-------|
| **Assumption** | Mexican law and Baja California regulations permit marketplace liability structures comparable to global platforms (Airbnb, Uber model). |
| **Category** | Legal / Regulatory |
| **Status** | HYPOTHESIS |
| **Evidence Available** | None; legal research not yet conducted |
| **Evidence Level** | ZERO |
| **Validation Method** | Legal counsel consultation; regulatory research; contract templates review |
| **Impact if False** | May require different legal structure; additional compliance costs; operational constraints |
| **Mitigation** | Early legal counsel engagement; flexible business model adaptation |
| **Timeline for Validation** | Q4 2026 (legal phase) |
| **Owner** | Legal / Compliance |

---

### LEGAL-L02: KYC/KYB Can Be Phased

| Field | Value |
|-------|-------|
| **Assumption** | Know-Your-Customer (KYC) and Know-Your-Business (KYB) verification can be phased: minimal in MVP, comprehensive post-funding. |
| **Category** | Legal / Compliance |
| **Status** | HYPOTHESIS |
| **Evidence Available** | None; regulatory requirements not yet established |
| **Evidence Level** | ZERO |
| **Validation Method** | Legal counsel review; regulatory research; compliance planning |
| **Impact if False** | Full KYC/KYB required at launch; increases MVP complexity; delays |
| **Mitigation** | Early legal engagement; regulatory consultation; integration partnership (Onfido mentioned historically) |
| **Timeline for Validation** | Q4 2026 (legal phase) |
| **Owner** | Legal / Compliance |

---

## IX. Validation Status Summary

| Category | Status | Count | Validation Timeline |
|----------|--------|-------|-------------------|
| Market/Demand | HYPOTHESIS | 5 | Q4 2026 - Q1 2027 |
| Supply | HYPOTHESIS | 3 | Q4 2026 - Q1 2027 |
| Finance | PROVISIONAL/TBD | 5 | Q4 2026 |
| Operations | HYPOTHESIS | 2 | Q1 2027+ |
| Technology | CONFIRMED/HYPOTHESIS | 2 | Ongoing |
| Legal | HYPOTHESIS | 2 | Q4 2026 |

---

## X. Critical Path: Assumptions Requiring Validation Before MVP Launch

1. **Market-M02**: Users will pay premium (high impact)
2. **Market-M01**: Market exists & underserved (critical)
3. **Supply-S01**: Provider supply exists (critical)
4. **Finance-F02**: Unit economics are positive (high impact)
5. **Legal-L01**: Legal framework is manageable (critical)
6. **Tech-T02**: Integration deferral is viable (medium impact)

---

## XI. Assumption Update Protocol

This register shall be reviewed:

- **Monthly** during MVP development
- **Quarterly** during operations
- **Before major decisions** that depend on assumption validity

When evidence emerges that contradicts an assumption:

1. Document the contradiction
2. Update assumption status
3. Assess impact on strategy/financial model
4. Recommend corrective actions
5. Notify stakeholders

---

**Version**: 1.0  
**Created**: September 9, 2026  
**Next Review**: December 2026  
**Owner**: Strategy & Research Team
