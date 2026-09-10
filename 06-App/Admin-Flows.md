BajaRide — Admin Flows

Version: 1.0
Status: DRAFT / WORKING DOCUMENT
Date: September 2026
Module: 06-App

---

0. Purpose & Scope

Defines the Administrator-side journey: what BajaRide staff do to review, approve, monitor, and moderate the platform. Consistent with `MVP-Product-Definition.md` (actor definitions, Section 4.3) and cross-referenced from `Provider-Flows.md` Section 20 (the provider-facing side of these same interactions) and `User-Flows.md`.

This document does not define: the admin UI/dashboard design, database schema (see `Data-Model.md`), or API endpoints (see `API-Requirements.md`, not yet created).

---

1. Admin Role Model (MVP)

**Current (MVP)**: a single, undifferentiated Admin role with full access to review, approve, suspend, and moderate. No granular permissions (e.g., "read-only admin" vs. "full admin").

**Explicitly out of MVP scope** (Future scope): role-based access control (RBAC) with multiple admin permission tiers; regional admin scoping.

---

2. Provider Registration Review

Corresponds to `Provider-Flows.md` Sections 2–5A (registration, profile, basic verification, asset registration, documentation).

Admin reviews a new provider registration and can:
- **Approve** → provider status becomes "ACTIVE" (per `Provider-Flows.md` §21 proposed states).
- **Reject** → provider is notified with a reason; can resubmit.
- **Request more information** → registration stays "PENDING VERIFICATION".

**Current (MVP)**: manual review only, checking the basic document set defined in `Provider-Flows.md` §5A.
**Future scope**: automated document verification/OCR (explicitly excluded per `Provider-Flows.md` §5A and `MVP-Product-Definition.md` §15).

---

3. Experience Review & Approval

Corresponds to the lifecycle in `MVP-Product-Definition.md`: "DRAFT → UNDER REVIEW → APPROVED → PUBLISHED → BOOKED → COMPLETED" (alt: "CANCELLED", "SUSPENDED").

When a provider submits an Experience ("UNDER REVIEW"), Admin checks:
- Completeness of required fields (`Provider-Flows.md` §6).
- Basic safety/risk information present.
- Pricing and availability are set.
- No content that violates platform rules (see Section 7, Content Moderation).

Admin can:
- **Approve** → status becomes "APPROVED", then "PUBLISHED" once live.
- **Reject** → status returns to "DRAFT" with a reason.
- **Request changes** → provider edits and resubmits.

Status: **Current (MVP)**.

---

4. Booking Monitoring

Admin has visibility into bookings across the platform (not just per-provider), primarily to:
- Detect capacity conflicts or anomalies.
- Support incident response (Section 6).
- Support dispute handling (Section 8).

**Current (MVP)**: basic list/detail view of bookings and their status ("REQUESTED → CONFIRMED → COMPLETED", alt "CANCELLED"/"NO_SHOW", per `Provider-Flows.md` §21 and `User-Flows.md`).
**Future scope**: real-time operational dashboards, automated anomaly detection.

---

5. Suspension

Admin can suspend:
- **A Provider** → all of that provider's Experiences become unbookable; existing "CONFIRMED" bookings are flagged for manual resolution (refund/reschedule decided case-by-case, since automated refund mechanics are not yet defined — see `Provider-Flows.md` §17).
- **A single Experience** → removed from discovery; does not affect the provider's other listings.

**Trigger examples**: safety complaint, incident (Section 6), fraud suspicion (`Risk-Register.md` INS-002), repeated policy violations.

Status: **Current (MVP)** for the suspension action itself; the exact business rules for handling in-flight bookings during a suspension are **Hypothesis / Pending validation** — this is a real open gap, not a simplification.

---

6. Incident Handling

Corresponds to `Provider-Flows.md` §18 (Incidents) and `User-Flows.md`'s incident-reporting path.

When an incident is reported (by a User, a Provider, or observed directly), Admin:
1. Reviews the incident record (booking, experience, provider, user, description, date/time).
2. Triages severity (no formal severity scale is defined yet — **TBD**, should align with `Risk-Register.md` categories once defined).
3. Takes action: contact parties, escalate to insurance/legal (see `03-Legal/Insurance-Legal-Research-Reference-2026.md`), suspend the provider/experience if warranted (Section 5), or close the incident.

**Current (MVP)**: manual triage and resolution.
**Explicitly out of MVP scope**: automated safety/insurance workflows (`Provider-Flows.md` §18).

---

7. Content Moderation

**Current (MVP)**: Admin reviews Experience listings for accuracy and appropriateness as part of the approval step (Section 3) — there is no separate, ongoing moderation queue for already-published content beyond user/provider reports.

**Future scope**: automated content moderation, proactive re-review of published listings.

---

8. Dispute Resolution (User ↔ Provider)

A dispute (e.g., disagreement over a cancellation, a "NO_SHOW" designation, or service quality) is escalated to Admin when the User and Provider cannot resolve it directly.

**Status: Hypothesis / Pending validation.** No formal dispute process exists yet in any document. Minimum needed before this can move to "Current": a defined evidence-submission step, a resolution-authority statement (does Admin have final say on refunds?), and a link to the eventual Cancellation & Refund Policy (`03-Legal/Legal-Structure-Overview.md`).

---

9. Audit Trail

Every admin action that changes a Provider's, Experience's, or Booking's status should be logged (actor, action, timestamp, reason).

**Current (MVP, as a requirement)**: this is a requirement for `Data-Model.md` (see its Admin Action Log entity) — no implementation exists since no code exists in this repository.

---

10. Admin States & Exceptions

**Provider review outcomes**: APPROVED · REJECTED · MORE INFO REQUESTED
**Experience review outcomes**: APPROVED · REJECTED · CHANGES REQUESTED
**Suspension targets**: Provider · Experience
**Exception cases the MVP must account for**:
- Admin rejects an Experience that already has pending booking requests (should not happen if review precedes publication, but must be handled defensively).
- Admin suspends a Provider with active "CONFIRMED" bookings (Section 5 — unresolved business rule).
- Conflicting reports from User and Provider about the same incident (Section 6/8 — no resolution authority defined yet).

---

11. Explicit Exclusions (Admin Side)

Consistent with `MVP-Product-Definition.md` §15 and `Provider-Flows.md` §22:
- Multi-tier admin roles / RBAC.
- Automated content moderation.
- Automated document/identity verification.
- Real-time operational analytics dashboards.
- Automated dispute resolution.

---

12. Related Documents

`MVP-Product-Definition.md` · `User-Flows.md` · `Provider-Flows.md` · `Data-Model.md` (companion document) · `Risk-Register.md` · `03-Legal/Insurance-Legal-Research-Reference-2026.md`

---

13. Document Status

DRAFT / WORKING DOCUMENT. Sections 5 (suspension business rules) and 8 (dispute resolution) contain real, unresolved gaps flagged as Hypothesis — these should not be read as fully specified.
