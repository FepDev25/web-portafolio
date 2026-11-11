import React, { useState } from 'react';
import {
  Download,
  Globe,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react';
import { Language, PROFILE_INFO, UI_STRINGS } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  theme: 'light' | 'dark';
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
  onOpenCommandPalette,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_STRINGS[lang];
  const cvHref = PROFILE_INFO.cvFiles[lang];

  const navItems = [
    { href: '#proyectos-elite', label: t.navElite },
    { href: '#explorador', label: t.navExplorer },
    { href: '#trayectoria', label: t.navTrajectory },
    { href: '#matriz-ingenieria', label: t.navMatrix },
    { href: '#contacto', label: t.navContact },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md transition-colors"
      style={{
        backgroundColor: 'var(--bg-elevated)',
        borderColor: 'var(--border-hairline)',
      }}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Zona 1: Identidad / Marca (Nunca se parte en 2 líneas) */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3.5 text-left group focus:outline-none"
        >
          <div
            className="font-mono-tech flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-xs transition-transform group-hover:scale-105"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            {PROFILE_INFO.monogram}
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span
              className="text-[15.5px] font-extrabold tracking-tight leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              {PROFILE_INFO.shortName}
            </span>
            <span
              className="font-mono-tech text-[11px] leading-tight"
              style={{ color: 'var(--text-muted)' }}
            >
              {t.navRole}
            </span>
          </div>
        </a>

        {/* Zona 2: Navegación Central en Píldora Espaciada (Desktop) */}
        <nav
          aria-label="Principal"
          className="hidden xl:flex items-center gap-1 rounded-full border px-2 py-1"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-hairline)',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13.5px] font-semibold transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Controles y Acciones Derecha (Todos en una sola línea con buen aire) */}
        <div className="flex shrink-0 items-center gap-2.5">
          {/* Botón Buscador / Menú Rápido (Ctrl+K) */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="font-mono-tech hidden sm:inline-flex items-center gap-2.5 whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-medium cursor-pointer transition-all hover:border-blue-500/50"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              borderColor: 'var(--border-strong)',
              color: 'var(--text-secondary)',
            }}
            title={`${t.cmdButton} (Ctrl+K / ⌘K)`}
          >
            <Search className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
            <span>{t.cmdButton}</span>
            <kbd
              className="whitespace-nowrap rounded border px-1.5 py-0.5 text-[10px] font-semibold"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                color: 'var(--text-muted)',
              }}
            >
              Ctrl+K
            </kbd>
          </button>

          {/* Separador vertical sutil */}
          <div
            className="hidden sm:block h-5 w-px mx-0.5"
            style={{ backgroundColor: 'var(--border-strong)' }}
            aria-hidden="true"
          />

          {/* Switch Idioma ES / EN */}
          <button
            type="button"
            onClick={onToggleLang}
            className="font-mono-tech inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 text-xs font-semibold cursor-pointer transition-colors"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-strong)',
              color: 'var(--text-primary)',
            }}
            aria-label={
              lang === 'es' ? 'Switch language to English' : 'Cambiar idioma a Español'
            }
          >
            <Globe className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Switch Tema Claro / Oscuro */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border cursor-pointer transition-colors"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-strong)',
              color: 'var(--text-primary)',
            }}
            aria-label={
              theme === 'light'
                ? 'Activar modo oscuro técnico'
                : 'Activar modo claro ingenieril'
            }
            title={theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
            )}
          </button>

          {/* Descargar CV Dinámico según Idioma */}
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden sm:inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-lg px-4 text-xs font-bold text-white shadow-xs transition-all hover:opacity-95"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>
              {t.downloadCv} ({lang.toUpperCase()})
            </span>
          </a>

          {/* Botón Menú Móvil / Tablet (< xl) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex xl:hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-strong)',
              color: 'var(--text-primary)',
            }}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil / Tablet */}
      {mobileMenuOpen ? (
        <div
          className="xl:hidden border-t px-5 py-4 space-y-3"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-hairline)',
          }}
        >
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div
            className="pt-3 border-t flex flex-wrap gap-2.5"
            style={{ borderColor: 'var(--border-hairline)' }}
          >
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="font-mono-tech inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold"
              style={{
                backgroundColor: 'var(--bg-subtle)',
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
              }}
            >
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.cmdButton} (Ctrl+K)</span>
            </button>
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold text-white"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>
                {t.downloadCv} ({lang.toUpperCase()})
              </span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};
