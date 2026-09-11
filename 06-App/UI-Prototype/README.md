# BajaRide — UI Prototype (Vertical Slices)

Baseline visual y funcional actual de la interfaz de BajaRide. Generado el 10 sep 2026.

## Qué es esto

Cuatro prototipos clickeables en HTML/CSS/JS puro (un archivo autocontenido cada uno, sin build step ni backend), usando el sistema visual "Imperio UI" (negro/dorado/blanco). Sirven para validar UX y el flujo operativo del Rental antes de decidir stack definitivo (ver `01-Master-Plan/Decision-Log.md`, DEC-2026-16).

## Archivos

| Archivo | Cubre |
|---|---|
| `customer-vertical-slice.html` | Home → Explore → Experience Detail → Booking → Payment → Confirmation → Active Rental → Return → Completed |
| `provider-vertical-slice.html` | Dashboard → Reservations → Preparation → Pre-Inspection → Delivery → Active Rental → Return → Final Inspection → Settlement |
| `hub-vertical-slice.html` | Dashboard → Today's Operations → Unit Operations → Delivery → Return → Inspection → Incidents |
| `connected-state-machine-prototype.html` | Los 4 roles (Customer/Provider/Hub/Admin) compartiendo un mismo estado de Rental (BR-00482) en memoria, implementando la Rental State Machine (BOOKED → CONTRACT_SIGNED → PREPARED → HUB_RECEIVED → INSPECTED_READY → ACTIVE → RETURNED → FINAL_INSPECTED → SETTLED → COMPLETED). Una acción en un rol cambia lo que ven los otros roles y queda en un audit log visible en la vista Admin. |

## Cómo ejecutarlos

Abrir cualquiera de los 4 archivos `.html` directamente en un navegador (doble clic). No requieren servidor, build ni instalación.

## Dependencias

- Única dependencia externa: Google Fonts vía CDN (`fonts.googleapis.com`) para las tipografías Fraunces, Inter y Big Shoulders. Sin conexión a internet, el navegador usa la fuente de respaldo del sistema — la funcionalidad no se ve afectada.
- No hay imágenes, iconos ni assets binarios: los elementos visuales usan CSS (gradientes, formas) y emoji Unicode como placeholders.
- No hay dependencias de build (npm, webpack, etc.) ni backend.

## Qué NO es esto

- No representa una decisión de stack (Flutter/Next.js/otro) — es intencionalmente agnóstico.
- No tiene persistencia real: `connected-state-machine-prototype.html` guarda el estado solo en memoria del navegador (se pierde al recargar).
- No está conectado a Stripe, Supabase ni ningún backend real.
- Es material desechable de validación de UX, no producción.

## Contexto relacionado en este repo

- `01-Master-Plan/Decision-Log.md` — DEC-2026-16 (stack pendiente).
- `06-App/User-Flows.md`, `06-App/Provider-Flows.md`, `06-App/Admin-Flows.md`, `06-App/Data-Model.md` — especificación funcional agnóstica de stack que estos prototipos ilustran visualmente.
