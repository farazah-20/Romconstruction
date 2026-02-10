import React, { useEffect } from 'react';

const Datenschutz: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <section className="py-32 px-6 bg-rom-white min-h-screen">
            <div className="container mx-auto max-w-3xl">
                <h1 className="font-serif text-4xl font-bold mb-8 text-rom-black">Datenschutzerklärung</h1>

                <div className="space-y-8 text-gray-600 leading-relaxed font-light">
                    <p>
                        Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist Romconstruction.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">Ihre Betroffenenrechte</h2>
                        <p className="mb-4">
                            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
                            <li>Berichtigung unrichtiger personenbezogener Daten,</li>
                            <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
                            <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
                            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
                            <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-rom-black mb-4">Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
                        <p>
                            Wenn Sie auf unsere Website zugreifen, werden automatisch mittels eines Cookies Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Datenschutz;
