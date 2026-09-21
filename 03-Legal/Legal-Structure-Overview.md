# Estructura Legal General — BajaRide

**Estado del Documento**: ESQUELETO ESTRUCTURAL — aún sin contenido contractual
**Última Actualización**: 9 de septiembre, 2026
**Propósito**: Definir qué debe cubrir el marco legal de BajaRide. Este es un documento de checklist/estructura, no los contratos en sí.

---

## 1. Alcance

Este documento no contiene ningún acuerdo legal ejecutado. Existe para asegurar que nada legal se olvide conforme el producto y el modelo de negocio se desarrollen, y para darle al eventual asesor legal un solo mapa de partida.

---

## 2. Áreas Legales Requeridas (solo estructura — todo TBD hasta revisión de un abogado)

| Área | Qué debe cubrir | Estado | Notas |
|---|---|---|---|
| Términos de Marketplace / Plataforma | Derechos y obligaciones de BajaRide como intermediario, no como propietario/operador de vehículos | TBD (estructura investigada) | Central para el posicionamiento asset-light (DEC-2026-05); ver `Insurance-Legal-Research-Reference-2026.md` §5 |
| Acuerdo con Proveedores | Términos entre BajaRide y proveedores: reglas de publicación, take rate, pago, asignación de responsabilidad | TBD (estructura investigada) | Debe alinearse con `06-App/Provider-Flows.md`; ver ref. de investigación §5 |
| Términos de Servicio del Usuario | Términos entre BajaRide y usuarios finales que reservan experiencias | TBD (estructura investigada) | Debe alinearse con `06-App/User-Flows.md`; ver ref. de investigación §5 |
| Política de Privacidad / Protección de Datos | Manejo de datos personales, conforme a la ley mexicana de protección de datos (LFPDPPP) | TBD (estructura investigada) | Todavía no existe un modelo de datos que referenciar (ver `06-App/Data-Model.md`, aún no creado); elementos mínimos de la LFPDPPP listados en `Insurance-Legal-Research-Reference-2026.md` §4 |
| Política de Cancelación y Reembolso | Reglas referenciadas en `Provider-Flows.md` §17 y `User-Flows.md` §12 | TBD | Actualmente esos documentos difieren explícitamente la mecánica de reembolsos |
| Política de Responsabilidad e Incidentes | Quién es responsable en caso de accidente/incidente durante una Experiencia | TBD — CRÍTICO (checklist de waiver investigado) | Ver `Risk-Register.md` LEG-001/LEG-002; elementos mínimos del waiver en ref. de investigación §3 |
| Requisitos de Seguro | Seguro mínimo que debe portar un proveedor, y/o una póliza de plataforma | TBD — CRÍTICO (estructura investigada, sin cotizaciones aún) | Ver `Risk-Register.md` INS-001; modelo de tres capas (vehículo/actividad/plataforma) propuesto en `Insurance-Legal-Research-Reference-2026.md` §1–2 — aún no ratificado como requisito del MVP |
| Registro de Turismo (RNT/DATATUR) | Si los proveedores deben registrarse como prestadores de servicios turísticos bajo la Ley General de Turismo | TBD — recién identificado | Ver `Insurance-Legal-Research-Reference-2026.md` §6; no rastreado previamente en este repositorio |
| Protección al Consumidor (LFPC) | Transparencia de precios, divulgación de cancelación, sin dark patterns en cargos recurrentes | TBD | Ver `Risk-Register.md` LEG-003; detalles en ref. de investigación §7 |
| KYC/KYB | Requisitos de verificación de identidad/negocio | PENDIENTE DE DECISIÓN DEL USUARIO | Ver `Decision-Log.md` DEC-2026-15 |
| Cumplimiento de Pagos | Obligaciones de cumplimiento ligadas al eventual procesador de pagos | TBD | Ver `Decision-Log.md` TBD-2026-02 |
| Estructura Corporativa | Entidad legal que opera BajaRide | NO VERIFICADO — no documentado en este repositorio | — |

---

## 2A. Investigación Secundaria Disponible

`03-Legal/Insurance-Legal-Research-Reference-2026.md` — investigación secundaria asistida por IA (no verificada por abogado/corredor) que cubre la arquitectura de seguros, el checklist del waiver, la estructura del aviso de privacidad, la estructura de términos de servicio, y el requisito de registro RNT/DATATUR. Úsese como checklist inicial para el asesor legal, no como fuente de texto legal listo para usar.

---

## 3. Contexto Legal Histórico / No Verificado (no tratar como vigente)

> Recuperado de sesiones de trabajo previas del founder, no presente en ningún lugar de este repositorio. Detalle completo en `01-Master-Plan/BRfinal-Knowledge-Consolidation-2026.md` Sección II.C.

- Se reportó que se redactó un contrato universal de NDA + "Obra por Encargo" (work-for-hire), referenciado internamente como **BR-LEGAL-001**, que cubre Hubs, estudiantes/fellows, y freelancers remotos, con un modelo de firma híbrido (física/INE para firmantes locales, DocuSign/Mifiel para remotos).
- Este documento **no** está incorporado en ningún lugar de `BajaRide-Core`. Si existe como un contrato real y revisado, debería agregarse aquí (o a una subcarpeta dedicada `03-Legal/contracts/`) cuando esté disponible, y esta sección debería actualizarse para referenciarlo como `VIGENTE` en lugar de `HISTÓRICO / NO VERIFICADO`.

---

## 4. Explícitamente Aún No Abordado

- Cualquier texto contractual, plantilla o cláusula real.
- Cumplimiento específico de jurisdicción más allá de un placeholder general de ley mexicana.
- Consideraciones transfronterizas (en caso de una futura expansión fuera de México).

---

## 5. Siguiente Acción

Contratar asesoría legal con experiencia en marketplaces/responsabilidad turística en México (`Decision-Log.md` DEC-2026-14), y obtener cotizaciones reales de corredores de seguros según `Insurance-Legal-Research-Reference-2026.md` §9, antes de redactar cualquiera de los documentos listados en la Sección 2.

---

**Documentos Relacionados**: `Decision-Log.md` (DEC-2026-14, DEC-2026-15), `Risk-Register.md` (LEG-001–004, INS-001), `Insurance-Legal-Research-Reference-2026.md`, `BRfinal-Knowledge-Consolidation-2026.md`
