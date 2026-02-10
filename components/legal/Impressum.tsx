import React, { useEffect } from 'react';

const Impressum: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <section className="py-32 px-6 bg-rom-white min-h-screen">
            <div className="container mx-auto max-w-3xl">
                <h1 className="font-serif text-4xl font-bold mb-8 text-rom-black">Impressum</h1>

                <div className="space-y-8 text-gray-600 leading-relaxed font-light">
                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Romconstruction<br />
                            Auf dem Halmburger 16<br />
                            35043 Marburg
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">Vertreten durch</h2>
                        <p>Geschäftsführung: [Name des Geschäftsführers]</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">Kontakt</h2>
                        <p>
                            Telefon: +49 6421 3508081<br />
                            E-Mail: service@romconstruction.de
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            [DE XXXXXXXX]
                        </p>
                    </div>

                    <div className="text-sm border-t border-gray-200 pt-8 mt-8">
                        <p>Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/odr</p>
                        <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impressum;
