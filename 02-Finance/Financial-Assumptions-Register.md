# Financial Assumptions Register

**Document Status**: ACTIVE REGISTER  
**Last Updated**: September 2026  
**Classification**: FINANCIAL / PLANNING

---

## I. Purpose

This register documents all financial assumptions required to build the BajaRide Master Financial Model. Each assumption is classified by validation status and includes the method for future validation.

---

## II. Revenue Assumptions

### REV-001: Booking Price (Experience Average)

| Field | Value |
|-------|-------|
| **Assumption** | Average user pays $XXX per experience booking |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | USD |
| **Source** | Market research (Baja 500 interviews - in progress) |
| **Method of Validation** | Provider interviews + competitive benchmarking + customer surveys |
| **Timeline** | Q4 2026 |
| **Impact if Wrong** | CRITICAL — directly affects all revenue projections |
| **Notes** | Historical data points: TBD; need range (minimum/likely/maximum) |

---

### REV-002: Take Rate Percentage

| Field | Value |
|-------|-------|
| **Assumption** | BajaRide retains X% of booking price as platform commission |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Percentage (%) |
| **Source** | Competitive analysis (in progress) |
| **Method of Validation** | Benchmark against Airbnb (3-16%), Uber (15-25%), comparable marketplaces |
| **Timeline** | Q4 2026 |
| **Impact if Wrong** | CRITICAL — affects provider attractiveness and platform profitability |
| **Notes** | Must balance provider competitiveness with platform sustainability |

---

### REV-003: Monthly Bookings (MVP Launch)

| Field | Value |
|-------|-------|
| **Assumption** | BajaRide processes XXX bookings in first full month of MVP |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Bookings/month |
| **Source** | Market research + CAC model |
| **Method of Validation** | Beta testing + Baja 500 data + launch strategy |
| **Timeline** | Q4 2026 / Q1 2027 |
| **Impact if Wrong** | CRITICAL — foundation for all volume projections |
| **Notes** | Conservative scenario required; not aggressive growth case |

---

### REV-004: Monthly Bookings Growth Rate

| Field | Value |
|-------|-------|
| **Assumption** | Bookings grow X% month-over-month (MVP phase: 0-12 months) |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Percentage (% MoM) |
| **Source** | Comparable marketplace growth + market research |
| **Method of Validation** | Post-launch analytics; compare to similar platforms |
| **Timeline** | Measured monthly starting Q2 2027 |
| **Impact if Wrong** | HIGH — affects runway, fundraising needs |
| **Notes** | Distinguish MVP plateau vs. expansion phase |

---

### REV-005: Provider Payout Structure

| Field | Value |
|-------|-------|
| **Assumption** | Provider receives (100% - Take Rate %) of booking price |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Percentage |
| **Source** | Market competitiveness + provider interviews |
| **Method of Validation** | Provider recruitment feedback; competitor analysis |
| **Timeline** | Q4 2026 |
| **Impact if Wrong** | CRITICAL — affects provider supply and churn |
| **Notes** | Simple model; no additional fees/incentives in MVP |

---

### REV-006: Secondary Revenue Streams

| Field | Value |
|-------|-------|
| **Assumption** | Secondary revenue = $XXX/month from insurance, premium features, or other sources |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | USD/month |
| **Source** | Business model exploration |
| **Method of Validation** | Market research; competitor analysis; customer research |
| **Timeline** | Q4 2026 |
| **Impact if Wrong** | LOW (MVP phase: not critical; post-MVP planning) |
| **Notes** | OUT OF SCOPE for MVP; document for future planning |

---

## III. Cost Assumptions

### COST-001: Payment Processing Fee

| Field | Value |
|-------|-------|
| **Assumption** | Payment processor (Stripe/Braintree/TBD) charges X% + $Y per transaction |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | Stripe typical: 2.9% + $0.30 (US standard) |
| **Unit** | Percentage + USD |
| **Source** | Stripe/Braintree public pricing (Stripe mentioned historically) |
| **Method of Validation** | Final negotiation with processor; contract review |
| **Timeline** | Q4 2026 |
| **Impact if Wrong** | MEDIUM — affects gross margin |
| **Notes** | Stripe = CONSIDERED, not confirmed; may differ for Mexico/international |

---

### COST-002: Insurance Premium

| Field | Value |
|-------|-------|
| **Assumption** | Liability insurance costs $XXX/month for platform + provider coverage |
| **Status** | TBD / PENDING EXTERNAL REVIEW |
| **Current Value** | TBD |
| **Unit** | USD/month |
| **Source** | Insurance broker (engagement pending) |
| **Method of Validation** | Broker quote + coverage negotiation |
| **Timeline** | Q4 2026 (before MVP launch) |
| **Impact if Wrong** | HIGH — affects unit economics; non-negotiable for operations |
| **Notes** | AXA mentioned historically; not confirmed; need to engage broker |

