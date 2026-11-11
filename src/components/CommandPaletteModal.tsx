import React, { useEffect, useRef, useState } from 'react';
import {
  Check,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  FolderGit2,
  Globe,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react';
import {
  ELITE_PROJECTS,
  EXPLORER_PROJECTS,
  Language,
  PROFILE_INFO,
  UI_STRINGS,
} from '../data/portfolioData';

interface CommandPaletteModalProps {
  isOpen: boolean;
  lang: Language;
  theme: 'light' | 'dark';
  onClose: () => void;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onJumpToEliteArchitecture: (projectId: string) => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  lang,
  theme,
  onClose,
  onToggleLang,
  onToggleTheme,
  onJumpToEliteArchitecture,
}) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = UI_STRINGS[lang];

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchingElite = ELITE_PROJECTS.filter((p) => {
    if (!q) return true;
    const text = `${p.title[lang]} ${p.subtitle[lang]} ${p.stack.join(' ')}`.toLowerCase();
    return text.includes(q);
  });

  const matchingExplorer = EXPLORER_PROJECTS.filter((p) => {
    if (!q) return false;
    const text = `${p.title} ${p.subtitle[lang]} ${p.stack.join(' ')}`.toLowerCase();
    return text.includes(q);
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/65 px-4 pt-[11vh] backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Menú Rápido de Comandos"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border shadow-2xl"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-strong)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra de Búsqueda */}
        <div
          className="flex items-center gap-3 border-b px-4 py-3.5"
          style={{ borderColor: 'var(--border-hairline)' }}
        >
          <Search
            className="h-4 w-4 shrink-0"
            style={{ color: 'var(--accent-primary)' }}
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.cmdPlaceholder}
            className="w-full bg-transparent text-sm outline-none"
            style={{ color: 'var(--text-primary)' }}
          />
          <button
            type="button"
            onClick={onClose}
            className="font-mono-tech rounded border px-1.5 py-0.5 text-[10.5px] cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              borderColor: 'var(--border-strong)',
              color: 'var(--text-muted)',
            }}
          >
            ESC
          </button>
          <button
            type="button"
            onClick={onClose}
            className="sm:hidden p-1"
            aria-label="Cerrar menú"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Lista de Resultados y Acciones */}
        <div className="max-h-[65vh] overflow-y-auto p-2.5 space-y-4">
          {/* Acciones Rápidas de Reclutador */}
          <div>
            <div
              className="font-mono-tech px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider"
              style={{ color: 'var(--text-muted)' }}
            >
              {t.cmdQuickActions}
            </div>
            <div className="mt-1 space-y-1">
              <button
                type="button"
                onClick={handleCopy}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs sm:text-[13px] font-medium cursor-pointer transition-colors hover:bg-blue-500/10"
                style={{ color: 'var(--text-primary)' }}
              >
                <span className="inline-flex items-center gap-2.5">
                  {copiedEmail ? (
                    <Check
                      className="h-4 w-4"
                      style={{ color: 'var(--emerald-text)' }}
                      aria-hidden="true"
                    />
                  ) : (
                    <Copy
                      className="h-4 w-4"
                      style={{ color: 'var(--accent-primary)' }}
                      aria-hidden="true"
                    />
                  )}
                  <span>
                    {copiedEmail ? t.heroEmailCopied : t.cmdCopyAction}
                  </span>
                </span>
                <span
                  className="font-mono-tech rounded border px-1.5 py-0.5 text-[10px]"
                  style={{
                    borderColor: 'var(--border-hairline)',
                    color: 'var(--text-muted)',
                  }}
                >
                  Email
                </span>
              </button>

              <a
                href={PROFILE_INFO.cvFiles.es}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={onClose}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-[13px] font-medium transition-colors hover:bg-blue-500/10"
                style={{ color: 'var(--text-primary)' }}
              >
                <span className="inline-flex items-center gap-2.5">
                  <Download
                    className="h-4 w-4"
                    style={{ color: 'var(--accent-primary)' }}
                    aria-hidden="true"
                  />
                  <span>{t.cmdDownloadEs}</span>
                </span>
                <span
                  className="font-mono-tech rounded border px-1.5 py-0.5 text-[10px]"
                  style={{
                    borderColor: 'var(--border-hairline)',
                    color: 'var(--text-muted)',
                  }}
                >
                  ES PDF
                </span>
              </a>

              <a
                href={PROFILE_INFO.cvFiles.en}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={onClose}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-[13px] font-medium transition-colors hover:bg-blue-500/10"
                style={{ color: 'var(--text-primary)' }}
              >
                <span className="inline-flex items-center gap-2.5">
                  <Download
                    className="h-4 w-4"
                    style={{ color: 'var(--accent-primary)' }}
                    aria-hidden="true"
                  />
                  <span>{t.cmdDownloadEn}</span>
                </span>
                <span
                  className="font-mono-tech rounded border px-1.5 py-0.5 text-[10px]"
                  style={{
                    borderColor: 'var(--border-hairline)',
                    color: 'var(--text-muted)',
                  }}
                >
                  EN PDF
                </span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    onToggleTheme();
                    onClose();
                  }}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium cursor-pointer transition-colors hover:bg-blue-500/10"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {theme === 'light' ? (
                    <Moon className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  )}
                  <span>{t.cmdToggleTheme}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onToggleLang();
                    onClose();
                  }}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium cursor-pointer transition-colors hover:bg-blue-500/10"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  <span>{t.cmdToggleLang}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Proyectos Élite (con salto directo a Vista de Arquitectura) */}
          {matchingElite.length > 0 ? (
            <div>
              <div
                className="font-mono-tech px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.cmdJumpProjects}
              </div>
              <div className="mt-1 space-y-1">
                {matchingElite.map((proj) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => {
                      onJumpToEliteArchitecture(proj.id);
                      onClose();
                    }}
                    className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left cursor-pointer transition-colors hover:bg-blue-500/10"
                  >
                    <div className="min-w-0">
                      <div
                        className="truncate text-xs sm:text-[13px] font-bold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <Cpu
                          className="mr-1.5 inline h-3.5 w-3.5"
                          style={{ color: 'var(--accent-primary)' }}
                          aria-hidden="true"
                        />
                        {proj.title[lang]}
                      </div>
                      <div
                        className="font-mono-tech truncate text-[10.5px]"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {proj.stack.slice(0, 4).join(' • ')}
                      </div>
                    </div>
                    <span
                      className="font-mono-tech shrink-0 rounded border px-2 py-0.5 text-[10px] font-semibold"
                      style={{
                        backgroundColor: 'var(--accent-soft)',
                        borderColor: 'var(--accent-border)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      ⚡ Arch
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {/* Resultados en el Explorador si el usuario busca términos como JavaFX, Kafka o Godot */}
          {matchingExplorer.length > 0 ? (
            <div>
              <div
                className="font-mono-tech px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                {lang === 'es' ? 'En el Explorador Técnico' : 'In Project Explorer'}
              </div>
              <div className="mt-1 space-y-1">
                {matchingExplorer.map((proj) => (
                  <a
                    key={proj.id}
                    href="#explorador"
                    onClick={onClose}
                    className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-blue-500/10"
                  >
                    <span
                      className="inline-flex items-center gap-2 text-xs font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <FolderGit2
                        className="h-3.5 w-3.5"
                        style={{ color: 'var(--accent-primary)' }}
                        aria-hidden="true"
                      />
                      {proj.title}
                    </span>
                    <ExternalLink
                      className="h-3 w-3 opacity-60"
                      style={{ color: 'var(--text-muted)' }}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
