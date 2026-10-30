import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export { renderHeadTags } from './lib/seo';

/** Rendert eine Route zu HTML (für den Prerender beim Build). */
export function render(url: string): string {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
