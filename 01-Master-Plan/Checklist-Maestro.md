# Checklist Maestro — BajaRide/BRfinal

**Document Status**: ACTIVE CONTROL DOCUMENT
**Last Updated**: September 9, 2026
**Purpose**: Single control point across every functional area of the project. One row = one concrete, trackable task. This is not a duplicate of the Master Plan — it tracks execution status, not strategy.

Fields: **ID** · **Área** · **Tarea** · **Estado** (COMPLETE / IN PROGRESS / PENDING / BLOCKED) · **Clasificación** (VALIDATED / HYPOTHESIS / TBD / HISTORICAL) · **Evidencia** · **Dependencia** · **Prioridad** (HIGH / MEDIUM / LOW) · **Próxima acción**

---

| ID | Área | Tarea | Estado | Clasificación | Evidencia | Dependencia | Prioridad | Próxima acción |
|---|---|---|---|---|---|---|---|---|
| CHK-STR-01 | Estrategia | Definir modelo de negocio vigente (asset-light marketplace) | COMPLETE | VALIDATED | Archivo-Maestro-2026.md, Decision-Log DEC-2026-01/05 | — | HIGH | Ninguna — mantener |
| CHK-STR-02 | Estrategia | Resolver ambigüedad de stack técnico heredado (Flask/Next.js vs. Flutter/Node.js) | PENDING | HYPOTHESIS | Decision-Log DEC-2026-16, Knowledge-Consolidation-2026 §II.A | Founder input | HIGH | Founder confirma stack definitivo |
| CHK-INV-01 | Investigación | Diseñar guía de entrevistas de mercado | COMPLETE | VALIDATED | 05-Operations/Baja-500-Interviews.md | — | MEDIUM | — |
| CHK-INV-02 | Investigación | Ejecutar entrevistas reales (mínimo 3–5) | PENDING | TBD | Ninguna todavía | Baja 500 u otro evento | HIGH | Agendar y ejecutar entrevistas |
| CHK-MKT-01 | Mercado | Cuantificar TAM/SAM/SOM con metodología visible | IN PROGRESS | HYPOTHESIS (insumos externos disponibles) | Assumptions-Register MARKET-M04, Market-Competitive-Research-2026.md §5 | Investigación de mercado | HIGH | Definir metodología bottom-up con los datos de turismo ya recopilados |
| CHK-MKT-02 | Mercado | Análisis de competencia en Ensenada | IN PROGRESS | EVIDENCIA EXTERNA (8 operadores identificados) | Assumptions-Register MARKET-M05, Market-Competitive-Research-2026.md §3 | — | MEDIUM | Confirmar cuáles siguen activos y contactarlos |
| CHK-OFE-01 | Oferta | Validar existencia de proveedores UTV disponibles | PENDING | HYPOTHESIS | Assumptions-Register SUPPLY-S01 | Investigación | HIGH | Entrevistas a proveedores |
| CHK-OFE-02 | Oferta | Registrar proveedores en el Mapa de Proveedores/Recursos | IN PROGRESS | IDENTIFIED (8 operadores, sin contacto) | 05-Operations/Provider-Resource-Map.md | CHK-OFE-01 | MEDIUM | Contactar y mover de IDENTIFIED a PROSPECT |
| CHK-DEM-01 | Demanda | Validar disposición a pagar precio premium | PENDING | HYPOTHESIS | Assumptions-Register MARKET-M02 | Investigación | HIGH | Entrevistas a usuarios |
| CHK-FIN-01 | Finanzas | Construir estructura del modelo financiero (10 módulos) | IN PROGRESS | VALIDATED (estructura) / TBD (cifras) | 02-Finance/BR-02.1-Financial-Model-Overview.md | — | HIGH | Completar módulos BR-02.2 a BR-02.10 |
| CHK-FIN-02 | Finanzas | Validar take rate objetivo | PENDING | TBD | Financial-Assumptions-Register REV-002 | Investigación de mercado | HIGH | Benchmarking competitivo |
| CHK-LEG-01 | Legal | Crear estructura documental legal | COMPLETE | VALIDATED (estructura) | 03-Legal/Legal-Structure-Overview.md | — | HIGH | Incorporar contratos reales cuando estén disponibles |
| CHK-LEG-02 | Legal | Confirmar marco de responsabilidad bajo ley mexicana | IN PROGRESS | HYPOTHESIS (investigación secundaria) | Risk-Register LEG-001/LEG-002, Insurance-Legal-Research-Reference-2026.md | Asesoría legal externa | HIGH | Llevar checklist de investigación a abogado especializado para validación |
| CHK-LEG-03 | Legal | Verificar si los proveedores deben registrarse en el RNT/DATATUR | PENDING | TBD — hallazgo nuevo | Insurance-Legal-Research-Reference-2026.md §6 | Asesoría legal | MEDIUM | Confirmar con abogado si aplica a proveedores individuales |
| CHK-CONF-01 | Confianza | Definir requisitos mínimos de verificación de proveedor (MVP) | COMPLETE | VALIDATED | 06-App/Provider-Flows.md §4 | — | MEDIUM | — |
| CHK-CONF-02 | Confianza | Definir sistema de reviews | PENDING | TBD (Future scope) | 06-App/Provider-Flows.md §19 | Flujo de reservas validado | LOW | Diferir hasta post-MVP |
| CHK-SEG-01 | Seguros | Contactar corredor de seguros | IN PROGRESS | HYPOTHESIS (investigación secundaria) | Risk-Register INS-001, Insurance-Legal-Research-Reference-2026.md §1–2 | — | HIGH | Cotizar con corredor real el modelo de 3 capas propuesto |
| CHK-PAG-01 | Pagos | Elegir procesador de pagos (Stripe/Braintree/otro) | PENDING | TBD | Financial-Assumptions-Register COST-001 | — | MEDIUM | Comparar tarifas y disponibilidad en México |
| CHK-OPS-01 | Operaciones | Documentar ciclo operativo completo (onboarding → liquidación) | COMPLETE | VALIDATED | 06-App/Provider-Flows.md | — | MEDIUM | — |
| CHK-OPS-02 | Operaciones | Definir si/cuándo se necesita un Hub físico | PENDING | HYPOTHESIS | Assumptions-Register OPERATIONS-O01 | Escala post-MVP | LOW | Diferir hasta validar volumen |
| CHK-PROV-01 | Proveedores | Reclutar cohorte piloto de proveedores | PENDING | TBD | Risk-Register SUP-001 | CHK-OFE-01/02 | HIGH | Iniciar reclutamiento en Baja 500 |
| CHK-EVE-01 | Eventos | Construir Catálogo Maestro de Eventos | IN PROGRESS | TBD | 05-Operations/Catalogo-Maestro-de-Eventos.md (schema only) | — | MEDIUM | Poblar con eventos reales verificados |
| CHK-HUB-01 | Hub | Definir modelo operativo del Hub (conceptual) | COMPLETE | VALIDATED (concepto) | Archivo-Maestro-2026.md §5 | — | LOW | No requerido para MVP |
| CHK-PRO-01 | Producto | Definir MVP (usuarios, flujos, ciclo de vida) | COMPLETE | VALIDATED | 06-App/MVP-Product-Definition.md | — | HIGH | — |
| CHK-PRO-02 | Producto | Corregir Provider-Flows.md | COMPLETE | VALIDATED | Commit d222796 + esta consolidación | — | HIGH | — |
| CHK-MVP-01 | MVP | Crear Admin-Flows.md | COMPLETE | VALIDATED | 06-App/Admin-Flows.md | — | HIGH | — |
| CHK-MVP-02 | MVP | Crear Data-Model.md | COMPLETE | VALIDATED (conceptual, technology-agnostic) | 06-App/Data-Model.md | — | HIGH | Formalizar como schema real una vez resuelto DEC-2026-16 |
| CHK-ARQ-01 | Arquitectura | Crear Architecture.md | BLOCKED | TBD | — | Decision-Log DEC-2026-16 | HIGH | Esperar decisión de stack técnico |
| CHK-DAT-01 | Datos | Definir entidades núcleo del MVP | COMPLETE | VALIDATED | 06-App/Data-Model.md | — | MEDIUM | — |
| CHK-API-01 | API | Crear API-Requirements.md | BLOCKED | TBD | — | Architecture.md (CHK-ARQ-01, bloqueado por DEC-2026-16) | MEDIUM | Esperar Architecture.md |
| CHK-MKG-01 | Marketing | Crear estructura documental de marketing | COMPLETE | VALIDATED (estructura) | 04-Marketing/Marketing-Structure-Overview.md | — | MEDIUM | Poblar con estrategia real |
| CHK-ADQ-01 | Adquisición | Definir estrategia de adquisición de usuarios | PENDING | TBD | 04-Marketing/Marketing-Structure-Overview.md | Investigación de mercado | MEDIUM | Diferir hasta validar CAC objetivo |
| CHK-INVR-01 | Inversión | Crear Investor Base Document (20 secciones) | COMPLETE | VALIDATED (estructura) / TBD (contenido) | 08-Investors/Investor-Base-Document.md | — | HIGH | Poblar secciones conforme se valide cada área |
| CHK-INVR-02 | Inversión | Crear Investor Evidence Matrix | COMPLETE | VALIDATED (estructura) | 08-Investors/Investor-Evidence-Matrix.md | — | HIGH | Poblar con evidencia real |
| CHK-INVR-03 | Inversión | Construir pitch deck (12–15 diapositivas) | BLOCKED | TBD | — | CHK-INVR-01 completo | HIGH | No iniciar hasta cerrar Investor Base Document |
| CHK-VAL-01 | Validación | Registrar todas las hipótesis pendientes de prueba | COMPLETE | VALIDATED (registro) | Assumptions-Register.md | — | HIGH | Mantener actualizado conforme se valide cada una |
| CHK-RIE-01 | Riesgos | Registrar y clasificar riesgos del proyecto | COMPLETE | VALIDATED | Risk-Register.md | — | HIGH | Revisar mensualmente |

---

**Mantenido por**: Equipo del proyecto / agentes de IA bajo protocolo BIC-1
**Frecuencia de revisión**: Cada vez que se complete o inicie una tarea; revisión completa mensual
