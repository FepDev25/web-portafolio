export type Language = 'es' | 'en';

export interface ProjectScreenshot {
  id: string;
  urlBar: string;
  tag: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
  /**
   * Ruta opcional dentro de /public (ej: "/projects/sfm/captura-1.png").
   * Si está vacía o aún no subes el archivo, se renderiza automáticamente
   * el wireframe interactivo de alta precisión como placeholder.
   */
  imageSrc?: string;
  kpis: Array<{ label: Record<Language, string>; value: string }>;
}

export interface ArchLayer {
  step: string;
  layer: Record<Language, string>;
  title: string;
  description: Record<Language, string>;
  techs: string[];
}

export interface ArchDecision {
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface EliteProject {
  id: string;
  slug: string;
  statusType: 'live' | 'active';
  statusLabel: Record<Language, string>;
  domainLabel: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  summary: Record<Language, string>;
  demoUrl?: string;
  repoUrl?: string;
  evidenceBadges: Array<Record<Language, string>>;
  highlights: Array<Record<Language, string>>;
  stack: string[];
  screenshots: ProjectScreenshot[];
  architecture: {
    layers: ArchLayer[];
    decisions: ArchDecision[];
  };
}

export interface ExplorerProject {
  id: string;
  category: 'saas' | 'java-desktop' | 'indie-lab';
  categoryLabel: Record<Language, string>;
  statusBadge: Record<Language, string>;
  title: string;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  highlightMetric: Record<Language, string>;
}

export interface CapabilityPillar {
  id: string;
  code: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  skills: Array<{
    name: string;
    detail: Record<Language, string>;
    provenIn: string[];
  }>;
}

export interface CertificationItem {
  id: string;
  provider: string;
  title: Record<Language, string>;
  focusAreas: string[];
  status: Record<Language, string>;
  credentialUrl?: string;
  dateLabel: string;
}

export const PROFILE_INFO = {
  name: 'Diego Felipe Peralta Peralta',
  shortName: 'Diego Felipe Peralta',
  monogram: 'FP',
  location: 'Cuenca, Ecuador',
  email: 'felipebluesdev@gmail.com',
  githubUrl: 'https://github.com/FepDev25',
  githubHandle: 'github.com/FepDev25',
  linkedinUrl: 'https://linkedin.com/in/diego-felipe-peralta-peralta',
  linkedinHandle: 'linkedin.com/in/diego-felipe-peralta-peralta',
  ieeeDoiUrl: 'https://doi.org/10.1109/GPECOM70462.2026.11578476',
  ieeeDoiCode: '10.1109/GPECOM70462.2026.11578476',
  photoUrl: '/me/yo.jpg',
  cvFiles: {
    es: '/cv/CV_Felipe_Peralta.pdf',
    en: '/cv/CV_Felipe_Peralta_en.pdf',
  },
};

export const UI_STRINGS: Record<Language, Record<string, string>> = {
  es: {
    navRole: 'Backend Java • Spring Boot • IA',
    navElite: 'Proyectos',
    navExplorer: 'Explorador',
    navTrajectory: 'Trayectoria & IEEE',
    navMatrix: 'Stack & Certs',
    navContact: 'Contacto',
    cmdButton: 'Buscar',
    downloadCv: 'Descargar CV',
    heroBadge: 'DISPONIBLE PARA ROLES BACKEND / FULL STACK • CUENCA, ECUADOR (REMOTO / HÍBRIDO)',
    heroTitlePrefix: 'Arquitectura Backend, ',
    heroTitleHighlight: 'SaaS Multi-Tenant',
    heroTitleSuffix: ' e IA Aplicada en Producción.',
    heroDescription:
      'Ingeniero en Ciencias de la Computación especializado en Java (21/25), Spring Boot, FastAPI y PostgreSQL. Diseño y construyo plataformas SaaS multi-tenant con aislamiento RLS, búsqueda vectorial (RAG + pgvector), suites de pruebas automatizadas y despliegues cloud orientados a necesidades reales de negocio.',
    heroPrimaryCta: 'Explorar Sistemas & Arquitectura ↓',
    heroCopyEmail: 'Copiar Correo',
    heroEmailCopied: '¡Correo Copiado!',
    coreStackLabel: 'CORE STACK //',
    photoHeaderLeft: 'PERFIL DE INGENIERÍA // FELIPE PERALTA',
    photoHeaderRight: 'CUENCA, EC',
    photoCaptionTitle: 'Comunicación Técnica & Autoría Real:',
    photoCaptionBody:
      'Sustentación del sistema de Atención Visual Activa y Reconocimiento Automático de Habla (ASR) con Deep Learning para el asistente robótico educativo Volky.',
    metric1Value: '+1,850',
    metric1Label: 'Pruebas Automatizadas',
    metric1Sub: 'JUnit 5 • Testcontainers • Playwright • pytest',
    metric2Value: '5 SaaS',
    metric2Label: 'Sistemas Multi-Tenant / Cloud',
    metric2Sub: 'PostgreSQL RLS • Docker • Cloud Run • Vercel',
    metric3Value: "IEEE '26",
    metric3Label: 'Co-Autor Publicado (Italia)',
    metric3Sub: 'Digital Twin for Wind Power • GPECOM 2026',
    metric4Value: 'PENSER',
    metric4Label: 'Nominado LatAm 2026',
    metric4Sub: 'Outstanding Student Award (Bothell, WA, USA)',
    eliteEyebrow: '// 01. SELECCIÓN ÉLITE DE INGENIERÍA (TOP 5)',
    eliteTitle: 'Sistemas Principales, Capturas & Arquitectura',
    eliteSubtitle:
      'Cada sistema combina reglas de negocio reales, pruebas automatizadas y diseño modular. Alterna entre la galería de capturas y la pestaña [ ⚡ Vista de Arquitectura ] en cada tarjeta.',
    tabOverview: '🖼️ Impacto & Capturas',
    tabArch: '⚡ Vista de Arquitectura',
    btnLiveDemo: 'Demo en Vivo ↗',
    btnSourceCode: 'Código Fuente ↗',
    btnZoomSlide: 'Ampliar vista',
    archFlowLabel: 'FLUJO ARQUITECTÓNICO DE 4 CAPAS //',
    archDecisionsLabel: 'DECISIONES DE ARQUITECTURA & INGENIERÍA //',
    explorerEyebrow: '// 02. EXPLORADOR TÉCNICO DE PROYECTOS',
    explorerTitle: 'Más Sistemas, Herramientas & Laboratorio',
    explorerSubtitle:
      'Desde sistemas POS de escritorio en JavaFX y servidores de streaming musical hasta desarrollo indie en Godot 4.',
    filterAll: 'Todos (6)',
    filterSaas: 'SaaS & Web Apps',
    filterJava: 'Java & Desktop',
    filterIndie: 'Indie & Laboratorio',
    trajectoryEyebrow: '// 03. TRAYECTORIA INDUSTRIAL, INVESTIGACIÓN & RECONOCIMIENTOS',
    trajectoryTitle: 'Experiencia Real, Publicación IEEE & Educación',
    trajectorySubtitle:
      'Investigación científica indexada en IEEE Xplore, desarrollo SCADA en el sector eléctrico ecuatoriano y reconocimientos internacionales.',
    matrixEyebrow: '// 04. MATRIZ DE CAPACIDADES TÉCNICAS',
    matrixTitle: 'Habilidades Demostradas por Proyecto',
    matrixSubtitle:
      'En lugar de porcentajes arbitrarios, cada tecnología de mi stack está respaldada por sistemas reales construidos y probados.',
    provenInLabel: 'Demostrado en:',
    certsEyebrow: '// 05. FORMACIÓN CONTINUA & CREDENCIALES',
    certsTitle: 'Certificaciones, Cursos & Idiomas',
    certsSubtitle:
      'Formación especializada en arquitectura backend, desarrollo full stack moderno e ingeniería de datos.',
    footerTitle: '¿Buscas un Ingeniero Backend / Full Stack con enfoque en Arquitectura?',
    footerSubtitle:
      'Disponible para entrevistas técnicas, pruebas de arquitectura y posiciones remotas o híbridas.',
    cmdPlaceholder: 'Buscar proyecto, tecnología (pgvector, RLS, Spring Boot, FastAPI) o acción...',
    cmdQuickActions: 'Acciones Rápidas para Reclutadores',
    cmdJumpProjects: 'Saltar a Proyecto Élite (Top 5)',
    cmdCopyAction: 'Copiar correo directo (felipebluesdev@gmail.com)',
    cmdDownloadEs: 'Descargar CV en Español (PDF)',
    cmdDownloadEn: 'Descargar Resume en Inglés (PDF)',
    cmdToggleTheme: 'Alternar Tema Claro / Oscuro',
    cmdToggleLang: 'Cambiar Idioma (Español / Inglés)',
  },
  en: {
    navRole: 'Java Backend • Spring Boot • AI',
    navElite: 'Projects',
    navExplorer: 'Explorer',
    navTrajectory: 'Experience & IEEE',
    navMatrix: 'Stack & Certs',
    navContact: 'Contact',
    cmdButton: 'Search',
    downloadCv: 'Download CV',
    heroBadge: 'AVAILABLE FOR BACKEND / FULL STACK ROLES • CUENCA, ECUADOR (REMOTE / HYBRID)',
    heroTitlePrefix: 'Backend Architecture, ',
    heroTitleHighlight: 'Multi-Tenant SaaS',
    heroTitleSuffix: ' & Applied AI in Production.',
    heroDescription:
      'Computer Science Engineer specialized in Java (21/25), Spring Boot, FastAPI, and PostgreSQL. I design and build multi-tenant SaaS platforms featuring RLS isolation, vector search (RAG + pgvector), comprehensive automated test suites, and cloud deployments aligned with real business needs.',
    heroPrimaryCta: 'Explore Systems & Architecture ↓',
    heroCopyEmail: 'Copy Email',
    heroEmailCopied: 'Email Copied!',
    coreStackLabel: 'CORE STACK //',
    photoHeaderLeft: 'ENGINEERING PROFILE // FELIPE PERALTA',
    photoHeaderRight: 'CUENCA, EC',
    photoCaptionTitle: 'Technical Communication & Real Ownership:',
    photoCaptionBody:
      'Presenting the Active Visual Attention and Deep Learning Automatic Speech Recognition (ASR) system for the Volky educational robotic assistant.',
    metric1Value: '+1,850',
    metric1Label: 'Automated Tests Written',
    metric1Sub: 'JUnit 5 • Testcontainers • Playwright • pytest',
    metric2Value: '5 SaaS',
    metric2Label: 'Multi-Tenant / Cloud Systems',
    metric2Sub: 'PostgreSQL RLS • Docker • Cloud Run • Vercel',
    metric3Value: "IEEE '26",
    metric3Label: 'Published Co-Author (Italy)',
    metric3Sub: 'Digital Twin for Wind Power • GPECOM 2026',
    metric4Value: 'PENSER',
    metric4Label: 'LatAm Nominee 2026',
    metric4Sub: 'Outstanding Student Award (Bothell, WA, USA)',
    eliteEyebrow: '// 01. ELITE ENGINEERING SELECTION (TOP 5)',
    eliteTitle: 'Production Systems, Screenshots & Architecture',
    eliteSubtitle:
      'Every system combines real domain business rules, automated testing, and modular design. Switch between the screenshot gallery and the [ ⚡ Architecture View ] tab on each card.',
    tabOverview: '🖼️ Impact & Screenshots',
    tabArch: '⚡ Architecture View',
    btnLiveDemo: 'Live Demo ↗',
    btnSourceCode: 'Source Code ↗',
    btnZoomSlide: 'Expand view',
    archFlowLabel: '4-LAYER ARCHITECTURAL FLOW //',
    archDecisionsLabel: 'KEY ARCHITECTURAL & ENGINEERING DECISIONS //',
    explorerEyebrow: '// 02. TECHNICAL PROJECT EXPLORER',
    explorerTitle: 'More Systems, Desktop Tools & Lab',
    explorerSubtitle:
      'From JavaFX supermarket POS systems and self-hosted music streaming servers to 2D indie game development in Godot 4.',
    filterAll: 'All (6)',
    filterSaas: 'SaaS & Web Apps',
    filterJava: 'Java & Desktop',
    filterIndie: 'Indie & Lab',
    trajectoryEyebrow: '// 03. INDUSTRIAL EXPERIENCE, RESEARCH & HONORS',
    trajectoryTitle: 'Real-World Experience, IEEE Publication & Education',
    trajectorySubtitle:
      'Peer-reviewed research indexed in IEEE Xplore, real-time wind power SCADA engineering, and international academic honors.',
    matrixEyebrow: '// 04. ENGINEERING CAPABILITY MATRIX',
    matrixTitle: 'Skills Proven Across Real Projects',
    matrixSubtitle:
      'Instead of arbitrary percentage bars, every technology in my stack is backed by real, tested systems.',
    provenInLabel: 'Proven in:',
    certsEyebrow: '// 05. CONTINUOUS LEARNING & CREDENTIALS',
    certsTitle: 'Certifications, Courses & Languages',
    certsSubtitle:
      'Specialized training in backend architecture, modern full-stack engineering, and data systems.',
    footerTitle: 'Looking for an Architecture-Minded Backend / Full Stack Engineer?',
    footerSubtitle:
      'Available for technical interviews, architecture walkthroughs, and remote or hybrid opportunities.',
    cmdPlaceholder: 'Search project, technology (pgvector, RLS, Spring Boot, FastAPI) or action...',
    cmdQuickActions: 'Recruiter Quick Actions',
    cmdJumpProjects: 'Jump to Elite Project (Top 5)',
    cmdCopyAction: 'Copy direct email (felipebluesdev@gmail.com)',
    cmdDownloadEs: 'Download Resume in Spanish (PDF)',
    cmdDownloadEn: 'Download Resume in English (PDF)',
    cmdToggleTheme: 'Toggle Light / Dark Mode',
    cmdToggleLang: 'Switch Language (Spanish / English)',
  },
};

export const ELITE_PROJECTS: EliteProject[] = [
  {
    id: 'sfm',
    slug: 'facturacion-medica',
    statusType: 'live',
    statusLabel: {
      es: '● EN PRODUCCIÓN',
      en: '● IN PRODUCTION',
    },
    domainLabel: {
      es: 'CLINICAL SAAS • JAVA 21 + SPRING BOOT 4 + IA APLICADA',
      en: 'CLINICAL SAAS • JAVA 21 + SPRING BOOT 4 + APPLIED AI',
    },
    title: {
      es: 'Sistema de Facturación Médica (SFM) — Clinical Management System',
      en: 'Medical Billing System (SFM) — Clinical Management System',
    },
    subtitle: {
      es: 'Backoffice clínico full-stack con máquinas de estados, auditoría dual y 4 asistentes de IA',
      en: 'Full-stack clinical backoffice featuring domain state machines, dual auditing, and 4 AI assistants',
    },
    summary: {
      es: 'Sistema clínico full-stack en producción para gestión de pacientes, citas, historias médicas, facturación y pagos. Integra cuatro funcionalidades de IA mediante RAG, búsqueda vectorial, Tool Calling y salidas estructuradas para asistencia clínica, clasificación ICD-10 y consultas de historial.',
      en: 'Production full-stack clinical system managing patients, appointments, medical records, billing, and payments. Integrates four AI features via RAG, vector search, Tool Calling, and structured outputs for clinical assistance, ICD-10 classification, and medical history queries.',
    },
    demoUrl: 'https://sistema-facturacion-medica-springbo.vercel.app',
    evidenceBadges: [
      {
        es: '✓ ~1,110 Tests (~370 Backend / ~740 Frontend)',
        en: '✓ ~1,110 Tests (~370 Backend / ~740 Frontend)',
      },
      {
        es: '🧠 4 Flujos IA (RAG + Tool Calling + ICD-10)',
        en: '🧠 4 AI Workflows (RAG + Tool Calling + ICD-10)',
      },
      {
        es: '🔒 Máquinas de Estados & Auditoría Dual',
        en: '🔒 Domain State Machines & Dual Auditing',
      },
      {
        es: '⚡ Java 21 + Spring Boot 4 + pgvector',
        en: '⚡ Java 21 + Spring Boot 4 + pgvector',
      },
    ],
    highlights: [
      {
        es: 'Cuatro asistentes clínicos de IA combinando embeddings vectoriales (Gemini) en PostgreSQL/pgvector con Tool Calling y salidas estructuradas (Claude) para clasificación diagnóstica ICD-10.',
        en: 'Four clinical AI assistants combining vector embeddings (Gemini) on PostgreSQL/pgvector with Tool Calling and structured outputs (Claude) for ICD-10 diagnostic classification.',
      },
      {
        es: 'Reglas de negocio gobernadas por máquinas de estados estrictas para citas médicas y facturación, evitando transiciones inválidas y registrando auditoría dual.',
        en: 'Business rules governed by strict state machines for medical appointments and billing, preventing invalid state transitions and enforcing dual auditing.',
      },
      {
        es: 'Seguridad empresarial con Spring Security, autenticación JWT, caché en Redis y amplia cobertura de pruebas automatizadas (~370 backend y ~740 frontend).',
        en: 'Enterprise security with Spring Security, JWT authentication, Redis caching, and extensive automated test coverage (~370 backend and ~740 frontend).',
      },
    ],
    stack: [
      'Java 21',
      'Spring Boot 4',
      'PostgreSQL 15 + pgvector',
      'Spring Security & JWT',
      'Redis',
      'RAG / Tool Calling',
      'React 19',
      'TypeScript',
    ],
    screenshots: [
      {
        id: 'sfm-1',
        urlBar: 'sistema-facturacion-medica-springbo.vercel.app/clinical-ai',
        imageSrc: '/projects/sfm/slide-1.png',
        tag: {
          es: 'CAPTURA 1 / 3 • HISTORIA CLÍNICA & IA (RAG + ICD-10)',
          en: 'SCREENSHOT 1 / 3 • CLINICAL RECORD & AI (RAG + ICD-10)',
        },
        title: {
          es: 'Asistente Clínico RAG & Clasificación Estructurada ICD-10',
          en: 'RAG Clinical Assistant & Structured ICD-10 Classification',
        },
        description: {
          es: 'Panel de consulta de historial médico mediante búsqueda semántica en pgvector y sugerencia tipada de códigos diagnósticos ICD-10.',
          en: 'Medical history query panel powered by pgvector semantic search and strongly-typed ICD-10 diagnostic code suggestions.',
        },
        kpis: [
          { label: { es: 'Motor Vectorial', en: 'Vector Engine' }, value: 'pgvector + Gemini' },
          { label: { es: 'Salida IA', en: 'AI Output' }, value: 'ICD-10 JSON Schema' },
          { label: { es: 'Seguridad', en: 'Security' }, value: 'JWT + RBAC Audit' },
        ],
      },
      {
        id: 'sfm-2',
        urlBar: 'sistema-facturacion-medica-springbo.vercel.app/billing-state-machine',
        imageSrc: '/projects/sfm/slide-2.png',
        tag: {
          es: 'CAPTURA 2 / 3 • FACTURACIÓN & MÁQUINAS DE ESTADOS',
          en: 'SCREENSHOT 2 / 3 • BILLING & DOMAIN STATE MACHINES',
        },
        title: {
          es: 'Motor de Facturación Médica, Cobros y Auditoría Dual',
          en: 'Medical Billing Engine, Payments & Dual Audit Trail',
        },
        description: {
          es: 'Gestión transaccional de facturas, estados de cobro validados en dominio y trazabilidad completa de operaciones clínicas y financieras.',
          en: 'Transactional invoice management, domain-validated payment states, and complete clinical/financial audit trails.',
        },
        kpis: [
          { label: { es: 'Tests Backend', en: 'Backend Tests' }, value: '~370 Passing' },
          { label: { es: 'Tests Frontend', en: 'Frontend Tests' }, value: '~740 Passing' },
          { label: { es: 'Caché Activa', en: 'Active Cache' }, value: 'Redis Low-Latency' },
        ],
      },
      {
        id: 'sfm-3',
        urlBar: 'sistema-facturacion-medica-springbo.vercel.app/appointments',
        imageSrc: '/projects/sfm/slide-3.png',
        tag: {
          es: 'CAPTURA 3 / 3 • AGENDA CLÍNICA & PACIENTES',
          en: 'SCREENSHOT 3 / 3 • CLINICAL SCHEDULE & PATIENTS',
        },
        title: {
          es: 'Gestión de Pacientes, Citas y Flujo de Atención',
          en: 'Patient Management, Appointments & Care Workflow',
        },
        description: {
          es: 'Control de citas médicas con validación de reglas de negocio, estados de asistencia y vinculación directa con el expediente.',
          en: 'Medical appointment scheduling with business rule validation, attendance states, and direct medical record linkage.',
        },
        kpis: [
          { label: { es: 'Backend', en: 'Backend' }, value: 'Spring Boot 4' },
          { label: { es: 'Frontend', en: 'Frontend' }, value: 'React 19 + TS' },
          { label: { es: 'Estado', en: 'Status' }, value: 'Production Live' },
        ],
      },
    ],
    architecture: {
      layers: [
        {
          step: '01',
          layer: { es: 'CLIENTE WEB FULL-STACK', en: 'FULL-STACK WEB CLIENT' },
          title: 'React 19 + TypeScript',
          description: {
            es: 'Interfaz clínica reactiva con validación de formularios, control de acceso por rol y ~740 pruebas automatizadas.',
            en: 'Reactive clinical UI featuring strict form validation, role-based access control, and ~740 automated frontend tests.',
          },
          techs: ['React 19', 'TypeScript', 'Vercel'],
        },
        {
          step: '02',
          layer: { es: 'CORE DE DOMINIO & SEGURIDAD', en: 'DOMAIN CORE & SECURITY' },
          title: 'Spring Boot 4 (Java 21)',
          description: {
            es: 'Máquinas de estados para citas y facturación, Spring Security + JWT, auditoría dual y ~370 pruebas de backend.',
            en: 'State machines for appointments and billing, Spring Security + JWT, dual audit logging, and ~370 backend tests.',
          },
          techs: ['Java 21', 'Spring Boot 4', 'Spring Security', 'JWT'],
        },
        {
          step: '03',
          layer: { es: 'ORQUESTACIÓN DE IA APLICADA', en: 'APPLIED AI ORCHESTRATION' },
          title: 'RAG + Tool Calling + ICD-10',
          description: {
            es: '4 flujos de IA con búsqueda vectorial de historiales (Gemini Embeddings) y salidas estructuradas (Claude).',
            en: '4 AI workflows using vector search over medical history (Gemini Embeddings) and structured outputs (Claude).',
          },
          techs: ['RAG', 'Tool Calling', 'Structured Outputs'],
        },
        {
          step: '04',
          layer: { es: 'PERSISTENCIA VECTORIAL & CACHÉ', en: 'VECTOR PERSISTENCE & CACHE' },
          title: 'PostgreSQL 15 + pgvector & Redis',
          description: {
            es: 'Almacenamiento relacional ACID junto con índices vectoriales para similitud clínica y Redis para sesiones/caché.',
            en: 'ACID relational storage paired with vector indexes for clinical similarity and Redis for sessions/caching.',
          },
          techs: ['PostgreSQL 15', 'pgvector', 'Redis'],
        },
      ],
      decisions: [
        {
          question: {
            es: '¿Por qué implementar Máquinas de Estados explícitas en el dominio?',
            en: 'Why implement explicit Domain State Machines?',
          },
          answer: {
            es: 'En un sistema médico y financiero no pueden ocurrir transiciones ambiguas (ej. facturar una cita cancelada o alterar una factura cerrada). Las máquinas de estados blindan las reglas de negocio y disparan registros de auditoría dual en cada transición.',
            en: 'In a clinical and billing system, ambiguous transitions (e.g., billing a canceled appointment or mutating a closed invoice) cannot happen. State machines enforce strict invariants and trigger dual audit logs on every transition.',
          },
        },
        {
          question: {
            es: '¿Cómo se evitan las alucinaciones en los 4 asistentes de IA?',
            en: 'How are hallucinations prevented across the 4 AI assistants?',
          },
          answer: {
            es: 'Combinando RAG sobre PostgreSQL/pgvector (el modelo responde únicamente con contexto clínico recuperado del paciente) junto con Tool Calling y salidas JSON estrictamente tipadas para sugerencias ICD-10.',
            en: 'By combining RAG on PostgreSQL/pgvector (grounding responses strictly in retrieved patient records) with Tool Calling and schema-enforced structured outputs for ICD-10 suggestions.',
          },
        },
      ],
    },
  },
  {
    id: 'ritmuvia',
    slug: 'ritmuvia',
    statusType: 'live',
    statusLabel: {
      es: '● EN PRODUCCIÓN',
      en: '● IN PRODUCTION',
    },
    domainLabel: {
      es: 'MULTI-TENANT SAAS • POSTGRESQL RLS + FASTAPI + CLOUD RUN',
      en: 'MULTI-TENANT SAAS • POSTGRESQL RLS + FASTAPI + CLOUD RUN',
    },
    title: {
      es: 'Ritmuvia — Plataforma SaaS Multi-Tenant para Gestión de Gimnasios',
      en: 'Ritmuvia — Multi-Tenant SaaS Platform for Gym Management',
    },
    subtitle: {
      es: 'Aislamiento multi-tenant con PostgreSQL Row Level Security (RLS), 3 portales por rol y 665 pruebas',
      en: 'Multi-tenant isolation via PostgreSQL Row Level Security (RLS), 3 role portals, and 665 automated tests',
    },
    summary: {
      es: 'Plataforma SaaS multi-tenant para gimnasios con gestión de membresías, pagos, control de acceso QR con aforo, clases, reservas, reportes y tres portales según el tipo de usuario. Desplegada en Google Cloud Run, Neon y Firebase Hosting con suite documentada de 665 pruebas.',
      en: 'Multi-tenant SaaS platform for gyms featuring membership management, payments, QR access control with capacity tracking, classes, reporting, and three user-role portals. Deployed on Google Cloud Run, Neon, and Firebase Hosting with a documented suite of 665 tests.',
    },
    demoUrl: 'https://ritmuvia.fepdev.app',
    evidenceBadges: [
      {
        es: '🛡️ Aislamiento Multi-Tenant con PostgreSQL RLS',
        en: '🛡️ Multi-Tenant Isolation via PostgreSQL RLS',
      },
      {
        es: '✓ 665 Pruebas (Backend, Frontend & E2E)',
        en: '✓ 665 Automated Tests (Backend, Frontend & E2E)',
      },
      {
        es: '☁️ Google Cloud Run + Neon + CI/CD GitHub Actions',
        en: '☁️ Google Cloud Run + Neon + GitHub Actions CI/CD',
      },
      {
        es: '📲 3 Portales por Rol & Acceso QR',
        en: '📲 3 Role-Based Portals & QR Access',
      },
    ],
    highlights: [
      {
        es: 'Aislamiento estricto por gimnasio directamente en el motor de base de datos mediante políticas de PostgreSQL Row Level Security (RLS) y permisos granulares.',
        en: 'Strict tenant isolation enforced directly inside the database engine via PostgreSQL Row Level Security (RLS) policies and granular permissions.',
      },
      {
        es: 'Tres portales especializados (Administración, Recepción/Operación con lector QR y Portal de Miembros) sobre arquitectura asíncrona FastAPI + SQLAlchemy async + React/TypeScript.',
        en: 'Three specialized portals (Admin, Reception/QR Check-in, and Member Portal) built on an asynchronous FastAPI + async SQLAlchemy + React/TypeScript architecture.',
      },
      {
        es: 'Operación lista para producción con 665 pruebas documentadas, CI/CD en GitHub Actions, monitoreo activo, backups automatizados y procedimientos de recuperación ante desastres.',
        en: 'Production-grade reliability with 665 documented tests, GitHub Actions CI/CD, active monitoring, automated backups, and disaster recovery procedures.',
      },
    ],
    stack: [
      'Python 3.12',
      'FastAPI',
      'PostgreSQL 16 (RLS)',
      'SQLAlchemy Async',
      'React + TypeScript',
      'Google Cloud Run',
      'Neon DB',
      'Playwright & pytest',
    ],
    screenshots: [
      {
        id: 'rit-1',
        urlBar: 'ritmuvia.fepdev.app/admin/dashboard',
        imageSrc: '/projects/ritmuvia/slide-1.png',
        tag: {
          es: 'CAPTURA 1 / 3 • PORTAL ADMINISTRATIVO MULTI-SEDE',
          en: 'SCREENSHOT 1 / 3 • MULTI-BRANCH ADMIN PORTAL',
        },
        title: {
          es: 'Panel Multi-Tenant de Membresías, Finanzas y Sedes',
          en: 'Multi-Tenant Memberships, Finance & Branch Dashboard',
        },
        description: {
          es: 'Métricas operativas en tiempo real por gimnasio y sede, con datos blindados en base de datos mediante PostgreSQL RLS.',
          en: 'Real-time operational metrics per gym and branch, with tenant data isolated at the database level via PostgreSQL RLS.',
        },
        kpis: [
          { label: { es: 'Seguridad DB', en: 'DB Security' }, value: 'PostgreSQL RLS' },
          { label: { es: 'Suite QA', en: 'QA Suite' }, value: '665 Tests Passing' },
          { label: { es: 'Infraestructura', en: 'Infrastructure' }, value: 'Cloud Run + Neon' },
        ],
      },
      {
        id: 'rit-2',
        urlBar: 'ritmuvia.fepdev.app/reception/qr-access',
        imageSrc: '/projects/ritmuvia/slide-2.png',
        tag: {
          es: 'CAPTURA 2 / 3 • CONTROL DE ACCESO QR & AFORO',
          en: 'SCREENSHOT 2 / 3 • QR ACCESS CONTROL & CAPACITY',
        },
        title: {
          es: 'Validación Instantánea de Acceso por QR y Estado de Membresía',
          en: 'Instant QR Check-In Validation & Membership Status',
        },
        description: {
          es: 'Portal de recepción para verificación de ingreso por código QR, control de aforo en vivo y alertas de vencimiento de pago.',
          en: 'Reception portal for QR check-in verification, live facility capacity tracking, and payment expiration alerts.',
        },
        kpis: [
          { label: { es: 'Portales', en: 'Portals' }, value: 'Admin / Staff / Member' },
          { label: { es: 'Autenticación', en: 'Auth' }, value: 'JWT + RBAC Granular' },
          { label: { es: 'Mercado', en: 'Locale' }, value: 'es-EC / USD' },
        ],
      },
      {
        id: 'rit-3',
        urlBar: 'ritmuvia.fepdev.app/member/classes',
        imageSrc: '/projects/ritmuvia/slide-3.png',
        tag: {
          es: 'CAPTURA 3 / 3 • PORTAL DE MIEMBROS & RESERVAS',
          en: 'SCREENSHOT 3 / 3 • MEMBER PORTAL & CLASS BOOKING',
        },
        title: {
          es: 'Reserva de Clases, Pase QR Digital e Historial de Pagos',
          en: 'Class Reservations, Digital QR Pass & Payment History',
        },
        description: {
          es: 'Experiencia móvil y web para que cada miembro gestione sus reservas de clases, consulte su membresía y muestre su QR de entrada.',
          en: 'Mobile-friendly web experience enabling members to book classes, check membership status, and display their entry QR code.',
        },
        kpis: [
          { label: { es: 'CI/CD', en: 'CI/CD' }, value: 'GitHub Actions' },
          { label: { es: 'Resiliencia', en: 'Resilience' }, value: 'Backups + DR Plan' },
          { label: { es: 'Estado', en: 'Status' }, value: 'Production Live' },
        ],
      },
    ],
    architecture: {
      layers: [
        {
          step: '01',
          layer: { es: '3 PORTALES ESPECIALIZADOS', en: '3 SPECIALIZED PORTALS' },
          title: 'React + TypeScript (Firebase)',
          description: {
            es: 'Interfaces adaptadas a cada rol: Administración del Gimnasio, Recepción (QR/Pagos) y Portal del Cliente.',
            en: 'Role-tailored interfaces: Gym Administration, Reception Desk (QR/Payments), and Member Self-Service Portal.',
          },
          techs: ['React', 'TypeScript', 'Firebase Hosting'],
        },
        {
          step: '02',
          layer: { es: 'API ASÍNCRONA & CONTEXTO TENANT', en: 'ASYNC API & TENANT CONTEXT' },
          title: 'FastAPI + SQLAlchemy Async',
          description: {
            es: 'Extrae y verifica el tenant_id desde el JWT en cada request e inyecta el contexto de sesión en la transacción SQL.',
            en: 'Extracts and verifies tenant_id from JWT claims on every request and injects session context into the SQL transaction.',
          },
          techs: ['Python 3.12', 'FastAPI', 'JWT', 'Google Cloud Run'],
        },
        {
          step: '03',
          layer: { es: 'AISLAMIENTO EN MOTOR DE DATOS', en: 'DATABASE-LEVEL ISOLATION' },
          title: 'PostgreSQL 16 + RLS Policies',
          description: {
            es: 'Row Level Security garantiza que ninguna consulta o mutación cruce datos entre gimnasios, incluso ante errores de aplicación.',
            en: 'Row Level Security guarantees no query or mutation can leak data across gyms, even if application-layer filters are omitted.',
          },
          techs: ['PostgreSQL 16', 'Row Level Security', 'Neon Serverless'],
        },
        {
          step: '04',
          layer: { es: 'CALIDAD E INFRAESTRUCTURA SRE', en: 'QUALITY & SRE INFRASTRUCTURE' },
          title: '665 Tests + CI/CD + DR',
          description: {
            es: 'Suite completa unitaria, integración y E2E con Playwright/pytest, backups programados y guía de recuperación.',
            en: 'Comprehensive unit, integration, and E2E suite with Playwright/pytest, automated backups, and disaster recovery runbooks.',
          },
          techs: ['pytest', 'Playwright', 'GitHub Actions'],
        },
      ],
      decisions: [
        {
          question: {
            es: '¿Por qué usar PostgreSQL Row Level Security (RLS) en lugar de solo filtrar con WHERE tenant_id = X?',
            en: 'Why enforce PostgreSQL Row Level Security (RLS) instead of relying solely on WHERE tenant_id = X?',
          },
          answer: {
            es: 'Depender solo de un WHERE en el código de aplicación es propenso a fugas de datos si un desarrollador olvida un filtro en un JOIN complejo. Con RLS en PostgreSQL, el propio motor de base de datos bloquea cualquier lectura o escritura fuera del tenant activo.',
            en: 'Relying only on application-level WHERE clauses risks cross-tenant data leaks if a developer misses a filter in a complex JOIN. With PostgreSQL RLS, the database engine itself enforces tenant boundaries on every row.',
          },
        },
        {
          question: {
            es: '¿Cómo se garantiza estabilidad al desplegar cambios en un SaaS multi-tenant?',
            en: 'How is stability guaranteed when deploying updates to a multi-tenant SaaS?',
          },
          answer: {
            es: 'Mediante una suite documentada de 665 pruebas automatizadas (backend, frontend y flujos E2E por rol) integrada en GitHub Actions antes de publicar en Google Cloud Run.',
            en: 'Through a documented suite of 665 automated tests (backend, frontend, and role-based E2E flows) executed in GitHub Actions prior to deploying on Google Cloud Run.',
          },
        },
      ],
    },
  },
  {
    id: 'classroomiq',
    slug: 'classroomiq',
    statusType: 'live',
    statusLabel: {
      es: '● FULL STACK & IA',
      en: '● FULL STACK & AI',
    },
    domainLabel: {
      es: 'EDTECH MULTI-TENANT • SPRING BOOT 3.5 + WEBFLUX SSE + RAG',
      en: 'EDTECH MULTI-TENANT • SPRING BOOT 3.5 + WEBFLUX SSE + RAG',
    },
    title: {
      es: 'ClassroomIQ — AI-Assisted Teaching Evaluation Platform',
      en: 'ClassroomIQ — AI-Assisted Teaching Evaluation Platform',
    },
    subtitle: {
      es: 'Evaluación universitaria asistida por RAG con evidencia citada, detección de similitud y SSE en tiempo real',
      en: 'University evaluation platform featuring RAG with cited evidence, semantic similarity detection, and real-time SSE',
    },
    summary: {
      es: 'Plataforma web multi-tenant de apoyo a la evaluación docente universitaria. El profesor sube entregas y rúbricas para obtener borradores de evaluación fundamentados criterio por criterio con evidencia citada, detección de similitud semántica con pgvector y eventos en tiempo real vía Server-Sent Events (SSE). El docente siempre tiene la decisión final.',
      en: 'Multi-tenant university evaluation support platform. Professors upload student submissions and rubrics to generate draft evaluations backed by cited evidence per criterion, semantic similarity detection via pgvector, and real-time progress via Server-Sent Events (SSE). The professor always retains final authority.',
    },
    repoUrl: 'https://github.com/FepDev25/classroomiq',
    evidenceBadges: [
      {
        es: '📑 RAG con Evidencia Citada por Criterio',
        en: '📑 RAG with Cited Evidence per Rubric Criterion',
      },
      {
        es: '⚡ Procesamiento Asíncrono + Streaming SSE (WebFlux)',
        en: '⚡ Async Processing + Real-Time SSE (WebFlux)',
      },
      {
        es: '🔍 Detección de Similitud Semántica (pgvector)',
        en: '🔍 Semantic Similarity Detection (pgvector)',
      },
      {
        es: '🧪 Testcontainers + Playwright E2E',
        en: '🧪 Testcontainers + Playwright E2E',
      },
    ],
    highlights: [
      {
        es: 'Principio "Human-in-the-Loop": la IA nunca asigna la calificación definitiva; genera borradores trazables con citas exactas del documento o código del estudiante para revisión y aprobación del profesor.',
        en: 'Human-in-the-Loop design: AI never assigns final grades; it generates traceable evaluation drafts with exact citations from student documents or code for professor review and approval.',
      },
      {
        es: 'Pipeline asíncrono de ingesta de documentos y código fuente con actualizaciones de progreso en tiempo real hacia el navegador mediante Spring WebFlux (SSE).',
        en: 'Asynchronous document and source-code ingestion pipeline streaming real-time progress updates to the browser via Spring WebFlux Server-Sent Events (SSE).',
      },
      {
        es: 'Pruebas de integración sobre base de datos vectorial real utilizando Testcontainers (PostgreSQL/pgvector) y pruebas E2E con Playwright.',
        en: 'Integration testing against a real vector database instance using Testcontainers (PostgreSQL/pgvector) alongside Playwright E2E tests.',
      },
    ],
    stack: [
      'Java 21',
      'Spring Boot 3.5',
      'Spring WebFlux (SSE)',
      'Spring Security',
      'PostgreSQL + pgvector',
      'Anthropic Claude API',
      'React 19 + TypeScript',
      'Testcontainers & Playwright',
    ],
    screenshots: [
      {
        id: 'ciq-1',
        urlBar: 'classroomiq.app/evaluations/rubric-review',
        imageSrc: '/projects/classroomiq/slide-1.png',
        tag: {
          es: 'CAPTURA 1 / 3 • EVALUACIÓN POR RÚBRICA & EVIDENCIA CITADA',
          en: 'SCREENSHOT 1 / 3 • RUBRIC EVALUATION & CITED EVIDENCE',
        },
        title: {
          es: 'Borrador de Evaluación Asistida con Citas Exactas del Estudiante',
          en: 'AI-Assisted Evaluation Draft with Exact Student Citations',
        },
        description: {
          es: 'Vista del docente mostrando el desglose criterio por criterio, la evidencia extraída mediante RAG y el botón de aprobación/edición manual.',
          en: 'Professor view displaying criterion-by-criterion breakdown, RAG-extracted evidence quotes, and manual approval/override controls.',
        },
        kpis: [
          { label: { es: 'Principio Clave', en: 'Core Principle' }, value: 'Docente es el Juez' },
          { label: { es: 'Streaming', en: 'Streaming' }, value: 'Server-Sent Events' },
          { label: { es: 'Integración QA', en: 'Integration QA' }, value: 'Testcontainers' },
        ],
      },
      {
        id: 'ciq-2',
        urlBar: 'classroomiq.app/submissions/similarity-matrix',
        imageSrc: '/projects/classroomiq/slide-2.png',
        tag: {
          es: 'CAPTURA 2 / 3 • SIMILITUD SEMÁNTICA CON PGVECTOR',
          en: 'SCREENSHOT 2 / 3 • SEMANTIC SIMILARITY VIA PGVECTOR',
        },
        title: {
          es: 'Detección de Similitud en Documentos y Código Fuente',
          en: 'Document & Source Code Semantic Similarity Detection',
        },
        description: {
          es: 'Comparación vectorial de entregas del grupo para identificar fragmentos semánticamente equivalentes más allá de copias textuales.',
          en: 'Vector comparison across cohort submissions to identify semantically equivalent passages beyond literal copy-paste.',
        },
        kpis: [
          { label: { es: 'Motor Vectorial', en: 'Vector Store' }, value: 'PostgreSQL pgvector' },
          { label: { es: 'Backend', en: 'Backend' }, value: 'Java 21 + Boot 3.5' },
          { label: { es: 'Frontend', en: 'Frontend' }, value: 'React 19 + Shadcn' },
        ],
      },
      {
        id: 'ciq-3',
        urlBar: 'classroomiq.app/analytics/cohort-report',
        imageSrc: '/projects/classroomiq/slide-3.png',
        tag: {
          es: 'CAPTURA 3 / 3 • REPORTES AGREGADOS POR GRUPO',
          en: 'SCREENSHOT 3 / 3 • COHORT AGGREGATED ANALYTICS',
        },
        title: {
          es: 'Métricas de Desempeño por Criterio y Retroalimentación Grupal',
          en: 'Cohort Criterion Performance & Batch Feedback Analytics',
        },
        description: {
          es: 'Resumen estadístico del curso para detectar en qué temas de la rúbrica tuvieron mayor dificultad los estudiantes.',
          en: 'Course-level statistical summary highlighting which rubric criteria posed the greatest challenge to students.',
        },
        kpis: [
          { label: { es: 'Arquitectura', en: 'Architecture' }, value: 'Multi-Tenant Web' },
          { label: { es: 'Pruebas E2E', en: 'E2E Testing' }, value: 'Playwright' },
          { label: { es: 'Repositorio', en: 'Repository' }, value: 'Open on GitHub' },
        ],
      },
    ],
    architecture: {
      layers: [
        {
          step: '01',
          layer: { es: 'INTERFAZ DOCENTE REACTIVA', en: 'REACTIVE PROFESSOR UI' },
          title: 'React 19 + TypeScript + SSE',
          description: {
            es: 'Recibe eventos SSE en tiempo real conforme se procesan lotes de entregas y permite auditar cada cita sugerida.',
            en: 'Consumes real-time SSE streams as submission batches are processed and enables auditing every cited passage.',
          },
          techs: ['React 19', 'TypeScript', 'Tailwind / Shadcn'],
        },
        {
          step: '02',
          layer: { es: 'BACKEND ASÍNCRONO & STREAMING', en: 'ASYNC BACKEND & STREAMING' },
          title: 'Spring Boot 3.5 + WebFlux',
          description: {
            es: 'Ingesta asíncrona de PDFs y código, emisión de progreso por Server-Sent Events y seguridad multi-tenant.',
            en: 'Asynchronous PDF/code ingestion, real-time progress emission via Server-Sent Events, and multi-tenant security.',
          },
          techs: ['Java 21', 'Spring Boot 3.5', 'WebFlux SSE', 'Spring Security'],
        },
        {
          step: '03',
          layer: { es: 'MOTOR RAG & SIMILITUD', en: 'RAG & SIMILARITY ENGINE' },
          title: 'PostgreSQL + pgvector + Claude',
          description: {
            es: 'Chunking semántico, cálculo de similitud coseno entre entregas y generación de borradores con citas verificables.',
            en: 'Semantic chunking, cosine similarity computation across submissions, and draft generation with verifiable citations.',
          },
          techs: ['pgvector', 'RAG', 'Anthropic LLM'],
        },
        {
          step: '04',
          layer: { es: 'VERIFICACIÓN CON CONTENEDORES', en: 'CONTAINERIZED VERIFICATION' },
          title: 'Testcontainers + Playwright',
          description: {
            es: 'Pruebas de integración levantando PostgreSQL/pgvector efímero en Docker y pruebas E2E de extremo a extremo.',
            en: 'Integration tests spinning up ephemeral Docker PostgreSQL/pgvector instances plus full Playwright E2E suites.',
          },
          techs: ['Testcontainers', 'JUnit 5', 'Playwright'],
        },
      ],
      decisions: [
        {
          question: {
            es: '¿Por qué usar Server-Sent Events (SSE) en lugar de polling o WebSockets complejos?',
            en: 'Why use Server-Sent Events (SSE) instead of HTTP polling or heavy WebSockets?',
          },
          answer: {
            es: 'Evaluar un lote de 30 entregas con RAG e IA toma varios segundos por documento. SSE sobre HTTP estándar permite transmitir el avance etapa por etapa hacia el navegador sin sobrecargar el servidor con polling ni requerir comunicación bidireccional innecesaria.',
            en: 'Evaluating a batch of 30 submissions with RAG takes several seconds per file. SSE over standard HTTP streams stage-by-stage progress to the browser without polling overhead or unnecessary bidirectional socket state.',
          },
        },
        {
          question: {
            es: '¿Por qué diseñar la IA como generador de borradores con citas y no como calificador automático?',
            en: 'Why design AI as a cited-draft generator rather than an automated grader?',
          },
          answer: {
            es: 'En educación superior, la responsabilidad ética y académica pertenece al docente. Exigir que cada sugerencia incluya la cita textual del trabajo del alumno elimina cajas negras y acelera la revisión sin sacrificar criterio humano.',
            en: 'In higher education, academic and ethical accountability belongs to the professor. Requiring every suggestion to cite exact passages from the student submission eliminates black-box grading while accelerating review.',
          },
        },
      ],
    },
  },
  {
    id: 'omnichannel-crm',
    slug: 'omnichannel-crm',
    statusType: 'active',
    statusLabel: {
      es: '● ARQUITECTURA MULTICANAL',
      en: '● MULTICHANNEL ARCHITECTURE',
    },
    domainLabel: {
      es: 'CONTACT CENTER & CRM • FASTAPI + REDIS STREAMS + NEXT.JS 14',
      en: 'CONTACT CENTER & CRM • FASTAPI + REDIS STREAMS + NEXT.JS 14',
    },
    title: {
      es: 'Omnichannel CRM — Plataforma Multi-Tenant de Contact Center & Automatización IA',
      en: 'Omnichannel CRM — Multi-Tenant Contact Center & AI Automation Platform',
    },
    subtitle: {
      es: 'Atención centralizada (WhatsApp, Correo, WooCommerce), distribución ACD, editor visual ICR y workers de IA con Redis Streams',
      en: 'Centralized customer care (WhatsApp, Email, WooCommerce), ACD routing, visual ICR editor, and Redis Streams AI workers',
    },
    summary: {
      es: 'Plataforma multitenant de contact center, CRM y postventa que centraliza conversaciones de WhatsApp y correo IMAP/SMTP, eventos de pedidos de WooCommerce, asignación inteligente ACD entre agentes y automatización con RAG (pgvector) y flujos ICR versionados.',
      en: 'Multi-tenant contact center, CRM, and post-sales platform centralizing WhatsApp and IMAP/SMTP email conversations, WooCommerce order webhooks, skill-based ACD agent routing, and automation powered by RAG (pgvector) and versioned visual ICR flows.',
    },
    evidenceBadges: [
      {
        es: '🔄 Redis Streams + Pub/Sub + Worker IA Desacoplado',
        en: '🔄 Redis Streams + Pub/Sub + Decoupled AI Worker',
      },
      {
        es: '💬 WebSockets por Tenant + Enrutamiento ACD',
        en: '💬 Tenant-Scoped WebSockets + ACD Routing',
      },
      {
        es: '🧠 RAG Local (SentenceTransformers + pgvector) + OpenRouter',
        en: '🧠 Local Embeddings (SentenceTransformers + pgvector) + OpenRouter',
      },
      {
        es: '📐 Contrato de Equivalencia OpenAPI (Doble Entrada ASGI)',
        en: '📐 OpenAPI Equivalence Contract (Dual ASGI Entrypoints)',
      },
    ],
    highlights: [
      {
        es: 'Procesamiento asíncrono de IA desacoplado de la API principal: la API encola trabajos en Redis Streams, un proceso Worker dedicado (`ai_worker`) consulta la base de conocimiento con pgvector/OpenRouter y publica eventos vía Redis Pub/Sub.',
        en: 'Decoupled asynchronous AI processing: the API enqueues jobs in Redis Streams, a dedicated worker process (`ai_worker`) queries the pgvector knowledge base and OpenRouter, and publishes responses back via Redis Pub/Sub.',
      },
      {
        es: 'Módulos completos de operación comercial: distribución ACD por disponibilidad y habilidades, supervisión en tiempo real, editor visual ICR con publicaciones versionadas, cotizaciones PDF, campañas de WhatsApp y postventa.',
        en: 'Full commercial operations suite: skill-based ACD routing, real-time supervisor dashboard, visual ICR flow builder with versioned releases, PDF quotes, WhatsApp campaigns, and post-sales scheduling.',
      },
      {
        es: 'Arquitectura backend en evolución controlada con doble punto de entrada (`main:app` y `app.asgi:app` modular) verificada mediante pruebas automáticas de contrato de equivalencia OpenAPI.',
        en: 'Controlled modular backend evolution featuring dual ASGI entrypoints (`main:app` and modular `app.asgi:app`) verified by automated OpenAPI contract equivalence tests.',
      },
    ],
    stack: [
      'Python 3.11',
      'FastAPI (ASGI)',
      'PostgreSQL 16 + pgvector',
      'Redis Streams & Pub/Sub',
      'WebSockets',
      'Next.js 14 / React',
      'TypeScript',
      'Docker Compose',
    ],
    screenshots: [
      {
        id: 'omni-1',
        urlBar: 'omnichannel-crm.local/workspace/inbox-acd',
        imageSrc: '/projects/omnichannel-crm/slide-1.png',
        tag: {
          es: 'CAPTURA 1 / 3 • BANDEJA OMNICANAL & ENRUTAMIENTO ACD',
          en: 'SCREENSHOT 1 / 3 • OMNICHANNEL INBOX & ACD ROUTING',
        },
        title: {
          es: 'Consola de Agente en Tiempo Real (WhatsApp, Correo & WooCommerce)',
          en: 'Real-Time Agent Console (WhatsApp, Email & WooCommerce)',
        },
        description: {
          es: 'Atención unificada por WebSockets filtrados por tenant, contexto de pedidos WooCommerce y sugerencias del Worker IA.',
          en: 'Unified customer care over tenant-filtered WebSockets, live WooCommerce order context, and AI Worker suggestions.',
        },
        kpis: [
          { label: { es: 'Tiempo Real', en: 'Real-Time' }, value: 'WebSockets + Pub/Sub' },
          { label: { es: 'Canales', en: 'Channels' }, value: 'WhatsApp / IMAP / WC' },
          { label: { es: 'Asignación', en: 'Routing' }, value: 'ACD Skills & Shifts' },
        ],
      },
      {
        id: 'omni-2',
        urlBar: 'omnichannel-crm.local/automation/icr-studio',
        imageSrc: '/projects/omnichannel-crm/slide-2.png',
        tag: {
          es: 'CAPTURA 2 / 3 • EDITOR VISUAL ICR & BIBLIOTECA RAG',
          en: 'SCREENSHOT 2 / 3 • VISUAL ICR EDITOR & RAG KNOWLEDGE BASE',
        },
        title: {
          es: 'Automatización con Flujos ICR Versionados y RAG en pgvector',
          en: 'Automation via Versioned ICR Flows & pgvector RAG',
        },
        description: {
          es: 'Diseño de árboles de atención interactiva con consultas HTTP, derivación a colas de agentes y respuestas asistidas con embeddings.',
          en: 'Interactive routing tree designer supporting HTTP webhooks, agent queue handoffs, and embedding-assisted replies.',
        },
        kpis: [
          { label: { es: 'Colas IA', en: 'AI Queues' }, value: 'Redis Streams' },
          { label: { es: 'Embeddings', en: 'Embeddings' }, value: 'SentenceTransformers' },
          { label: { es: 'Persistencia', en: 'Persistence' }, value: 'pgvector + btree_gist' },
        ],
      },
      {
        id: 'omni-3',
        urlBar: 'omnichannel-crm.local/crm/opportunities-quotes',
        imageSrc: '/projects/omnichannel-crm/slide-3.png',
        tag: {
          es: 'CAPTURA 3 / 3 • CRM, COTIZACIONES PDF & SUPERVISIÓN',
          en: 'SCREENSHOT 3 / 3 • CRM, PDF QUOTES & LIVE SUPERVISION',
        },
        title: {
          es: 'Pipeline de Oportunidades, Inventario por Bodega y Postventa',
          en: 'Opportunity Pipeline, Warehouse Inventory & Post-Sales',
        },
        description: {
          es: 'Gestión integral desde que entra el lead por WhatsApp hasta la generación de cotización PDF, venta y recordatorios postventa.',
          en: 'End-to-end lifecycle from incoming WhatsApp lead to PDF quote generation, sale conversion, and post-sales reminders.',
        },
        kpis: [
          { label: { es: 'Frontend', en: 'Frontend' }, value: 'Next.js 14 + TS' },
          { label: { es: 'Despliegue Local', en: 'Local Stack' }, value: 'Docker Compose' },
          { label: { es: 'API Contract', en: 'API Contract' }, value: 'OpenAPI Verified' },
        ],
      },
    ],
    architecture: {
      layers: [
        {
          step: '01',
          layer: { es: 'CONSOLA NEXT.JS & CANALES EXTERNOS', en: 'NEXT.JS CONSOLE & EXTERNAL CHANNELS' },
          title: 'Next.js 14 + Webhooks Firmados',
          description: {
            es: 'Conexión HTTP/WebSocket autenticada por tenant para agentes y supervisores + webhooks firmados de WhatsApp y WooCommerce.',
            en: 'Tenant-authenticated HTTP/WebSocket connection for agents and supervisors + signed WhatsApp and WooCommerce webhooks.',
          },
          techs: ['Next.js 14', 'TypeScript', 'WebSockets', 'Webhooks'],
        },
        {
          step: '02',
          layer: { es: 'CORE API FASTAPI (DOBLE ENTRADA)', en: 'FASTAPI CORE (DUAL ENTRYPOINT)' },
          title: 'FastAPI (main:app / app.asgi:app)',
          description: {
            es: 'Routers por dominio (ACD, CRM, Campañas, Postventa, ICR) validados con pruebas de equivalencia de contrato OpenAPI.',
            en: 'Domain routers (ACD, CRM, Campaigns, Post-Sales, ICR) validated via OpenAPI contract equivalence tests.',
          },
          techs: ['Python 3.11', 'FastAPI', 'OpenAPI Contract Tests'],
        },
        {
          step: '03',
          layer: { es: 'BUS DE EVENTOS & WORKER IA', en: 'EVENT BUS & DECOPLED AI WORKER' },
          title: 'Redis Streams + Pub/Sub + AI Worker',
          description: {
            es: 'Desacopla la inferencia LLM y generación de embeddings del hilo HTTP principal mediante colas en Redis Streams.',
            en: 'Decouples LLM inference and embedding generation from the main HTTP loop using Redis Streams job queues.',
          },
          techs: ['Redis Streams', 'Redis Pub/Sub', 'OpenRouter', 'SentenceTransformers'],
        },
        {
          step: '04',
          layer: { es: 'DATOS MULTITENANT & ARCHIVOS', en: 'MULTITENANT DATA & STORAGE' },
          title: 'PostgreSQL 16 (pgvector + btree_gist)',
          description: {
            es: 'Esquema compartido multitenant con búsqueda vectorial para biblioteca de conocimiento y generación de cotizaciones PDF.',
            en: 'Shared multi-tenant schema with vector search for the knowledge base and automated PDF quote generation.',
          },
          techs: ['PostgreSQL 16', 'pgvector', 'btree_gist', 'Docker Compose'],
        },
      ],
      decisions: [
        {
          question: {
            es: '¿Por qué separar el Worker de IA con Redis Streams y Pub/Sub en vez de llamar al LLM dentro del endpoint HTTP?',
            en: 'Why decouple the AI Worker with Redis Streams & Pub/Sub instead of calling the LLM inside the HTTP endpoint?',
          },
          answer: {
            es: 'En un Contact Center donde llegan decenas de webhooks de WhatsApp simultáneos, bloquear el worker ASGI esperando respuestas de un LLM degradaría toda la plataforma. Con Redis Streams el webhook responde de inmediato y el Worker IA procesa y notifica por Pub/Sub/WebSocket al terminar.',
            en: 'In a Contact Center handling bursts of concurrent WhatsApp webhooks, blocking ASGI workers on LLM latency would degrade the entire platform. With Redis Streams, webhooks acknowledge immediately while the AI Worker processes jobs asynchronously and pushes updates via Pub/Sub and WebSockets.',
          },
        },
        {
          question: {
            es: '¿Cómo migrar de un monolito a una arquitectura modular sin romper clientes existentes?',
            en: 'How do you migrate from a monolith to a modular architecture without breaking existing clients?',
          },
          answer: {
            es: 'Manteniendo dos puntos de entrada ASGI (`main:app` y `app.asgi:app`) sobre servicios compartidos y exigiendo en la suite de tests un contrato automático de equivalencia OpenAPI entre ambas entradas.',
            en: 'By maintaining dual ASGI entrypoints (`main:app` and modular `app.asgi:app`) backed by shared domain services and enforcing an automated OpenAPI equivalence contract test across both.',
          },
        },
      ],
    },
  },
  {
    id: 'rutasales',
    slug: 'rutasales',
    statusType: 'active',
    statusLabel: {
      es: '● HITO 5 IMPLEMENTADO (MVP)',
      en: '● MILESTONE 5 IMPLEMENTED (MVP)',
    },
    domainLabel: {
      es: 'B2B SAAS PREVENTA • JAVA 25 LTS + SPRING BOOT 4.1 + POSTGRESQL 17',
      en: 'B2B PRESALES SAAS • JAVA 25 LTS + SPRING BOOT 4.1 + POSTGRESQL 17',
    },
    title: {
      es: 'RutaSales — Plataforma B2B SaaS de Preventa para Distribuidoras',
      en: 'RutaSales — B2B Presales SaaS Platform for Distributors',
    },
    subtitle: {
      es: 'Digitalización de preventa y pedidos recurrentes con 4 espacios de actividad y 81 pruebas de integración sobre PostgreSQL 17 real',
      en: 'Presales digitization and recurring order platform with 4 role workspaces and 81 integration tests on real PostgreSQL 17',
    },
    summary: {
      es: 'Plataforma B2B SaaS diseñada para distribuidoras en Ecuador que digitaliza la preventa en ruta, centraliza pedidos recurrentes y conecta proveedores con tiendas sin reemplazar al vendedor de campo. Construida con Java 25 LTS, Spring Boot 4.1, PostgreSQL 17 (Flyway) y React 19 + TanStack Query 5.',
      en: 'B2B SaaS platform built for Ecuadorian distributors to digitize field presales, centralize recurring orders, and connect suppliers with retail stores without replacing field sales reps. Built with Java 25 LTS, Spring Boot 4.1, PostgreSQL 17 (Flyway), and React 19 + TanStack Query 5.',
    },
    evidenceBadges: [
      {
        es: '✓ 81 Tests de Integración API con PostgreSQL Real',
        en: '✓ 81 API Integration Tests on Real PostgreSQL',
      },
      {
        es: '☕ Java 25 LTS + Spring Boot 4.1 + Flyway',
        en: '☕ Java 25 LTS + Spring Boot 4.1 + Flyway',
      },
      {
        es: '🏢 4 Espacios de Actividad (Ventas, Compras, Admin, Plataforma)',
        en: '🏢 4 Workspaces (Sales, Purchasing, Tenant Admin, Platform)',
      },
      {
        es: '⚡ React 19 + TanStack Query 5 + Tailwind CSS 4',
        en: '⚡ React 19 + TanStack Query 5 + Tailwind CSS 4',
      },
    ],
    highlights: [
      {
        es: 'Cuatro espacios operativos integrados según el rol y contexto del usuario: Ventas (vendedor de ruta), Compras (tienda/cliente), Administración (Tenant Admin de la distribuidora) y Plataforma (Platform Admin).',
        en: 'Four integrated operational workspaces driven by role and context: Sales (field rep), Purchasing (retail store), Administration (Distributor Tenant Admin), and Platform (Platform Admin).',
      },
      {
        es: 'Desarrollo guiado por contratos de API explícitos (Identidad, Catálogo/Pedidos, Administración/Operación) respaldados por 81 pruebas de integración con JUnit 5 y Testcontainers.',
        en: 'Contract-driven API development (Identity, Catalog/Orders, Administration/Operations) backed by 81 integration tests using JUnit 5 and Testcontainers.',
      },
      {
        es: 'Infraestructura optimizada conectando el entorno de desarrollo con PostgreSQL 17 nativo en un servidor homelab Debian mediante túnel SSH seguro y migraciones versionadas con Flyway.',
        en: 'Streamlined infrastructure connecting development to a native PostgreSQL 17 instance on a Debian homelab server via secure SSH tunneling and versioned Flyway migrations.',
      },
    ],
    stack: [
      'Java 25 LTS',
      'Spring Boot 4.1',
      'PostgreSQL 17',
      'Flyway',
      'React 19',
      'TypeScript 6',
      'TanStack Query 5',
      'JUnit 5 + Testcontainers',
    ],
    screenshots: [
      {
        id: 'ruta-1',
        urlBar: 'rutasales.app/ventas/pedidos-ruta',
        imageSrc: '/projects/rutasales/slide-1.png',
        tag: {
          es: 'CAPTURA 1 / 3 • ESPACIO DE VENTAS & PREVENTA EN CAMPO',
          en: 'SCREENSHOT 1 / 3 • FIELD SALES & PRESALES WORKSPACE',
        },
        title: {
          es: 'Toma de Pedidos en Ruta y Catálogo B2B por Proveedor',
          en: 'Field Route Order Capture & Supplier B2B Catalog',
        },
        description: {
          es: 'Interfaz ágil para el vendedor de campo con selección de cliente, precios B2B, historial de pedidos recurrentes y estado de entrega.',
          en: 'Fast field-rep interface featuring client context switching, B2B pricing, recurring order history, and fulfillment status.',
        },
        kpis: [
          { label: { es: 'Backend JDK', en: 'Backend JDK' }, value: 'Java 25 LTS' },
          { label: { es: 'Framework', en: 'Framework' }, value: 'Spring Boot 4.1' },
          { label: { es: 'Tests API', en: 'API Tests' }, value: '81 Integration Tests' },
        ],
      },
      {
        id: 'ruta-2',
        urlBar: 'rutasales.app/compras/reposicion-tienda',
        imageSrc: '/projects/rutasales/slide-2.png',
        tag: {
          es: 'CAPTURA 2 / 3 • ESPACIO DE COMPRAS (AUTOGESTIÓN TIENDA)',
          en: 'SCREENSHOT 2 / 3 • STORE PURCHASING SELF-SERVICE',
        },
        title: {
          es: 'Portal de Reposición Recurrente para Tiendas y Clientes',
          en: 'Recurring Restock Portal for Retail Stores',
        },
        description: {
          es: 'Permite a las tiendas realizar pedidos de reposición entre visitas del vendedor, manteniendo la asignación comercial.',
          en: 'Enables retail stores to place restock orders between sales rep visits while preserving commercial territory attribution.',
        },
        kpis: [
          { label: { es: 'Estado UI', en: 'UI State' }, value: 'TanStack Query 5' },
          { label: { es: 'Rutas', en: 'Routing' }, value: 'React Router 7' },
          { label: { es: 'Estilos', en: 'Styling' }, value: 'Tailwind CSS 4' },
        ],
      },
      {
        id: 'ruta-3',
        urlBar: 'rutasales.app/admin/operacion-distribuidora',
        imageSrc: '/projects/rutasales/slide-3.png',
        tag: {
          es: 'CAPTURA 3 / 3 • ADMINISTRACIÓN DE TENANT & PLATAFORMA',
          en: 'SCREENSHOT 3 / 3 • TENANT & PLATFORM ADMINISTRATION',
        },
        title: {
          es: 'Control de Catálogo, Vendedores, Clientes y Multi-Tenancy B2B',
          en: 'Catalog, Sales Team, Client & B2B Multi-Tenancy Control',
        },
        description: {
          es: 'Gestión de usuarios, relaciones proveedor-cliente y monitoreo de pedidos centralizados para la distribuidora.',
          en: 'User management, supplier-client relationship mapping, and centralized order operations for distributors.',
        },
        kpis: [
          { label: { es: 'Base de Datos', en: 'Database' }, value: 'PostgreSQL 17' },
          { label: { es: 'Migraciones', en: 'Migrations' }, value: 'Flyway SQL' },
          { label: { es: 'Infraestructura', en: 'Infrastructure' }, value: 'Debian Homelab SSH' },
        ],
      },
    ],
    architecture: {
      layers: [
        {
          step: '01',
          layer: { es: '4 ESPACIOS DE ACTIVIDAD WEB', en: '4 ROLE ACTIVITY WORKSPACES' },
          title: 'React 19 + TanStack Query 5',
          description: {
            es: 'SPA con selector inteligente de contexto (Ventas, Compras, Administración y Plataforma) y pruebas en Vitest.',
            en: 'SPA with smart context switching (Sales, Purchasing, Tenant Admin, and Platform Admin) and Vitest test coverage.',
          },
          techs: ['React 19', 'TypeScript 6', 'TanStack Query 5', 'Tailwind 4'],
        },
        {
          step: '02',
          layer: { es: 'API REST GUIADA POR CONTRATOS', en: 'CONTRACT-DRIVEN REST API' },
          title: 'Spring Boot 4.1 (Java 25 LTS)',
          description: {
            es: 'Hitos 1 a 4 completados bajo contratos estrictos de Identidad, Catálogo/Pedidos y Administración.',
            en: 'Milestones 1–4 implemented under strict API contracts for Identity, Catalog/Orders, and Administration.',
          },
          techs: ['Java 25 LTS', 'Spring Boot 4.1.1', 'Spring Data JPA', 'Bean Validation'],
        },
        {
          step: '03',
          layer: { es: 'EVOLUCIÓN DE ESQUEMA & DATOS', en: 'SCHEMA EVOLUTION & DATA' },
          title: 'PostgreSQL 17 + Flyway',
          description: {
            es: 'Modelo relacional B2B multi-actor con migraciones versionadas en Flyway sobre PostgreSQL 17 nativo en Debian.',
            en: 'Multi-actor B2B relational model with versioned Flyway migrations running on native Debian PostgreSQL 17.',
          },
          techs: ['PostgreSQL 17', 'Flyway', 'Debian Homelab SSH'],
        },
        {
          step: '04',
          layer: { es: 'VERIFICACIÓN DE INTEGRACIÓN REAL', en: 'REAL INTEGRATION VERIFICATION' },
          title: '81 Tests (JUnit 5 + Testcontainers)',
          description: {
            es: 'Cada endpoint y regla de autorización entre proveedores y tiendas se valida contra una instancia real de PostgreSQL.',
            en: 'Every endpoint and supplier-store authorization rule is verified against a real PostgreSQL instance.',
          },
          techs: ['JUnit 5', 'Testcontainers', 'Vitest', 'Testing Library'],
        },
      ],
      decisions: [
        {
          question: {
            es: '¿Por qué separar la experiencia en 4 Espacios de Actividad explícitos en lugar de un único menú genérico?',
            en: 'Why separate the UX into 4 explicit Activity Workspaces instead of a single generic menu?',
          },
          answer: {
            es: 'En el comercio B2B una misma persona o cuenta puede actuar en distintos contextos (proveedor, vendedor en ruta o comprador). Mostrar siempre el contexto activo (proveedor y tienda) en la barra superior elimina errores operativos al cargar pedidos.',
            en: 'In B2B commerce, users operate across distinct contexts (supplier admin, field rep, or store buyer). Surfacing the active supplier/client context in the top bar eliminates operational errors during order entry.',
          },
        },
        {
          question: {
            es: '¿Por qué migrar el entorno de base de datos a PostgreSQL 17 nativo en un Homelab Debian por túnel SSH?',
            en: 'Why run PostgreSQL 17 natively on a Debian Homelab over an SSH tunnel?',
          },
          answer: {
            es: 'Reduce drásticamente el consumo de memoria RAM local frente a múltiples contenedores pesados, manteniendo un entorno Linux real y persistente mientras las pruebas automatizadas siguen usando Testcontainers aislados.',
            en: 'It significantly reduces local RAM overhead compared to running heavy local containers while providing a persistent Linux database environment, whereas automated tests continue using isolated Testcontainers.',
          },
        },
      ],
    },
  },
];

export const EXPLORER_PROJECTS: ExplorerProject[] = [
  {
    id: 'neonvibe',
    category: 'saas',
    categoryLabel: { es: 'Streaming & Web App', en: 'Streaming & Web App' },
    statusBadge: { es: 'v0.4 Desplegado en Debian', en: 'v0.4 Deployed on Debian' },
    title: 'NeonVibe — Self-Hosted Music Streaming Server',
    subtitle: {
      es: 'Servidor de música personal tipo Spotify con radio por similitud, letras y escáner de biblioteca',
      en: 'Spotify-style personal music streaming server featuring similarity radio, lyrics, and library scanner',
    },
    description: {
      es: 'Plataforma de streaming musical self-hosted con escáner de biblioteca, listas de reproducción, edición de metadata desde la UI, subida de audio, scrobbling y radio por similitud. Desplegado en Debian Trixie con pruebas automatizadas y CI.',
      en: 'Self-hosted music streaming platform featuring library scanning, playlists, UI metadata editing, audio uploads, scrobbling, and similarity radio. Deployed on Debian Trixie with automated tests and CI.',
    },
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Debian Trixie', 'CI/CD'],
    highlightMetric: {
      es: 'Streaming de audio + Edición de metadata en vivo',
      en: 'Audio streaming + Live UI metadata editing',
    },
  },
  {
    id: 'sf-jfx',
    category: 'java-desktop',
    categoryLabel: { es: 'Java Core & Desktop POS', en: 'Java Core & Desktop POS' },
    statusBadge: { es: 'Maven Multi-Módulo', en: 'Multi-Module Maven' },
    title: 'SF-JFX — Sistema POS & Facturación para Supermercados',
    subtitle: {
      es: 'Punto de venta, inventario, CxC y facturación electrónica SRI simulada en JavaFX + PostgreSQL',
      en: 'Point of sale, inventory, accounts receivable, and simulated SRI electronic invoicing in JavaFX + PostgreSQL',
    },
    description: {
      es: 'Sistema de facturación de escritorio para supermercados y minimercados organizado como proyecto Maven multi-módulo (`core` para dominio/negocio, `ui` para interfaz JavaFX), conectado a PostgreSQL mediante JDBC puro.',
      en: 'Desktop billing and POS system for supermarkets organized as a multi-module Maven project (`core` for domain logic, `ui` for JavaFX interface), backed by PostgreSQL over pure JDBC.',
    },
    stack: ['Java Core', 'JavaFX', 'JDBC', 'PostgreSQL', 'Maven Multi-Module', 'POS / SRI'],
    highlightMetric: {
      es: 'Arquitectura limpia separando Core de Dominio e Interfaz JavaFX',
      en: 'Clean multi-module separation between Domain Core and JavaFX UI',
    },
  },
  {
    id: 'panaderia-saas',
    category: 'saas',
    categoryLabel: { es: 'ERP & IA Analítica', en: 'ERP & AI Analytics' },
    statusBadge: { es: 'Monorepo Full Stack', en: 'Full-Stack Monorepo' },
    title: 'Panadería SaaS — Gestión de Producción, POS & Asistente IA',
    subtitle: {
      es: 'Control de lotes de producción artesanal, inventario de insumos, punto de venta y análisis financiero con Claude',
      en: 'Artisanal production batch tracking, ingredient inventory, POS, and financial analysis with Claude AI',
    },
    description: {
      es: 'Sistema integral para panaderías que conecta el inventario de materias primas con lotes de producción diaria, ventas en mostrador, control financiero y un asistente de análisis operativo impulsado por IA (Claude).',
      en: 'End-to-end bakery management system connecting raw ingredient inventory with daily production batches, counter POS sales, financial tracking, and an operational AI assistant powered by Claude.',
    },
    stack: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Claude AI'],
    highlightMetric: {
      es: 'Trazabilidad desde lotes de insumos hasta análisis financiero con IA',
      en: 'Traceability from ingredient batches to AI-assisted financial analytics',
    },
  },
  {
    id: 'my-book',
    category: 'saas',
    categoryLabel: { es: 'Productividad & Datos', en: 'Productivity & Data' },
    statusBadge: { es: 'Funcional • React 19', en: 'Functional • React 19' },
    title: 'My-Book — Gestor Personal de Biblioteca & Analítica de Lectura',
    subtitle: {
      es: 'Integración con Google Books API, reseñas, etiquetas y dashboard estadístico interactivo',
      en: 'Google Books API integration, reviews, custom tags, and interactive reading analytics dashboard',
    },
    description: {
      es: 'Aplicación web full-stack para catalogar y analizar tu biblioteca personal de lectura: búsqueda automática de portadas y metadatos en Google Books, control de estados de lectura, calificaciones y gráficos de progreso.',
      en: 'Full-stack web application to catalog and analyze your personal reading library: automated cover and metadata lookup via Google Books, reading state tracking, ratings, and progress charts.',
    },
    stack: ['FastAPI', 'SQLite', 'React 19', 'TypeScript', 'Tailwind / Shadcn', 'Google Books API'],
    highlightMetric: {
      es: 'Búsqueda externa en Google Books + Dashboard visual de métricas',
      en: 'External Google Books lookup + Visual metrics dashboard',
    },
  },
  {
    id: 'eventcart',
    category: 'indie-lab',
    categoryLabel: { es: 'Laboratorio de Sistemas Distribuidos', en: 'Distributed Systems Lab' },
    statusBadge: { es: 'En Desarrollo • Kafka Lab', en: 'In Progress • Kafka Lab' },
    title: 'EventCart — Motor de Lanzamientos Flash con Apache Kafka',
    subtitle: {
      es: 'Laboratorio de arquitectura orientada a eventos: reserva atómica de stock, Outbox Transaccional y DLQ',
      en: 'Event-driven architecture lab: atomic stock reservation, Transactional Outbox, and Dead Letter Queues',
    },
    description: {
      es: 'Proyecto de estudio profundo en ingeniería de eventos para lanzamientos de productos de stock limitado sin sobreventa, explorando monolito modular en Spring Boot + Kafka con consumidores idempotentes y patrón Outbox.',
      en: 'Deep-dive event engineering lab for limited-stock product drops without overselling, exploring a modular Spring Boot monolith + Apache Kafka with idempotent consumers and the Transactional Outbox pattern.',
    },
    stack: ['Java', 'Spring Boot', 'Apache Kafka', 'Transactional Outbox', 'PostgreSQL', 'React + TS'],
    highlightMetric: {
      es: 'Laboratorio activo de patrones distribuidos (Outbox + Idempotencia + DLQ)',
      en: 'Active distributed patterns lab (Outbox + Idempotency + DLQ)',
    },
  },
  {
    id: 'diez-orbitas',
    category: 'indie-lab',
    categoryLabel: { es: 'Game Dev & Pixel Art', en: 'Game Dev & Pixel Art' },
    statusBadge: { es: 'En Desarrollo • Godot 4', en: 'In Progress • Godot 4' },
    title: 'Diez Órbitas — Videojuego 2D de Acción Espacial en Godot 4',
    subtitle: {
      es: 'Aventura lateral retro sobre un cazarrecompensas interplanetario con arte original y sistemas en GDScript',
      en: 'Retro side-scrolling space bounty hunter adventure featuring original pixel art and GDScript combat systems',
    },
    description: {
      es: 'Proyecto creativo de ingeniería de videojuegos en Godot 4: arquitectura de máquinas de estados para movimiento y combate 2D, hub espacial, viaje entre planetas y pipeline de arte en Pixelorama.',
      en: 'Creative game engineering project in Godot 4 featuring 2D movement and combat state machines, a playable spacecraft hub, interplanetary travel, and a custom Pixelorama art pipeline.',
    },
    stack: ['Godot 4', 'GDScript', '2D Physics & State Machines', 'Pixelorama MCP'],
    highlightMetric: {
      es: 'Ingeniería creativa: física 2D, máquinas de estados de combate y pixel art',
      en: 'Creative engineering: 2D physics, combat state machines, and pixel art',
    },
  },
];

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    id: 'backend-arch',
    code: 'PILAR 01 // BACKEND & ARQUITECTURA',
    title: {
      es: 'Desarrollo Backend, APIs & Arquitectura de Dominio',
      en: 'Backend Engineering, APIs & Domain Architecture',
    },
    subtitle: {
      es: 'Diseño de sistemas mantenibles, contratos de API estrictos, seguridad y máquinas de estados.',
      en: 'Maintainable system design, strict API contracts, security, and domain state machines.',
    },
    skills: [
      {
        name: 'Java (21 / 25 LTS) & Spring Boot (3.5 / 4.x)',
        detail: {
          es: 'APIs REST, Spring WebFlux (SSE), Spring Data JPA/Hibernate, Bean Validation, máquinas de estados y monolitos modulares.',
          en: 'REST APIs, Spring WebFlux (SSE), Spring Data JPA/Hibernate, Bean Validation, state machines, and modular monoliths.',
        },
        provenIn: ['Facturación Médica (SFM)', 'ClassroomIQ', 'RutaSales', 'NeonVibe'],
      },
      {
        name: 'Python (3.11 / 3.12) & FastAPI (ASGI)',
        detail: {
          es: ' Arquitecturas asíncronas de alto rendimiento, SQLAlchemy Async, WebSockets por tenant y workers desacoplados.',
          en: 'High-performance async architectures, SQLAlchemy Async, tenant-scoped WebSockets, and decoupled background workers.',
        },
        provenIn: ['Ritmuvia SaaS', 'Omnichannel CRM', 'Panadería SaaS', 'My-Book'],
      },
      {
        name: 'Spring Security, JWT & Control de Acceso (RBAC)',
        detail: {
          es: 'Autenticación stateless, permisos granulares por rol/espacio de actividad y auditoría dual de operaciones críticas.',
          en: 'Stateless authentication, granular role/workspace permissions, and dual audit logging for critical operations.',
        },
        provenIn: ['Facturación Médica (SFM)', 'Ritmuvia SaaS', 'RutaSales', 'ClassroomIQ'],
      },
    ],
  },
  {
    id: 'data-multitenant',
    code: 'PILAR 02 // DATOS, MULTI-TENANCY & EVENTOS',
    title: {
      es: 'Ingeniería de Bases de Datos, Multi-Tenancy & Caché',
      en: 'Database Engineering, Multi-Tenancy & Caching',
    },
    subtitle: {
      es: 'Modelado relacional avanzado, aislamiento de datos en motor SQL y mensajería asíncrona.',
      en: 'Advanced relational modeling, database-level tenant isolation, and asynchronous messaging.',
    },
    skills: [
      {
        name: 'PostgreSQL (15 / 16 / 17) & Row Level Security (RLS)',
        detail: {
          es: 'Aislamiento multi-tenant nativo con políticas RLS, índices compuestos, `btree_gist` y tuning de consultas.',
          en: 'Native multi-tenant isolation via RLS policies, composite indexing, `btree_gist`, and query optimization.',
        },
        provenIn: ['Ritmuvia SaaS', 'Omnichannel CRM', 'RutaSales', 'Facturación Médica'],
      },
      {
        name: ' Búsqueda Vectorial con pgvector',
        detail: {
          es: 'Almacenamiento y consulta de embeddings semánticos para historiales clínicos, rúbricas académicas y bases de conocimiento.',
          en: 'Storage and similarity querying of semantic embeddings for clinical records, academic rubrics, and knowledge bases.',
        },
        provenIn: ['Facturación Médica (SFM)', 'ClassroomIQ', 'Omnichannel CRM'],
      },
      {
        name: 'Redis (Cache, Streams & Pub/Sub) + Flyway',
        detail: {
          es: 'Colas de trabajos de IA con Redis Streams, distribución de eventos en tiempo real y migraciones SQL deterministas con Flyway.',
          en: 'AI job queues via Redis Streams, real-time event broadcasting, and deterministic SQL schema migrations with Flyway.',
        },
        provenIn: ['Omnichannel CRM', 'Facturación Médica (SFM)', 'RutaSales'],
      },
    ],
  },
  {
    id: 'applied-ai',
    code: 'PILAR 03 // IA APLICADA & AUTOMATIZACIÓN',
    title: {
      es: 'IA Aplicada en Producción (RAG, Tool Calling & Visión)',
      en: 'Production Applied AI (RAG, Tool Calling & Computer Vision)',
    },
    subtitle: {
      es: 'Integración de LLMs con trazabilidad, salidas tipadas y evidencia citada sin cajas negras.',
      en: 'LLM integration featuring traceability, strongly-typed outputs, and cited evidence without black boxes.',
    },
    skills: [
      {
        name: 'Arquitecturas RAG & Evidencia Citada',
        detail: {
          es: 'Recuperación semántica con embeddings (Gemini / SentenceTransformers) conectada a generación con citas verificables.',
          en: 'Semantic retrieval using embeddings (Gemini / SentenceTransformers) paired with verifiable citation generation.',
        },
        provenIn: ['ClassroomIQ', 'Facturación Médica (SFM)', 'Omnichannel CRM'],
      },
      {
        name: 'Tool Calling & Salidas Estructuradas (Claude / Spring AI)',
        detail: {
          es: 'Ejecución controlada de herramientas de dominio y respuestas validadas por esquema (ej. clasificación clínica ICD-10).',
          en: 'Controlled domain tool execution and schema-validated outputs (e.g., clinical ICD-10 classification).',
        },
        provenIn: ['Facturación Médica (SFM)', 'Panadería SaaS'],
      },
      {
        name: 'Deep Learning, Visión Artificial, ASR & Detección de Anomalías',
        detail: {
          es: 'Isolation Forest en telemetría eólica SCADA (Python/scikit-learn) y redes profundas para atención visual y habla (Robot Volky).',
          en: 'Isolation Forest on wind turbine SCADA telemetry (Python/scikit-learn) and deep networks for visual attention & ASR (Volky Robot).',
        },
        provenIn: ['ELECAUSTRO SCADA', 'Tesis Robot Volky'],
      },
    ],
  },
  {
    id: 'cloud-testing',
    code: 'PILAR 04 // TESTING, CLOUD & FULL STACK UI',
    title: {
      es: 'Pruebas Automatizadas, Cloud DevOps & Frontend React',
      en: 'Automated Testing, Cloud DevOps & React Frontend',
    },
    subtitle: {
      es: 'Más de 1,850 pruebas automatizadas escritas, pipelines CI/CD y experiencias web modernas.',
      en: 'Over 1,850 automated tests written, CI/CD pipelines, and modern web interfaces.',
    },
    skills: [
      {
        name: 'JUnit 5, Testcontainers, pytest & Playwright E2E',
        detail: {
          es: 'Pruebas de integración sobre bases de datos reales en contenedores efímeros y suites E2E completas por rol.',
          en: 'Integration tests against real databases in ephemeral containers plus comprehensive role-based E2E suites.',
        },
        provenIn: ['Facturación Médica (~1,110)', 'Ritmuvia (665)', 'RutaSales (81)', 'ClassroomIQ'],
      },
      {
        name: 'Docker, GitHub Actions CI/CD, Google Cloud Run & Linux',
        detail: {
          es: 'Contenerización, despliegues serverless en GCP Cloud Run, Vercel, Neon, Firebase y administración de servidores Debian.',
          en: 'Containerization, serverless deployments on GCP Cloud Run, Vercel, Neon, Firebase, and Debian Linux server administration.',
        },
        provenIn: ['Ritmuvia SaaS', 'Omnichannel CRM', 'RutaSales Homelab', 'NeonVibe'],
      },
      {
        name: 'React 19, Next.js 14, TypeScript & Tailwind CSS',
        detail: {
          es: 'Interfaces limpias orientadas a operaciones complejas, TanStack Query, SSE streaming y componentes accesibles.',
          en: 'Clean interfaces built for complex operational workflows, TanStack Query, SSE streaming, and accessible components.',
        },
        provenIn: ['Todos los sistemas Full Stack'],
      },
    ],
  },
];

