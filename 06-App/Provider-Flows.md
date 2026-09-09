BajaRide — MVP Product Definition

Version: 1.0
Status: DRAFT / WORKING DOCUMENT
Date: September 2026
Product: BajaRide
Repository: BajaRide-Core

---

1. Product Definition

BajaRide is a technology platform and marketplace specialized in off-road experiences.

The platform connects users seeking off-road experiences with verified providers offering vehicles, guided activities, tours, routes, and related experiences.

BajaRide operates initially as an asset-light marketplace. It does not require ownership of a vehicle fleet to operate the MVP.

Initial geography: Ensenada, Baja California, Mexico.
Initial category: UTV / off-road experiences.

---

2. MVP Objective

The MVP exists to validate the core marketplace workflow:

Discover → Evaluate → Select → Reserve → Operate → Complete

The MVP must allow BajaRide to demonstrate that:

1. Users can discover available experiences.
2. Providers can publish experiences.
3. BajaRide can manage availability.
4. Users can request/book an experience.
5. Providers can manage reservations.
6. BajaRide can monitor the marketplace operation.

The MVP is a validation product, not the final platform.

---

3. Marketplace Model

Core relationship

Provider → BajaRide Platform → User

Future operational layer:

Provider → BajaRide Platform → Hub/Operations → User

The Hub is a future operational component and is not required for the initial MVP.

---

4. MVP Users

4.1 User / Customer

Can:

- Create an account.
- Log in.
- Manage basic profile information.
- Browse experiences.
- Search experiences.
- Filter experiences.
- View experience details.
- View availability.
- Request/book an experience.
- View booking status.
- View booking history.

4.2 Provider

Can:

- Create a provider account.
- Create/manage provider profile.
- Submit an experience.
- Add experience information.
- Define availability.
- Define capacity.
- View reservations.
- Update operational status.

4.3 Administrator

Can:

- View users.
- View providers.
- Review providers.
- Review experiences.
- Approve/reject experiences.
- View bookings.
- Manage booking status.
- Review incidents.
- Suspend users, providers, or experiences when necessary.

---

5. Experience Definition

An experience is the primary marketplace product presented to users.

An experience may include:

- UTV/off-road activity.
- Guided tour.
- Route.
- Adventure activity.
- Vehicle-based experience.
- Other compatible off-road activities.

An event does not automatically become a BajaRide experience.

Events, opportunities, providers, and experiences must remain separate concepts.

---

6. Experience Lifecycle

The initial lifecycle is:

"DRAFT"

→ "UNDER REVIEW"

→ "APPROVED"

→ "PUBLISHED"

→ "BOOKED"

→ "COMPLETED"

Alternative states:

"CANCELLED"

"SUSPENDED"

Only appropriate experiences should become publicly visible.

---

7. MVP User Flow

Discovery

User opens BajaRide.

↓

Searches/browses experiences.

↓

Applies filters.

↓

Selects an experience.

Evaluation

User views:

- Description.
- Location.
- Provider.
- Price.
- Availability.
- Capacity.
- Requirements.
- Basic safety information.

↓

User selects date/time.

Reservation

User submits booking request.

↓

BajaRide records booking.

↓

Provider receives booking.

↓

Booking status is updated.

Completion

Experience takes place.

↓

Booking becomes "COMPLETED".

---

8. MVP Provider Flow

Provider registers.

↓

Creates provider profile.

↓

Submits experience.

↓

Experience enters "UNDER REVIEW".

↓

Administrator reviews.

↓

Approved experience becomes "PUBLISHED".

↓

User books.

↓

Provider manages booking.

↓

Experience is completed.

---

9. MVP Admin Flow

Administrator accesses dashboard.

↓

Reviews:

- Users.
- Providers.
- Experiences.
- Bookings.
- Incidents.

↓

Approves or rejects providers/experiences.

↓

Monitors marketplace activity.

↓

Suspends or flags problematic records when required.

---

10. MVP Booking Concept

A booking must contain at minimum:

