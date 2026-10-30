import React from 'react';
import Rechtsseite, { Abschnitt, Platzhalter, firma } from './Rechtsseite';

const Impressum: React.FC = () => (
    <Rechtsseite titel="Impressum">
        <Abschnitt titel="Angaben gemäß § 5 DDG">
            <p>
                {firma.name}<br />
                {firma.strasse}<br />
                {firma.ort}
            </p>
        </Abschnitt>

        <Abschnitt titel="Vertreten durch">
            <p><Platzhalter>Geschäftsführer: vom Kunden zu ergänzen</Platzhalter></p>
        </Abschnitt>

        <Abschnitt titel="Kontakt">
            <p>
                Telefon: <a href={firma.telefonHref} className="hover:text-rom-accent transition-colors">{firma.telefon}</a><br />
                E-Mail: <a href={`mailto:${firma.email}`} className="hover:text-rom-accent transition-colors">{firma.email}</a>
            </p>
        </Abschnitt>

        <Abschnitt titel="Registereintrag">
            <p>
                Eintragung im Handelsregister<br />
                Registergericht: {firma.register}<br />
                Registernummer: {firma.hrb}
            </p>
        </Abschnitt>

        <Abschnitt titel="Umsatzsteuer-ID">
            <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                <Platzhalter>USt-IdNr.: vom Kunden zu ergänzen</Platzhalter>
            </p>
        </Abschnitt>

        <Abschnitt titel="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>
                <Platzhalter>Verantwortlicher nach § 18 Abs. 2 MStV: vom Kunden zu ergänzen</Platzhalter><br />
                {firma.strasse}, {firma.ort}
            </p>
        </Abschnitt>

        <div className="text-sm border-t border-gray-200 pt-8 mt-8">
            <p>
                Verbraucherstreitbeilegung gemäß § 36 VSBG: Wir sind zur Teilnahme an einem
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
        </div>
    </Rechtsseite>
);

export default Impressum;
