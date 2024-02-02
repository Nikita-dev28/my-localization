import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

    return (
        <div>
            <div className='text-start m-3 bg-secondary p-2'>
                <select
                    value={selectedLanguage}
                    onChange={(e) => changeLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>
            </div>
            <div className='text-start m-4'>
                <h3>{t('TITLE')}</h3>
                <h5>{t('NAME')}</h5>
                <p>{t('DESCREPTION')}</p>
                <p>{t('CONTACT')}</p>
            </div>
        </div>
    );
};

export default Home;




