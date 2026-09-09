BajaRide — User Flows

Version: 1.0
Status: DRAFT / WORKING DOCUMENT
Date: September 2026
Module: 06-App

---

1. Objective

Define the MVP user journey from discovery through completion of an off-road experience.

Core flow:

"Discover → Evaluate → Select → Book → Confirm → Experience → Complete"

---

2. User Entry

The user can:

- Open BajaRide.
- Browse experiences without completing registration.
- Register/login when required to continue with a booking.
- Access their profile and booking history.

---

3. Home / Discovery

The user sees:

- Featured experiences.
- Available experiences.
- Categories.
- Locations.
- Basic search functionality.

Primary action:

Explore Experiences

---

4. Search & Filters

The user can search and filter by available MVP criteria.

Potential filters:

- Location.
- Date.
- Experience type.
- Number of participants.
- Price range, when available.

Filters should only be implemented when the corresponding data exists.

---

5. Experience Listing

Each experience card should display, when available:

- Experience name.
- Location.
- Provider.
- Basic description.
- Price/reference amount.
- Availability indicator.
- Primary image.

Action:

View Experience

---

6. Experience Detail

The user can view:

- Experience description.
- Provider.
- Location.
- Date/time availability.
- Capacity.
- Price.
- Requirements.
- Basic risk/safety information.
- Cancellation information.
- Relevant vehicle/asset information.

Primary action:

Book Experience

---

7. Authentication

If authentication is required, the user can:

- Register.
- Log in.
- Recover access.
- Maintain basic profile information.

Authentication requirements should remain simple during MVP validation.

---

8. Booking Request

The user selects:

- Date.
- Available time/time window.
- Number of participants.

The system validates basic availability.

The user reviews the booking information.

Primary action:

Submit Booking

---

9. Booking Confirmation

After submission, the system creates a booking with status:

"REQUESTED"

The user receives confirmation that the request was received.

The provider/admin workflow determines the subsequent status.

---

10. Booking Status

The user can view booking status.

Initial statuses:

- "REQUESTED"
- "CONFIRMED"
- "CANCELLED"
- "COMPLETED"
- "NO_SHOW"

The interface should clearly communicate the current status.

---

11. Confirmed Booking

When the booking becomes "CONFIRMED", the user can view:

- Experience.
- Provider.
- Date.
- Time.
- Location.
- Participants.
- Booking reference.
- Applicable instructions.

---

12. Cancellation

The user can initiate cancellation when permitted by the applicable cancellation rules.

The system records:

- Booking.
- Cancellation request.
- Actor.
- Date/time.
- Reason, when required.
- Result/status.

Refund processing is outside the initial product definition unless separately implemented.

---

13. Experience Day

The user receives the relevant booking information required to participate.

The user should be able to access:

- Experience details.
- Meeting/location information.
- Provider information.
- Requirements.
- Safety instructions.

---

14. Completion

After the experience:

Booking status becomes:

"COMPLETED"

The system records completion.

Future functionality may allow:

- Review.
- Rating.
- Feedback.
- Incident report.

These capabilities should not block the core MVP flow.

---

15. Incident

If an incident occurs, the user can access an incident-reporting mechanism when implemented.

An incident should be associated with:

- User.
- Booking.
- Experience.
- Provider.
- Date/time.
- Description.
- Status.

Administrative handling occurs separately.

---

16. User Profile

The MVP profile may contain:

- Name.
- Contact information.
- Account information.
- Booking history.

Additional verification information can be introduced progressively.

---

17. User Navigation

Recommended MVP navigation:

Home

→ Explore

→ Experience Detail

→ Booking

→ My Bookings

→ Profile

---

18. Error / Exception States

The MVP must account for:

- Experience unavailable.
- Selected date unavailable.
- Capacity reached.
- Booking failure.
- Cancellation.
- Provider cancellation.
- Suspended experience.
- Invalid or incomplete information.
- Technical error.

The user must receive a clear status/message rather than being left without feedback.

---

19. Core User Flow — Final

HOME
  ↓
DISCOVER
  ↓
SEARCH / FILTER
  ↓
EXPERIENCE DETAIL
  ↓
SELECT DATE / TIME / PARTICIPANTS
  ↓
LOGIN / REGISTER
  ↓
REVIEW BOOKING
  ↓
SUBMIT BOOKING
  ↓
REQUESTED
  ↓
CONFIRMED
  ↓
EXPERIENCE
  ↓
COMPLETED

Alternative paths:

REQUESTED → CANCELLED
CONFIRMED → CANCELLED
CONFIRMED → NO_SHOW

---

20. MVP Validation Objective

The user flow is considered functionally validated when a test user can complete the core journey:

Discover → Select → Book → Confirm → Complete

without requiring manual intervention except where the MVP intentionally requires administrative/provider approval.

---

21. Scope Control

This document defines the initial user-side flow only.

It does not define:

- Provider workflows.
- Admin workflows.
- Database schema.
- API specifications.
- Production payment infrastructure.
- Advanced trust systems.
- Advanced analytics.

Those will be defined in subsequent documents.

---

22. Related Documents

- "MVP-Product-Definition.md"
- "Provider-Flows.md"
- "Admin-Flows.md"
- "Data-Model.md"
- "Architecture.md"
- "API-Requirements.md"

---

23. Document Status

Current status: DRAFT / WORKING DOCUMENT

Changes discovered during implementation or validation must be recorded and incorporated into the appropriate product documentation.