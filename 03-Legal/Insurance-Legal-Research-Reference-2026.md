# Insurance & Legal Research Reference — 2026

**Document Status**: SECONDARY RESEARCH / UNVERIFIED — condensed from AI-assisted research (Perplexity), not from a licensed Mexican attorney or insurance broker
**Classification**: Every claim below is `UNVERIFIED` until confirmed by a licensed professional. Nothing here should be treated as legal advice or a final coverage decision.
**Last Updated**: September 9, 2026
**Do not use directly as**: a contract, a waiver, a privacy notice, or a coverage commitment. Use as: a starting checklist to bring to an attorney and an insurance broker.

---

## 0. Known Issue in the Source Material

The original research mixed in a reference to Peru's "Ley 32495" (Libro de Reclamaciones for e-commerce/marketplaces) as if potentially relevant — **that is Peruvian law, not Mexican law, and does not apply to BajaRide.** It is omitted from this reference entirely. This is flagged here as a caution about secondary AI research in general: verify jurisdiction on every point before acting on it.

Most cited sources in the original material were either strong (INAI, DOF, gob.mx, LFPC/LFPDPPP-related pages) or weak (insurance-comparison blogs, template-selling sites). Only the institutional/legal ones are referenced below; the commercial ones were dropped rather than carried into this repository.

---

## 1. Insurance Architecture — Three Separate Risk Layers

| Layer | What it covers | Who should carry it |
|---|---|---|
| **1. Vehicle/asset** | Physical damage, theft, rollover to the UTV/ATV itself | Provider (mandatory) |
| **2. Activity/operation** | Injury, death, or third-party damage arising from the off-road experience itself | Provider (mandatory) |
| **3. Platform** | Claims against BajaRide for provider vetting, listed information, payments, data handling | BajaRide (separate policy, e.g. general liability + E&O + cyber) |

**Direction for BajaRide (unverified, pending broker confirmation)**: BajaRide does not need to purchase Layer 1 or 2 coverage itself — it can require proof of it as a condition of publishing (policy number, insurer, validity dates), consistent with the asset-light model (`Decision-Log.md` DEC-2026-05).

---

## 2. Proposed "Mandatory Base + Optional Upgrade" Model

**Mandatory, non-negotiable, to publish an Experience (direction only — not yet a ratified MVP requirement):**
1. Vehicle insurance with at least third-party liability (damage + injury).
2. Operator/activity liability insurance covering the specific off-road activity.

**Optional, offered to the User at checkout:**
3. Personal accident insurance for the participant (medical, disability, death) — user can accept (pays a premium) or decline.

**Note on MVP status**: `06-App/Provider-Flows.md` §5A currently treats insurance documentation as **not yet a gating requirement** for the MVP, consistent with `Risk-Register.md` INS-001 being an open, unresolved risk. This research suggests making Layer 1+2 insurance a hard requirement to publish is the safer direction — but that is a product/business decision for the founder to ratify (it would mean editing `Provider-Flows.md` §5A and §22, and updating `Decision-Log.md`), not something implied automatically by this research doc.

---

## 3. Liability Waiver — Minimum Elements Checklist

A waiver alone does not eliminate legal responsibility in Mexico, especially regarding non-waivable consumer rights, but it is a standard risk-mitigation document. Minimum elements to include (per attorney review):

