// Schreibt nach dem Build pro Route eine fertig gerenderte HTML-Datei nach dist/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const { render, renderHeadTags } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const routes = ['/', '/impressum', '/datenschutz'];

for (const route of routes) {
  const html = template
    .replace('<!--app-head-->', renderHeadTags(route))
    .replace('<!--app-html-->', render(route));
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  // Zusätzlich <route>.html, damit auch `vite preview` und cleanUrls die Seite ohne Slash direkt liefern.
  if (route !== '/') fs.writeFileSync(path.join(dist, `${route.slice(1)}.html`), html);
  console.log(`prerender: ${route} -> ${path.relative(root, file)}`);
}
