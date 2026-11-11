import React from 'react';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Languages,
  ShieldCheck,
} from 'lucide-react';
import {
  CAPABILITY_PILLARS,
  CERTIFICATIONS_LIST,
  Language,
  UI_STRINGS,
} from '../data/portfolioData';

interface EngineeringMatrixSectionProps {
  lang: Language;
}

export const EngineeringMatrixSection: React.FC<
  EngineeringMatrixSectionProps
> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const isEs = lang === 'es';

  return (
    <section
      id="matriz-ingenieria"
      className="border-b py-16 sm:py-20"
      style={{ borderColor: 'var(--border-hairline)' }}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        {/* Parte 1: Matriz de Capacidades en 4 Pilares */}
        <div className="mb-10 max-w-3xl">
          <div
            className="font-mono-tech mb-2 text-xs font-bold"
            style={{ color: 'var(--accent-primary)' }}
          >
            {t.matrixEyebrow}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.matrixTitle}
          </h2>
          <p
            className="mt-2 text-[15px] leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.matrixSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CAPABILITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl border p-6 sm:p-7"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                className="font-mono-tech text-xs font-bold"
                style={{ color: 'var(--accent-primary)' }}
              >
                {pillar.code}
              </div>
              <h3
                className="mt-1 text-lg sm:text-xl font-extrabold"
                style={{ color: 'var(--text-primary)' }}
              >
                {pillar.title[lang]}
              </h3>
              <p
                className="mt-1 text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                {pillar.subtitle[lang]}
              </p>

              <div
                className="mt-5 space-y-4 border-t pt-5"
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                {pillar.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border p-4"
                    style={{
                      backgroundColor: 'var(--bg-canvas)',
                      borderColor: 'var(--border-hairline)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        className="font-mono-tech text-xs sm:text-[13px] font-bold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {skill.name}
                      </h4>
                      <CheckCircle2
                        className="h-4 w-4 shrink-0"
                        style={{ color: 'var(--emerald-text)' }}
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className="mt-1.5 text-xs leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {skill.detail[lang]}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span
                        className="font-mono-tech text-[10px] font-semibold"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {t.provenInLabel}
                      </span>
                      {skill.provenIn.map((projName) => (
                        <span
                          key={projName}
                          className="font-mono-tech rounded border px-2 py-0.5 text-[10.5px] font-medium"
                          style={{
                            backgroundColor: 'var(--accent-soft)',
                            borderColor: 'var(--accent-border)',
                            color: 'var(--accent-primary)',
                          }}
                        >
                          {projName}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Parte 2: Certificaciones, Cursos & Idiomas */}
        <div className="mt-16 pt-12 border-t" style={{ borderColor: 'var(--border-hairline)' }}>
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div
                className="font-mono-tech mb-2 text-xs font-bold"
                style={{ color: 'var(--accent-primary)' }}
              >
                {t.certsEyebrow}
              </div>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {t.certsTitle}
              </h2>
              <p
                className="mt-2 text-[15px] leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {t.certsSubtitle}
              </p>
            </div>

            {/* Badge de Idiomas */}
            <div
              className="font-mono-tech inline-flex items-center gap-2.5 self-start rounded-xl border px-4 py-2.5 text-xs font-semibold"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
              }}
            >
              <Languages
                className="h-4 w-4"
                style={{ color: 'var(--accent-primary)' }}
                aria-hidden="true"
              />
              <span>
                {isEs
                  ? 'Idiomas: Español (Nativo) • Inglés (B1 Técnico)'
                  : 'Languages: Spanish (Native) • English (B1 Working Proficiency)'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS_LIST.map((cert) => (
              <article
                key={cert.id}
                className="flex flex-col justify-between rounded-xl border p-5"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div>
                  <div className="mb-2.5 flex items-center justify-between gap-2">
                    <span
                      className="font-mono-tech inline-flex items-center gap-1 text-[11px] font-bold"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {cert.provider}
                    </span>
                    <span
                      className="font-mono-tech text-[10.5px]"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {cert.dateLabel}
                    </span>
                  </div>

                  <h3
                    className="text-sm font-bold leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {cert.title[lang]}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="font-mono-tech rounded border px-2 py-0.5 text-[10px]"
                        style={{
                          backgroundColor: 'var(--bg-canvas)',
                          borderColor: 'var(--border-hairline)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-4 flex items-center justify-between border-t pt-3"
                  style={{ borderColor: 'var(--border-hairline)' }}
                >
                  <span
                    className="font-mono-tech inline-flex items-center gap-1 text-[11px] font-semibold"
                    style={{ color: 'var(--emerald-text)' }}
                  >
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    {cert.status[lang]}
                  </span>

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-tech inline-flex items-center gap-1 text-[11px] font-semibold"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      <span>DOI</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
