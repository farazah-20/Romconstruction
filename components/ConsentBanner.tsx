import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { onConsentOpen, readConsent, saveConsent } from '../lib/consent';
import { useTranslation } from '../contexts/LanguageContext';

const buttonClass =
    'flex-1 bg-rom-black text-white px-6 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-rom-accent hover:text-rom-black transition-all duration-300 shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-rom-accent focus-visible:ring-offset-2';

/** Einwilligungsabfrage für Google Maps. Wird erst nach dem Mount gerendert (kein SSR-Inhalt). */
const ConsentBanner: React.FC = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!readConsent()) setOpen(true);
        return onConsentOpen(() => setOpen(true));
    }, []);

    useEffect(() => {
        if (open) dialogRef.current?.focus();
    }, [open]);

    if (!open) return null;

    const decide = (maps: boolean) => {
        saveConsent(maps);
        setOpen(false);
    };

    return (
        <div className="fixed inset-x-0 bottom-0 z-[200] p-4 md:p-6 pointer-events-none">
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="false"
                aria-labelledby="consent-title"
                aria-describedby="consent-text"
                tabIndex={-1}
                className="pointer-events-auto mx-auto max-w-3xl bg-white/95 backdrop-blur-md rounded-[32px] shadow-floating border border-rom-black/5 p-6 md:p-8 outline-none"
            >
                <h2 id="consent-title" className="font-serif font-bold text-xl mb-3 text-rom-black">
                    {t.consent.title}
                </h2>
                <p id="consent-text" className="text-gray-600 text-sm leading-relaxed mb-6">
                    {t.consent.text}{' '}
                    <Link
                        to="/datenschutz"
                        onClick={() => setOpen(true)}
                        className="underline underline-offset-4 text-rom-black hover:text-rom-accent transition-colors"
                    >
                        {t.consent.privacy}
                    </Link>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button type="button" className={buttonClass} onClick={() => decide(false)}>
                        {t.consent.necessary}
                    </button>
                    <button type="button" className={buttonClass} onClick={() => decide(true)}>
                        {t.consent.allowMaps}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsentBanner;