---

### COST-003: Customer Acquisition Cost (CAC) — Users

| Field | Value |
|-------|-------|
| **Assumption** | Cost to acquire one active user = $XXX |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | USD/user |
| **Source** | Launch strategy; paid + organic channels |
| **Method of Validation** | Post-launch tracking; channel attribution |
| **Timeline** | Measured starting Q2 2027 |
| **Impact if Wrong** | CRITICAL — if CAC > LTV, model fails |
| **Notes** | Conservative estimate required; include both paid and organic |

---

### COST-004: Provider Acquisition Cost (PAC)

| Field | Value |
|-------|-------|
| **Assumption** | Cost to recruit/onboard one active provider = $XXX |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | USD/provider |
| **Source** | Provider recruitment strategy |
| **Method of Validation** | Recruitment tracking; success rates |
| **Timeline** | Measured during provider recruitment (Q4 2026 - Q1 2027) |
| **Impact if Wrong** | HIGH — affects supply-side unit economics |
| **Notes** | May include incentives, training, onboarding support |

---

### COST-005: Technology Infrastructure (AWS/Database/APIs)

| Field | Value |
|-------|-------|
| **Assumption** | Monthly cloud infrastructure costs = $XXX |
| **Status** | TBD / PENDING ESTIMATION |
| **Current Value** | TBD |
| **Unit** | USD/month |
| **Source** | AWS pricing calculator + architecture design |
| **Method of Validation** | Architecture review; scaling model |
| **Timeline** | Q4 2026 (architecture design phase) |
| **Impact if Wrong** | MEDIUM — affects operational costs; variable with scale |
| **Notes** | Scales with transaction volume; need growth model |

---

### COST-006: Customer Support Staff

| Field | Value |
|-------|-------|
| **Assumption** | Customer support costs $XXX/month (salary, tools, training) |
| **Status** | TBD / PENDING PLANNING |
| **Current Value** | TBD |
| **Unit** | USD/month |
| **Source** | Headcount plan + market salary data |
| **Method of Validation** | Hiring; actual expenses |
| **Timeline** | Q1 2027 (pre-launch) |
| **Impact if Wrong** | MEDIUM — affects operational costs; customer satisfaction |
| **Notes** | MVP likely: 1 FT support person + founder; grows with volume |

---

### COST-007: Operations & Admin Overhead

| Field | Value |
|-------|-------|
| **Assumption** | Monthly ops/admin costs (office, tools, legal, accounting, etc.) = $XXX |
| **Status** | TBD / PENDING PLANNING |
| **Current Value** | TBD |
| **Unit** | USD/month |
| **Source** | Operational plan; market benchmarks |
| **Method of Validation** | Budget vs. actual; quarterly review |
| **Timeline** | Q1 2027 |
| **Impact if Wrong** | MEDIUM — affects runway; must be controlled |
| **Notes** | Conservative estimate required |

---

### COST-008: Hub Operational Costs (Future)

| Field | Value |
|-------|-------|
| **Assumption** | If Hub established, monthly cost = $XXX per hub |
| **Status** | TBD / PENDING DESIGN (OUT OF SCOPE MVP) |
| **Current Value** | TBD |
| **Unit** | USD/month/hub |
| **Source** | Hub model design (future) |
| **Method of Validation** | Operational planning post-MVP |
| **Timeline** | Post-MVP (not relevant for initial funding) |
| **Impact if Wrong** | LOW for MVP; MEDIUM for scaling |
| **Notes** | OUT OF SCOPE for Phase 2; document for future |

---

## IV. User/Provider Metrics Assumptions

### MET-001: User Lifetime Value (LTV)

| Field | Value |
|-------|-------|
| **Assumption** | Average user generates $XXX in lifetime revenue for platform |
| **Status** | TBD / PENDING CALCULATION |
| **Current Value** | TBD |
| **Unit** | USD |
| **Source** | Booking price × Frequency × Lifetime |
| **Method of Validation** | Cohort analysis post-launch |
| **Timeline** | Q2 2027+ |
| **Impact if Wrong** | CRITICAL — if LTV < CAC, unsustainable |
| **Notes** | Formula: LTV = (Booking Price) × (Avg Bookings/user) × (Lifetime Months) × (Take Rate) |

---

### MET-002: User Repeat Rate

