// Micro-i18n sin dependencias: la superficie de texto es pequeña (~20 cadenas)
// y la filosofía del hub es cero peso innecesario.
// Para añadir un idioma: suma su código a LANGS y su bloque en STRINGS.

export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export type AppId =
  | 'hydra-cut'
  | 'hydra-daw'
  | 'hydra-convert'
  | 'hydra-downloader'
  | 'hydra-controller'
  | 'hydra-lens';

interface AppStrings {
  tagline: string;
  badge?: string;
}

interface Strings {
  githubAria: string;
  langAria: string;
  heroA: string;
  heroB: string;
  heroSub: string;
  navAria: string;
  openVerb: string;
  collabVerb: string;
  newTabNote: string;
  soonWord: string;
  footerNote: string;
  apps: Record<AppId, AppStrings>;
}

const es: Strings = {
  githubAria: 'Ver HydraApps en GitHub (pestaña nueva)',
  langAria: 'Cambiar idioma',
  heroA: 'Tus herramientas,',
  heroB: 'en tu dispositivo.',
  heroSub: 'Elige una app para empezar. Sin cuentas, sin subidas.',
  navAria: 'Suite Hydra',
  openVerb: 'Abrir',
  collabVerb: 'Colabora en',
  newTabNote: '(pestaña nueva)',
  soonWord: 'próximamente',
  footerNote: '· 100 % client-side — tus archivos nunca salen de tu equipo.',
  apps: {
    'hydra-cut': { tagline: 'Edita vídeo multitrack en el navegador.' },
    'hydra-daw': { tagline: 'Graba, mezcla y masteriza audio.' },
    'hydra-convert': { tagline: 'Convierte vídeo, audio e imagen.' },
    'hydra-downloader': {
      tagline: 'Descarga directa 100% local, sin APIs ni servidores.',
      badge: 'En desarrollo',
    },
    'hydra-controller': {
      tagline: 'Tu PC Linux en tu móvil, en red local.',
      badge: 'Nuevo',
    },
    'hydra-lens': { tagline: 'Retoque fotográfico.', badge: 'Pronto' },
  },
};

const en: Strings = {
  githubAria: 'View HydraApps on GitHub (new tab)',
  langAria: 'Switch language',
  heroA: 'Your tools,',
  heroB: 'on your device.',
  heroSub: 'Pick an app to get started. No accounts, no uploads.',
  navAria: 'Hydra suite',
  openVerb: 'Open',
  collabVerb: 'Contribute to',
  newTabNote: '(new tab)',
  soonWord: 'coming soon',
  footerNote: '· 100% client-side — your files never leave your device.',
  apps: {
    'hydra-cut': { tagline: 'Edit multitrack video in your browser.' },
    'hydra-daw': { tagline: 'Record, mix and master audio.' },
    'hydra-convert': { tagline: 'Convert video, audio and images.' },
    'hydra-downloader': {
      tagline: 'Direct 100% local downloads, no APIs or servers.',
      badge: 'In development',
    },
    'hydra-controller': {
      tagline: 'Your Linux PC on your phone, on your local network.',
      badge: 'New',
    },
    'hydra-lens': { tagline: 'Photo retouching.', badge: 'Soon' },
  },
};

export const STRINGS: Record<Lang, Strings> = { es, en };

const KEY = 'hydra-lang';

function isLang(v: unknown): v is Lang {
  return v === 'es' || v === 'en';
}

/** stored → navegador → inglés por defecto. */
export function detectLang(): Lang {
  try {
    const stored = localStorage.getItem(KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* almacenamiento no disponible: sigue al navegador */
  }
  try {
    const nav = navigator.languages?.[0] ?? navigator.language ?? '';
    if (nav.toLowerCase().startsWith('es')) return 'es';
  } catch {
    /* sin navigator: cae al defecto */
  }
  return 'en';
}

export function persistLang(lang: Lang): void {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    /* modo privado: la preferencia solo vive en la sesión */
  }
}
