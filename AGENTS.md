# AGENTS.md — Guía de Contexto y Continuidad para Agentes IA

Este documento contiene el contexto completo, las decisiones de diseño aprobadas, la arquitectura del código y el plan de trabajo pendiente para el portafolio profesional de **Diego Felipe Peralta Peralta**.

---

## 1. Resumen del Proyecto y Propósito

- **Propietario**: Diego Felipe Peralta Peralta (`Ingeniero en Ciencias de la Computación`, Cuenca, Ecuador).
- **Posicionamiento**: Desarrollador Backend Java / Spring Boot | Full Stack (FastAPI / React / TypeScript) & IA Aplicada (RAG, `pgvector`, Tool Calling) con enfoque fuerte en **Arquitectura de Software, SaaS Multi-Tenant (PostgreSQL RLS) y Pruebas Automatizadas (+1,850 tests)**.
- **Audiencia Objetivo**: Reclutadores técnicos, Tech Leads y Engineering Managers (locales e internacionales, por lo que el sitio es **100% bilingüe ES / EN**).
- **Stack del Portafolio**: `React 19` + `TypeScript` + `Vite 6` + `Tailwind CSS 4` + `lucide-react`.

---

## 2. Decisiones de Diseño UI/UX Aprobadas (No alterar sin permiso explícito)

El diseño fue definido iterativamente junto con Felipe bajo el concepto **"Precision Systems Architect"** (inspirado en Linear, Stripe y Vercel):

1. **Tema de Color**:
   - **Modo Claro Ingenieril por defecto (`data-theme="light"`)**: Fondo `#F8FAFC` con cuadrícula técnica sutil de `48px × 48px`, tarjetas `#FFFFFF`, texto principal `#0F172A`, acento **Azul Cobalto Ingenieril (`#1D4ED8`)** que armoniza con su fotografía en `public/me/yo.jpg`, y **Esmeralda (`#047857` / `#ECFDF5`)** para estados en producción.
   - **Modo Oscuro Técnico (`data-theme="dark"`)**: Conmutable desde el Navbar superior (`#090D16` fondo, `#111827` superficie, `#3B82F6` acento).
2. **Tipografía**:
   - **Títulos y Cuerpo**: `Plus Jakarta Sans` (`--font-sans`).
   - **Datos Técnicos, Chips de Stack, Métricas y Diagramas**: `JetBrains Mono` (`--font-mono`, clase `.font-mono-tech`).
3. **Navbar Superior (`src/components/Navbar.tsx`)**:
   - Separado limpiamente en 3 zonas con `whitespace-nowrap` en todos los elementos para evitar saltos de línea:
     - **Izquierda**: Monograma `FP` + Nombre + Subtítulo conciso.
     - **Centro**: Píldora de navegación (`Proyectos`, `Explorador`, `Trayectoria & IEEE`, `Stack & Certs`, `Contacto`).
     - **Derecha**: Buscador rápido `Buscar Ctrl+K`, switch `ES / EN`, switch `☀ / ☾` y botón `Descargar CV (ES/EN)` que cambia automáticamente entre `CV_Felipe_Peralta.pdf` y `CV_Felipe_Peralta_en.pdf`.
4. **Fotografía en el Hero (`src/components/Hero.tsx`)**:
   - **Opción A ("Editorial Volky")**: Marco técnico con cabecera `PERFIL DE INGENIERÍA // FELIPE PERALTA • CUENCA, EC`, foto `public/me/yo.jpg` y pie de foto destacando su comunicación técnica al sustentar el sistema de Atención Visual Activa y ASR del robot educativo *Volky*.
5. **Estructura de Proyectos en 2 Niveles**:
   - **Nivel 1 — Selección Élite (Top 5 en `src/components/EliteProjectsSection.tsx`)**:
     1. **Sistema de Facturación Médica (SFM)** (`Java 21`, `Spring Boot 4`, `PostgreSQL 15 + pgvector`, `Redis`, `React 19`, `~1,110 tests`, 4 asistentes IA).
     2. **Ritmuvia (Gym SaaS Multi-Tenant)** (`FastAPI`, `PostgreSQL 16 RLS`, `React + TS`, `Google Cloud Run`, `665 tests`).
     3. **ClassroomIQ** (`Java 21`, `Spring Boot 3.5`, `WebFlux SSE`, `PostgreSQL + pgvector`, `React 19`, `Testcontainers & Playwright`).
     4. **Omnichannel CRM** (`FastAPI` doble entrada ASGI, `PostgreSQL 16 + pgvector`, `Redis Streams & Pub/Sub` con Worker IA desacoplado, `Next.js 14`).
     5. **RutaSales** (`Java 25 LTS`, `Spring Boot 4.1`, `PostgreSQL 17 + Flyway`, `React 19 + TanStack Query 5`, `81 pruebas de integración`).
     - *Nota importante*: **EventCart** NO va en el Top 5 por decisión de Felipe (está en fase de laboratorio en el Explorador porque aún lo está terminando).
     - Cada tarjeta del Top 5 tiene un **Layout Dividido** en la pestaña **`🖼️ Impacto & Capturas`** (info a la izquierda + marco de ventana de navegador con carrusel de 3 capturas y modal *Lightbox* a la derecha) y una segunda pestaña **`⚡ Vista de Arquitectura`** a ancho completo (flujo de 4 capas + 2 decisiones técnicas clave).
   - **Nivel 2 — Explorador Técnico Filtrable (`src/components/ProjectExplorerSection.tsx`)**:
     - Contiene 6 proyectos filtrables por categoría (`Todos`, `SaaS & Web Apps`, `Java & Desktop`, `Indie & Laboratorio`): **NeonVibe**, **SF-JFX**, **Panadería SaaS**, **My-Book**, **EventCart (Kafka Lab)** y **Diez Órbitas (Godot 4)**.