| Field | Value |
|-------|-------|
| **Assumption** | X% of users who book once will book again within 12 months |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Percentage (%) |
| **Source** | Customer research + comparable platforms |
| **Method of Validation** | Cohort analysis post-launch |
| **Timeline** | Q3 2027+ |
| **Impact if Wrong** | HIGH — affects LTV calculation |
| **Notes** | Key metric for marketplace health |

---

### MET-003: User Churn Rate

| Field | Value |
|-------|-------|
| **Assumption** | X% of active users become inactive each month |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Percentage (% monthly) |
| **Source** | Comparable marketplace data |
| **Method of Validation** | Cohort analysis; retention curves |
| **Timeline** | Measured monthly starting Q2 2027 |
| **Impact if Wrong** | HIGH — affects LTV and growth projections |
| **Notes** | Typical marketplaces: 5-10% monthly churn |

---

### MET-004: Provider Churn Rate

| Field | Value |
|-------|-------|
| **Assumption** | X% of active providers leave platform each month |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Percentage (% monthly) |
| **Source** | Comparable marketplace data |
| **Method of Validation** | Provider tracking; exit surveys |
| **Timeline** | Measured monthly starting Q2 2027 |
| **Impact if Wrong** | CRITICAL — affects supply stability |
| **Notes** | Must be <5% monthly for sustainable marketplace |

---

### MET-005: Average Bookings per User (Monthly)

| Field | Value |
|-------|-------|
| **Assumption** | Average active user makes XXX bookings per month |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Bookings/month |
| **Source** | Customer research; comparable platforms |
| **Method of Validation** | Post-launch analytics |
| **Timeline** | Q2 2027+ |
| **Impact if Wrong** | HIGH — affects volume and revenue projections |
| **Notes** | Likely seasonal; separate peak vs. off-season |

---

### MET-006: Average Bookings per Provider (Monthly)

| Field | Value |
|-------|-------|
| **Assumption** | Average active provider completes XXX bookings per month |
| **Status** | TBD / PENDING VALIDATION |
| **Current Value** | TBD |
| **Unit** | Bookings/month |
| **Source** | Provider interviews; capacity analysis |
| **Method of Validation** | Provider utilization tracking |
| **Timeline** | Q2 2027+ |
| **Impact if Wrong** | HIGH — affects supply capacity and provider earnings |
| **Notes** | Depends on provider availability and capacity |

---

## V. Unit Economics Assumptions

### UE-001: Gross Margin per Booking

| Field | Value |
|-------|-------|
| **Assumption** | (Booking Price × Take Rate) - (Payment Fee + Insurance Allocation) = Gross Margin |
| **Status** | TBD / PENDING CALCULATION |
| **Current Value** | TBD |
| **Unit** | USD |
| **Source** | Derived from Revenue + Cost assumptions |
| **Method of Validation** | Post-launch P&L |
| **Timeline** | Calculated Q4 2026; measured Q2 2027+ |
| **Impact if Wrong** | CRITICAL — foundation of profitability model |
| **Notes** | Must be positive for sustainability |

---

### UE-002: Contribution Margin (Gross Margin - CAC Allocation)

| Field | Value |
|-------|-------|
| **Assumption** | Gross Margin - (Total Acquisition Cost / Monthly Users) = Contribution Margin |
| **Status** | TBD / PENDING CALCULATION |
| **Current Value** | TBD |
| **Unit** | USD |
| **Source** | Derived from above |
| **Method of Validation** | Post-launch P&L |
| **Timeline** | Calculated Q4 2026 |
| **Impact if Wrong** | CRITICAL — if negative, acquisition strategy fails |
| **Notes** | Must be positive for unit economics viability |

---

### UE-003: Payback Period (CAC Payback)

| Field | Value |
|-------|-------|
| **Assumption** | CAC is recovered in XXX months from user |
| **Status** | TBD / PENDING CALCULATION |
| **Current Value** | TBD |
| **Unit** | Months |
| **Source** | CAC / (Monthly LTV) |
| **Method of Validation** | Post-launch cohort analysis |
| **Timeline** | Calculated Q4 2026 |
| **Impact if Wrong** | HIGH — affects cash burn and runway |
| **Notes** | Target: <12 months for sustainable model |

---

## VI. Capital & Runway Assumptions

### CAP-001: MVP Development Cost

| Field | Value |
|-------|-------|
| **Assumption** | MVP development costs $XXX (labor, tools, infrastructure setup) |
| **Status** | TBD / PENDING ESTIMATION |
| **Current Value** | TBD |
| **Unit** | USD |
| **Source** | Technical specification + resource planning |
| **Method of Validation** | Actual development expenses |
| **Timeline** | Q4 2026 - Q1 2027 |
| **Impact if Wrong** | MEDIUM — affects total capital requirement |
| **Notes** | Do not include founder sweat equity |

