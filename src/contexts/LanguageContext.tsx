import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

interface LanguageContextType {
  currentLang: string;
  setLanguage: (code: string) => void;
  getCurrentLanguage: () => Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'en');

  const setLanguage = (code: string) => {
    setCurrentLang(code);
    i18n.changeLanguage(code);
    // Store the language preference
    localStorage.setItem('preferredLanguage', code);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLang) || languages[0];
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, getCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}