- User.
- Provider.
- Experience.
- Date.
- Time or time window.
- Number of participants.
- Price/reference amount.
- Status.
- Creation timestamp.

Initial booking statuses:

"REQUESTED"

"CONFIRMED"

"CANCELLED"

"COMPLETED"

"NO_SHOW"

Additional statuses may be added after operational validation.

---

11. MVP Trust & Safety

The MVP must establish the basic information required to operate the marketplace responsibly.

At minimum:

- Provider identity information.
- Provider contact information.
- Experience requirements.
- Basic risk information.
- Basic cancellation rules.
- Incident reporting capability.
- Administrative suspension capability.

Advanced KYC/KYB, insurance automation, advanced verification and automated trust systems are future scope unless separately validated and implemented.

---

12. MVP Payments

Payments are not considered fully implemented at this stage.

The architecture must allow future integration with a payment provider.

Historical/considered providers or solutions must not be represented as active integrations unless implementation is verified.

Examples of previously considered solutions must remain classified as:

"CONSIDERED / TBD"

---

13. MVP Reviews

Basic review capability may be considered after the core booking flow is validated.

Advanced reputation systems are outside the initial MVP.

---

14. MVP Notifications

Basic notification requirements may include:

- Booking received.
- Booking status changed.
- Experience reminder.
- Cancellation.
- Administrative notification.

Specific notification provider remains TBD until implementation is defined.

---

15. Explicit MVP Exclusions

The initial MVP does not require:

- Fleet ownership.
- Vehicle purchasing.
- Advanced payment infrastructure.
- Advanced KYC/KYB.
- Automated insurance management.
- Loyalty program.
- BajaCredits/token.
- Advanced analytics.
- Advanced AI automation.
- Advanced geofencing.
- Advanced Hub management.
- Complex fleet management.
- Automated marketplace optimization.
- Full-scale enterprise infrastructure.

These may become future modules.

---

16. Technology Baseline

Frontend

Flutter / Dart

Backend

Node.js / TypeScript

Architecture

Conceptual MVP architecture:

Flutter App

↓

API / Backend

↓

Database

↓

Supporting services as required:

- Authentication.
- Storage.
- Notifications.
- Payments.
- Verification.
- Logging.
- Security.

No external integration should be considered implemented until verified.

---

17. MVP Data Domains

The MVP should be designed around the following core entities:

- User
- Provider
- Experience
- Vehicle / Asset
- Location
- Availability
- Booking
- Payment
- Review
- Incident
- Cancellation
- Verification
- Document
- Event
- Notification

Not every entity requires full functionality in version 1.

---

18. MVP Success Criteria

The MVP should demonstrate a complete operational loop:

Provider creates experience

→

BajaRide reviews

→

Experience becomes published

→

User discovers experience

→

User selects availability

→

User books

→

Provider receives booking

→

Experience occurs

→

Booking is completed

This is the primary product validation loop.

---

19. Product Principles

1. Marketplace first.
2. Asset-light.
3. User and provider experience first.
4. Progressive development.
5. Validate before scaling.
6. Do not overbuild.
7. Document important decisions.
8. Do not confuse hypotheses with validated facts.
9. Do not treat simulations as traction.
10. Build the MVP as a tool for validating the business model.

---

20. Current Status

Status: DRAFT / WORKING DOCUMENT

The MVP definition is subject to refinement as product development, market research, provider validation, operational analysis and financial modeling progress.

Changes that affect the fundamental BajaRide strategy must be documented in the appropriate decision log.

---

21. Next Documents

After this document is reviewed and accepted, create sequentially:

1. "User-Flows.md"
2. "Provider-Flows.md"
3. "Admin-Flows.md"
4. "Data-Model.md"
5. "Architecture.md"
6. "API-Requirements.md"
7. "Product-Backlog.md"
8. "Product-Decision-Log.md"
9. "MVP-Roadmap.md"

Do not create or complete these documents until the MVP Product Definition has been reviewed.