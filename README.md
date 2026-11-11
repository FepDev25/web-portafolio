# Portafolio de Ingeniería de Software — Diego Felipe Peralta Peralta

Portafolio profesional bilingüe (**ES / EN**) con identidad visual **"Precision Systems Architect"** (Modo Claro Ingenieril por defecto + Modo Oscuro Técnico), construido en **React 19 + TypeScript + Vite + Tailwind CSS**.

---

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo (http://localhost:5173)
npm run dev

# Compilar versión de producción
npm run build
```

---

## 🖼️ Cómo agregar las capturas reales de tus proyectos

Las 5 tarjetas de la **Selección Élite** muestran actualmente *wireframes técnicos interactivos* como placeholders y **detectan automáticamente** cuando colocas una captura real en la carpeta `public/projects/`:

1. Guarda tus capturas en formato `.png` (o actualiza la extensión en `src/data/portfolioData.ts`) en las siguientes rutas:
   - **Sistema de Facturación Médica (SFM)**:
     - `public/projects/sfm/slide-1.png`
     - `public/projects/sfm/slide-2.png`
     - `public/projects/sfm/slide-3.png`
   - **Ritmuvia (Gym SaaS Multi-Tenant)**:
     - `public/projects/ritmuvia/slide-1.png`
     - `public/projects/ritmuvia/slide-2.png`
     - `public/projects/ritmuvia/slide-3.png`
   - **ClassroomIQ**:
     - `public/projects/classroomiq/slide-1.png`
     - `public/projects/classroomiq/slide-2.png`
     - `public/projects/classroomiq/slide-3.png`
   - **Omnichannel CRM**:
     - `public/projects/omnichannel-crm/slide-1.png`
     - `public/projects/omnichannel-crm/slide-2.png`
     - `public/projects/omnichannel-crm/slide-3.png`
   - **RutaSales**:
     - `public/projects/rutasales/slide-1.png`
     - `public/projects/rutasales/slide-2.png`
     - `public/projects/rutasales/slide-3.png`

2. Tan pronto como el archivo exista en esa ruta, el carrusel de ventana de navegador y el modal de zoom (*Lightbox*) mostrarán tu captura real sin necesidad de tocar ningún componente React.

---

## 🏅 Cómo agregar nuevas Certificaciones o Proyectos

Toda la información bilingüe del portafolio vive centralizada en un único archivo tipado:
- [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)
  - **`ELITE_PROJECTS`**: Top 5 con insignias de evidencia, carrusel de capturas y arquitectura de 4 capas.
  - **`EXPLORER_PROJECTS`**: Proyectos del explorador filtrable por categoría (`saas`, `java-desktop`, `indie-lab`).
  - **`CAPABILITY_PILLARS`**: Los 4 pilares de habilidades conectadas con tus proyectos reales.
  - **`CERTIFICATIONS_LIST`**: Arreglo donde puedes añadir tus certificados de Frontend Masters, Udemy u otras plataformas junto con enlaces de verificación (`credentialUrl`).
