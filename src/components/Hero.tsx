import React, { useState } from 'react';
import {
  ArrowDownRight,
  Award,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Mic,
} from 'lucide-react';
import { Language, PROFILE_INFO, UI_STRINGS } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
}

const CORE_STACK_CHIPS = [
  'Java 21 / 25 LTS',
  'Spring Boot 3.5 / 4',
  'PostgreSQL + RLS + pgvector',
  'Python / FastAPI',
  'React 19 + TypeScript',
  'Redis Streams',
  'Testcontainers & Playwright',
];

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const t = UI_STRINGS[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const metrics = [
    {
      value: t.metric1Value,
      label: t.metric1Label,
      sub: t.metric1Sub,
    },
    {
      value: t.metric2Value,
      label: t.metric2Label,
      sub: t.metric2Sub,
    },
    {
      value: t.metric3Value,
      label: t.metric3Label,
      sub: t.metric3Sub,
      href: PROFILE_INFO.ieeeDoiUrl,
    },
    {
      value: t.metric4Value,
      label: t.metric4Label,
      sub: t.metric4Sub,
    },
  ];

  return (
    <section
      id="top"
      className="border-b py-12 sm:py-16 lg:py-20"
      style={{ borderColor: 'var(--border-hairline)' }}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Columna Izquierda: Propuesta de Valor (7 cols) */}
          <div className="lg:col-span-7">
            {/* Pill de Estado */}
            <div
              className="font-mono-tech mb-5 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[11.5px] font-medium"
              style={{
                backgroundColor: 'var(--emerald-bg)',
                borderColor: 'var(--emerald-border)',
                color: 'var(--emerald-text)',
              }}
            >
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--emerald-dot)' }}
                aria-hidden="true"
              />
              <span>{t.heroBadge}</span>
            </div>

            {/* Titular Principal */}
            <h1
              className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[46px] lg:leading-[1.12]"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.heroTitlePrefix}
              <span style={{ color: 'var(--accent-primary)' }}>
                {t.heroTitleHighlight}
              </span>
              {t.heroTitleSuffix}
            </h1>

            {/* Descripción */}
            <p
              className="mb-7 max-w-2xl text-base sm:text-[17px] leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.heroDescription}
            </p>

            {/* Botones de Acción */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos-elite"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:opacity-95"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <span>{t.heroPrimaryCta}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold cursor-pointer transition-colors"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                {copied ? (
                  <>
                    <Check
                      className="h-4 w-4"
                      style={{ color: 'var(--emerald-text)' }}
                      aria-hidden="true"
                    />
                    <span style={{ color: 'var(--emerald-text)' }}>
                      {t.heroEmailCopied}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span>{t.heroCopyEmail}</span>
                  </>
                )}
              </button>

              <a
                href={PROFILE_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <span>GitHub</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
              </a>

              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <span>LinkedIn</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
              </a>

              <a
                href={PROFILE_INFO.ieeeDoiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-xs font-semibold transition-colors"
                style={{
                  backgroundColor: 'var(--amber-bg)',
                  borderColor: 'var(--amber-border)',
                  color: 'var(--amber-text)',
                }}
                title="IEEE GPECOM 2026 Publication DOI"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                <span>IEEE DOI ↗</span>
              </a>
            </div>

            {/* Core Stack Chips */}
            <div
              className="flex flex-wrap items-center gap-2 border-t border-dashed pt-5"
              style={{ borderColor: 'var(--border-strong)' }}
            >
              <span
                className="font-mono-tech mr-1 text-[11px] font-semibold"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.coreStackLabel}
              </span>
              {CORE_STACK_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="font-mono-tech rounded-md border px-2.5 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-hairline)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Fotografía Opción A (Editorial Volky) (5 cols) */}
          <div className="lg:col-span-5">
            <div
              className="overflow-hidden rounded-2xl border transition-all"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Barra Técnica Superior */}
              <div
                className="font-mono-tech flex items-center justify-between border-b px-4 py-2.5 text-[11px] font-medium"
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  borderColor: 'var(--border-hairline)',
                  color: 'var(--text-muted)',
                }}
              >
                <span>{t.photoHeaderLeft}</span>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  />
                  {t.photoHeaderRight}
                </span>
              </div>

              {/* Imagen Principal (me/yo.jpg) */}
              <div className="relative aspect-4/4.1 w-full overflow-hidden bg-slate-900">
                <img
                  src={PROFILE_INFO.photoUrl}
                  alt="Diego Felipe Peralta exponiendo el sistema de Atención Visual Activa y Reconocimiento de Habla para el robot educativo Volky"
                  className="h-full w-full object-cover object-[center_14%] transition-transform duration-500 hover:scale-[1.02]"
                />
                {/* Sutil insignia flotante sobre la foto */}
                <div
                  className="font-mono-tech absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border px-3 py-1.5 text-[11px] backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.78)',
                    borderColor: 'rgba(255, 255, 255, 0.16)',
                    color: '#F8FAFC',
                  }}
                >
                  <span className="inline-flex items-center gap-1.5 font-semibold text-blue-300">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    Ing. Ciencias de la Computación
                  </span>
                  <span className="text-slate-300">UPS • Cuenca</span>
                </div>
              </div>

              {/* Pie de Foto Contextual (Volky) */}
              <div
                className="flex items-start gap-3 border-t px-4 py-3.5"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-hairline)',
                }}
              >
                <div
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border"
                  style={{
                    backgroundColor: 'var(--accent-soft)',
                    borderColor: 'var(--accent-border)',
                    color: 'var(--accent-primary)',
                  }}
                >
                  <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                <p
                  className="font-mono-tech text-[11.5px] leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <strong style={{ color: 'var(--text-primary)' }}>
                    {t.photoCaptionTitle}
                  </strong>{' '}
                  {t.photoCaptionBody}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior de 4 Métricas de Evidencia de Ingeniería */}
        <div
          className="mt-12 grid grid-cols-1 overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-4"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-strong)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {metrics.map((m, idx) => {
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono-tech text-2xl sm:text-[26px] font-bold tracking-tight"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {m.value}
                  </span>
                  {m.href ? (
                    <ArrowDownRight
                      className="h-4 w-4 -rotate-90 opacity-60"
                      style={{ color: 'var(--accent-primary)' }}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <div
                  className="mt-1 text-sm font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {m.label}
                </div>
                <div
                  className="font-mono-tech mt-0.5 text-[11px]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {m.sub}
                </div>
              </>
            );

            return m.href ? (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-5 transition-colors hover:opacity-95 ${
                  idx < metrics.length - 1 ? 'border-b sm:border-r lg:border-b-0' : ''
                }`}
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                {content}
              </a>
            ) : (
              <div
                key={m.label}
                className={`p-5 ${
                  idx < metrics.length - 1 ? 'border-b sm:border-r lg:border-b-0' : ''
                }`}
                style={{ borderColor: 'var(--border-hairline)' }}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
