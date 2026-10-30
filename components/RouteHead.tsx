import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMeta, JSON_LD, OG_IMAGE, OG_IMAGE_ALT, SITE_NAME } from '../lib/seo';

function setMeta(attr: 'name' | 'property', key: string, content: string | null) {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (content === null) {
        el?.remove();
        return;
    }
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

/** Aktualisiert Titel, Beschreibung, canonical usw. beim Routenwechsel. */
const RouteHead: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const m = getRouteMeta(pathname);
        document.title = m.title;
        setMeta('name', 'description', m.description);
        setMeta('name', 'robots', m.noindex ? 'noindex, follow' : null);
        setMeta('property', 'og:type', 'website');
        setMeta('property', 'og:site_name', SITE_NAME);
        setMeta('property', 'og:locale', 'de_DE');
        setMeta('property', 'og:title', m.title);
        setMeta('property', 'og:description', m.description);
        setMeta('property', 'og:url', m.canonical);
        setMeta('property', 'og:image', OG_IMAGE);
        setMeta('property', 'og:image:width', '1200');
        setMeta('property', 'og:image:height', '630');
        setMeta('property', 'og:image:alt', OG_IMAGE_ALT);
        setMeta('name', 'twitter:card', 'summary_large_image');
        setMeta('name', 'twitter:title', m.title);
        setMeta('name', 'twitter:description', m.description);
        setMeta('name', 'twitter:image', OG_IMAGE);

        let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = m.canonical;

        let ld = document.getElementById('ld-json');
        if (pathname === '/') {
            if (!ld) {
                ld = document.createElement('script');
                ld.id = 'ld-json';
                ld.setAttribute('type', 'application/ld+json');
                ld.textContent = JSON.stringify(JSON_LD);
                document.head.appendChild(ld);
            }
        } else {
            ld?.remove();
        }
    }, [pathname]);

    return null;
};

export default RouteHead;
