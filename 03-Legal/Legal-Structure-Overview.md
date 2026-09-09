# Legal Structure Overview — BajaRide

**Document Status**: STRUCTURAL SKELETON — no contract content yet
**Last Updated**: September 9, 2026
**Purpose**: Define what BajaRide's legal framework must cover. This is a checklist/structure document, not the contracts themselves.

---

## 1. Scope

This document does not contain any executed legal agreement. It exists to make sure nothing legal is forgotten as the product and business model develop, and to give the eventual legal advisor a single starting map.

---

## 2. Required Legal Areas (structure only — all TBD until reviewed by counsel)

| Area | What it must cover | Status | Notes |
|---|---|---|---|
| Marketplace / Platform Terms | Rights and obligations of BajaRide as an intermediary, not an owner/operator of vehicles | TBD (structure researched) | Central to the asset-light positioning (DEC-2026-05); see `Insurance-Legal-Research-Reference-2026.md` §5 |
| Provider Agreement | Terms between BajaRide and providers: listing rules, take rate, payout, liability allocation | TBD (structure researched) | Must align with `06-App/Provider-Flows.md`; see research ref §5 |
| User Terms of Service | Terms between BajaRide and end users booking experiences | TBD (structure researched) | Must align with `06-App/User-Flows.md`; see research ref §5 |
| Privacy Policy / Data Protection | Handling of personal data, compliant with Mexican data protection law (LFPDPPP) | TBD (structure researched) | No data model exists yet to reference (see `06-App/Data-Model.md`, not yet created); minimum LFPDPPP elements listed in `Insurance-Legal-Research-Reference-2026.md` §4 |
| Cancellation & Refund Policy | Rules referenced in `Provider-Flows.md` §17 and `User-Flows.md` §12 | TBD | Currently those documents explicitly defer refund mechanics |
| Liability & Incident Policy | Who is liable in case of an accident/incident during an Experience | TBD — CRITICAL (waiver checklist researched) | See `Risk-Register.md` LEG-001/LEG-002; waiver minimum elements in research ref §3 |
| Insurance Requirements | Minimum insurance a provider must carry, and/or a platform policy | TBD — CRITICAL (structure researched, no quotes yet) | See `Risk-Register.md` INS-001; three-layer model (vehicle/activity/platform) proposed in `Insurance-Legal-Research-Reference-2026.md` §1–2 — not yet ratified as an MVP requirement |
| Tourism Registration (RNT/DATATUR) | Whether providers must register as tourism service providers under the Ley General de Turismo | TBD — newly identified | See `Insurance-Legal-Research-Reference-2026.md` §6; not previously tracked in this repository |
| Consumer Protection (LFPC) | Price transparency, cancellation disclosure, no dark patterns on recurring charges | TBD | See `Risk-Register.md` LEG-003; specifics in research ref §7 |
| KYC/KYB | Identity/business verification requirements | PENDING USER DECISION | See `Decision-Log.md` DEC-2026-15 |
| Payments Compliance | Compliance obligations tied to the eventual payment processor | TBD | See `Decision-Log.md` TBD-2026-02 |
| Corporate Structure | Legal entity operating BajaRide | UNVERIFIED — not documented in this repository | — |

---

## 2A. Secondary Research Available

`03-Legal/Insurance-Legal-Research-Reference-2026.md` — AI-assisted secondary research (not attorney/broker-verified) covering the insurance architecture, waiver checklist, privacy-notice structure, terms-of-service structure, and the RNT/DATATUR registration requirement. Use it as a starting checklist for counsel, not as a source of ready-to-use legal text.

---

## 3. Historical / Unverified Legal Context (do not treat as current)

> Recovered from prior founder working sessions, not present anywhere in this repository. Full detail in `01-Master-Plan/BRfinal-Knowledge-Consolidation-2026.md` Section II.C.

- A universal NDA + "Obra por Encargo" (work-for-hire) contract, internally referenced as **BR-LEGAL-001**, was reportedly drafted, covering Hubs, students/fellows, and remote freelancers, with a hybrid signature model (physical/INE for local signers, DocuSign/Mifiel for remote).
- This document is **not** committed anywhere in `BajaRide-Core`. If it exists as a real, reviewed contract, it should be added here (or to a dedicated `03-Legal/contracts/` subfolder) once available, and this section updated to reference it as `CURRENT` rather than `HISTORICAL / UNVERIFIED`.

---

## 4. Explicitly Not Yet Addressed

- Any actual contract text, template, or clause.
- Jurisdiction-specific compliance beyond a general Mexican-law placeholder.
- Cross-border considerations (if any future expansion outside Mexico).

---

## 5. Next Action

Engage legal counsel with Mexican marketplace/tourism-liability experience (`Decision-Log.md` DEC-2026-14), and get real quotes from insurance brokers per `Insurance-Legal-Research-Reference-2026.md` §9, before drafting any of the documents listed in Section 2.

---

**Related Documents**: `Decision-Log.md` (DEC-2026-14, DEC-2026-15), `Risk-Register.md` (LEG-001–004, INS-001), `Insurance-Legal-Research-Reference-2026.md`, `BRfinal-Knowledge-Consolidation-2026.md`