1. Identification of provider/operator (and BajaRide's role as intermediary, if named).
2. Description of the specific activity and its concrete risks (rollover, collision, uneven terrain, weather, mechanical failure, etc.).
3. Assumption-of-risk statement from the participant.
4. Release of liability for inherent risks, to the extent Mexican law allows.
5. Disclosure of what insurance covers the activity, and whether the participant purchased the optional personal accident add-on.
6. Minor-participant clause (guardian signature) if applicable.
7. Emergency contact and relevant medical information.
8. Electronic signature tied to the booking, with IP/timestamp/document-version logging.

**Status**: none of this exists as an actual document in this repository yet. This is a checklist for what the eventual waiver must contain, not a draft of the waiver itself.

---

## 4. Privacy Notice (Aviso de Privacidad) — LFPDPPP Requirements

Mexico's LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los Particulares) requires a formal "aviso de privacidad." Minimum required elements:

1. Identity and address of the data controller (BajaRide's legal entity).
2. What personal data is collected (identity, contact, ID documents for verification, payment data, booking history, incident data, navigation data).
3. Purposes of processing — primary (service delivery) vs. secondary (marketing, analytics), with secondary purposes requiring separate consent.
4. Data transfers (payment processors, hosting providers, verification services, authorities when legally required, insurers in case of claims).
5. ARCO rights (Acceso, Rectificación, Cancelación, Oposición) and how to exercise them.
6. General description of security measures.
7. How changes to the notice will be communicated.
8. Reference to INAI as the competent authority.

**Recommended starting point**: INAI publishes an official privacy-notice generator — use it as a base, then have a Mexican attorney adapt it to BajaRide's actual data flows once `06-App/Data-Model.md` exists (it doesn't yet).

---

## 5. Terms & Conditions — Minimum Sections

**User-facing terms** should cover: platform-as-intermediary framing (BajaRide is not the direct service provider), account eligibility, experience listing rules, booking/payment/cancellation policy, insurance and waiver obligations, code of conduct, IP, limitation of platform liability, privacy reference, governing law (Mexican law, jurisdiction TBD pending entity formation).

**Provider-facing terms** should separately cover: registration/verification requirements, required permits/licenses/insurance, safety standards, commission/settlement terms, suspension policy, liability allocation, brand usage, confidentiality, and data-processing role (controller vs. processor).

**Status**: neither document exists yet. This is the section list, not drafted text.

---

## 6. Tourism Registration — RNT / DATATUR (newly identified compliance area)

Mexico's Ley General de Turismo establishes a **Registro Nacional de Turismo (RNT)**, with a public directory (DATATUR). Direction (unverified): BajaRide's **providers** (as tour/experience operators) likely need to be registered there. Possible mitigation: require an RNT number as a condition to publish, and verify it against the public DATATUR directory during onboarding.

**This was not previously tracked anywhere in this repository** — it is a genuinely new compliance area surfaced by this research, not merely a restatement of something already known.

---

## 7. Consumer Protection (LFPC) — Specific Requirements

Beyond the general "TBD" already in `Risk-Register.md` LEG-003, the specific obligations worth tracking: no misleading advertising; always show total price (including taxes/fees); clearly disclose cancellation/refund policy; obtain explicit consent for any recurring charge; provide a clear complaint channel.

---

## 8. Suggested Legal Section Structure for the Master Document

Corporate/tax structure → applicable regulatory framework (Ley General de Turismo, LFPC, LFPDPPP, Código de Comercio, Baja California local rules) → RNT/DATATUR registration process → core legal documents (User ToS, Provider Terms, Waiver, Privacy Notice, Cookie Policy if applicable) → insurance (mandatory + optional, per Section 1–2 above) → data protection program → consumer protection compliance → IP/brand → legal risk register cross-reference → legal roadmap.

This structure is now reflected in `03-Legal/Legal-Structure-Overview.md`.

---

## 9. Concrete Next Steps (unchanged from the source research, still valid)

1. Get real quotes from Mexican insurance brokers for: operator liability (turismo de aventura), grouped personal accident coverage, and BajaRide's own general liability + E&O + cyber.
2. Define minimum coverage/limits per provider together with a broker and attorney (no figures should be invented here).
3. Draft the actual legal documents (ToS, Waiver, Privacy Notice) with a Mexican attorney.
4. Build the acceptance flow into the product (terms checkbox, e-signature for the waiver, opt-in for optional insurance) — this depends on `06-App/User-Flows.md` and `Provider-Flows.md` and is not yet built.
5. Log every legal/insurance decision in `Decision-Log.md` as it's actually made — not before.

---

## 10. Institutional Sources Worth Keeping (commercial/blog sources omitted)

- INAI — Guía para el Aviso de Privacidad (inicio.inai.org.mx)
- DOF (Diario Oficial de la Federación) — normativa turística y acuerdos de SECTUR
- DATATUR / Plataforma Nacional de Datos Abiertos — directorio de prestadores turísticos
- Ley Federal de Protección al Consumidor — reformas recientes (referenced via GT Law summary)

---

**Related Documents**: `03-Legal/Legal-Structure-Overview.md`, `Risk-Register.md` (LEG-001–004, INS-001), `Checklist-Maestro.md` (CHK-LEG-01/02, CHK-SEG-01)