---

## 3. Mapa de Archivos Clave

```text
/home/felipep/Software/agy/web-portafolio
├── AGENTS.md                                  # Este documento de contexto para agentes
├── README.md                                  # Instrucciones rápidas de uso y rutas de capturas
├── index.html                                 # Carga de fuentes (Plus Jakarta Sans + JetBrains Mono) y título SEO
├── package.json                               # Scripts: dev, build, preview
├── me/                                        # Carpeta original de insumos de Felipe (NO BORRAR)
│   ├── Proyectos.docx                         # Documento fuente con resumen de proyectos
│   ├── yo.jpg                                 # Fotografía original de Felipe
│   └── cv/                                    # CVs originales en Español e Inglés
├── public/
│   ├── me/yo.jpg                              # Fotografía servida públicamente por Vite
│   ├── cv/CV_Felipe_Peralta.pdf               # CV en Español servido en producción
│   ├── cv/CV_Felipe_Peralta_en.pdf            # CV en Inglés servido en producción
│   └── projects/                              # Carpetas para colocar las capturas reales (.png / .webp)
│       ├── sfm/                               # slide-1.png, slide-2.png, slide-3.png
│       ├── ritmuvia/                          # slide-1.png, slide-2.png, slide-3.png
│       ├── classroomiq/                       # slide-1.png, slide-2.png, slide-3.png
│       ├── omnichannel-crm/                   # slide-1.png, slide-2.png, slide-3.png
│       └── rutasales/                         # slide-1.png, slide-2.png, slide-3.png
└── src/
    ├── index.css                              # Variables CSS de temas Claro/Oscuro y estilos base
    ├── App.tsx                                # Estado global (idioma, tema, modal Ctrl+K, navegación a arquitectura)
    ├── data/
    │   └── portfolioData.ts                   # FUENTE ÚNICA DE VERDAD (Bilingüe ES/EN: Textos, Proyectos, Matriz, Certs)
    └── components/
        ├── Navbar.tsx                         # Header fijo de 3 zonas sin saltos de línea
        ├── Hero.tsx                           # Hero + Foto Editorial Volky + Strip de 4 métricas
        ├── EliteProjectsSection.tsx           # Top 5 con Split Layout, Carrusel + Lightbox y Vista de Arquitectura
        ├── ProjectExplorerSection.tsx         # Grid filtrable de 6 proyectos adicionales
        ├── TrajectoryAndIeeeSection.tsx       # Paper IEEE GPECOM 2026 (DOI) + Premio PENSER + ELECAUSTRO + UPS
        ├── EngineeringMatrixSection.tsx       # 4 Pilares de Capacidades + Sección de Certificaciones e Idiomas
        ├── CommandPaletteModal.tsx            # Paleta de comandos interactiva (Ctrl+K / ⌘K)
        └── Footer.tsx                         # Cierre de conversión para reclutadores con copia de email y descarga dual de CV
```

---

## 4. Objetivos para la Próxima Sesión (Hoja de Ruta)

Cuando Felipe retome la sesión mañana, estas son las tareas prioritarias:

1. **Integración de Capturas Reales (`public/projects/<slug>/`)**:
   - Felipe traerá las capturas reales de sus sistemas.
   - `EliteProjectsSection.tsx` ya cuenta con lógica de detección automática (`onLoad` / `onError` sobre `currentSlide.imageSrc`): en cuanto se guarden las imágenes en `public/projects/<slug>/slide-1.png` (o se actualice el nombre/extensión en `src/data/portfolioData.ts`), el carrusel y el modal *Lightbox* mostrarán las imágenes reales en lugar del wireframe placeholder.
   - Revisar que el encuadre (`object-cover` / `object-contain`) de cada captura real se vea nítido tanto en la tarjeta como en el modal de zoom.
2. **Revisión y Ajuste Fino de Textos y Enlaces (`src/data/portfolioData.ts`)**:
   - Ajustar descripciones, métricas, URLs de repositorios GitHub o demos en vivo según las indicaciones de Felipe (manteniendo siempre sincronizados los textos en `es` y `en`).
   - Completar la lista de **Certificaciones** en `CERTIFICATIONS_LIST` dentro de `src/data/portfolioData.ts` cuando Felipe copie o indique sus certificados definitivos.
3. **Preparación Final y Despliegue a Producción**:
   - Verificar metadatos SEO / OpenGraph en `index.html` y favicon personalizado con el monograma `FP`.
   - Ejecutar `npm run build` para validar cero errores de TypeScript (`tsc -b`) y empaquetado de Vite.
   - Asistir a Felipe paso a paso con el despliegue en **Vercel** o **Cloudflare Pages** (incluyendo configuración de dominio personalizado si lo desea, como `fepdev.app`).
