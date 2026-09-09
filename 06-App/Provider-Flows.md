BajaRide — Provider Flows

Version: 1.1
Status: DRAFT / WORKING DOCUMENT
Date: September 2026 (v1.0: Sept 9, corrected duplicate content · v1.1: Sept 9, BRfinal consolidation pass — added Documentation, Settlement, and History sections)
Module: 06-App

---

0. Correction Note

This document replaces a previous version of `Provider-Flows.md` that mistakenly contained a duplicate copy of `MVP-Product-Definition.md`. v1.0 defined the actual provider-side journey, consistent with `MVP-Product-Definition.md` and `User-Flows.md`. v1.1 adds three sections (5A Documentation, 16A Settlement, 19A History) requested in the BRfinal consolidation order to match its 21-point provider flow spec. Sections use letter suffixes (5A, 16A, 19A) rather than a full renumbering, to avoid breaking cross-references to the original section numbers.

---

1. Objective

Define the MVP provider journey from registration through delivering a completed off-road experience, and the ongoing provider/BajaRide relationship that supports it.

Core flow:

"Register → Verify → Onboard → List Asset → Create Experience → Get Approved → Publish → Receive Bookings → Operate → Complete → Get Reviewed"

---

2. Provider Registration

The provider can:

- Create a provider account (separate role from a regular user account).
- Provide basic identity and contact information.
- Provide basic business/operating information (individual owner or operator).

Status: **Current (MVP)**.

---

3. Provider Profile

The provider profile may contain:

- Name / business name.
- Contact information.
- Location (base of operations).
- Description of services offered.
- Assets/vehicles associated with the profile.
- Verification status.

Status: **Current (MVP)**.

---

4. Onboarding / Initial Verification

Before a provider can publish an Experience, BajaRide performs a **basic** identity and contact verification step.

MVP scope includes:

- Confirming provider identity information.
- Confirming provider contact information.
- Manual review by an Administrator (no automated verification service).

Explicitly **out of MVP scope** (Future scope):

- Advanced KYC/KYB verification.
- Automated document/identity verification services.

Status: **Current (MVP) for basic checks · Future scope for automation**.

---

5. Asset / Vehicle Registration

The provider can register the vehicle(s)/asset(s) associated with an Experience.

At minimum, an asset record should include:

- Type of vehicle/asset.
- Basic description.
- Photos, when available.
- Condition/safety notes, when available.

BajaRide does not own, purchase, or hold title to any vehicle registered here — assets belong to and are operated by the provider (asset-light model).

Status: **Current (MVP)**.

---

5A. Provider Documentation

Alongside the asset record, the provider submits supporting documentation required for basic verification (Section 4) and, when applicable, for the specific asset/experience.

MVP scope includes, at minimum:

- A valid government ID for the provider (individual) or a basic ownership/registration document for the business, if applicable.
- Proof of ability to legally operate the vehicle/asset (e.g., vehicle registration), when relevant.

Explicitly **out of MVP scope** (Future scope):

- Automated document verification/OCR services.
- Insurance documentation as a hard requirement to publish (see Section 22 and `Risk-Register.md` INS-001 — insurance is a known open risk, not yet a gating requirement for the MVP).

Status: **Hypothesis / Pending validation** — the exact minimum document set has not been confirmed with legal counsel (see `03-Legal/Legal-Structure-Overview.md`).

---

6. Experience Creation

The provider creates an Experience by submitting:

- Experience name and description.
- Category (UTV/off-road activity, guided tour, route, adventure activity, other compatible off-road activity).
- Associated asset(s).
- Location.
- Requirements for participants.
- Basic safety/risk information.

Status: **Current (MVP)**.

---

7. Pricing

The provider defines a reference price for the Experience.

MVP scope:

- Provider sets a single reference price per Experience (or per participant, if applicable).
- BajaRide's take rate is applied per the current Financial Assumptions Register (`02-Finance/Financial-Assumptions-Register.md`) — **percentage not yet validated (TBD)**.

Explicitly **out of MVP scope** (Future scope):

- Dynamic/automated pricing.
- Provider-side discount/promotion engine.

