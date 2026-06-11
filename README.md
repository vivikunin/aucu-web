# AUCU Web

Sitio institucional para AUCU, Asociación Uruguaya de Consumidores Unidos.

## Stack

- React + Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

El archivo `public/_redirects` permite que las rutas SPA funcionen al refrescar `/home` o `/jornadas`.

## Contenido Editable

Editar `src/data/site.js` para actualizar:

- link de afiliación Google Forms.
- link de Instagram.
- fecha objetivo de la cuenta regresiva.
- textos institucionales.
- agenda, expositores y apoyos.

Colocar imágenes definitivas en `public/assets/`.
