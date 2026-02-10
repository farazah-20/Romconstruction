import React, { useEffect } from 'react';

const AGB: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <section className="py-32 px-6 bg-rom-white min-h-screen">
            <div className="container mx-auto max-w-3xl">
                <h1 className="font-serif text-4xl font-bold mb-8 text-rom-black">Allgemeine Geschäftsbedingungen</h1>

                <div className="space-y-8 text-gray-600 leading-relaxed font-light">
                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">§1 Geltungsbereich</h2>
                        <p>
                            Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen der Romconstruction und ihren Kunden in der jeweiligen, zum Zeitpunkt des Vertragsschlusses aktuellen Fassung.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">§2 Vertragsabschluss</h2>
                        <p>
                            Die Darstellung der Dienstleistungen auf unserer Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe einer Bestellung dar.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">§3 Leistungen</h2>
                        <p>
                            Der Umfang der vertraglichen Leistungen ergibt sich aus der Leistungsbeschreibung im Angebot. Nebenabreden, die den Umfang der vertraglichen Leistungen abändern, bedürfen einer ausdrücklichen Bestätigung.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AGB;
