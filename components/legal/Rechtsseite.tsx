import React, { useEffect } from 'react';

export const firma = {
    name: 'Rom Construction Int GmbH',
    strasse: 'Auf dem Halmburger 16',
    ort: '35043 Marburg',
    telefon: '+49 6421 3508081',
    telefonHref: 'tel:+4964213508081',
    email: 'service@romconstruction.de',
    register: 'Amtsgericht Marburg',
    hrb: 'HRB 8698',
};

const STANDARD_TITEL = 'Romconstruction | Exzellenz im Bauwesen – Rom Construction Int GmbH, Marburg';

/** Sichtbarer Platzhalter für vom Kunden noch zu ergänzende Angaben. */
export const Platzhalter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="font-semibold text-rom-accent">[{children}]</span>
);

export const Abschnitt: React.FC<{ titel: string; children: React.ReactNode }> = ({ titel, children }) => (
    <div>
        <h2 className="text-xl font-bold text-rom-black mb-4">{titel}</h2>
        <div className="space-y-4">{children}</div>
    </div>
);

/** Gemeinsamer Rahmen der Rechtsseiten im bisherigen Seitenstil. */
const Rechtsseite: React.FC<{ titel: string; children: React.ReactNode }> = ({ titel, children }) => {
    useEffect(() => {
        document.title = `${titel} – Rom Construction Int GmbH`;
        return () => { document.title = STANDARD_TITEL; };
    }, [titel]);

    return (
        <section className="py-32 px-6 bg-rom-white min-h-screen">
            <div className="container mx-auto max-w-3xl">
                <h1 className="font-serif text-4xl font-bold mb-8 text-rom-black">{titel}</h1>
                <div className="space-y-8 text-gray-600 leading-relaxed font-light">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Rechtsseite;
