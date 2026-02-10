import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, Language } from '../translations';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof translations['DE'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('DE');

    const value = {
        lang,
        setLang,
        t: translations[lang]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};
