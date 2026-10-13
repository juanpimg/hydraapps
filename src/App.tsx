import React, { useEffect, useState } from 'react';
import {
  Video,
  Music,
  Image as ImageIcon,
  ExternalLink,
  Github,
  Layers,
  Download,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react';
import { STRINGS, detectLang, persistLang, type AppId, type Lang } from './i18n';

function resolveUrl(port: string, path: string, production?: string): string {
  if (typeof window !== 'undefined' && window.location.port === '5174') {
    return `http://localhost:${port}`;
  }
  return production ?? path;
}

interface AppDef {
  id: AppId;
  name: string;
  status: 'live' | 'coming_soon';
  isExternal?: boolean;
  icon: React.ReactNode;
  port: string;
  prod: string;
}

const DEFS: AppDef[] = [
  { id: 'hydra-cut', name: 'HydraCut', status: 'live', icon: <Video className="h-5 w-5" aria-hidden="true" />, port: '5173', prod: 'https://hydracut.pages.dev/' },
  { id: 'hydra-daw', name: 'HydraDAW', status: 'live', icon: <Music className="h-5 w-5" aria-hidden="true" />, port: '5175', prod: 'https://hydradaw.pages.dev/' },
  { id: 'hydra-convert', name: 'HydraConvert', status: 'live', icon: <Layers className="h-5 w-5" aria-hidden="true" />, port: '5176', prod: 'https://hydraconverter.pages.dev/' },
  { id: 'hydra-downloader', name: 'HydraDownloader', status: 'live', isExternal: true, icon: <Download className="h-5 w-5" aria-hidden="true" />, port: '5177', prod: 'https://hydradownloader.pages.dev/' },
  { id: 'hydra-controller', name: 'HydraController', status: 'live', isExternal: true, icon: <Smartphone className="h-5 w-5" aria-hidden="true" />, port: '5173', prod: 'https://hydracontroller.pages.dev/' },
  { id: 'hydra-lens', name: 'HydraLens', status: 'coming_soon', icon: <ImageIcon className="h-5 w-5" aria-hidden="true" />, port: '', prod: '#' },
];

export default function App() {
  const [lang, setLang] = useState<Lang>(() => detectLang());
  const t = STRINGS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    persistLang(lang);
  }, [lang]);

  const apps = DEFS.map((d) => ({
    ...d,
    tagline: t.apps[d.id].tagline,
    badge: t.apps[d.id].badge,
    launchUrl: d.prod === '#' ? '#' : resolveUrl(d.port, d.prod),
  }));

  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans text-ink antialiased">
      <header className="glass-nav sticky top-0 z-10">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <p className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-display text-base font-extrabold text-accentInk"
            >
              H
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">HydraApps</span>
          </p>
          <div className="flex items-center gap-1">
            <div
              role="group"
              aria-label={t.langAria}
              className="flex items-center rounded-lg border border-line p-0.5"
            >
              {(['es', 'en'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  aria-label={`${t.langAria}: ${l === 'es' ? 'Español' : 'English'}`}
                  className={`inline-flex min-h-[40px] min-w-[44px] items-center justify-center rounded-md px-2 font-mono text-xs font-semibold transition ${
                    lang === l ? 'bg-accent text-accentInk' : 'text-secondary hover:text-ink'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="https://github.com/juanpimg/hydraapps"
              target="_blank"
              rel="noreferrer"
              aria-label={t.githubAria}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-secondary transition hover:text-ink"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="hydra-depth mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.heroA} <span className="text-accent">{t.heroB}</span>
          </h1>
          <p className="mt-2 text-base text-secondary">{t.heroSub}</p>

          <nav aria-label={t.navAria} className="mt-8">
            <ul className="flex flex-col gap-3">
              {apps.map((app) =>
                app.status === 'live' ? (
                  <li key={app.id}>
                    <a
                      href={app.launchUrl}
                      {...(app.isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      aria-label={`${t.openVerb} ${app.name}: ${app.tagline}${app.isExternal ? ` ${t.newTabNote}` : ''}`}
                      className="surface-card group flex min-h-[72px] items-center gap-4 rounded-2xl p-4 transition hover:shadow-lg"
                    >
                      <span aria-hidden="true" className="rounded-xl border border-line bg-surface p-3">
                        {app.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <strong className="font-display text-lg font-bold">{app.name}</strong>
                          {app.badge && (
                            <span className="rounded-full border border-line px-2 py-0.5 text-[11px] font-semibold text-secondary">
                              {app.badge}
                            </span>
                          )}
                        </span>
                        <span className="block truncate text-sm text-secondary">{app.tagline}</span>
                      </span>
                      {app.isExternal ? (
                        <ExternalLink className="h-5 w-5 shrink-0 text-secondary transition group-hover:text-ink" aria-hidden="true" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-secondary transition group-hover:text-ink" aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ) : (
                  <li
                    key={app.id}
                    aria-disabled="true"
                    title={`${app.name} ${t.soonWord}`}
                    className="surface-card flex min-h-[72px] cursor-not-allowed items-center gap-4 rounded-2xl p-4 opacity-60"
                  >
                    <span aria-hidden="true" className="rounded-xl border border-line bg-surface p-3">
                      {app.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <strong className="font-display text-lg font-bold">{app.name}</strong>
                        {app.badge && (
                          <span className="rounded-full border border-line px-2 py-0.5 text-[11px] font-semibold text-secondary">
                            {app.badge}
                          </span>
                        )}
                      </span>
                      <span className="block truncate text-sm text-secondary">{app.tagline}</span>
                    </span>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </main>

      <footer className="border-t border-line py-6">
        <p className="mx-auto max-w-3xl px-4 text-center text-xs text-secondary sm:px-6">
          <strong className="text-ink">HydraApps</strong> {t.footerNote}
        </p>
      </footer>
    </div>
  );
}
