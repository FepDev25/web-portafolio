import React, { useState } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  MapPin,
} from 'lucide-react';
import { Language, PROFILE_INFO, UI_STRINGS } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const t = UI_STRINGS[lang];
  const isEs = lang === 'es';

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer
      id="contacto"
      className="py-16 sm:py-20"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div
          className="rounded-2xl border p-8 sm:p-10"
          style={{
            backgroundColor: 'var(--bg-canvas)',
            borderColor: 'var(--border-strong)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div
                className="font-mono-tech mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: 'var(--emerald-bg)',
                  borderColor: 'var(--emerald-border)',
                  color: 'var(--emerald-text)',
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: 'var(--emerald-dot)' }}
                  aria-hidden="true"
                />
                <span>
                  {isEs
                    ? 'Contacto Directo para Reclutadores & Tech Leads'
                    : 'Direct Contact for Recruiters & Tech Leads'}
                </span>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {t.footerTitle}
              </h2>
              <p
                className="mt-2.5 max-w-xl text-[15px] leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {t.footerSubtitle}
              </p>

              <div
                className="font-mono-tech mt-4 flex flex-wrap items-center gap-4 text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
                  {PROFILE_INFO.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
                  {PROFILE_INFO.email}
                </span>
              </div>
            </div>

            {/* Acciones de Contacto y Descarga Dual de CV */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white cursor-pointer transition-opacity hover:opacity-95"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    <span>{t.heroEmailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span>{PROFILE_INFO.email}</span>
                  </>
                )}
              </button>

              <a
                href={PROFILE_INFO.cvFiles.es}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-xs font-bold transition-colors"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <Download className="h-4 w-4" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
                <span>CV Español (PDF)</span>
              </a>

              <a
                href={PROFILE_INFO.cvFiles.en}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-xs font-bold transition-colors"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <Download className="h-4 w-4" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
                <span>Resume English (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea final de créditos y enlaces */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row"
          style={{
            borderColor: 'var(--border-hairline)',
            color: 'var(--text-muted)',
          }}
        >
          <div className="font-mono-tech">
            © {new Date().getFullYear()} {PROFILE_INFO.name} • Java / Spring
            Boot • FastAPI • PostgreSQL • Applied AI
          </div>

          <div className="flex flex-wrap items-center gap-5 font-medium">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span>GitHub (FepDev25)</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
            <a
              href={PROFILE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
            <a
              href={PROFILE_INFO.ieeeDoiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span>IEEE GPECOM 2026 DOI</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
