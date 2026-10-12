import React from 'react';
import {
  Video,
  Music,
  Image as ImageIcon,
  ArrowRight,
  ExternalLink,
  Zap,
  Cpu,
  Lock,
  Github,
  Layers,
  Sparkles,
  ChevronRight,
  Download,
} from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  badge: string;
  status: 'live' | 'coming_soon';
  isNew?: boolean;
  isExternal?: boolean;
  category: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  launchUrl: string;
}

function resolveUrl(port: string, path: string, production?: string): string {
  if (typeof window !== 'undefined' && window.location.port === '5174') {
    return `http://localhost:${port}`;
  }
  return production ?? path;
}

export default function App() {
  const editorUrl = resolveUrl('5173', './editor/');
  const dawUrl = resolveUrl('5175', './daw/');
  const convertUrl = resolveUrl('5176', './convert/');
  // HydraDownloader en producción: https://hydradownloader.pages.dev/
  const downloaderUrl = resolveUrl('5177', 'https://hydradownloader.pages.dev/');

  const apps: AppItem[] = [
    {
      id: 'hydra-cut',
      name: 'HydraCut',
      badge: 'v1.0 · Estable',
      status: 'live',
      category: 'Edición multimedia',
      description:
        'Editor de vídeo multitrack acelerado por hardware con WebCodecs. Transiciones en vivo, formas de onda y exportación MP4 instantánea sin servidores.',
      icon: <Video className="h-6 w-6" aria-hidden="true" />,
      tags: ['WebCodecs', 'mp4-muxer', 'Canvas 60 FPS', 'OPFS'],
      launchUrl: editorUrl,
    },
    {
      id: 'hydra-daw',
      name: 'HydraDAW',
      badge: 'v1.0 · Estable',
      status: 'live',
      category: 'Grabación, mezcla y mastering',
      description:
        'DAW multitrack 100 % local. Graba, mezcla con channel strips y masteriza con limitador brickwall. Soporta plugins locales estilo VST (WAM 2.0).',
      icon: <Music className="h-6 w-6" aria-hidden="true" />,
      tags: ['Web Audio API', 'AudioWorklet', 'WAM 2.0', 'LUFS'],
      launchUrl: dawUrl,
    },
    {
      id: 'hydra-convert',
      name: 'HydraConvert',
      badge: 'v1.0 · Estable',
      status: 'live',
      category: 'Utilidades',
      description:
        'Conversor de vídeo, audio e imagen 100 % local con WebCodecs. Sin subidas ni servidor: tus archivos nunca salen del dispositivo.',
      icon: <Layers className="h-6 w-6" aria-hidden="true" />,
      tags: ['WebCodecs', 'MP4 / WebM', 'Zero upload'],
      launchUrl: convertUrl,
    },
    {
      id: 'hydra-downloader',
      name: 'HydraDownloader',
      badge: 'v1.0 · Nuevo',
      status: 'live',
      isNew: true,
      isExternal: true,
      category: 'Descargas y captura',
      description:
        'Descargador universal de vídeo y audio multisitio (YouTube, TikTok, X, Reddit). Funciona en el navegador, sin backend.',
      icon: <Download className="h-6 w-6" aria-hidden="true" />,
      tags: ['100 % client-side', 'Multisitio', 'Sin servidor'],
      launchUrl: downloaderUrl,
    },
    {
      id: 'hydra-lens',
      name: 'HydraLens',
      badge: 'En desarrollo',
      status: 'coming_soon',
      category: 'Gráficos y fotografía',
      description:
        'Retoque fotográfico de alta precisión con WebGL. Curvas, etalonaje y compresión moderna WebP/AVIF en el cliente.',
      icon: <ImageIcon className="h-6 w-6" aria-hidden="true" />,
      tags: ['WebGL 2.0', 'LUT Shaders', 'AVIF / WebP'],
      launchUrl: '#',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans text-ink antialiased">
      {/* Única superficie glass: navegación (liquid-glass.md › Review checklist 1). */}
      <header className="glass-nav sticky top-0 z-10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-lg font-extrabold text-accentInk"
              aria-hidden="true"
            >
              H
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-extrabold tracking-tight">
                HydraApps
              </span>
              <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-secondary">
                Hub
              </span>
            </div>
          </div>

          <nav aria-label="Secciones" className="hidden items-center gap-8 text-sm font-medium text-secondary md:flex">
            <a href="#apps" className="min-h-[44px] inline-flex items-center hover:text-ink">
              Aplicaciones
            </a>
            <a href="#filosofia" className="min-h-[44px] inline-flex items-center hover:text-ink">
              Filosofía
            </a>
            <a href="#arquitectura" className="min-h-[44px] inline-flex items-center hover:text-ink">
              Tecnología
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Ver HydraApps en GitHub (se abre en pestaña nueva)"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-transparent p-2 text-secondary transition hover:border-line hover:text-ink"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Acción secundaria en cabecera: la única prominente vive en el hero
                (buttons.md › Style: una o dos por vista). */}
            <a
              href={downloaderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-line bg-raised px-4 py-2 text-xs font-semibold transition hover:opacity-90"
            >
              <span>Abrir HydraDownloader</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO — firma única: profundidad tranquila + datos instrumento. */}
        <section aria-labelledby="hero-title" className="hydra-depth px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="surface-card mb-8 inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-secondary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Suite multimedia 100 % en tu dispositivo</span>
            </p>

            <h1
              id="hero-title"
              className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl"
            >
              Poder profesional.
              <br />
              <span className="text-accent">100 % en tu dispositivo.</span>
            </h1>

            <p className="mx-auto mb-10 mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
              Aplicaciones ultraligeras que se ejecutan en tu navegador. Sin colas de
              renderizado, sin suscripciones y con privacidad total: tus archivos nunca
              salen de tu ordenador.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {/* Única acción prominente de la vista. */}
              <a
                href={editorUrl}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accentInk shadow-lg transition sm:w-auto"
              >
                <Video className="h-4 w-4" aria-hidden="true" />
                <span>Abrir HydraCut</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#apps"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-line bg-raised px-6 py-3.5 text-sm font-semibold transition hover:opacity-90 sm:w-auto"
              >
                <span>Explorar las 5 aplicaciones</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Métricas instrumento: mono tabular, sin hero de número gigante. */}
            <dl className="mt-16 grid grid-cols-2 gap-3 border-t border-line pt-8 text-left sm:grid-cols-4">
              {[
                ['0 bytes', 'A la nube'],
                ['60 FPS', 'Canvas y previsualización'],
                ['5 apps', 'Un mismo hub local'],
                ['GPU', 'WebCodecs y WebGL'],
              ].map(([value, label]) => (
                <div key={label} className="surface-card rounded-xl p-4">
                  <dt className="order-2 mt-1 text-xs text-secondary">{label}</dt>
                  <dd className="order-1 font-mono text-xl font-semibold tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CATÁLOGO */}
        <section id="apps" aria-labelledby="apps-title" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 id="apps-title" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Catálogo Hydra
            </h2>
            <p className="mt-2 text-sm text-secondary">
              Herramientas modulares con APIs nativas del navegador. Sin cuentas ni subidas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {apps.map((app) => (
              <article
                key={app.id}
                aria-labelledby={`${app.id}-title`}
                className="surface-card flex flex-col justify-between rounded-2xl p-6 transition hover:shadow-xl sm:p-7"
              >
                <div>
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="rounded-xl border border-line bg-surface p-3" aria-hidden="true">
                      {app.icon}
                    </div>
                    <span className="inline-flex min-h-[28px] items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] font-semibold text-secondary">
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${app.status === 'live' ? 'bg-accent' : 'bg-secondary'}`}
                      />
                      {app.badge}
                    </span>
                  </div>

                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                    {app.category}
                  </p>
                  <h3 id={`${app.id}-title`} className="font-display mb-2 text-2xl font-bold">
                    {app.name}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-secondary">{app.description}</p>
                </div>

                <div>
                  <ul aria-label={`Tecnologías de ${app.name}`} className="mb-6 flex flex-wrap gap-1.5">
                    {app.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-line bg-surface px-2 py-1 font-mono text-[11px] text-secondary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {app.status === 'live' ? (
                    <a
                      href={app.launchUrl}
                      {...(app.isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      aria-label={`Abrir ${app.name}${app.isExternal ? ' en hydradownloader.pages.dev (pestaña nueva)' : ''}`}
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold transition hover:opacity-90"
                    >
                      <span>Abrir {app.name}</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      disabled
                      aria-disabled="true"
                      className="inline-flex min-h-[44px] w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-medium text-secondary opacity-70"
                    >
                      <span>Próximamente disponible</span>
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section id="filosofia" aria-labelledby="filosofia-title" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 id="filosofia-title" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              ¿Por qué 100 % client-side?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-secondary">
              La nube frente a la arquitectura Hydra: misma tarea, distinto coste para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="surface-card space-y-4 rounded-2xl p-6">
              <h3 className="text-base font-bold">Editores tradicionales en la nube</h3>
              <ul className="space-y-3 text-sm text-secondary">
                <li>Subes gigabytes y esperas colas de renderizado.</li>
                <li>Tus archivos quedan en servidores de terceros.</li>
                <li>Límites de exportación y suscripción mensual.</li>
              </ul>
            </div>
            <div className="surface-card space-y-4 rounded-2xl border-accent p-6">
              <h3 className="text-base font-bold text-accent">Arquitectura HydraApps</h3>
              <ul className="space-y-3 text-sm">
                <li>Cero subidas: lectura directa desde tu disco con OPFS.</li>
                <li>Privacidad por diseño: nada toca un servidor ajeno.</li>
                <li>Exportación por hardware con WebCodecs y tu GPU.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PILARES */}
        <section
          id="arquitectura"
          aria-labelledby="arquitectura-title"
          className="mx-auto max-w-7xl scroll-mt-20 border-t border-line px-4 py-16 sm:px-6 lg:px-8"
        >
          <h2 id="arquitectura-title" className="sr-only">
            Tecnología
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="surface-card rounded-xl p-6">
              <Cpu className="mb-3 h-7 w-7" aria-hidden="true" />
              <h3 className="mb-1 text-base font-bold">Hardware nativo</h3>
              <p className="text-sm leading-relaxed text-secondary">
                WebCodecs, WebGL y Web Audio exprimen tu GPU y CPU sin intermediarios.
              </p>
            </div>
            <div className="surface-card rounded-xl p-6">
              <Lock className="mb-3 h-7 w-7" aria-hidden="true" />
              <h3 className="mb-1 text-base font-bold">Privacidad por diseño</h3>
              <p className="text-sm leading-relaxed text-secondary">
                Sin cuentas, sin rastreadores y sin bases de datos remotas.
              </p>
            </div>
            <div className="surface-card rounded-xl p-6">
              <Zap className="mb-3 h-7 w-7" aria-hidden="true" />
              <h3 className="mb-1 text-base font-bold">Gratis para siempre</h3>
              <p className="text-sm leading-relaxed text-secondary">
                Sin coste de servidor por renderizar: úsalo cuando quieras, offline.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-secondary sm:flex-row sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded bg-accent text-[11px] font-bold text-accentInk">
              H
            </span>
            <strong className="text-ink">HydraApps Suite</strong>
            <span>· 100 % client-side</span>
          </p>
          <p>Código libre y abierto. Tus archivos nunca salen de tu equipo.</p>
        </div>
      </footer>
    </div>
  );
}
