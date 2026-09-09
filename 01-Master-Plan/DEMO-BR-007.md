# BR-007 — BajaRide Concept Demonstration Brief

**Document Status**: CONCEPT DEMONSTRATION BRIEF — synthesized from existing product documents, not a new specification
**Last Updated**: September 9, 2026
**Purpose**: Explain BajaRide's functional/operational concept in one readable document, for demo and orientation purposes. This is a synthesis of `06-App/MVP-Product-Definition.md`, `User-Flows.md`, and `Provider-Flows.md` — it does not introduce new product decisions, and it is not a substitute for those documents.

**Critical distinction — read before using this document anywhere:**

> **Concept demonstration ≠ production ≠ traction.**
> Nothing described here is built (no code exists in this repository — see `Knowledge-Recovery-Matrix.md` Section I). Nothing described here has real users or bookings (see `Investor-Evidence-Matrix.md` — zero validated rows). This is a description of an intended product, for explaining the idea, not evidence that it works.

---

## 1. Purpose

Explain, in plain terms, what BajaRide is meant to do and how its pieces fit together — for onboarding, demos, or investor conversations that need the concept explained before the Investor Base Document's evidence sections are ready.

## 2. Actors

- **User** — books an off-road Experience.
- **Provider** — owns/operates the vehicle(s)/asset(s) and offers Experiences.
- **Admin** — BajaRide staff who review and moderate Experiences and handle incidents.
- **Hub/Ops** — a future operational coordination layer, explicitly **not required for the MVP** (`Decision-Log.md` DEC-2026-08).

(Full role detail: `MVP-Product-Definition.md` Section 4.)

## 3. Main Flow (conceptual)

"Provider lists an Experience → Admin reviews and approves it → User discovers and books it → Provider confirms → Experience happens → Both sides complete it → Provider gets paid → User can review."

## 4. User Experience (summary)

A User browses published Experiences, requests a booking for a date/time and party size, and receives a confirmation or rejection from the Provider. Full detail, including exception handling: `User-Flows.md`.

## 5. Provider Experience (summary)

A Provider registers, passes a basic verification step, lists an asset and an Experience, sets a price and availability, and — once approved — receives and manages bookings through to completion and payout. Full detail: `Provider-Flows.md`.

## 6. Hub / Ops

Conceptually, a Hub would be a physical or logistical coordination point (e.g., for larger-scale operations). It is **explicitly not part of the MVP** and should not be described as existing. (`Decision-Log.md` DEC-2026-08; `Archivo-Maestro-2026.md` Section 5.)

## 7. Administration

Admin reviews new provider registrations and new Experience submissions, monitors bookings, and handles incidents or suspensions. Full detail: `Provider-Flows.md` Section 20.

## 8. Reservation (Booking)

A booking moves through: "REQUESTED → CONFIRMED → COMPLETED", with "CANCELLED" and "NO_SHOW" as alternate end states. This vocabulary is shared exactly across `MVP-Product-Definition.md`, `User-Flows.md`, and `Provider-Flows.md`.

## 9. Operation

On the day of the Experience, the Provider delivers it as approved; the User participates; either side can report an incident if something goes wrong. Full detail: `Provider-Flows.md` Sections 14–15, 18.

## 10. Closure (Completion)

Either the Provider or the system marks a booking "COMPLETED" once the Experience has taken place, which is the trigger for settlement and (eventually) review eligibility.

## 11. Settlement (Liquidación)

Provider payout = reference price minus BajaRide's take rate. **The take rate percentage and the payment processor are both currently TBD** — this is a real, currently-unresolved gap, not a demo simplification. Full detail: `Provider-Flows.md` Section 16A.

## 12. States

Experience: "DRAFT → UNDER REVIEW → APPROVED → PUBLISHED → BOOKED → COMPLETED" (alt: "CANCELLED", "SUSPENDED").
Booking: "REQUESTED → CONFIRMED → COMPLETED" (alt: "CANCELLED", "NO_SHOW").
Full detail, including provider-side exception states: `Provider-Flows.md` Section 21.

## 13. MVP Limits (what this demo does NOT include)

Per `MVP-Product-Definition.md` Section 15 and `Provider-Flows.md` Section 22, explicitly excluded from the current MVP concept:

- BajaRide-owned fleet
- BajaCredits / token incentives
- Advanced KYC/KYB
- Automated insurance management
- Advanced AI (pricing, matching, fraud detection)
- Advanced geofencing
- Advanced fleet management tooling
- Dynamic/automated pricing
- Advanced analytics/dashboards

---

## 14. How to Use This Brief

- **Appropriate use**: explaining the concept verbally or in a short written brief, orienting a new collaborator, framing a conversation before diving into the full specs.
- **Inappropriate use**: presenting this as evidence of a working product, presenting it to investors as equivalent to traction, or using it as a technical specification for development (use `MVP-Product-Definition.md`, `User-Flows.md`, `Provider-Flows.md`, and the not-yet-created `Data-Model.md`/`Architecture.md`/`API-Requirements.md` for that).

---

**Related Documents**: `06-App/MVP-Product-Definition.md`, `06-App/User-Flows.md`, `06-App/Provider-Flows.md`, `08-Investors/Investor-Base-Document.md`
