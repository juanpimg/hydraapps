import { ArrowRight, ExternalLink, Layers, Music, Video } from 'lucide-react';

interface AppItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  launchUrl: string;
}

export default function App() {
  const isDev = typeof window !== 'undefined' && window.location.port === '5174';
  const editorUrl = isDev ? 'http://localhost:5173' : 'https://hydracut.pages.dev/';
  const dawUrl = isDev ? 'http://localhost:5175' : 'https://hydradaw.pages.dev/';
  const converterUrl = isDev
    ? 'http://localhost:5176'
    : 'https://hydraconverter.pages.dev/';

  const apps: AppItem[] = [
    {
      id: 'hydra-cut',
      name: 'HydraCut',
      description: 'Editor de video multitrack en tu navegador. WebCodecs y exportación MP4 instantánea.',
      icon: <Video className="w-6 h-6 text-cyan-400" />,
      launchUrl: editorUrl,
    },
    {
      id: 'hydra-daw',
      name: 'HydraDAW',
      description: 'Estudio de audio multitrack local. Grabación, mezcla y mastering.',
      icon: <Music className="w-6 h-6 text-emerald-400" />,
      launchUrl: dawUrl,
    },
    {
      id: 'hydra-converter',
      name: 'HydraConverter',
      description: 'Convierte audio, video e imágenes en tu dispositivo. Sin subidas.',
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      launchUrl: converterUrl,
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col">
      <header className="border-b border-dark-800/80 bg-dark-950/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black">
              H
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              Hydra<span className="text-cyan-400">Apps</span>
            </span>
          </div>
          <a
            href={editorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold transition"
          >
            <span>Abrir HydraCut</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4">
        <section className="py-14 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Tus herramientas multimedia.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              100% en tu navegador.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Sin subidas, sin cuentas, sin esperas. Tus archivos nunca salen de tu equipo.
          </p>
        </section>

        <section id="apps" className="pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className="rounded-2xl bg-dark-900/80 border border-dark-800 p-6 flex flex-col hover:border-cyan-500/50 transition"
            >
              <div className="p-2.5 mb-4 w-fit rounded-xl bg-dark-850 border border-dark-750">
                {app.icon}
              </div>
              <h2 className="text-lg font-bold text-white mb-1">{app.name}</h2>
              <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                {app.description}
              </p>
              <a
                href={app.launchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition"
              >
                <span>Abrir</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-dark-850 py-6 text-center text-xs text-slate-500">
        HydraApps · 100% client-side · Tus archivos nunca salen de tu equipo
      </footer>
    </div>
  );
}
