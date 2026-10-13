# 🌐 HydraApps — The Modern Client-Side Web Suite

> **HydraApps** es un ecosistema de aplicaciones web de alto rendimiento diseñadas para ejecutarse **100% en el dispositivo del usuario**. Sin servidores de procesamiento, sin tiempos de espera de subida, y con privacidad garantizada desde el diseño.

![HydraApps Hub](https://img.shields.io/badge/HydraApps-Hub-cyan)
![Client-Side](https://img.shields.io/badge/Architecture-100%25%20Client--Side-emerald)
![Privacy](https://img.shields.io/badge/Privacy-Zero%20Data%20Collected-blue)

---

## 📱 Catálogo de Aplicaciones

| Aplicación | Estado | Descripción | Tecnologías |
| :--- | :--- | :--- | :--- |
| **🎬 HydraCut** (`apps/hydra-cut`, `:5173`) | ✅ **v1.0 Live** | Editor de video multitrack con transiciones, waveforms y exportación MP4 instantánea | WebCodecs, mp4-muxer, Web Audio API, Canvas 60 FPS |
| **🎚️ HydraDAW** (`apps/hydra-daw`, `:5175`) | ✅ **v1.0 Live** | DAW multitrack: grabación, mezcla, mastering con limitador brickwall y exportación WAV | Web Audio API, IndexedDB, LUFS |
| **⚡ HydraConvert** (`apps/hydra-convert`, `:5176`) | ✅ **v1.0 Live** | Conversor de vídeo, audio e imagen 100% local, sin servidor | WebCodecs, Canvas 2D, WebAudio |
| **📥 HydraDownloader** (`apps/hydra-downloader`, `:5177`) | ✅ **v1.0 Live** | Descargador multimedia universal client-side estilo Cobalt & Apple HIG | React, extractores públicos, Tailwind |
| **📱 HydraController** (`apps/hydra-controller`, `:8443`) | 🧪 **Beta local** | Deck táctil móvil para Linux: sesiones virtuales, uinput y streaming <30ms (solo LAN) | Express, WebSocket, WebCodecs, gamescope |
| **📸 HydraLens** | ⏳ Próximamente | Retoque fotográfico de alta precisión y conversión de formatos | WebGL 2.0, LUT Shaders, AVIF / WebP |

---

## 💡 Filosofía HydraApps

1. **Zero Cloud Dependencies:** Todo el procesamiento ocurre en la CPU/GPU de tu equipo mediante APIs web nativas de última generación.
2. **Privacidad Inviolable:** Tus videos, audios e imágenes nunca salen de tu ordenador.
3. **Velocidad Extrema:** Sin latencias de red ni cuellos de botella de ancho de banda.
4. **Offline Ready:** Funciona en cualquier navegador moderno sin requerir backend.

---

## 🛠️ Tecnologías

* **Frontend:** React 18, TypeScript, Tailwind CSS, Lucide Icons
* **Empaquetador:** Vite

---

## 🚀 Instalación y Uso Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

---

## ☁️ Despliegue en Cloudflare Pages

1. Conecta este repositorio en tu panel de **Cloudflare Pages**.
2. Parámetros de compilación:
   * **Framework preset:** `Vite`
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
3. ¡Listo! Tu portal se desplegará instantáneamente en la red global de Cloudflare.

---

## 📜 Licencia

MIT © 2026 [HydraApps](https://github.com/juanpimg)
