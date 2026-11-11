import React, { useEffect, useState } from 'react';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { EliteProjectsSection } from './components/EliteProjectsSection';
import { EngineeringMatrixSection } from './components/EngineeringMatrixSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectExplorerSection } from './components/ProjectExplorerSection';
import { TrajectoryAndIeeeSection } from './components/TrajectoryAndIeeeSection';
import { Language } from './data/portfolioData';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [cmdOpen, setCmdOpen] = useState(false);
  const [forcedArchProjectId, setForcedArchProjectId] = useState<string | null>(
    null
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setCmdOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleJumpToEliteArchitecture = (projectId: string) => {
    setForcedArchProjectId(projectId);
    const el = document.getElementById(`proyecto-${projectId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        lang={lang}
        theme={theme}
        onToggleLang={handleToggleLang}
        onToggleTheme={handleToggleTheme}
        onOpenCommandPalette={() => setCmdOpen(true)}
      />

      <main className="flex-1">
        <Hero lang={lang} />
        <EliteProjectsSection
          lang={lang}
          forcedArchProjectId={forcedArchProjectId}
        />
        <ProjectExplorerSection lang={lang} />
        <TrajectoryAndIeeeSection lang={lang} />
        <EngineeringMatrixSection lang={lang} />
      </main>

      <Footer lang={lang} />

      <CommandPaletteModal
        isOpen={cmdOpen}
        lang={lang}
        theme={theme}
        onClose={() => setCmdOpen(false)}
        onToggleLang={handleToggleLang}
        onToggleTheme={handleToggleTheme}
        onJumpToEliteArchitecture={handleJumpToEliteArchitecture}
      />
    </div>
  );
};

export default App;
