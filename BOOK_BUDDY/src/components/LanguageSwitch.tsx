import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLocale('en')}
        className={`px-2 py-1 rounded ${
          locale === 'en'
            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100'
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('fr')}
        className={`px-2 py-1 rounded ${
          locale === 'fr'
            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100'
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        FR
      </button>
    </div>
  );
}