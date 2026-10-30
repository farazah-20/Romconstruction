import React from 'react';
import Rechtsseite, { Abschnitt, Platzhalter, firma } from './Rechtsseite';

const Datenschutz: React.FC = () => (
    <Rechtsseite titel="Datenschutzerklärung">
        <p>Stand: Oktober 2026</p>

        <Abschnitt titel="1. Verantwortlicher">
            <p>
                {firma.name}<br />
                {firma.strasse}, {firma.ort}<br />
                Vertreten durch: <Platzhalter>Geschäftsführer: vom Kunden zu ergänzen</Platzhalter><br />
                Telefon: {firma.telefon}<br />
                E-Mail: <a href={`mailto:${firma.email}`} className="hover:text-rom-accent transition-colors">{firma.email}</a>
            </p>
        </Abschnitt>

        <Abschnitt titel="2. Hosting und Server-Logfiles">
            <p>
                Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet.
                Beim Aufruf der Seite verarbeitet Vercel automatisch technisch notwendige Daten in sogenannten
                Server-Logfiles: IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite, übertragene
                Datenmenge, Referrer-URL sowie Browser und Betriebssystem.
            </p>
            <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren
                und fehlerfreien Auslieferung der Website. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung.
                Für Übermittlungen in die USA stützt sich Vercel auf das EU-US Data Privacy Framework und ergänzend
                auf Standardvertragsklauseln der EU-Kommission.
            </p>
        </Abschnitt>

        <Abschnitt titel="3. Kontakt per E-Mail oder Telefon">
            <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (zum Beispiel Name,
                Kontaktdaten und Angaben zu Ihrem Bauvorhaben), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag zielt, sonst Art. 6 Abs. 1 lit. f
                DSGVO. Wir löschen die Daten, sobald sie nicht mehr erforderlich sind und keine gesetzlichen
                Aufbewahrungspflichten bestehen.
            </p>
            <p>
                Das Anfrageformular auf dieser Website überträgt selbst keine Daten. Beim Absenden öffnet sich Ihr
                eigenes E-Mail-Programm mit einer vorbereiteten Nachricht; erst wenn Sie diese dort absenden, erhalten
                wir Ihre Angaben per E-Mail.
            </p>
        </Abschnitt>

        <Abschnitt titel="4. Google Maps">
            <p>
                Auf der Startseite können Sie eine Karte von Google Maps (Google Ireland Limited, Gordon House,
                Barrow Street, Dublin 4, Irland) laden. Die Karte wird erst angezeigt, wenn Sie auf „Karte laden“
                klicken. Erst dann werden Daten, insbesondere Ihre IP-Adresse, an Google übertragen; dabei kann es auch
                zu einer Übermittlung an Google LLC in den USA kommen. Rechtsgrundlage ist Ihre Einwilligung nach
                Art. 6 Abs. 1 lit. a DSGVO, die Sie durch den Klick erteilen und jederzeit für die Zukunft widerrufen
                können, indem Sie die Seite neu laden. Der Link „Bewertungen – Auf Google ansehen“ führt zu Google
                Maps; Daten werden erst übertragen, wenn Sie ihn anklicken. Es gelten die Datenschutzhinweise von
                Google.
            </p>
        </Abschnitt>

        <Abschnitt titel="5. Cookies, Tracking und Schriften">
            <p>
                Wir setzen keine Cookies und keine Analyse- oder Tracking-Werkzeuge ein. Die Schriften werden von
                unserem eigenen Server geladen; es findet keine Verbindung zu Google Fonts statt.
            </p>
        </Abschnitt>

        <Abschnitt titel="6. Ihre Rechte">
            <p>
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
                Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen
                Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Eine erteilte Einwilligung
                können Sie jederzeit für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Wenden Sie sich dazu an die oben
                genannten Kontaktdaten.
            </p>
        </Abschnitt>

        <Abschnitt titel="7. Beschwerderecht">
            <p>
                Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig für uns ist: Der Hessische
                Beauftragte für Datenschutz und Informationsfreiheit (HBDI), Gustav-Stresemann-Ring 1, 65189 Wiesbaden.
            </p>
        </Abschnitt>
    </Rechtsseite>
);

export default Datenschutz;
