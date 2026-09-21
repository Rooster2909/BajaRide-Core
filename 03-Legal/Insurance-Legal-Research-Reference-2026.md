# Referencia de Investigación de Seguros y Legal — 2026

**Estado del Documento**: INVESTIGACIÓN SECUNDARIA / NO VERIFICADA — condensada a partir de investigación asistida por IA (Perplexity), no proviene de un abogado mexicano ni de un corredor de seguros con licencia.
**Clasificación**: Cada afirmación de este documento es `NO VERIFICADA` hasta ser confirmada por un profesional con licencia. Nada de lo aquí contenido debe tratarse como asesoría legal ni como una decisión final de cobertura.
**Última Actualización**: 9 de septiembre, 2026
**No usar directamente como**: un contrato, un waiver, un aviso de privacidad, o un compromiso de cobertura. Usar como: un checklist inicial para llevar a un abogado y a un corredor de seguros.

---

## 0. Problema Identificado en el Material Fuente

La investigación original mezcló una referencia a la "Ley 32495" de Perú (Libro de Reclamaciones para e-commerce/marketplaces) como si fuera potencialmente relevante — **eso es ley peruana, no ley mexicana, y no aplica a BajaRide.** Se omite por completo de esta referencia. Esto se señala aquí como una advertencia sobre la investigación secundaria de IA en general: verificar la jurisdicción en cada punto antes de actuar sobre él.

La mayoría de las fuentes citadas en el material original eran sólidas (INAI, DOF, gob.mx, páginas relacionadas con LFPC/LFPDPPP) o débiles (blogs comparadores de seguros, sitios que venden plantillas). Solo las institucionales/legales se referencian abajo; las comerciales se descartaron en lugar de incorporarse a este repositorio.

---

## 1. Arquitectura de Seguros — Tres Capas de Riesgo Separadas

| Capa | Qué cubre | Quién debe contratarla |
|---|---|---|
| **1. Vehículo/activo** | Daño físico, robo, volcadura del UTV/ATV en sí | Proveedor (obligatorio) |
| **2. Actividad/operación** | Lesión, muerte, o daño a terceros derivado de la experiencia off-road en sí | Proveedor (obligatorio) |
| **3. Plataforma** | Reclamaciones contra BajaRide por verificación de proveedores, información publicada, pagos, manejo de datos | BajaRide (póliza separada, ej. responsabilidad civil general + E&O + ciber) |

**Dirección para BajaRide (no verificada, pendiente de confirmación con corredor)**: BajaRide no necesita comprar cobertura de la Capa 1 o 2 por sí misma — puede exigir comprobante de ella como condición para publicar (número de póliza, aseguradora, fechas de vigencia), consistente con el modelo asset-light (`Decision-Log.md` DEC-2026-05).

---

## 2. Modelo Propuesto de "Base Obligatoria + Upgrade Opcional"

**Obligatorio, no negociable, para publicar una Experiencia (solo dirección — aún no es un requisito ratificado del MVP):**
1. Seguro de vehículo con al menos responsabilidad civil frente a terceros (daño + lesión).
2. Seguro de responsabilidad de operador/actividad que cubra la actividad off-road específica.

**Opcional, ofrecido al Usuario al momento de reservar:**
3. Seguro de accidentes personales para el participante (médico, discapacidad, muerte) — el usuario puede aceptarlo (pagando una prima) o rechazarlo.

**Nota sobre el estado del MVP**: `06-App/Provider-Flows.md` §5A actualmente trata la documentación de seguros como **aún no un requisito bloqueante** para el MVP, consistente con que `Risk-Register.md` INS-001 sea un riesgo abierto y sin resolver. Esta investigación sugiere que hacer obligatorio el seguro de Capa 1+2 para publicar es la dirección más segura — pero esa es una decisión de producto/negocio que debe ratificar el founder (implicaría editar `Provider-Flows.md` §5A y §22, y actualizar `Decision-Log.md`), no algo que se implique automáticamente por este documento de investigación.

---

## 3. Waiver de Responsabilidad — Checklist de Elementos Mínimos

Un waiver por sí solo no elimina la responsabilidad legal en México, especialmente respecto a derechos del consumidor que no pueden renunciarse, pero es un documento estándar de mitigación de riesgo. Elementos mínimos a incluir (según revisión de abogado):

1. Identificación del proveedor/operador (y del rol de BajaRide como intermediario, si se nombra).
2. Descripción de la actividad específica y sus riesgos concretos (volcadura, colisión, terreno irregular, clima, falla mecánica, etc.).
3. Declaración de asunción de riesgo por parte del participante.
4. Liberación de responsabilidad por riesgos inherentes, en la medida que lo permita la ley mexicana.
5. Divulgación de qué seguro cubre la actividad, y si el participante compró el complemento opcional de accidentes personales.
6. Cláusula de participante menor de edad (firma del tutor) si aplica.
7. Contacto de emergencia e información médica relevante.
8. Firma electrónica vinculada a la reserva, con registro de IP/marca de tiempo/versión del documento.

**Estado**: nada de esto existe todavía como documento real en este repositorio. Es un checklist de lo que el waiver eventual debe contener, no un borrador del waiver en sí.

---

## 4. Aviso de Privacidad — Requisitos de la LFPDPPP

La LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los Particulares) de México exige un "aviso de privacidad" formal. Elementos mínimos requeridos:

