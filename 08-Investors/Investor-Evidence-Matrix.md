# Investor Evidence Matrix — BajaRide

**Document Status**: SKELETON — zero validated rows
**Last Updated**: September 9, 2026
**Purpose**: Every material claim made in `Investor-Base-Document.md` must be traceable to evidence here before it is presented to an investor.

---

## Schema

| Field | Description |
|---|---|
| Afirmación | The specific claim |
| Dato | The supporting figure/fact, if any |
| Fuente | Where it comes from |
| Fecha | When the data was gathered |
| Tipo de evidencia | Primary research / Secondary research / Internal document / Historical / Simulation |
| Nivel de confianza | None / Low / Medium / High |
| Validación pendiente | What would need to happen to raise confidence |

---

## Current Entries

| Afirmación | Dato | Fuente | Tipo de evidencia | Nivel de confianza | Validación pendiente |
|---|---|---|---|---|---|
| BajaRide operates an asset-light marketplace model | — (strategic decision, not an empirical claim) | `Decision-Log.md` DEC-2026-01, DEC-2026-05 | Internal document | High (as a decision) / N/A (not an empirical claim) | N/A |
| There is unmet demand for structured UTV/off-road booking in Ensenada | None yet | Founder hypothesis | Internal document (hypothesis) | **None** | Complete Baja 500 interviews (`Baja-500-Interviews.md`) |
| Ensenada has meaningful tourism volume and a nature/adventure segment | ~1.3M cruise passengers in 2025 (+41.7% YoY); nature/adventure = 22.2% of stated travel motivation | Secondary research (tourism data cited via Perplexity) — see `05-Operations/Market-Competitive-Research-2026.md` §5 | Secondary research | **Medium** — real published figures, but secondary source, not a primary tourism-board citation verified directly | Verify against a primary state/municipal tourism data source before citing in an investor deck |
| Real off-road tour/rental competitors exist in Ensenada | 8 named operators (ATV Ensenada Tours, ATV Ensenada Off Road Tours, Ride 2 go, Chylyca UTV Rentas, PITS Adventure Hub, Activities Ensenada, Rhino Off Road Tours, Baja Trip ATV Rental) | Secondary research — `05-Operations/Market-Competitive-Research-2026.md` §3, `05-Operations/Provider-Resource-Map.md` | Secondary research | **Medium** — real named businesses, no direct contact made | Confirm each is still active; determine competitor vs. provider-recruitment status |
| Comparable off-road experiences are priced roughly US$70–560 | Price table by product/duration | Secondary research (competitor listings) — `05-Operations/Market-Competitive-Research-2026.md` §6 | Secondary research | **Medium** — real published prices, but third-party pricing, not BajaRide's own | Not applicable to BajaRide's own pricing without a pilot |
| UTV owners are willing to list on a marketplace for a take rate | None yet | Founder hypothesis | Internal document (hypothesis) | **None** | Direct provider outreach (`Provider-Resource-Map.md`) |
| TAM is approximately $16.4M/year | $16.4M/year figure exists from prior sessions | Prior working sessions (not in this repo) | Historical, no visible methodology | **None** | Re-derive with a stated methodology before use — see `BRfinal-Knowledge-Consolidation-2026.md` §II.D |
| $150,000 funding target, SAFE 3-tranche | Historical figure | `Decision-Log.md` DEC-2026-13 | Historical / Provisional | **Low** | Validate against a real financial model with real unit economics |
| 15-operation simulation (10 successful, 5 failed) | Simulated, not real bookings | `Knowledge-Recovery-Matrix.md` (carried forward) | **Simulation** | **None as traction** | Must never be cited as real customer evidence |

---

## Explicit Statement

As of this version, three rows carry **Medium** confidence — the first real, externally-sourced evidence in this matrix — but **zero rows carry "High" confidence backed by BajaRide's own primary research**. Any investor-facing use of `Investor-Base-Document.md` before this matrix has a High-confidence row on customer/traction data should be flagged as pre-validation stage, not traction-stage.

---

**Related Documents**: `Investor-Base-Document.md`, `Assumptions-Register.md`, `Baja-500-Interviews.md`, `BRfinal-Knowledge-Consolidation-2026.md`
