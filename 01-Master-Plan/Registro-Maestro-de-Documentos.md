# Registro Maestro de Documentos — BajaRide-Core

**Document Status**: ACTIVE — mapa documental del proyecto
**Last Updated**: September 9, 2026

Fields: **ID** · **Documento** · **Ubicación** · **Versión** · **Estado** · **Propietario** · **Función** · **Fuente** · **Fecha** · **Relación con Documento Maestro** · **Duplicación** · **Histórico** · **Acción requerida**

---

| ID | Documento | Ubicación | Estado | Función | Fuente | Relación con Doc. Maestro | Duplicación | Acción requerida |
|---|---|---|---|---|---|---|---|---|
| DOC-001 | README.md | / | VIGENTE | Punto de entrada al repo | Repo | Resumen del Doc. Maestro | Ninguna | Ninguna |
| DOC-002 | BIC-1.md | 00-Constitution/ | PARCIALMENTE VIGENTE | Constitución del ecosistema de IA | Repo (jun 2026) | Reglas que gobiernan cómo se crean los demás docs | Ninguna | Referenciar los docs maestros nuevos |
| DOC-003 | Archivo-Maestro-2026.md | 01-Master-Plan/ | VIGENTE | **Documento Maestro — fuente de verdad estratégica** | Repo | ES el Documento Maestro | Ninguna | Ninguna |
| DOC-004 | Assumptions-Register.md | 01-Master-Plan/ | VIGENTE, sin validar | Registro de hipótesis | Repo | Alimenta al Doc. Maestro | Ninguna | Validar hipótesis conforme avance la investigación |
| DOC-005 | Decision-Log.md | 01-Master-Plan/ | VIGENTE | Bitácora de decisiones estratégicas | Repo | Historial de cambios al Doc. Maestro | Ninguna | Agregar DEC-2026-16 (stack técnico) — hecho en esta consolidación |
| DOC-006 | Risk-Register.md | 01-Master-Plan/ | VIGENTE | Registro de riesgos | Repo | Alimenta al Doc. Maestro | Ninguna | Asignar dueños a riesgos críticos |
| DOC-007 | Knowledge-Recovery-Matrix.md | 01-Master-Plan/ | VIGENTE (reescrito) | Checkpoint de auditoría / inventario | Repo + esta consolidación | Verifica coherencia con el Doc. Maestro | Ninguna | Actualizar cada vez que se cree/elimine un documento (ver Sección VI del propio archivo) |
| DOC-008 | Checklist-Maestro.md | 01-Master-Plan/ | NUEVO | Control de ejecución por área | Esta consolidación | Rastrea tareas derivadas del Doc. Maestro | Ninguna | Mantener actualizado por tarea |
| DOC-009 | Registro-Maestro-de-Documentos.md | 01-Master-Plan/ | NUEVO (este archivo) | Mapa documental | Esta consolidación | Índice de todos los demás documentos | Ninguna | Actualizar con cada documento nuevo |
| DOC-010 | Bitacora-Maestra.md | 01-Master-Plan/ | NUEVO | Registro cronológico de cambios | Esta consolidación | Complementa Decision-Log con nivel operativo | Parcial con Decision-Log (Decision-Log = decisiones estratégicas; Bitácora = todo cambio, incluidos operativos) | Mantener actualizado por evento |
| DOC-011 | BRfinal-Knowledge-Consolidation-2026.md | 01-Master-Plan/ | NUEVO | Registro temporal de info recuperada sin destino claro | Esta consolidación (memoria de sesiones previas) | NO sustituye al Doc. Maestro — alimenta decisiones futuras | Ninguna | Revisar con el founder; migrar o descartar item por item |
| DOC-012 | DEMO-BR-007.md | 01-Master-Plan/ | NUEVO | Concept demo / project brief funcional | Esta consolidación (síntesis de 06-App) | Explica el Doc. Maestro en formato demo | Parcial — sintetiza contenido ya en MVP-Product-Definition/User-Flows/Provider-Flows, sin copiarlo literalmente | Actualizar si cambia el MVP |
| DOC-013 | BR-02.1-Financial-Model-Overview.md | 02-Finance/ | ESQUELETO | Estructura del modelo financiero | Repo | Sección financiera del Doc. Maestro | Ninguna | Completar módulos BR-02.2 a BR-02.10 |
| DOC-014 | Financial-Assumptions-Register.md | 02-Finance/ | VIGENTE, 100% TBD | Registro de variables financieras | Repo | Alimenta al modelo financiero | Ninguna | Validar variables con datos reales |
| DOC-015 | Legal-Structure-Overview.md | 03-Legal/ | NUEVO (esqueleto) | Estructura legal a cubrir | Esta consolidación | Sección legal del Doc. Maestro | Ninguna — pero referencia info histórica (BR-LEGAL-001) que vive fuera del repo | Incorporar contratos reales cuando estén disponibles |
| DOC-028 | Insurance-Legal-Research-Reference-2026.md | 03-Legal/ | NUEVO (investigación secundaria, sin verificar) | Checklist de referencia para seguros y documentos legales (modelo 3 capas, waiver, aviso de privacidad, RNT/DATATUR) | Investigación asistida por IA (Perplexity), aportada por el founder | Alimenta Legal-Structure-Overview.md y Risk-Register.md | Ninguna | Validar con abogado y corredor de seguros reales antes de usar cualquier texto como definitivo |
| DOC-016 | Marketing-Structure-Overview.md | 04-Marketing/ | NUEVO (esqueleto) | Estructura de marketing a cubrir | Esta consolidación | Sección de marketing del Doc. Maestro | Ninguna | Poblar con estrategia validada |
| DOC-017 | Baja-500-Interviews.md | 05-Operations/ | PLANTILLA VACÍA | Guía de entrevistas | Repo | Fuente de validación de mercado | Ninguna | Ejecutar entrevistas reales |
| DOC-018 | Catalogo-Maestro-de-Eventos.md | 05-Operations/ | NUEVO (schema, sin eventos poblados) | Catálogo de eventos objetivo | Esta consolidación | Alimenta oferta/demanda del Doc. Maestro | Ninguna | Poblar con eventos verificados (ej. Baja 500/1000) |
| DOC-029 | Market-Competitive-Research-2026.md | 05-Operations/ | NUEVO (evidencia externa secundaria) | Investigación de mercado, competencia y precios (8 operadores reales, demanda turística, benchmark de precios) | Investigación asistida por IA (Perplexity), aportada por el founder | Alimenta Assumptions-Register, Financial-Assumptions-Register, Provider-Resource-Map e Investor docs | Ninguna | Ejecutar entrevistas y piloto reales para pasar de evidencia externa a tracción propia |
| DOC-019 | Provider-Resource-Map.md | 05-Operations/ | NUEVO (schema, sin entradas) | Mapa de proveedores/recursos | Esta consolidación | Alimenta oferta del Doc. Maestro | Ninguna | Poblar tras contacto real con proveedores |
| DOC-020 | MVP-Product-Definition.md | 06-App/ | VIGENTE | Definición funcional del MVP | Repo | Especificación técnica del Doc. Maestro | Ninguna | Crear Data-Model/Architecture que dependen de este |
| DOC-021 | User-Flows.md | 06-App/ | VIGENTE | Flujo de usuario | Repo | Consistente con MVP-Product-Definition | Ninguna | Ninguna |
| DOC-022 | Provider-Flows.md | 06-App/ | CORREGIDO Y AMPLIADO | Flujo de proveedor | Commit d222796 + esta consolidación | Consistente con MVP-Product-Definition y User-Flows | Ninguna (antes era duplicado de MVP-Product-Definition — ya resuelto) | Ninguna |
| DOC-030 | Admin-Flows.md | 06-App/ | NUEVO | Flujo de administrador (revisión, aprobación, suspensión, incidentes, moderación) | Esta sesión | Especificación técnica del Doc. Maestro | Ninguna | Resolver Secciones 5 y 8 (reglas de negocio abiertas) cuando haya founder input |
| DOC-031 | Data-Model.md | 06-App/ | NUEVO | Modelo de datos conceptual, agnóstico de tecnología | Esta sesión | Especificación técnica del Doc. Maestro | Ninguna | Convertir en schema real cuando se resuelva DEC-2026-16 |
| DOC-023 | Project-State.md | 07-AI-System/ | VIGENTE | Estado del proyecto para agentes de IA | Repo | Restatement del Doc. Maestro | **Sí — casi idéntico a DOC-025** | Founder decide cuál de los dos es canónico |
| DOC-024 | Protocols.md | 07-AI-System/ | VIGENTE | Protocolos de commits/documentación para agentes de IA | Repo (jun 2026) | Rige cómo se producen los demás documentos | Ninguna | Ninguna |
| DOC-025 | Project-State.md | 08-Investors/ | VIGENTE PERO INSUFICIENTE | Estado del proyecto para inversionistas | Repo | Restatement del Doc. Maestro | **Sí — casi idéntico a DOC-023** | Ver DOC-023 |
| DOC-026 | Investor-Base-Document.md | 08-Investors/ | NUEVO (esqueleto, 20 secciones TBD) | Documento base para inversionistas | Esta consolidación | Es el documento previo al pitch deck | Ninguna | Poblar sección por sección conforme se valide cada área |
| DOC-027 | Investor-Evidence-Matrix.md | 08-Investors/ | NUEVO (esqueleto) | Trazabilidad de afirmaciones de inversión | Esta consolidación | Sustenta al Investor Base Document | Ninguna | Poblar con evidencia real |

---

**Duplicaciones activas identificadas**: DOC-023 ↔ DOC-025 (pendiente de resolución por el founder — no resuelta unilateralmente en esta consolidación por ser una decisión estructural, no de contenido).

**Información que debe migrarse**: los ítems de `BRfinal-Knowledge-Consolidation-2026.md` (Sección II) deben migrarse a sus documentos definitivos (Legal, Finance, 07-AI-System) una vez que el founder confirme cuáles son válidos.

**Mantenido por**: Equipo del proyecto / agentes de IA bajo protocolo BIC-1