Status: **Hypothesis / Pending validation** — take rate and payout mechanics are not yet confirmed (see `Financial-Assumptions-Register.md`, REV-002 and REV-005).

---

8. Availability

The provider defines when an Experience can be booked:

- Available dates.
- Available time / time windows.
- Capacity (maximum participants per slot).

Status: **Current (MVP)**.

---

9. Location

The provider specifies the operating location(s) for the Experience:

- Meeting point.
- General operating area/route, when relevant.

Explicitly **out of MVP scope** (Future scope):

- Advanced geofencing (e.g., protected-area boundary enforcement).

Status: **Current (MVP) for basic location data · Future scope for geofencing**.

---

10. Review / Approval

Once submitted, the Experience enters the review lifecycle defined in `MVP-Product-Definition.md`:

"DRAFT" → "UNDER REVIEW" → "APPROVED" → "PUBLISHED"

An Administrator reviews the submitted Experience for completeness and basic safety information before approval. See Section 20 (Admin Interaction) for the administrator side of this step.

Status: **Current (MVP)**.

---

11. Publication

Once approved, the Experience becomes "PUBLISHED" and is visible to Users through the discovery flow described in `User-Flows.md`.

The provider can view the publication status of each Experience at any time.

Status: **Current (MVP)**.

---

12. Receiving Bookings

When a User submits a booking request (see `User-Flows.md`, Section 8), the provider receives the booking in "REQUESTED" status with:

- User information relevant to fulfilling the booking.
- Date / time / time window.
- Number of participants.

Status: **Current (MVP)**.

---

13. Confirmation / Rejection

The provider reviews each "REQUESTED" booking and can:

- Confirm the booking → status becomes "CONFIRMED".
- Reject the booking (e.g., due to unavailability) → status becomes "CANCELLED", with a reason recorded.

The system validates that confirming a booking does not exceed the defined capacity for that date/time.

Status: **Current (MVP)**.

---

14. Experience Preparation

Once a booking is "CONFIRMED", the provider is responsible for:

- Preparing the vehicle/asset.
- Confirming meeting point and time with the participant, as needed.
- Ensuring basic safety requirements are met.

Status: **Current (MVP)**.

---

15. Operation

On the day of the Experience, the provider:

- Delivers the Experience as described and approved.
- Manages participants on-site.
- Handles on-site exceptions (e.g., delays, minor changes) within the cancellation/incident rules defined below.

Status: **Current (MVP)**.

---

16. Completion

After the Experience takes place, the provider marks the booking as "COMPLETED".

The system records completion. This is required for the booking to exit the active lifecycle and become eligible for a review (see Section 18).

Status: **Current (MVP)**.

---

16A. Settlement / Liquidación

Once a booking is "COMPLETED", the provider's payout is calculated and scheduled.

MVP scope:

- Provider payout = reference price minus BajaRide's take rate (see Section 7).
- Payout timing and method depend on the payment processor selected (see `Financial-Assumptions-Register.md`, COST-001 — processor not yet chosen).
- Provider can view a basic record of completed bookings and their associated payout status.

Explicitly **out of MVP scope** (Future scope):

- Instant/automated payouts.
- Multi-currency settlement.
- Provider-facing financial dashboards/analytics.

Status: **Hypothesis / Pending validation** — depends entirely on the payment processor and take-rate decisions, both currently TBD.

---

17. Cancellations

A booking may be cancelled by the provider, the user, or an administrator.

When the provider initiates a cancellation, the system records:

- Booking.
- Cancellation request.
- Actor (provider).
- Date/time.
- Reason.
- Resulting status ("CANCELLED").

Refund processing is **outside the initial product definition** unless separately implemented (consistent with `User-Flows.md`, Section 12).

Status: **Current (MVP) for recording cancellations · Pending definition for refund mechanics**.

---

18. Incidents

If an incident occurs during an Experience, the provider can report it through the incident-reporting mechanism defined for the MVP (see `MVP-Product-Definition.md`, Section 11).

An incident record should be associated with:

- Booking.
- Experience.
- Provider.
- User (if applicable).
- Date/time.
- Description.
- Status.

