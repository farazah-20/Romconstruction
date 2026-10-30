# Romconstruction – Website

Website der Rom Construction Int GmbH, Bauunternehmen in Marburg (www.romconstruction.de).
Vite, React 19, TypeScript, React Router und Tailwind CSS 4 (über PostCSS, Theme in `index.css`).
Schriften (Inter, Merriweather) werden lokal über Fontsource eingebunden.

## Entwicklung

```bash
npm install
npm run dev        # http://127.0.0.1:5172
npx tsc --noEmit   # Typprüfung
npm run build      # Produktions-Build nach dist/
npm run preview    # Build lokal ansehen
```

Texte (DE/EN) stehen in `translations.ts`, Rechtstexte unter `components/legal/`
(`/impressum`, `/datenschutz`). Bilder liegen in `public/images/`.

## Deployment

Gehostet auf Vercel (Framework „Vite“, Build `npm run build`, Ausgabe `dist`).
`vercel.json` leitet alle Pfade auf `index.html` um, damit `/impressum` und `/datenschutz` direkt aufrufbar sind.

## Offen (vom Kunden zu ergänzen)

- Geschäftsführer (Impressum, Datenschutz)
- USt-IdNr. (Impressum)
- Verantwortlicher nach § 18 Abs. 2 MStV (Impressum)