1. Identidad y domicilio del responsable del tratamiento de datos (la entidad legal de BajaRide).
2. Qué datos personales se recopilan (identidad, contacto, documentos de identificación para verificación, datos de pago, historial de reservas, datos de incidentes, datos de navegación).
3. Finalidades del tratamiento — primarias (prestación del servicio) vs. secundarias (marketing, analítica), donde las secundarias requieren consentimiento separado.
4. Transferencias de datos (procesadores de pago, proveedores de hosting, servicios de verificación, autoridades cuando la ley lo requiera, aseguradoras en caso de reclamaciones).
5. Derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) y cómo ejercerlos.
6. Descripción general de las medidas de seguridad.
7. Cómo se comunicarán los cambios al aviso.
8. Referencia al INAI como autoridad competente.

**Punto de partida recomendado**: el INAI publica un generador oficial de avisos de privacidad — usarlo como base, y luego que un abogado mexicano lo adapte a los flujos de datos reales de BajaRide una vez que exista `06-App/Data-Model.md` (todavía no existe).

---

## 5. Términos y Condiciones — Secciones Mínimas

**Los términos de cara al usuario** deben cubrir: el marco de plataforma-como-intermediario (BajaRide no es el proveedor directo del servicio), elegibilidad de cuenta, reglas para publicar experiencias, política de reserva/pago/cancelación, obligaciones de seguro y waiver, código de conducta, propiedad intelectual, limitación de responsabilidad de la plataforma, referencia a privacidad, ley aplicable (ley mexicana, jurisdicción TBD pendiente de la constitución de la entidad).

**Los términos de cara al proveedor** deben cubrir por separado: requisitos de registro/verificación, permisos/licencias/seguros requeridos, estándares de seguridad, términos de comisión/liquidación, política de suspensión, asignación de responsabilidad, uso de marca, confidencialidad, y rol en el tratamiento de datos (responsable vs. encargado).

**Estado**: ninguno de los dos documentos existe todavía. Esta es la lista de secciones, no un texto redactado.

---

## 6. Registro de Turismo — RNT / DATATUR (área de cumplimiento recién identificada)

La Ley General de Turismo de México establece un **Registro Nacional de Turismo (RNT)**, con un directorio público (DATATUR). Dirección (no verificada): es probable que los **proveedores** de BajaRide (como operadores de tours/experiencias) necesiten registrarse ahí. Mitigación posible: exigir un número de RNT como condición para publicar, y verificarlo contra el directorio público de DATATUR durante el onboarding.

**Esto no se había rastreado previamente en ningún lugar de este repositorio** — es un área de cumplimiento genuinamente nueva que surge de esta investigación, no simplemente la repetición de algo ya conocido.

---

## 7. Protección al Consumidor (LFPC) — Requisitos Específicos

Más allá del "TBD" general ya registrado en `Risk-Register.md` LEG-003, las obligaciones específicas a rastrear: sin publicidad engañosa; mostrar siempre el precio total (incluyendo impuestos/comisiones); divulgar claramente la política de cancelación/reembolso; obtener consentimiento explícito para cualquier cargo recurrente; ofrecer un canal claro para quejas.

---

## 8. Estructura Legal Sugerida para el Documento Maestro

Estructura corporativa/fiscal → marco regulatorio aplicable (Ley General de Turismo, LFPC, LFPDPPP, Código de Comercio, normativa local de Baja California) → proceso de registro RNT/DATATUR → documentos legales centrales (ToS de Usuario, Términos de Proveedor, Waiver, Aviso de Privacidad, Política de Cookies si aplica) → seguros (obligatorio + opcional, según Secciones 1–2 arriba) → programa de protección de datos → cumplimiento de protección al consumidor → propiedad intelectual/marca → referencia cruzada al registro de riesgos legales → hoja de ruta legal.

Esta estructura ya está reflejada en `03-Legal/Legal-Structure-Overview.md`.

---

## 9. Próximos Pasos Concretos (sin cambios respecto a la investigación fuente, siguen vigentes)

1. Obtener cotizaciones reales de corredores de seguros mexicanos para: responsabilidad del operador (turismo de aventura), cobertura grupal de accidentes personales, y la responsabilidad civil general + E&O + ciber propia de BajaRide.
2. Definir cobertura/límites mínimos por proveedor junto con un corredor y un abogado (no deben inventarse cifras aquí).
3. Redactar los documentos legales reales (ToS, Waiver, Aviso de Privacidad) con un abogado mexicano.
4. Construir el flujo de aceptación dentro del producto (checkbox de términos, firma electrónica para el waiver, opt-in para el seguro opcional) — esto depende de `06-App/User-Flows.md` y `Provider-Flows.md` y todavía no está construido.
5. Registrar cada decisión legal/de seguros en `Decision-Log.md` conforme realmente se tome — no antes.

---

## 10. Fuentes Institucionales a Conservar (se omiten fuentes comerciales/blogs)

- INAI — Guía para el Aviso de Privacidad (inicio.inai.org.mx)
- DOF (Diario Oficial de la Federación) — normativa turística y acuerdos de SECTUR
- DATATUR / Plataforma Nacional de Datos Abiertos — directorio de prestadores turísticos
- Ley Federal de Protección al Consumidor — reformas recientes (referenciado vía resumen de GT Law)

---

**Documentos Relacionados**: `03-Legal/Legal-Structure-Overview.md`, `Risk-Register.md` (LEG-001–004, INS-001), `Checklist-Maestro.md` (CHK-LEG-01/02, CHK-SEG-01)
