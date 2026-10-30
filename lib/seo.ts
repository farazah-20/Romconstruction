// Head-Angaben je Route – genutzt vom Prerender (prerender.mjs) und clientseitig (RouteHead).

export const SITE_URL = 'https://www.romconstruction.de';
export const SITE_NAME = 'Romconstruction';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const OG_IMAGE_ALT = 'Startseite von Romconstruction – Bauunternehmen in Marburg';

export interface RouteMeta {
    title: string;
    description: string;
    canonical: string;
    noindex: boolean;
}

const HOME_DESCRIPTION =
    'Rom Construction Int GmbH in Marburg: Hochbau, Sanierung, schlüsselfertiges Bauen und Projektmanagement für Wohn- und Gewerbebauten.';

export const ROUTE_META: Record<string, RouteMeta> = {
    '/': {
        title: 'Bauunternehmen in Marburg – Hochbau | Romconstruction',
        description: HOME_DESCRIPTION,
        canonical: `${SITE_URL}/`,
        noindex: false,
    },
    '/impressum': {
        title: 'Impressum – Rom Construction Int GmbH',
        description: 'Impressum der Rom Construction Int GmbH, Auf dem Halmburger 16, 35043 Marburg.',
        canonical: `${SITE_URL}/impressum`,
        noindex: true,
    },
    '/datenschutz': {
        title: 'Datenschutzerklärung – Rom Construction Int GmbH',
        description: 'Datenschutzerklärung der Rom Construction Int GmbH: Hosting, Kontakt, Google Maps und Ihre Rechte.',
        canonical: `${SITE_URL}/datenschutz`,
        noindex: true,
    },
};

export function getRouteMeta(pathname: string): RouteMeta {
    const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    return ROUTE_META[clean] ?? ROUTE_META['/'];
}

export const JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: SITE_NAME,
    legalName: 'Rom Construction Int GmbH',
    url: `${SITE_URL}/`,
    logo: OG_IMAGE,
    image: OG_IMAGE,
    telephone: '+49 6421 3508081',
    email: 'service@romconstruction.de',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Auf dem Halmburger 16',
        postalCode: '35043',
        addressLocality: 'Marburg',
        addressCountry: 'DE',
    },
    areaServed: [
        { '@type': 'City', name: 'Marburg' },
        { '@type': 'AdministrativeArea', name: 'Landkreis Marburg-Biedenkopf' },
    ],
    parentOrganization: {
        '@type': 'Organization',
        name: 'Molner Holdings',
        url: 'https://www.molner.holdings/',
    },
};

const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Erzeugt die Head-Tags einer Route als HTML (für den Prerender). */
export function renderHeadTags(pathname: string): string {
    const m = getRouteMeta(pathname);
    const tags = [
        `<title>${esc(m.title)}</title>`,
        `<meta name="description" content="${esc(m.description)}" />`,
        m.noindex ? `<meta name="robots" content="noindex, follow" />` : '',
        `<link rel="canonical" href="${m.canonical}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="${SITE_NAME}" />`,
        `<meta property="og:locale" content="de_DE" />`,
        `<meta property="og:title" content="${esc(m.title)}" />`,
        `<meta property="og:description" content="${esc(m.description)}" />`,
        `<meta property="og:url" content="${m.canonical}" />`,
        `<meta property="og:image" content="${OG_IMAGE}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${esc(OG_IMAGE_ALT)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(m.title)}" />`,
        `<meta name="twitter:description" content="${esc(m.description)}" />`,
        `<meta name="twitter:image" content="${OG_IMAGE}" />`,
        pathname === '/'
            ? `<script type="application/ld+json" id="ld-json">${JSON.stringify(JSON_LD).replace(/</g, '\\u003c')}</script>`
            : '',
    ];
    return tags.filter(Boolean).join('\n    ');
}
