import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  // Detectamos el idioma del navegador
  const detectLanguage = () => {
    const userLanguage = navigator.language || navigator.userLanguage;
    return userLanguage.startsWith('es') ? 'es' : 'en'; 
  };

  const [language, setLanguage] = useState(detectLanguage);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
