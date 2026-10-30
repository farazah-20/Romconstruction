export type Language = 'DE' | 'EN';

export const translations = {
    DE: {
        nav: {
            about: 'Unternehmen',
            services: 'Leistungen',
            location: 'Standort',
            project: 'Projekt anfragen',
            legal: { impressum: 'Impressum', privacy: 'Datenschutz' },
            menu: { open: 'Menü öffnen', close: 'Menü schließen', language: 'Sprache' }
        },
        hero: {
            badge: 'Romconstruction | Marburg',
            title: 'Präzision am Bau.',
            subtitle: 'Visionäre Architektur.',
            desc: 'Wir bauen heute für die Generationen von morgen. Meisterhafte Ausführung und verlässliche Projektplanung für Ihr Bauvorhaben.',
            cta: 'Projekt anfragen'
        },
        about: {
            location: 'Firmensitz',
            company: 'Das Unternehmen',
            title: 'Bauen mit Verstand.',
            subtitle: 'Wohnen mit Gefühl.',
            text1: 'Romconstruction steht für Qualität, Termintreue und Transparenz im Bauwesen. Als modernes Bauunternehmen begleiten wir Sie bei der Realisierung Ihrer Träume.',
            text2: 'Unsere Philosophie vereint traditionelles Handwerk mit innovativen Bautechnologien. Wir schaffen Räume, die nicht nur funktional überzeugen, sondern durch Ästhetik bestechen.',
            stats: { reliable: 'Verlässlich', onTime: 'Termintreue', material: 'Materialwahl' }
        },
        services: {
            title: 'Unsere Leistungen',
            desc: 'Fundierte Expertise in allen Phasen des Bauens.',
            items: {
                hochbau: { title: 'Hochbau', desc: 'Präzise Umsetzung von Wohn- und Gewerbeimmobilien.' },
                sanierung: { title: 'Sanierung', desc: 'Fachgerechte Modernisierung und energetische Optimierung.' },
                bau: { title: 'Schlüsselfertiges Bauen', desc: 'Von der Planung bis zur Übergabe.' },
                management: { title: 'Projektmanagement', desc: 'Professionelle Bauleitung und Kostenkontrolle.' }
            }
        },
        contact: {
            title: 'Hier finden Sie uns',
            address: 'Adresse',
            email: 'E-Mail',
            phone: 'Telefon',
            reviews: 'Bewertungen',
            reviewsLink: 'Auf Google ansehen',
            map: {
                title: 'Karte',
                notice: 'Beim Laden der Karte werden Daten (u. a. Ihre IP-Adresse) an Google übertragen.',
                load: 'Karte laden',
                privacy: 'Mehr dazu in der Datenschutzerklärung'
            }
        },
        appointment: {
            title: 'Projekt anfragen',
            subtitle: 'Schildern Sie uns Ihr Bauvorhaben.',
            form: { name: 'Ihr Name', email: 'Ihre E-Mail', phone: 'Telefonnummer', message: 'Ihr Anliegen', send: 'Anfrage absenden' },
            mailHint: 'Öffnet Ihr E-Mail-Programm',
            privacyBefore: 'Ihre Angaben verwenden wir nur zur Bearbeitung Ihrer Anfrage. Details in der ',
            privacyLink: 'Datenschutzerklärung',
            privacyAfter: '.',
            successTitle: 'Vielen Dank!',
            successText: 'Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete E-Mail dort ab.',
            mailSubject: 'Projektanfrage über romconstruction.de'
        }
    },
    EN: {
        nav: {
            about: 'Company',
            services: 'Services',
            location: 'Location',
            project: 'Request Project',
            legal: { impressum: 'Imprint', privacy: 'Privacy' },
            menu: { open: 'Open menu', close: 'Close menu', language: 'Language' }
        },
        hero: {
            badge: 'Romconstruction | Marburg',
            title: 'Precision in Construction.',
            subtitle: 'Visionary Architecture.',
            desc: 'Building today for the generations of tomorrow. Masterful execution and reliable project planning for your construction project.',
            cta: 'Request Project'
        },
        about: {
            location: 'Headquarters',
            company: 'The Company',
            title: 'Building with Reason.',
            subtitle: 'Living with Feeling.',
            text1: 'Romconstruction stands for quality, punctuality, and transparency in construction. As a modern construction company, we accompany you in realizing your dreams.',
            text2: 'Our philosophy combines traditional craftsmanship with innovative construction technologies. We create spaces that are not only functional but also aesthetically pleasing.',
            stats: { reliable: 'Reliable', onTime: 'Punctuality', material: 'Material Selection' }
        },
        services: {
            title: 'Our Services',
            desc: 'Profound expertise in all phases of construction.',
            items: {
                hochbau: { title: 'Structural Engineering', desc: 'Precise implementation of residential and commercial properties.' },
                sanierung: { title: 'Renovation', desc: 'Professional modernization and energy optimization.' },
                bau: { title: 'Turnkey Construction', desc: 'From planning to handover.' },
                management: { title: 'Project Management', desc: 'Professional site supervision and cost control.' }
            }
        },
        contact: {
            title: 'Find us here',
            address: 'Address',
            email: 'E-Mail',
            phone: 'Phone',
            reviews: 'Reviews',
            reviewsLink: 'View on Google',
            map: {
                title: 'Map',
                notice: 'When the map is loaded, data (including your IP address) is transmitted to Google.',
                load: 'Load map',
                privacy: 'More in our privacy policy'
            }
        },
        appointment: {
            title: 'Request Project',
            subtitle: 'Tell us about your construction project.',
            form: { name: 'Your Name', email: 'Your E-Mail', phone: 'Phone Number', message: 'Your Request', send: 'Send Request' },
            mailHint: 'Opens your e-mail program',
            privacyBefore: 'We only use your details to handle your request. Details in our ',
            privacyLink: 'privacy policy',
            privacyAfter: '.',
            successTitle: 'Thank you!',
            successText: 'Your e-mail program has been opened. Please send the prepared e-mail from there.',
            mailSubject: 'Project request via romconstruction.de'
        }
    }
};