Administrative handling occurs separately (see Section 20).

Status: **Current (MVP) for basic reporting · Future scope for automated safety/insurance workflows**.

---

19. Reviews

Basic review capability (user-to-provider) may be considered once the core booking flow is validated, consistent with `MVP-Product-Definition.md`, Section 13.

Advanced reputation systems (e.g., weighted scoring, anti-manipulation detection) are **outside the initial MVP** (Future scope).

Status: **Future scope — not required for initial MVP validation loop**.

---

19A. Provider History

The provider can view a basic history of their own activity:

- Past Experiences (published, unpublished, rejected).
- Past bookings and their final status (COMPLETED, CANCELLED, NO_SHOW).
- Past settlement records (see Section 16A).

Explicitly **out of MVP scope** (Future scope):

- Historical analytics or trend reporting.

Status: **Current (MVP) for a basic list view · Future scope for analytics**.

---

20. Interaction with Admin / BajaRide

Throughout the provider journey, BajaRide's Administrator role (defined in `MVP-Product-Definition.md`, Section 4.3) interacts with the provider at these points:

- Reviewing and approving/rejecting new provider registrations (basic verification, Section 4).
- Reviewing and approving/rejecting submitted Experiences (Section 10).
- Monitoring bookings and intervening on incidents (Section 18).
- Suspending a provider, asset, or Experience when necessary.

Status: **Current (MVP)**.

---

21. Provider States and Exceptions

**Provider status (proposed, pending confirmation in a future Data-Model.md):**

- "PENDING VERIFICATION"
- "ACTIVE"
- "SUSPENDED"

**Experience status (as defined in `MVP-Product-Definition.md`):**

"DRAFT" → "UNDER REVIEW" → "APPROVED" → "PUBLISHED" → "BOOKED" → "COMPLETED"
Alternative: "CANCELLED", "SUSPENDED"

**Booking status (as defined in `MVP-Product-Definition.md` and `User-Flows.md`):**

"REQUESTED" → "CONFIRMED" → "COMPLETED"
Alternative: "CANCELLED", "NO_SHOW"

**Exception states the MVP must account for (provider side):**

- Experience rejected at review.
- Booking request exceeds available capacity.
- Provider fails to confirm/reject a booking within an expected window (behavior TBD — pending validation).
- Provider-initiated cancellation after confirmation.
- Asset/vehicle unavailable after an Experience was published (requires provider to update availability or pause the Experience).

The provider must receive a clear status/message for each of these, consistent with the error-handling principle in `User-Flows.md`, Section 18.

---

22. Explicit Exclusions (Provider Side)

Consistent with `MVP-Product-Definition.md`, Section 15, the following are **not** part of the initial MVP provider flow:

- Fleet ownership by BajaRide (providers always own/operate their own assets).
- BajaCredits / token-based incentives.
- Advanced KYC/KYB verification.
- Automated insurance management.
- Advanced AI-driven pricing, matching, or fraud detection.
- Advanced geofencing.
- Advanced fleet management tooling for providers with multiple assets.
- Advanced analytics/dashboards for providers.
- Dynamic/automated pricing.

These may become future modules once explicitly validated and scoped.

---

23. Scope Control

This document defines the initial provider-side flow only.

It does not define:

- User-side flow (see `User-Flows.md`).
- Admin-side flow in full detail (see `Admin-Flows.md`, not yet created).
- Database schema (see `Data-Model.md`, not yet created).
- API specifications (see `API-Requirements.md`, not yet created).
- Production payment or payout infrastructure.
- Insurance mechanics.

---

24. Related Documents

- "MVP-Product-Definition.md"
- "User-Flows.md"
- "Admin-Flows.md" (not yet created)
- "Data-Model.md" (not yet created)
- "Architecture.md" (not yet created)
- "02-Finance/Financial-Assumptions-Register.md" (pricing/take-rate assumptions referenced in Section 7)

---

25. Document Status

Current status: DRAFT / WORKING DOCUMENT

This document was created to correct a prior version that incorrectly duplicated `MVP-Product-Definition.md`. Changes discovered during implementation or validation must be recorded and incorporated into the appropriate product documentation.
