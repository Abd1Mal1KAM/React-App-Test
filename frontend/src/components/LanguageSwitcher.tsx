import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Function to change the language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{t('welcome')}</h1>
      <p>{t('selectLanguage')}</p>
      
      <div className="mt-4">
        {/* Buttons to switch between languages */}
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => changeLanguage('ar')}
        >
          العربية
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
