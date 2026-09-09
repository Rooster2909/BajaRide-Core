# BRfinal — Knowledge Consolidation 2026

**Document Status**: RECOVERY REGISTER (not a Master Document / not a substitute for `Archivo-Maestro-2026.md`)
**Purpose**: Temporary holding register for information recovered during the BRfinal consolidation order (September 2026) that does not yet have a clear permanent home, plus a traceability log for information moved elsewhere.
**Classification key used throughout**: `VALIDATED` · `CURRENT` · `HYPOTHESIS` · `PROVISIONAL` · `HISTORICAL` · `SIMULATION` · `UNVERIFIED` · `TBD`

---

## I. Source Note (Traceability)

This document recovers information from two kinds of sources:

1. **In-repository sources** — every file under `BajaRide-Core` as it existed before this consolidation (audited September 9, 2026).
2. **Founder-provided context from prior AI working sessions** (not present anywhere in this repository). This is marked explicitly as `HISTORICAL / UNVERIFIED — sourced from prior working sessions, not from repo or contract artifacts` throughout. It is preserved because Section 1 of the consolidation order requires recovering historical knowledge, but it must **not** be treated as validated or current until confirmed against real artifacts (contracts, code, signed docs).

No information in this document should be cited as `VALIDATED` unless it is independently visible in the repository itself.

---

## II. Recovered Historical Information (from prior working sessions — UNVERIFIED against this repo)

### A. Prior Technical Track (pre-dates the Flutter/Node.js stack currently defined in `Archivo-Maestro-2026.md`)

> **Classification: HISTORICAL / UNVERIFIED.** None of this appears in `BajaRide-Core`. It is not visible as code anywhere in this repository at the time of this consolidation.

- A Flask-based MVP with Stripe Checkout integration was reportedly built, using Windsurf IDE and an AI coding assistant referred to as "Kimi K2.5."
- A prompt playbook (`WINDSURF_PROMPTS.md`) for sequential development phases was reportedly generated.
- A code audit reportedly identified critical production bugs in that Flask codebase: race conditions in checkout, a hardcoded `SECRET_KEY`, and dual JSON+SQLite storage incoherence.
- A refactored scaffold (`BajaRide_Elite_PRO_scaffold.zip`) with a modular architecture was reportedly produced in response.
- A mid-audit pivot to Next.js 15 was reportedly made at some point after that.
- The current `BajaRide-Core` repository (this one) instead defines the technical baseline as **Flutter/Dart (frontend) + Node.js/TypeScript (backend)** — see `Archivo-Maestro-2026.md` Section 4 and `Assumptions-Register.md` TECH-T01.

**Resolution needed**: it is not possible to determine, from this repository alone, whether (a) the Flask/Next.js work is fully abandoned in favor of Flutter/Node.js, (b) it lives in a separate repository not yet connected to this one, or (c) the Flutter/Node.js definition in this repo is itself provisional and untested. This has been logged as an open decision in `Decision-Log.md` (see DEC-2026-16) and must be resolved by the founder — not inferred.

### B. Prior Design System

> **Classification: HISTORICAL / UNVERIFIED.**

- A design system referred to as "Imperio UI" (black/gold/white palette) was reportedly defined for the product's visual identity. Not referenced anywhere in the current repository.

### C. Prior Legal Track

> **Classification: HISTORICAL / UNVERIFIED.**

- A universal NDA + "Obra por Encargo" (work-for-hire) contract, internally referenced as **BR-LEGAL-001**, was reportedly drafted to cover Hubs, CETis 156 students, JCF fellows, and remote freelancers.
- That contract reportedly uses a hybrid signature model: physical/INE signature for local Hubs, DocuSign/Mifiel for remote talent.
- None of this exists in `03-Legal/` in this repository (folder was empty prior to this consolidation). See `03-Legal/Legal-Structure-Overview.md` (created in this consolidation) for where this should be formally incorporated once the actual contract documents are available to commit.

### D. Prior Financial Figures

> **Classification: HISTORICAL / PROVISIONAL — do not present as current validated figures.**

- A five-year strategic exit narrative reportedly targeted acquisition by global players interested in off-road geographic data intelligence, with a stated TAM of approximately **$16.4M USD annually**. This number does not appear anywhere in `02-Finance/` in this repository and has no documented methodology attached. It should not be used in `08-Investors/` until it is re-derived with a visible methodology (see `Financial-Assumptions-Register.md`, MARKET-M04, which independently marks TAM as "TBD — not yet quantified").
- The **$150,000 USD** funding target and a "SAFE, 3-tranche" financing structure are **already** captured in-repo as historical/provisional (`Decision-Log.md` DEC-2026-13, `Financial-Assumptions-Register.md` CAP-007) — no new information added here beyond confirming this matches what the founder has described in prior sessions.

