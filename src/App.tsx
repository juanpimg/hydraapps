import React from 'react';
import {
  Video,
  Music,
  Image as ImageIcon,
  ExternalLink,
  Github,
  Layers,
  Download,
  ArrowUpRight,
} from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  tagline: string;
  status: 'live' | 'coming_soon';
  isExternal?: boolean;
  badge?: string;
  icon: React.ReactNode;
  launchUrl: string;
}

function resolveUrl(port: string, path: string, production?: string): string {
  if (typeof window !== 'undefined' && window.location.port === '5174') {
    return `http://localhost:${port}`;
  }
  return production ?? path;
}

export default function App() {
  const apps: AppItem[] = [
    {
      id: 'hydra-cut',
      name: 'HydraCut',
      tagline: 'Edita vídeo multitrack en el navegador.',
      status: 'live',
      icon: <Video className="h-5 w-5" aria-hidden="true" />,
      launchUrl: resolveUrl('5173', 'https://hydracut.pages.dev/'),
    },
    {
      id: 'hydra-daw',
      name: 'HydraDAW',
      tagline: 'Graba, mezcla y masteriza audio.',
      status: 'live',
      icon: <Music className="h-5 w-5" aria-hidden="true" />,
      launchUrl: resolveUrl('5175', 'https://hydradaw.pages.dev/'),
    },
    {
      id: 'hydra-convert',
      name: 'HydraConvert',
      tagline: 'Convierte vídeo, audio e imagen.',
      status: 'live',
      icon: <Layers className="h-5 w-5" aria-hidden="true" />,
      launchUrl: resolveUrl('5176', 'https://hydraconverter.pages.dev/'),
    },
    {
      id: 'hydra-downloader',
      name: 'HydraDownloader',
      tagline: 'Descarga directa 100% local, sin APIs ni servidores.',
      status: 'live',
      isExternal: true,
      badge: '100% local',
      icon: <Download className="h-5 w-5" aria-hidden="true" />,
      launchUrl: resolveUrl('5177', 'https://hydradownloader.pages.dev/'),
    },
    {
      id: 'hydra-lens',
      name: 'HydraLens',
      tagline: 'Retoque fotográfico.',
      status: 'coming_soon',
      badge: 'Pronto',
      icon: <ImageIcon className="h-5 w-5" aria-hidden="true" />,
      launchUrl: '#',
    },
  ];

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
          <a
            href="https://github.com/juanpimg/hydraapps"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver HydraApps en GitHub (pestaña nueva)"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-secondary transition hover:text-ink"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main className="flex-1">
        <div className="hydra-depth mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tus herramientas, <span className="text-accent">en tu dispositivo.</span>
          </h1>
          <p className="mt-2 text-base text-secondary">
            Elige una app para empezar. Sin cuentas, sin subidas.
          </p>

          <nav aria-label="Suite Hydra" className="mt-8">
            <ul className="flex flex-col gap-3">
              {apps.map((app) =>
                app.status === 'live' ? (
                  <li key={app.id}>
                    <a
                      href={app.launchUrl}
                      {...(app.isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      aria-label={`Abrir ${app.name}: ${app.tagline}${app.isExternal ? ' (pestaña nueva)' : ''}`}
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
                    title={`${app.name} próximamente`}
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
          <strong className="text-ink">HydraApps</strong> · 100 % client-side — tus archivos nunca
          salen de tu equipo.
        </p>
      </footer>
    </div>
  );
}