/**
 * Sección escalable de Certificaciones y Formación Continua.
 * Felipe: Puedes agregar fácilmente nuevos certificados en este arreglo.
 */
export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'cert-fem-ts-react',
    provider: 'Frontend Masters',
    title: {
      es: 'Especialización en JavaScript, TypeScript Moderno, React & Next.js',
      en: 'Specialization in JavaScript, Modern TypeScript, React & Next.js',
    },
    focusAreas: ['TypeScript Avanzado', 'React 19 Patterns', 'Next.js Architecture', 'State Management'],
    status: { es: 'Completado', en: 'Completed' },
    dateLabel: '2025 – 2026',
  },
  {
    id: 'cert-udemy-spring-java',
    provider: 'Udemy — Ingeniería Backend',
    title: {
      es: 'Desarrollo Backend Empresarial con Java, Spring Boot & Spring Security',
      en: 'Enterprise Backend Development with Java, Spring Boot & Spring Security',
    },
    focusAreas: ['Java 21', 'Spring Boot 3/4', 'Spring Security & JWT', 'JPA / Hibernate', 'REST APIs'],
    status: { es: 'Completado', en: 'Completed' },
    dateLabel: '2025',
  },
  {
    id: 'cert-udemy-python-fastapi',
    provider: 'Udemy — Python & APIs Asíncronas',
    title: {
      es: 'Arquitectura de APIs Modernas con Python 3, FastAPI & PostgreSQL',
      en: 'Modern API Architecture with Python 3, FastAPI & PostgreSQL',
    },
    focusAreas: ['Python 3.12', 'FastAPI Async', 'SQLAlchemy', 'Pydantic', 'Automated Testing'],
    status: { es: 'Completado', en: 'Completed' },
    dateLabel: '2025',
  },
  {
    id: 'cert-ieee-author',
    provider: 'IEEE GPECOM 2026 — Naples, Italy',
    title: {
      es: 'Co-Autor Publicado: Conceptual Modeling and Methodology for a Wind Power Digital Twin',
      en: 'Published Co-Author: Conceptual Modeling and Methodology for a Wind Power Digital Twin',
    },
    focusAreas: ['Digital Twins', 'Wind Power PMSG', 'SCADA Telemetry', 'IEEE Xplore DOI'],
    status: { es: 'Publicado con DOI', en: 'Published with DOI' },
    credentialUrl: 'https://doi.org/10.1109/GPECOM70462.2026.11578476',
    dateLabel: '2026',
  },
];