---

### CAP-002: Pre-Launch Operating Costs

| Field | Value |
|-------|-------|
| **Assumption** | Pre-launch costs (team, legal, marketing prep, etc.) = $XXX |
| **Status** | TBD / PENDING PLANNING |
| **Current Value** | TBD |
| **Unit** | USD |
| **Source** | Operational plan |
| **Method of Validation** | Actual expenses |
| **Timeline** | Q4 2026 - Q1 2027 |
| **Impact if Wrong** | MEDIUM — affects total raise requirement |
| **Notes** | Must be conservative |

---

### CAP-003: MVP Launch Cost

| Field | Value |
|-------|-------|
| **Assumption** | Cost to launch MVP (marketing, provider recruitment, operations setup) = $XXX |
| **Status** | TBD / PENDING PLANNING |
| **Current Value** | TBD |
| **Unit** | USD |
| **Source** | Launch strategy |
| **Method of Validation** | Actual expenses |
| **Timeline** | Q1 2027 |
| **Impact if Wrong** | MEDIUM — affects launch quality and initial traction |
| **Notes** | Include customer acquisition for initial cohort |

---

### CAP-004: Monthly Burn Rate (Post-Launch)

| Field | Value |
|-------|-------|
| **Assumption** | Monthly cash burn (before profitability) = $XXX |
| **Status** | TBD / PENDING CALCULATION |
| **Current Value** | TBD |
| **Unit** | USD/month |
| **Source** | Operating plan + CAC plan |
| **Method of Validation** | Actual P&L monthly |
| **Timeline** | Calculated Q4 2026; measured Q2 2027+ |
| **Impact if Wrong** | CRITICAL — directly affects runway |
| **Notes** | Variable based on growth rate; model scenarios |

---

### CAP-005: Break-Even Monthly Bookings

| Field | Value |
|-------|-------|
| **Assumption** | Platform breaks even at XXX bookings/month |
| **Status** | TBD / PENDING CALCULATION |
| **Current Value** | TBD |
| **Unit** | Bookings/month |
| **Source** | Fixed Costs / Contribution Margin per Booking |
| **Method of Validation** | Post-launch P&L |
| **Timeline** | Calculated Q4 2026 |
| **Impact if Wrong** | CRITICAL — defines path to profitability |
| **Notes** | Highly sensitive to unit economics |

---

### CAP-006: Runway (Months to Break-Even)

| Field | Value |
|-------|-------|
| **Assumption** | With current plan, platform reaches break-even in XXX months |
| **Status** | TBD / PENDING CALCULATION |
| **Current Value** | TBD |
| **Unit** | Months |
| **Source** | Cash runway / Monthly burn |
| **Method of Validation** | Monthly P&L tracking |
| **Timeline** | Calculated Q4 2026; updated monthly |
| **Impact if Wrong** | CRITICAL — defines fundraising needs |
| **Notes** | Model scenarios: conservative, base, aggressive |

---

### CAP-007: Total Funding Requirement

| Field | Value |
|-------|-------|
| **Assumption** | BajaRide needs to raise $XXX to reach break-even or Series A |
| **Status** | TBD / PENDING FINANCIAL MODEL |
| **Current Value** | $150,000 USD (HISTORICAL - PROVISIONAL) |
| **Unit** | USD |
| **Source** | MVP + Pre-launch + Monthly burn × Months to profitability |
| **Method of Validation** | Financial model completion |
| **Timeline** | Q4 2026 |
| **Impact if Wrong** | CRITICAL — defines investment strategy |
| **Notes** | Historical target of $150K is PROVISIONAL pending model validation |

---

## VII. Validation Timeline

### Q4 2026
- [ ] Market research (booking price, demand size)
- [ ] Competitive benchmarking (take rate, CAC, churn)
- [ ] Insurance broker quotes
- [ ] Payment processor pricing (final)
- [ ] Technical cost estimation (infrastructure)
- [ ] Financial model v1 completion
- [ ] Funding requirement finalization

### Q1 2027 (Pre-Launch)
- [ ] Provider recruitment data (PAC, commitment rate)
- [ ] Launch strategy finalization
- [ ] CAC channels and budget
- [ ] Operational cost actuals (team hired)

### Q2 2027+ (Post-Launch)
- [ ] Actual booking volumes
- [ ] User acquisition costs (by channel)
- [ ] User retention curves
- [ ] Provider utilization rates
- [ ] Churn rates (users and providers)
- [ ] Unit economics actual vs. model

---

**Register Maintained By**: Finance Team  
**Review Frequency**: Monthly  
**Last Updated**: September 2026  
**Next Review**: When assumptions change or quarterly
