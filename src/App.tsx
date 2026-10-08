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
  ChevronRight
} from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  badge: string;
  status: 'live' | 'coming_soon';
  category: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  launchUrl: string;
  accentColor: string;
  gradient: string;
}

export default function App() {
  const editorUrl = typeof window !== 'undefined' && window.location.port === '5174'
    ? 'http://localhost:5173'
    : './editor/';

  const apps: AppItem[] = [
    {
      id: 'hydra-cut',
      name: 'HydraCut',
      badge: 'v1.0 • Estable',
      status: 'live',
      category: 'Edición Multimedia',
      description: 'Editor de video multitrack profesional acelerado por hardware con WebCodecs API. Transiciones en vivo, formas de onda de audio y exportación MP4 instantánea sin servidores.',
      icon: <Video className="w-6 h-6 text-cyan-400" />,
      tags: ['WebCodecs', 'mp4-muxer', 'Canvas 60 FPS', 'OPFS Storage'],
      launchUrl: editorUrl,
      accentColor: 'border-cyan-500/40 hover:border-cyan-400',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
    {
      id: 'hydra-voice',
      name: 'HydraVoice',
      badge: 'En desarrollo',
      status: 'coming_soon',
      category: 'Procesamiento de Audio',
      description: 'Estudio de corte, masterización y ecualización de audio multicanal con Web Audio API. Visualización espectral y exportación sin pérdida.',
      icon: <Music className="w-6 h-6 text-emerald-400" />,
      tags: ['AudioContext', 'Spectral FFT', 'Normalización RMS'],
      launchUrl: '#',
      accentColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      id: 'hydra-lens',
      name: 'HydraLens',
      badge: 'En desarrollo',
      status: 'coming_soon',
      category: 'Gráficos & Fotografía',
      description: 'Retoque fotográfico de alta precisión acelerado por WebGL. Ajustes de curvas, etalonaje de color y compresión moderna WebP/AVIF en el cliente.',
      icon: <ImageIcon className="w-6 h-6 text-purple-400" />,
      tags: ['WebGL 2.0', 'LUT Shaders', 'AVIF / WebP'],
      launchUrl: '#',
      accentColor: 'border-purple-500/30 hover:border-purple-400/60',
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    },
    {
      id: 'hydra-convert',
      name: 'HydraConvert',
      badge: 'Próximamente',
      status: 'coming_soon',
      category: 'Utilidades',
      description: 'Transcodificación ultra-rápida de formatos multimedia en memoria con WebAssembly. Sin límites de peso de archivo y sin transferencias de red.',
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      tags: ['WebAssembly', 'Micro-WASM', 'Zero Upload'],
      launchUrl: '#',
      accentColor: 'border-amber-500/30 hover:border-amber-400/60',
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Glow backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-dark-800/80 bg-dark-950/70 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-black text-lg">
              H
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Hydra<span className="text-cyan-400">Apps</span>
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 font-semibold tracking-wider">
                HUB
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#apps" className="hover:text-cyan-400 transition">Aplicaciones</a>
            <a href="#filosofia" className="hover:text-cyan-400 transition">Filosofía</a>
            <a href="#arquitectura" className="hover:text-cyan-400 transition">Tecnología</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-dark-850 rounded-lg transition border border-transparent hover:border-dark-750"
              title="Ver en GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={editorUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30"
            >
              <span>Lanzar HydraCut</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        {/* HERO SECTION */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-medium mb-8 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Suite de Herramientas Web de Nueva Generación</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Poder Profesional.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              100% en tu Dispositivo Local.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Aplicaciones multimedia ultraligeras y de alto rendimiento que se ejecutan directamente en tu navegador. Cero colas de renderizado, cero suscripciones y privacidad absoluta: tus archivos nunca salen de tu ordenador.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={editorUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition transform hover:-translate-y-0.5"
            >
              <Video className="w-4 h-4" />
              <span>Abrir Editor de Video (HydraCut)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#apps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark-900 hover:bg-dark-850 text-slate-300 hover:text-white font-semibold text-sm border border-dark-800 transition"
            >
              <span>Explorar Suite Completa</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-12 border-t border-dark-850 text-left">
            <div className="p-4 rounded-xl bg-dark-900/40 border border-dark-800/60">
              <div className="text-cyan-400 font-extrabold text-2xl font-mono">0 bytes</div>
              <div className="text-xs text-slate-400 mt-1">Transferidos a la nube</div>
            </div>
            <div className="p-4 rounded-xl bg-dark-900/40 border border-dark-800/60">
              <div className="text-cyan-400 font-extrabold text-2xl font-mono">60 FPS</div>
              <div className="text-xs text-slate-400 mt-1">Renderizado en Canvas</div>
            </div>
            <div className="p-4 rounded-xl bg-dark-900/40 border border-dark-800/60">
              <div className="text-cyan-400 font-extrabold text-2xl font-mono">&lt; 100 kB</div>
              <div className="text-xs text-slate-400 mt-1">Peso total de la aplicación</div>
            </div>
            <div className="p-4 rounded-xl bg-dark-900/40 border border-dark-800/60">
              <div className="text-cyan-400 font-extrabold text-2xl font-mono">GPU</div>
              <div className="text-xs text-slate-400 mt-1">Aceleración WebCodecs</div>
            </div>
          </div>
        </section>

        {/* APPS SHOWCASE GRID */}
        <section id="apps" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Catálogo de Aplicaciones Hydra
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Herramientas modulares creadas con APIs nativas del navegador para máxima velocidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <div
                key={app.id}
                className={`relative rounded-2xl bg-gradient-to-b ${app.gradient} bg-dark-900/90 border ${app.accentColor} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group`}
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-xl bg-dark-850 border border-dark-750/80 shadow-md">
                      {app.icon}
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                        app.status === 'live'
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                          : 'bg-dark-800 text-slate-400 border-dark-700'
                      }`}
                    >
                      {app.badge}
                    </span>
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    {app.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    {app.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {app.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-850/80 text-slate-400 border border-dark-750"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {app.status === 'live' ? (
                    <a
                      href={app.launchUrl}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition group-hover:shadow-cyan-500/30"
                    >
                      <span>Abrir {app.name}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-dark-850 text-slate-500 font-medium text-sm border border-dark-800 cursor-not-allowed"
                    >
                      <span>Próximamente disponible</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON / PHILOSOPHY SECTION */}
        <section id="filosofia" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              ¿Por qué 100% Client-Side?
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              Comparamos la forma tradicional en la nube frente a la arquitectura descentralizada de HydraApps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cloud Traditional */}
            <div className="p-6 rounded-2xl bg-dark-900/60 border border-dark-800/80 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-base">
                <span className="text-lg">✕</span>
                <span>Editores Tradicionales en la Nube</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">−</span>
                  <span>Debes subir archivos pesados (GBs) por internet con esperas interminables.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">−</span>
                  <span>Tus videos e imágenes quedan almacenados en servidores de terceros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">−</span>
                  <span>Límites de exportación, colas de renderizado y planes de pago mensuales.</span>
                </li>
              </ul>
            </div>

            {/* HydraApps Way */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/30 to-dark-900 border border-cyan-800/40 space-y-4 shadow-lg shadow-cyan-950/20">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
                <span className="text-lg">✓</span>
                <span>Arquitectura HydraApps</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Cero subidas: lectura instantánea directa desde tu disco con OPFS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Privacidad militar: tus archivos nunca tocan ningún servidor ajeno.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Exportación directa por hardware con tu tarjeta gráfica (WebCodecs).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PILLARS GRID */}
        <section id="arquitectura" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-dark-850">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-dark-900/40 border border-dark-800/60">
              <Cpu className="w-7 h-7 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-1">Hardware Nativo</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aprovechamos WebCodecs, WebGL y Web Audio para exprimir al máximo tu GPU y CPU sin intermediarios.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-dark-900/40 border border-dark-800/60">
              <Lock className="w-7 h-7 text-indigo-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-1">Privacidad por Diseño</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sin registros de usuario, sin rastreadores y sin almacenamiento en bases de datos remotas.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-dark-900/40 border border-dark-800/60">
              <Zap className="w-7 h-7 text-amber-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-1">Cero Costes de Servidor</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Al no consumir potencia de servidor para renderizar, las aplicaciones son 100% gratuitas para siempre.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-dark-850 bg-dark-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-cyan-500 text-white flex items-center justify-center font-bold text-xs">
              H
            </div>
            <span className="font-bold text-slate-300">HydraApps Suite</span>
            <span>• 100% Client-Side Web Tools</span>
          </div>

          <div>
            Creado para rendimiento y privacidad. Código libre y abierto.
          </div>
        </div>
      </footer>
    </div>
  );
}
