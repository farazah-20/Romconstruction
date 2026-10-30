// Einwilligungsverwaltung (nur Google Maps). Speicherung in localStorage, Key "consent".

import { useEffect, useState } from 'react';

export interface Consent {
    v: 1;
    maps: boolean;
    ts: string;
}

const KEY = 'consent';
const CHANGE_EVENT = 'consent-change';
const OPEN_EVENT = 'consent-open';

export function readConsent(): Consent | null {
    if (typeof window === 'undefined') return null;
    try {
        const raw = window.localStorage.getItem(KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed && parsed.v === 1 && typeof parsed.maps === 'boolean') return parsed as Consent;
    } catch {
        // localStorage nicht verfügbar oder Eintrag ungültig
    }
    return null;
}

export function saveConsent(maps: boolean): Consent {
    const consent: Consent = { v: 1, maps, ts: new Date().toISOString() };
    try {
        window.localStorage.setItem(KEY, JSON.stringify(consent));
    } catch {
        // Speichern nicht möglich – Entscheidung gilt dann nur für diesen Seitenaufruf
    }
    window.dispatchEvent(new CustomEvent<Consent>(CHANGE_EVENT, { detail: consent }));
    return consent;
}

/** Öffnet das Consent-Banner erneut (z. B. über „Cookie-Einstellungen“ im Footer). */
export function openConsentSettings() {
    window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentOpen(handler: () => void) {
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
}

/** Aktuelle Einwilligung; null bis zum Mount bzw. solange keine Entscheidung getroffen wurde. */
export function useConsent(): Consent | null {
    const [consent, setConsent] = useState<Consent | null>(null);

    useEffect(() => {
        setConsent(readConsent());
        const onChange = (e: Event) => setConsent((e as CustomEvent<Consent>).detail);
        window.addEventListener(CHANGE_EVENT, onChange);
        return () => window.removeEventListener(CHANGE_EVENT, onChange);
    }, []);

    return consent;
}
