import React from 'react';
import {
  Activity,
  Award,
  BookOpen,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import { Language, PROFILE_INFO, UI_STRINGS } from '../data/portfolioData';

interface TrajectoryAndIeeeSectionProps {
  lang: Language;
}

export const TrajectoryAndIeeeSection: React.FC<
  TrajectoryAndIeeeSectionProps
> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const isEs = lang === 'es';

  return (
    <section
      id="trayectoria"
      className="border-b py-16 sm:py-20"
      style={{ borderColor: 'var(--border-hairline)' }}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <div
            className="font-mono-tech mb-2 text-xs font-bold"
            style={{ color: 'var(--accent-primary)' }}
          >
            {t.trajectoryEyebrow}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.trajectoryTitle}
          </h2>
          <p
            className="mt-2 text-[15px] leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.trajectorySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Columna Izquierda: Paper IEEE GPECOM 2026 + Nominación PENSER (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            {/* Tarjeta Principal: Publicación IEEE GPECOM 2026 */}
            <article
              className="rounded-2xl border p-6 sm:p-7"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span
                  className="font-mono-tech inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    backgroundColor: 'var(--amber-bg)',
                    borderColor: 'var(--amber-border)',
                    color: 'var(--amber-text)',
                  }}
                >
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {isEs
                    ? 'PUBLICACIÓN CIENTÍFICA • IEEE GPECOM 2026 (NÁPOLES, ITALIA)'
                    : 'PEER-REVIEWED PAPER • IEEE GPECOM 2026 (NAPLES, ITALY)'}
                </span>
                <span
                  className="font-mono-tech text-xs font-semibold"
                  style={{ color: 'var(--text-muted)' }}
                >
                  DOI: {PROFILE_INFO.ieeeDoiCode}
                </span>
              </div>

              <h3
                className="text-lg sm:text-xl font-extrabold leading-snug"
                style={{ color: 'var(--text-primary)' }}
              >
                “Conceptual Modeling and Methodology for the Development of a
                Digital Twin for Wind Power Generation”
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {isEs
                  ? 'Co-autor de investigación científica publicada en IEEE Xplore para la conferencia internacional IEEE GPECOM 2026 en Nápoles, Italia. Propone una metodología formal y modelado conceptual para el desarrollo de Gemelos Digitales aplicados a generación de energía eólica.'
                  : 'Co-author of peer-reviewed research published in IEEE Xplore for the IEEE GPECOM 2026 international conference in Naples, Italy. Presents a formal methodology and conceptual modeling framework for developing Digital Twins in wind power generation.'}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4" style={{ borderColor: 'var(--border-hairline)' }}>
                <div className="flex flex-wrap gap-1.5">
                  {['Digital Twin', 'Wind Power Generation', 'IEEE Xplore', 'Conceptual Modeling'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="font-mono-tech rounded border px-2 py-0.5 text-[11px]"
                        style={{
                          backgroundColor: 'var(--bg-canvas)',
                          borderColor: 'var(--border-hairline)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <a
                  href={PROFILE_INFO.ieeeDoiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-95"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <span>
                    {isEs ? 'Verificar DOI en IEEE ↗' : 'Verify IEEE DOI ↗'}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>

            {/* Tarjeta: Reconocimiento Internacional PENSER 2026 */}
            <article
              className="rounded-2xl border p-6 sm:p-7"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span
                  className="font-mono-tech inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    backgroundColor: 'var(--accent-soft)',
                    borderColor: 'var(--accent-border)',
                    color: 'var(--accent-primary)',
                  }}
                >
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  {isEs
                    ? 'RECONOCIMIENTO INTERNACIONAL • BOTHELL, WA, EE. UU.'
                    : 'INTERNATIONAL HONOR • BOTHELL, WA, USA'}
                </span>
                <span
                  className="font-mono-tech text-xs font-semibold"
                  style={{ color: 'var(--text-muted)' }}
                >
                  PENSER 2026
                </span>
              </div>

              <h3
                className="text-lg font-extrabold"
                style={{ color: 'var(--text-primary)' }}
              >
                {isEs
                  ? 'Nominación: Reconocimiento al Estudiante Latinoamericano Destacado 2026 — PENSER'
                  : 'Nomination: Outstanding Latin American Student Award 2026 — PENSER'}
              </h3>

              <p
                className="mt-2.5 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {isEs
                  ? 'Distinción otorgada por PENSER (Bothell, Washington, EE. UU.) en reconocimiento al alto desempeño académico, liderazgo en proyectos de ingeniería e impacto en investigación tecnológica.'
                  : 'Distinction awarded by PENSER (Bothell, Washington, USA) recognizing academic excellence, engineering project leadership, and technological research impact.'}
              </p>
            </article>
          </div>

          {/* Columna Derecha: Experiencia ELECAUSTRO SCADA + Educación UPS Volky (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Experiencia Industrial: ELECAUSTRO S.A. */}
            <article
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span
                  className="font-mono-tech inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    backgroundColor: 'var(--emerald-bg)',
                    borderColor: 'var(--emerald-border)',
                    color: 'var(--emerald-text)',
                  }}
                >
                  <Activity className="h-3.5 w-3.5" aria-hidden="true" />
                  {isEs ? 'EXPERIENCIA INDUSTRIAL' : 'INDUSTRIAL EXPERIENCE'}
                </span>
                <span
                  className="font-mono-tech text-xs"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Sep 2025 – Dic 2025
                </span>
              </div>

              <h3
                className="text-lg font-extrabold"
                style={{ color: 'var(--text-primary)' }}
              >
                ELECAUSTRO S.A. — Cuenca, Ecuador
              </h3>
              <div
                className="font-mono-tech mt-0.5 text-xs font-semibold"
                style={{ color: 'var(--accent-primary)' }}
              >
                {isEs
                  ? 'Ingeniería de Software & Sistemas SCADA (Prácticas Preprofesionales)'
                  : 'Software & SCADA Systems Engineering (Pre-professional Internship)'}
              </div>

              <p
                className="mt-3 text-[13.5px] leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {isEs
                  ? 'Desarrollé un sistema SCADA de monitoreo en tiempo real para turbinas eólicas PMSG, integrando comunicación TCP/IP con MATLAB/Simulink, detección de anomalías mediante Isolation Forest y una interfaz web interactiva en Streamlit con arquitectura modular.'
                  : 'Developed a real-time SCADA monitoring system for PMSG wind turbines, integrating TCP/IP communication with MATLAB/Simulink, anomaly detection via Isolation Forest, and an interactive modular Streamlit web interface.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t pt-3.5" style={{ borderColor: 'var(--border-hairline)' }}>
                {[
                  'Python 3',
                  'SCADA Real-Time',
                  'TCP/IP Sockets',
                  'MATLAB / Simulink',
                  'Isolation Forest (scikit-learn)',
                  'pandas',
                  'Streamlit',
                ].map((tech) => (
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
            </article>

            {/* Educación & Tesis Volky: Universidad Politécnica Salesiana */}
            <article
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span
                  className="font-mono-tech inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderColor: 'var(--border-strong)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <GraduationCap className="h-3.5 w-3.5" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
                  {isEs ? 'EDUCACIÓN UNIVERSITARIA & TESIS IA' : 'UNIVERSITY EDUCATION & AI THESIS'}
                </span>
                <span
                  className="font-mono-tech text-xs"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Cuenca, EC
                </span>
              </div>

              <h3
                className="text-lg font-extrabold"
                style={{ color: 'var(--text-primary)' }}
              >
                {isEs
                  ? 'Universidad Politécnica Salesiana (UPS)'
                  : 'Salesian Polytechnic University (UPS)'}
              </h3>
              <div
                className="font-mono-tech mt-0.5 text-xs font-semibold"
                style={{ color: 'var(--accent-primary)' }}
              >
                {isEs
                  ? 'Ingeniería en Ciencias de la Computación (Estudios finalizados)'
                  : 'Computer Science Engineering (Studies completed)'}
              </div>

              <p
                className="mt-3 text-[13.5px] leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {isEs
                  ? 'Tesis de Grado: Diseño e implementación de un Sistema de Atención Visual Activa y mejora del módulo de reconocimiento automático de habla (ASR) para el Asistente Robótico Volky empleando redes de aprendizaje profundo, visión artificial y control de movimiento.'
                  : 'Undergraduate Thesis: Design and implementation of an Active Visual Attention System and enhancement of the automatic speech recognition (ASR) module for the Volky Robotic Assistant using deep learning networks, computer vision, and motion control.'}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t pt-3.5" style={{ borderColor: 'var(--border-hairline)' }}>
                {[
                  'Deep Learning',
                  'Computer Vision',
                  'Speech Recognition (ASR)',
                  'Robotics Motion Control',
                  'Volky Assistant',
                ].map((tech) => (
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
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