### E. Prior Marketing Work

> **Classification: HISTORICAL / UNVERIFIED.**

- An educational ad campaign brief was reportedly drafted and intended for routing to an AI tool ("Meta AI") for execution. Not present in `04-Marketing/` (folder was empty prior to this consolidation).
- A UX/conversion problem with a checkout flow, and a plan to simplify it to three steps, was reportedly identified. Not verifiable against any code in this repository (no code exists here — see Section II.A above).

### F. Founder-Owned Assets (potentially relevant to Provider/Resource mapping)

> **Classification: UNVERIFIED — personal context, not yet formally registered as a BajaRide provider or asset.**

- The founder (Samuel Garcia) reportedly owns a Ford F-150 and two UTVs personally. These are **not** the same as "Unidad Cero" (Can-Am Maverick X3, PAUSED per `Decision-Log.md` DEC-2026-02) and have not been formally proposed or registered as BajaRide platform assets anywhere in this repository. Flagged here only so the information is not lost; no action implied.

### G. Prior Business Model Note (superseded language — for traceability only)

> **Classification: HISTORICAL / SUPERSEDED.**

- An earlier framing described the model as a "3-party marketplace — Usuario, Propietario (dueño del UTV), Hub" with a pilot plan built around Unidad Cero and the SCORE Baja 500/1000 events. The current in-repo definition (`Archivo-Maestro-2026.md`, `Decision-Log.md` DEC-2026-02) supersedes this: Unidad Cero is explicitly PAUSED and is not part of the current MVP or pilot plan. No contradiction requires resolution here — the repo's current definition is authoritative and this entry exists only for historical traceability.

---

## III. Items Recovered But Explicitly NOT Assigned a Confidence Level

The following were mentioned in prior sessions but have **zero evidence of any kind**, in-repo or otherwise, and are recorded here purely so they are not lost — they must not be treated as roadmap items without a separate founder decision:

- "BajaCredits" / token concept — already explicitly out-of-MVP-scope per `MVP-Product-Definition.md` Section 15.
- Geofencing for environmental protection ("dune protection"), a 100 dB warning concept referred to historically as "Sirena de la Vergüenza," and telemetry/environmental controls — already flagged `HISTORICAL` in `Knowledge-Recovery-Matrix.md` prior to this consolidation; carried forward unchanged.
- A historical simulation of 15 operations (10 successful, 5 failed) — already flagged in-repo as `SIMULATION — NOT TRACTION`; carried forward unchanged, see `Knowledge-Recovery-Matrix.md`.

---

## IV. Traceability Log (Source → Interpretation → Classification → Destination)

| Source | Interpretation | Classification | Destination |
|---|---|---|---|
| Prior working sessions | Flask/Stripe/Next.js technical track | HISTORICAL / UNVERIFIED | This document (II.A) + `Decision-Log.md` DEC-2026-16 |
| Prior working sessions | "Imperio UI" design system | HISTORICAL / UNVERIFIED | This document (II.B) |
| Prior working sessions | BR-LEGAL-001 NDA + work-for-hire contract | HISTORICAL / UNVERIFIED | This document (II.C) + `03-Legal/Legal-Structure-Overview.md` |
| Prior working sessions | $16.4M TAM, 5-year exit narrative | HISTORICAL / PROVISIONAL | This document (II.D) — explicitly not moved into `08-Investors/` |
| Prior working sessions | Meta AI ad campaign brief, checkout UX fix | HISTORICAL / UNVERIFIED | This document (II.E) |
| Prior working sessions | Founder's personal Ford F-150 + 2 UTVs | UNVERIFIED | This document (II.F) |
| Prior working sessions | Earlier 3-party model framing / Unidad-Cero-centered pilot | HISTORICAL / SUPERSEDED | This document (II.G) — superseded by `Archivo-Maestro-2026.md` |
| In-repo audit (Sept 9, 2026) | `Provider-Flows.md` was a duplicate of `MVP-Product-Definition.md` | RESOLVED | Fixed in commit `d222796`; enhanced further in this consolidation pass |
| In-repo audit (Sept 9, 2026) | `Knowledge-Recovery-Matrix.md` stale relative to repo | RESOLVED | Rewritten in this consolidation pass |

---

## V. Explicit Non-Goals of This Document

- This is **not** a Master Document. `Archivo-Maestro-2026.md` remains the single source of strategic truth.
- This document does **not** get copied into other documents wholesale — other documents should cross-reference it, per the no-duplication rule.
- Nothing in Section II should be read as validated fact. It exists so it is not lost, and so a human (the founder) can decide, item by item, whether to validate, discard, or formally re-introduce it.

---

**Prepared by**: AI consolidation pass (BRfinal order), September 9, 2026
**Next review**: When the founder confirms or discards items in Section II
