BajaRide — Data Model (Conceptual)

Version: 1.0
Status: DRAFT / WORKING DOCUMENT — CONCEPTUAL, TECHNOLOGY-AGNOSTIC
Date: September 2026
Module: 06-App

---

0. Why This Is Technology-Agnostic on Purpose

`Decision-Log.md` DEC-2026-16 is an open, unresolved question about the actual technical stack (Flutter/Node.js per this repo's `Assumptions-Register.md` TECH-T01, vs. an earlier Flask/Next.js track described in prior founder sessions — see `BRfinal-Knowledge-Consolidation-2026.md` §II.A). This document defines entities, attributes, and relationships at a conceptual level that holds regardless of which stack is confirmed. It intentionally avoids SQL-specific syntax, ORM conventions, or a specific database engine's type system. Once DEC-2026-16 is resolved, this becomes the direct input for an actual schema (`Architecture.md`, not yet created, would then define the concrete implementation).

Attribute types below are generic (`string`, `enum`, `date`, `datetime`, `decimal`, `boolean`, `text`, `reference`) — not tied to any specific database's native types.

---

1. Entity Overview

- **Account** — base identity, one per person, with a role.
- **Provider Profile** — business/operator details, linked to an Account with role=provider.
- **Asset** — a vehicle/asset registered by a Provider.
- **Experience** — a bookable offering created by a Provider, referencing one or more Assets.
- **Booking** — a User's request to book an Experience for a date/time.
- **Incident** — a safety/operational issue tied to a Booking.
- **Settlement** — a payout record tied to a completed Booking.
- **Review** — (Future scope) user-to-provider feedback.
- **Admin Action Log** — audit trail of Admin decisions.

Relationship summary: `Account (role=provider) --1:1--> Provider Profile --1:many--> Asset`; `Provider Profile --1:many--> Experience --many:many--> Asset` (an Experience can use one or more Assets); `Account (role=user) --1:many--> Booking --many:1--> Experience`; `Booking --0:1--> Incident`; `Booking --0:1--> Settlement`; `Booking --0:1--> Review` (future scope); every state-changing action by an Account with role=admin on Provider Profile / Experience / Booking → `Admin Action Log` entry.

---

2. Account

Shared identity for User, Provider, and Admin roles (per `MVP-Product-Definition.md` §4 actor definitions).

| Field | Type | Notes |
|---|---|---|
| account_id | reference (primary) | |
| role | enum | `user` · `provider` · `admin` — an account has exactly one role in the MVP (Current). Future scope: an account holding multiple roles (e.g., a User who is also a Provider) — not supported in MVP. |
| full_name | string | |
| contact_email | string | |
| contact_phone | string | |
| created_at | datetime | |
| status | enum | `active` · `suspended` (admin-only target per `Admin-Flows.md` §5, applies to provider accounts) |

---

3. Provider Profile

Extends an Account with role=provider. See `Provider-Flows.md` §2–3.

| Field | Type | Notes |
|---|---|---|
| provider_id | reference (primary) | |
| account_id | reference → Account | |
| business_name | string | Nullable — individual providers may not have a separate business name |
| base_location | string | Per `Provider-Flows.md` §9 |
| description | text | |
| verification_status | enum | `PENDING VERIFICATION` · `ACTIVE` · `SUSPENDED` — proposed in `Provider-Flows.md` §21, **not yet confirmed** in a ratified decision |
| documentation_ref | reference → stored documents | Per `Provider-Flows.md` §5A — minimum document set itself is Hypothesis/Pending |

---

4. Asset

A vehicle/asset registered by a Provider. See `Provider-Flows.md` §5.

| Field | Type | Notes |
|---|---|---|
| asset_id | reference (primary) | |
| provider_id | reference → Provider Profile | BajaRide does not own assets (asset-light model, DEC-2026-05) |
| asset_type | string | e.g., UTV, ATV — no controlled vocabulary defined yet (**TBD**) |
| description | text | |
| photos | reference → media | |
| condition_notes | text | Optional |

---

5. Experience

A bookable offering. See `Provider-Flows.md` §6–11, `MVP-Product-Definition.md` §7 (lifecycle).

| Field | Type | Notes |
|---|---|---|
| experience_id | reference (primary) | |
| provider_id | reference → Provider Profile | |
| asset_ids | reference (many) → Asset | An Experience can reference one or more Assets |
| name | string | |
| description | text | |
| category | enum | Per `Provider-Flows.md` §6 — controlled vocabulary **not yet finalized (TBD)** |
| location | string | Meeting point / operating area, per `Provider-Flows.md` §9 |
| reference_price | decimal | Per participant or per experience — unit **not yet decided (TBD)**, see `Financial-Assumptions-Register.md` REV-001 |
| capacity | integer | Max participants per slot, per `Provider-Flows.md` §8 |
| availability | reference → availability slots | Structure **TBD** — needs its own sub-model once a booking calendar approach is chosen |
| status | enum | `DRAFT` → `UNDER REVIEW` → `APPROVED` → `PUBLISHED` → `BOOKED` → `COMPLETED`; alt `CANCELLED`, `SUSPENDED` (exact values per `MVP-Product-Definition.md` and `Provider-Flows.md` §21) |
| created_at / updated_at | datetime | |

---

6. Booking

A User's request to book an Experience. See `User-Flows.md` §8, `Provider-Flows.md` §12–13.

| Field | Type | Notes |
|---|---|---|
| booking_id | reference (primary) | |
| experience_id | reference → Experience | |
| account_id | reference → Account (role=user) | |
| requested_date | date | |
| requested_time | string/enum | Depends on how availability slots are ultimately modeled (see Experience.availability) |
| party_size | integer | Must not exceed Experience.capacity for that slot |
| status | enum | `REQUESTED` → `CONFIRMED` → `COMPLETED`; alt `CANCELLED`, `NO_SHOW` |
| cancellation_reason | text | Nullable; per `Provider-Flows.md` §17 |
| created_at / updated_at | datetime | |

---

7. Incident

See `Provider-Flows.md` §18, `Admin-Flows.md` §6.

| Field | Type | Notes |
|---|---|---|
| incident_id | reference (primary) | |
| booking_id | reference → Booking | |
| experience_id | reference → Experience | Denormalized for convenience; derivable from booking |
| reported_by | reference → Account | User, Provider, or observed by Admin |
| description | text | |
| severity | enum | **TBD — no severity scale defined yet** (`Admin-Flows.md` §6) |
| status | enum | `OPEN` · `IN REVIEW` · `RESOLVED` — proposed, not yet ratified |
| created_at / resolved_at | datetime | |

---

8. Settlement

Provider payout for a completed Booking. See `Provider-Flows.md` §16A.

| Field | Type | Notes |
|---|---|---|
| settlement_id | reference (primary) | |
| booking_id | reference → Booking | One settlement per completed booking (MVP assumption) |
| provider_id | reference → Provider Profile | |
| gross_amount | decimal | = Experience.reference_price at time of booking |
| take_rate_applied | decimal | **TBD** — see `Financial-Assumptions-Register.md` REV-002, not yet validated |
| net_payout | decimal | = gross_amount − (gross_amount × take_rate_applied) |
| payout_status | enum | `PENDING` · `PAID` — depends entirely on the payment processor decision (`Decision-Log.md` TBD-2026-02), **not implementable until that's chosen** |
| processed_at | datetime | Nullable until paid |

---

9. Review (Future Scope)

Per `Provider-Flows.md` §19 — **explicitly future scope**, included here only so the shape is documented, not because it should be built for the MVP.

| Field | Type | Notes |
|---|---|---|
| review_id | reference (primary) | |
| booking_id | reference → Booking | |
| rating | integer | Scale **TBD** |
| comment | text | |

---

10. Admin Action Log

See `Admin-Flows.md` §9.

| Field | Type | Notes |
|---|---|---|
| log_id | reference (primary) | |
| admin_account_id | reference → Account (role=admin) | |
| target_type | enum | `provider` · `experience` · `booking` |
| target_id | reference | Polymorphic reference to the target record |
| action | string | e.g., "approved", "rejected", "suspended" |
| reason | text | |
| timestamp | datetime | |

---

11. Explicitly Undecided (do not treat any of these as settled)

- Availability/scheduling sub-model (calendar slots vs. simple date ranges).
- Category controlled vocabularies for Asset.asset_type and Experience.category.
- Incident severity scale.
- Whether Settlement is 1:1 with Booking or could batch multiple bookings per payout cycle.
- Any actual field-level validation rules (required/optional beyond what's noted, string length limits, etc.).
- The underlying storage technology itself (SQL vs. NoSQL, specific engine) — blocked on DEC-2026-16.

---

12. Related Documents

`MVP-Product-Definition.md` · `User-Flows.md` · `Provider-Flows.md` · `Admin-Flows.md` · `Financial-Assumptions-Register.md` · `Decision-Log.md` (DEC-2026-16)

---

13. Next Step

Once DEC-2026-16 is resolved, this conceptual model becomes the direct input for `Architecture.md` (concrete schema, chosen database engine, migration strategy) — not yet created.
