# Mapa de Proveedores / Recursos — BajaRide

**Estado del Documento**: 8 entradas reales de mercado agregadas (IDENTIFIED, sin contacto aún) + 1 nota de activo personal
**Última Actualización**: 9 de septiembre, 2026
**Propósito**: Rastrear proveedores/recursos potenciales y reales por categoría, sin confundir un nombre histórico o un activo personal con un proveedor realmente contratado.

**Clave de clasificación**: `IDENTIFIED` · `PROSPECT` · `VALIDATED` · `PARTNER` · `HISTORICAL` · `UNVERIFIED`

---

## Categorías a Rastrear

- Proveedores de UTV (propietarios/operadores individuales)
- Operadores (negocios de tours guiados)
- Guías
- Hubs (puntos físicos de coordinación — no requeridos para el MVP, ver `Decision-Log.md` DEC-2026-08)
- Talleres (mantenimiento/reparación de vehículos)
- Transporte
- Seguridad
- Experiencias complementarias (degustación de vino, hospitalidad, etc.)
- Hoteles
- Vinícolas
- Consejos de turismo / servicios turísticos auxiliares

---

## Entradas Actuales

| ID | Nombre / Descripción | Categoría | Clasificación | Notas |
|---|---|---|---|---|
| RES-001 | Ford F-150 y dos UTVs propiedad del founder | Activo personal (aún no es un recurso de la plataforma) | **UNVERIFIED** | Estos pertenecen personalmente al founder y son distintos de la "Unidad Cero" (Can-Am Maverick X3, PAUSADA según DEC-2026-02). No han sido formalmente propuestos, registrados, o contratados como activos de la plataforma BajaRide. Se registran aquí solo para que la información no se pierda — ver `BRfinal-Knowledge-Consolidation-2026.md` Sección II.F. |
| RES-002 | ATV Ensenada Tours | Operador (negocio de tours guiados) | **IDENTIFIED** | Negocio real, actualmente en operación. Sin contacto realizado. Actualmente un competidor; también podría ser un proveedor potencial si se recluta. Ver `Market-Competitive-Research-2026.md` §3. |
| RES-003 | ATV Ensenada Off Road Tours | Operador | **IDENTIFIED** | Misma advertencia que RES-002. |
| RES-004 | Ride 2 go | Operador | **IDENTIFIED** | Misma advertencia que RES-002. |
| RES-005 | Chylyca UTV Rentas | Proveedor de UTV (renta) | **IDENTIFIED** | Misma advertencia que RES-002. |
| RES-006 | PITS Adventure Hub | Operador | **IDENTIFIED** | El nombre incluye "Hub" pero es un negocio independiente, no un Hub de BajaRide (ver `Decision-Log.md` DEC-2026-08) — no confundir ambos conceptos. |
| RES-007 | Activities Ensenada | Empresa de actividades turísticas | **IDENTIFIED** | Misma advertencia que RES-002. |
| RES-008 | Rhino Off Road Tours | Operador | **IDENTIFIED** | Misma advertencia que RES-002. |
| RES-009 | Baja Trip ATV Rental | Proveedor de UTV/ATV (renta) | **IDENTIFIED** | Misma advertencia que RES-002. |

**Advertencia crítica para RES-002 a RES-009**: `IDENTIFIED` significa que se encontró un negocio real y nombrado mediante investigación externa — **no** significa contactado, interesado, verificado, o afiliado. Si cada uno de estos se trata como competencia o como objetivo de reclutamiento de proveedores está por determinarse y requiere contacto real (`CHK-PROV-01`), no inferencia a partir de esta lista.

---

## Explícitamente Vacío (sin entradas inventadas)

Cada una de las demás categorías arriba (Hubs, Talleres, Transporte, Seguridad, Hoteles, Vinícolas, Consejos de turismo) tiene actualmente **cero** entradas. No debe agregarse ningún nombre a esas categorías sin un punto de contacto real o una fuente verificable.

---

## Siguiente Acción

Mover RES-002 a RES-009 de `IDENTIFIED` a `PROSPECT` solo después de contacto real — esto es un resultado directo de `CHK-OFE-01`/`CHK-PROV-01` (ver `Checklist-Maestro.md`).

---

**Documentos Relacionados**: `Checklist-Maestro.md`, `05-Operations/BR-05.2-B.1-Catalogo-Maestro-de-Eventos.md`, `05-Operations/Market-Competitive-Research-2026.md`, `BRfinal-Knowledge-Consolidation-2026.md`
