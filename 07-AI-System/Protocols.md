# Protocolos de Sincronización y Comunicación de IA

### 1. Protocolo de Inicialización de Sesión (Prompt de Entrada)
Cada vez que un agente de IA inicie una tarea compleja para BajaRide, el operador proporcionará el contexto del repositorio utilizando el siguiente formato:
* **Contexto**: [Módulo o carpeta afectada, ej. 06-App]
* **Objetivo**: [Definición clara y directa del entregable]
* **Restricciones**: [Límites técnicos, de tiempo o de diseño]

### 2. Protocolo de Registro de Cambios (Commit Logs)
Para mantener la coherencia entre múltiples modelos de IA trabajando en paralelo, cada modificación sustancial en la lógica del negocio o del código debe seguir el estándar de commits:
* `feat(IA-System)`: Adición de nuevos prompts o agentes.
* `docs(Master-Plan)`: Actualización de roadmaps o estrategias.
* `fix(App)`: Correcciones en la estructura de la aplicación o dependencias.

### 3. Intercambio de Información Inter-Agente
Cuando un modelo estratégico genere un reporte de mercado, el resultado debe estructurarse en Markdown y guardarse en `05-Operations` o `07-AI-System` antes de que el agente de desarrollo (BR-DEV) comience la implementación técnica.
