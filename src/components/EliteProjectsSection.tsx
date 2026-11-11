import React, { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  Image as ImageIcon,
  Layers,
  Maximize2,
  X,
} from 'lucide-react';
import {
  ELITE_PROJECTS,
  EliteProject,
  Language,
  ProjectScreenshot,
  UI_STRINGS,
} from '../data/portfolioData';

interface EliteProjectsSectionProps {
  lang: Language;
  forcedArchProjectId?: string | null;
}

interface LightboxState {
  projectTitle: string;
  slide: ProjectScreenshot;
  hasRealImage: boolean;
}

const ProjectCard: React.FC<{
  project: EliteProject;
  lang: Language;
  forceArchTab: boolean;
  onOpenLightbox: (state: LightboxState) => void;
}> = ({ project, lang, forceArchTab, onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'arch'>('overview');
  const [slideIdx, setSlideIdx] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const t = UI_STRINGS[lang];

  useEffect(() => {
    if (forceArchTab) {
      setActiveTab('arch');
    }
  }, [forceArchTab]);

  const currentSlide = project.screenshots[slideIdx] || project.screenshots[0];
  const hasRealImage = Boolean(currentSlide?.imageSrc && loadedImages[currentSlide.id]);

  const handlePrevSlide = () => {
    setSlideIdx((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setSlideIdx((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <article
      id={`proyecto-${project.id}`}
      className="overflow-hidden rounded-2xl border transition-shadow"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-strong)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Barra Superior de Tarjeta */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 sm:px-6"
        style={{
          backgroundColor: 'var(--bg-subtle)',
          borderColor: 'var(--border-hairline)',
        }}
      >
        <div className="font-mono-tech flex flex-wrap items-center gap-3 text-xs">
          <span
            className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
            style={
              project.statusType === 'live'
                ? {
                    backgroundColor: 'var(--emerald-bg)',
                    borderColor: 'var(--emerald-border)',
                    color: 'var(--emerald-text)',
                  }
                : {
                    backgroundColor: 'var(--accent-soft)',
                    borderColor: 'var(--accent-border)',
                    color: 'var(--accent-primary)',
                  }
            }
          >
            {project.statusLabel[lang]}
          </span>
          <span
            className="font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.domainLabel[lang]}
          </span>
        </div>

        {/* Selector de Vista: Impacto & Capturas vs. Arquitectura */}
        <div
          className="inline-flex rounded-lg border p-1 gap-1"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-strong)',
          }}
          role="tablist"
          aria-label={project.title[lang]}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            className="font-mono-tech rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
            style={
              activeTab === 'overview'
                ? {
                    backgroundColor: 'var(--accent-primary)',
                    color: '#FFFFFF',
                  }
                : {
                    backgroundColor: 'transparent',
                    color: 'var(--text-secondary)',
                  }
            }
          >
            {t.tabOverview} ({project.screenshots.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'arch'}
            onClick={() => setActiveTab('arch')}
            className="font-mono-tech rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
            style={
              activeTab === 'arch'
                ? {
                    backgroundColor: 'var(--accent-primary)',
                    color: '#FFFFFF',
                  }
                : {
                    backgroundColor: 'transparent',
                    color: 'var(--text-secondary)',
                  }
            }
          >
            {t.tabArch}
          </button>
        </div>
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-5 sm:p-7">
        {/* Fila de Título y Enlaces */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3
              className="text-xl sm:text-2xl font-extrabold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title[lang]}
            </h3>
            <p
              className="mt-1 text-sm font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              {project.subtitle[lang]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white shadow-xs transition-opacity hover:opacity-95"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <span>{t.btnLiveDemo}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.btnSourceCode}</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* VISTA 1: LAYOUT DIVIDIDO (IMPACTO A LA IZQUIERDA + CARRUSEL DE CAPTURAS A LA DERECHA) */}
        {activeTab === 'overview' ? (
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12">
            {/* Columna Izquierda: Resumen, Insignias de Evidencia, Bullets y Stack (7 cols) */}
            <div className="lg:col-span-7">
              <p
                className="mb-4 text-[14.5px] leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.summary[lang]}
              </p>

              {/* Insignias de Evidencia de Ingeniería */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.evidenceBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="font-mono-tech inline-flex items-center rounded-md border px-2.5 py-1 text-[11.5px] font-semibold"
                    style={{
                      backgroundColor: 'var(--accent-soft)',
                      borderColor: 'var(--accent-border)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {badge[lang]}
                  </span>
                ))}
              </div>

              {/* Puntos Técnicos Clave */}
              <ul className="mb-6 space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[13.5px] leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="font-mono-tech mt-0.5 font-bold"
                      style={{ color: 'var(--accent-primary)' }}
                      aria-hidden="true"
                    >
                      ▹
                    </span>
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>

              {/* Chips de Stack */}
              <div
                className="flex flex-wrap items-center gap-1.5 border-t pt-4"
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-tech rounded-md border px-2.5 py-1 text-[11.5px] font-medium"
                    style={{
                      backgroundColor: 'var(--bg-canvas)',
                      borderColor: 'var(--border-hairline)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Marco de Navegador con Carrusel de Capturas (5 cols) */}
            <div className="lg:col-span-5">
              <div
                className="overflow-hidden rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-canvas)',
                  borderColor: 'var(--border-strong)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Barra de Ventana de Navegador */}
                <div
                  className="flex items-center justify-between gap-2 border-b px-3 py-2"
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderColor: 'var(--border-hairline)',
                  }}
                >
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-400/70" />
                  </div>
                  <div
                    className="font-mono-tech truncate rounded border px-2.5 py-0.5 text-[10.5px]"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-hairline)',
                      color: 'var(--text-muted)',
                      maxWidth: '250px',
                    }}
                  >
                    {currentSlide.urlBar}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        projectTitle: project.title[lang],
                        slide: currentSlide,
                        hasRealImage,
                      })
                    }
                    className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] cursor-pointer transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    title={t.btnZoomSlide}
                    aria-label={t.btnZoomSlide}
                  >
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>

                {/* Viewport de la Captura (Imagen Real en /public/projects/... o Wireframe Placeholder) */}
                <div
                  onClick={() =>
                    onOpenLightbox({
                      projectTitle: project.title[lang],
                      slide: currentSlide,
                      hasRealImage,
                    })
                  }
                  className="group relative aspect-16/10 w-full cursor-pointer overflow-hidden bg-slate-950 p-4 flex flex-col justify-between text-left"
                >
                  {/* Intento de carga silenciosa de imagen real si Felipe la coloca en /public/projects/<slug>/slide-X.png */}
                  {currentSlide.imageSrc ? (
                    <img
                      src={currentSlide.imageSrc}
                      alt={currentSlide.title[lang]}
                      onLoad={() =>
                        setLoadedImages((prev) => ({
                          ...prev,
                          [currentSlide.id]: true,
                        }))
                      }
                      onError={() =>
                        setLoadedImages((prev) => ({
                          ...prev,
                          [currentSlide.id]: false,
                        }))
                      }
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] ${
                        hasRealImage ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                      }`}
                    />
                  ) : null}

                  {/* Wireframe Placeholder Técnico de Alta Precisión (visible mientras no haya PNG real) */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(148,163,184,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.22) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  <div className="relative z-1 flex items-center justify-between gap-2">
                    <span className="font-mono-tech inline-flex items-center gap-1.5 rounded border border-blue-400/40 bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-200">
                      <ImageIcon className="h-3 w-3" aria-hidden="true" />
                      {currentSlide.tag[lang]}
                    </span>
                  </div>

                  {/* Tarjeta interna simulando UI del sistema */}
                  <div className="relative z-1 my-auto rounded-lg border border-slate-700/80 bg-slate-900/90 p-3.5 backdrop-blur-xs">
                    <div className="font-mono-tech text-xs font-bold text-white">
                      {currentSlide.title[lang]}
                    </div>
                    <p className="mt-1 text-[11.5px] leading-snug text-slate-300">
                      {currentSlide.description[lang]}
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-800 pt-2.5">
                      {currentSlide.kpis.map((kpi, kIdx) => (
                        <div key={kIdx} className="rounded bg-slate-950/80 px-2 py-1">
                          <div className="font-mono-tech text-[9.5px] text-slate-400">
                            {kpi.label[lang]}
                          </div>
                          <div className="font-mono-tech text-[10.5px] font-semibold text-blue-300 truncate">
                            {kpi.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-1 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                    <span>
                      {lang === 'es'
                        ? `Ruta lista: public${currentSlide.imageSrc}`
                        : `Ready path: public${currentSlide.imageSrc}`}
                    </span>
                    <span className="text-blue-300 group-hover:underline">
                      {t.btnZoomSlide} ↗
                    </span>
                  </div>
                </div>

                {/* Controles del Carrusel */}
                <div
                  className="flex items-center justify-between border-t px-3.5 py-2"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-hairline)',
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    {project.screenshots.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSlideIdx(idx)}
                        className="h-1.5 rounded-full transition-all cursor-pointer"
                        style={{
                          width: idx === slideIdx ? '22px' : '8px',
                          backgroundColor:
                            idx === slideIdx
                              ? 'var(--accent-primary)'
                              : 'var(--border-strong)',
                        }}
                        aria-label={`Ver captura ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrevSlide}
                      className="inline-flex h-6 w-6 items-center justify-center rounded border cursor-pointer transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-subtle)',
                        borderColor: 'var(--border-strong)',
                        color: 'var(--text-primary)',
                      }}
                      aria-label="Captura anterior"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                    <span
                      className="font-mono-tech text-[11px] font-medium px-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {slideIdx + 1}/{project.screenshots.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextSlide}
                      className="inline-flex h-6 w-6 items-center justify-center rounded border cursor-pointer transition-colors"
                      style={{
                        backgroundColor: 'var(--bg-subtle)',
                        borderColor: 'var(--border-strong)',
                        color: 'var(--text-primary)',
                      }}
                      aria-label="Siguiente captura"
                    >
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* VISTA 2: ARQUITECTURA DE 4 CAPAS + DECISIONES TÉCNICAS A ANCHO COMPLETO */
          <div className="space-y-6">
            <div
              className="rounded-xl border p-5"
              style={{
                backgroundColor: 'var(--bg-canvas)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <div
                className="font-mono-tech mb-4 flex items-center gap-2 text-xs font-bold"
                style={{ color: 'var(--accent-primary)' }}
              >
                <Layers className="h-4 w-4" aria-hidden="true" />
                <span>{t.archFlowLabel}</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {project.architecture.layers.map((layer) => (
                  <div
                    key={layer.step}
                    className="flex flex-col justify-between rounded-lg border border-t-4 p-4 transition-transform hover:-translate-y-0.5"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-strong)',
                      borderTopColor: 'var(--accent-primary)',
                    }}
                  >
                    <div>
                      <div
                        className="font-mono-tech text-[10.5px] font-semibold uppercase tracking-wider"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {layer.step} // {layer.layer[lang]}
                      </div>
                      <div
                        className="font-mono-tech mt-1 text-sm font-bold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {layer.title}
                      </div>
                      <p
                        className="mt-2 text-xs leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {layer.description[lang]}
                      </p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1 pt-2 border-t" style={{ borderColor: 'var(--border-hairline)' }}>
                      {layer.techs.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono-tech rounded px-1.5 py-0.5 text-[10px] font-medium"
                          style={{
                            backgroundColor: 'var(--accent-soft)',
                            color: 'var(--accent-primary)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decisiones de Ingeniería */}
            <div>
              <div
                className="font-mono-tech mb-3 flex items-center gap-2 text-xs font-bold"
                style={{ color: 'var(--text-muted)' }}
              >
                <Cpu className="h-4 w-4" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
                <span>{t.archDecisionsLabel}</span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project.architecture.decisions.map((dec, idx) => (
                  <div
                    key={idx}
                    className="rounded-r-xl border border-l-4 p-4"
                    style={{
                      backgroundColor: 'var(--bg-subtle)',
                      borderColor: 'var(--border-hairline)',
                      borderLeftColor: 'var(--accent-primary)',
                    }}
                  >
                    <h4
                      className="text-sm font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {dec.question[lang]}
                    </h4>
                    <p
                      className="mt-1.5 text-[13px] leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {dec.answer[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export const EliteProjectsSection: React.FC<EliteProjectsSectionProps> = ({
  lang,
  forcedArchProjectId,
}) => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const t = UI_STRINGS[lang];

  return (
    <section
      id="proyectos-elite"
      className="border-b py-16 sm:py-20"
      style={{ borderColor: 'var(--border-hairline)' }}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <div
            className="font-mono-tech mb-2 text-xs font-bold"
            style={{ color: 'var(--accent-primary)' }}
          >
            {t.eliteEyebrow}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.eliteTitle}
          </h2>
          <p
            className="mt-2 text-[15px] leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.eliteSubtitle}
          </p>
        </div>

        <div className="space-y-8">
          {ELITE_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              forceArchTab={forcedArchProjectId === project.id}
              onOpenLightbox={(state) => setLightbox(state)}
            />
          ))}
        </div>
      </div>

      {/* Modal Lightbox para ver Capturas en Grande */}
      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.slide.title[lang]}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-2xl border bg-slate-900 text-white shadow-2xl"
            style={{ borderColor: 'rgba(148, 163, 184, 0.3)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5">
              <div>
                <div className="font-mono-tech text-xs text-blue-400">
                  {lightbox.projectTitle}
                </div>
                <div className="text-sm font-bold text-white">
                  {lightbox.slide.title[lang]}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-lg border border-slate-700 p-1.5 text-slate-300 hover:bg-slate-800 cursor-pointer"
                aria-label="Cerrar vista ampliada"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6">
              {lightbox.hasRealImage && lightbox.slide.imageSrc ? (
                <img
                  src={lightbox.slide.imageSrc}
                  alt={lightbox.slide.title[lang]}
                  className="max-h-[65vh] w-full rounded-lg object-contain"
                />
              ) : (
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 space-y-4">
                  <span className="font-mono-tech inline-block rounded border border-blue-400/40 bg-blue-500/20 px-2.5 py-1 text-xs text-blue-300">
                    {lightbox.slide.tag[lang]}
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    {lightbox.slide.title[lang]}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {lightbox.slide.description[lang]}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {lightbox.slide.kpis.map((kpi, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-slate-800 bg-slate-900 p-3"
                      >
                        <div className="font-mono-tech text-xs text-slate-400">
                          {kpi.label[lang]}
                        </div>
                        <div className="font-mono-tech mt-1 text-sm font-bold text-blue-400">
                          {kpi.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="font-mono-tech rounded-lg border border-dashed border-slate-700 bg-slate-900/60 p-3 text-xs text-slate-400">
                    💡 Para mostrar tu captura real aquí, guarda tu imagen en:{' '}
                    <code className="text-blue-300">
                      public{lightbox.slide.imageSrc}
                    </code>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
