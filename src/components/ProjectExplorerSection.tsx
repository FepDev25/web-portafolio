import React, { useState } from 'react';
import { Code2, ExternalLink, FolderGit2, Sparkles } from 'lucide-react';
import {
  EXPLORER_PROJECTS,
  ExplorerProject,
  Language,
  UI_STRINGS,
} from '../data/portfolioData';

interface ProjectExplorerSectionProps {
  lang: Language;
}

type FilterType = 'all' | ExplorerProject['category'];

export const ProjectExplorerSection: React.FC<ProjectExplorerSectionProps> = ({
  lang,
}) => {
  const [filter, setFilter] = useState<FilterType>('all');
  const t = UI_STRINGS[lang];

  const filters: Array<{ id: FilterType; label: string }> = [
    { id: 'all', label: t.filterAll },
    { id: 'saas', label: t.filterSaas },
    { id: 'java-desktop', label: t.filterJava },
    { id: 'indie-lab', label: t.filterIndie },
  ];

  const visibleProjects =
    filter === 'all'
      ? EXPLORER_PROJECTS
      : EXPLORER_PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="explorador"
      className="border-b py-16 sm:py-20"
      style={{ borderColor: 'var(--border-hairline)' }}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div
              className="font-mono-tech mb-2 text-xs font-bold"
              style={{ color: 'var(--accent-primary)' }}
            >
              {t.explorerEyebrow}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.explorerTitle}
            </h2>
            <p
              className="mt-2 text-[15px] leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.explorerSubtitle}
            </p>
          </div>

          {/* Botones de Filtro por Categoría */}
          <div
            className="inline-flex flex-wrap gap-1.5 rounded-xl border p-1.5"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-strong)',
            }}
            role="tablist"
            aria-label="Filtrar proyectos del explorador"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className="font-mono-tech rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
                style={
                  filter === f.id
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
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos del Explorador */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((proj) => (
            <article
              key={proj.id}
              className="flex flex-col justify-between rounded-xl border p-6 transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div>
                {/* Cabecera de Tarjeta */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span
                    className="font-mono-tech inline-flex items-center gap-1.5 text-[11px] font-semibold"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                    {proj.categoryLabel[lang]}
                  </span>
                  <span
                    className="font-mono-tech rounded-full border px-2.5 py-0.5 text-[10.5px] font-medium"
                    style={{
                      backgroundColor: 'var(--bg-subtle)',
                      borderColor: 'var(--border-hairline)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {proj.statusBadge[lang]}
                  </span>
                </div>

                <h3
                  className="text-lg font-extrabold tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {proj.title}
                </h3>
                <p
                  className="mt-1 text-xs font-semibold"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {proj.subtitle[lang]}
                </p>

                <p
                  className="mt-3 text-[13.5px] leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {proj.description[lang]}
                </p>
              </div>

              <div className="mt-5 space-y-4">
                {/* Diferencial técnico del proyecto */}
                <div
                  className="font-mono-tech flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] font-medium"
                  style={{
                    backgroundColor: 'var(--accent-soft)',
                    borderColor: 'var(--accent-border)',
                    color: 'var(--accent-primary)',
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{proj.highlightMetric[lang]}</span>
                </div>

                {/* Stack Chips */}
                <div
                  className="flex flex-wrap gap-1.5 border-t pt-3.5"
                  style={{ borderColor: 'var(--border-hairline)' }}
                >
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-tech rounded border px-2 py-0.5 text-[10.5px]"
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

                {(proj.demoUrl || proj.repoUrl) ? (
                  <div className="flex items-center gap-3 pt-1">
                    {proj.demoUrl ? (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        <span>Demo</span>
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ) : null}
                    {proj.repoUrl ? (
                      <a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>GitHub</span>
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
