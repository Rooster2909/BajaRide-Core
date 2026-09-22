# Frontend de Referencia (React + Vite + TypeScript) — CANDIDATO, NO FUENTE DE VERDAD

**Estado**: REFERENCIA / CANDIDATO — **no confirmado como el stack del proyecto**
**Origen**: Handoff técnico externo, generado por otra herramienta de IA ("Gia" / Gemini) a partir de un prototipo de interfaz construido fuera de este repositorio. Recibido el 2026-09-21.
**Completitud**: Parcial — "Bloque 1 de 2". Contiene solo los archivos base (config + tipos + datos demo + 3 componentes). **Faltan las vistas** (`App.tsx`, `Navbar.tsx`, `WelcomeView.tsx`, `AuthView.tsx`, `ExploreView.tsx`, `BookingFlow.tsx`, `ClientExperiencesView.tsx`, `SocioDashboardView.tsx`, `ProfileView.tsx`, `Toast.tsx`, `ErrorBoundary.tsx`, `main.tsx`) — el handoff original las ofrecía en un "Bloque 2" que nunca se entregó a este repositorio. No se inventó ni reconstruyó ese código faltante.

## Por qué está aquí y no integrado directamente

`Decision-Log.md` DEC-2026-16 (stack técnico) sigue **PENDIENTE DE CONFIRMACIÓN DEL FOUNDER**. Este handoff usa React + Vite + TypeScript — un tercer candidato, distinto de los dos ya registrados (Flutter/Node.js, y el track histórico Flask/Next.js). No se trata este material como si ya hubiera resuelto esa decisión.

## Contradicciones detectadas frente a la documentación ya vigente (sin corregir aquí — el código se conserva tal como se recibió)

| # | En este código | En la documentación vigente del repo | Ubicación |
|---|---|---|---|
| 1 | Máquina de estados de reserva: `RESERVADA → CONFIRMADA → PREPARADA → ACTIVA → DEVUELTA → COMPLETADA` (6 estados) | `REQUESTED → CONFIRMED → COMPLETED` (+ `CANCELLED`, `NO_SHOW`) | `06-App/Data-Model.md` §6, `06-App/User-Flows.md` §10/§19 (ya verificados consistentes entre sí) |
| 2 | Terminología: "Socio", "Cliente", "MASTER_ADMIN" | "Proveedor", "Usuario", "Admin" | Todo el repositorio (`MVP-Product-Definition.md`, `Provider-Flows.md`, `User-Flows.md`, `Admin-Flows.md`) |
| 3 | El handoff afirma: *"el componente arquitectónico previsto para esto es `ProfileProvider`"* | Ese término **no existe en ningún documento de este repositorio** (verificado por búsqueda global) | — |
| 4 | Take rate fijo hardcodeado: 12% (`totalPlatformFees = totalGMV * 0.12`) | Take rate marcado explícitamente como **TBD, no validado** | `02-Finance/Financial-Assumptions-Register.md` REV-002 |
| 5 | Roles del sistema: `CLIENTE`, `SOCIO`, `MASTER_ADMIN` (sin rol Hub) | Consistente — Hub sigue siendo futuro/opcional, no aparece como rol obligatorio | — (sin contradicción, se anota como punto compatible) |

## Lo que sí es compatible con la arquitectura vigente

- El principio `roles: UserRole[]` + `activeMode: UserRole` (una cuenta, múltiples roles, cambio de vista sin perder sesión) coincide con la corrección ya aplicada en `06-App/Data-Model.md` (cuenta con uno o más roles).
- Todo lo simulado (dispersión SPEI, código QR, mapa) está claramente etiquetado como DEMO en la UI — consistente con el criterio de este repositorio de no presentar simulaciones como reales.
- El inventario de pantallas (ver `src/data.ts` y los componentes incluidos) es útil como referencia de UX para cuando se implemente la app real, independientemente del stack que finalmente se confirme.

## Contenido de esta carpeta

Solo los 9 archivos reales que fueron entregados (Bloque 1):

```
package.json
vite.config.ts
tsconfig.json
src/index.css
src/types.ts
src/data.ts
src/components/FormInput.tsx
src/components/InteractiveMap.tsx
src/components/MasterAdminModal.tsx
```

## Texto de interfaz que aparenta verificación/sincronización real (no la hay)

`MasterAdminModal.tsx` contiene texto de interfaz con apariencia de "log de sistema" que **no está respaldado por ningún backend real** — todo el código de esta carpeta es cliente-side puro, sin servidor, sin base de datos, sin autenticación real (ver tabla de estado real más abajo). Específicamente:

- La insignia **"Verificado SCORE"** se muestra únicamente porque el campo `socioVerified: true` está hardcodeado en `src/data.ts` — no existe ningún proceso de verificación real contra SCORE International ni contra ninguna otra entidad.
- Las líneas `[SECURITY] Validación estricta: activeMode ≠ concesión de roles. Verificado.`, `[CORE] Single user identity provider activo. Sin duplicidad de registros.` y `[DISPATCH] Pipeline en tiempo real sincronizado para los 6 estados de operación.` son **texto decorativo estático**, no un log real ni evidencia de sincronización, identidad unificada o pipeline en tiempo real — no hay backend, base de datos ni red que pueda producir ese comportamiento en este código.

Ninguna de estas afirmaciones debe citarse como evidencia de funcionalidad implementada.

## Datos de ejemplo en `src/data.ts` — origen no confirmado

`src/data.ts` contiene datos con forma de datos personales/bancarios (nombre, correo, teléfono, contacto de emergencia, número de licencia, RFC, CLABE interbancaria) para un usuario y proveedor de ejemplo. **No se puede confirmar que sean sintéticos solo porque aparecen en un prototipo de demo.** Por precaución:
- No se han reproducido en ningún otro documento de este repositorio ni en este reporte.
- No deben usarse en comunicaciones, reportes o materiales de marketing reales.
- El archivo original se preservó sin modificar (fuera del alcance autorizado para esta tarea); si en el futuro se confirma que estos valores no son sintéticos, deben reemplazarse antes de cualquier uso público del código.

## Siguiente paso

No se toma ninguna acción adicional sobre este material hasta que:
1. El founder confirme si React + Vite + TypeScript es el stack definitivo (resolviendo `DEC-2026-16`), y
2. Si se confirma, se decida si se renombra la terminología (Socio→Proveedor, Cliente→Usuario) y se reconcilia la máquina de estados con `Data-Model.md`, o si en cambio `Data-Model.md` se actualiza para adoptar la de este código — esa es una decisión de producto, no algo que deba resolverse por inferencia.

---

**Documentos relacionados**: `01-Master-Plan/Decision-Log.md` (DEC-2026-16), `06-App/Data-Model.md`, `02-Finance/Financial-Assumptions-Register.md` (REV-002)
