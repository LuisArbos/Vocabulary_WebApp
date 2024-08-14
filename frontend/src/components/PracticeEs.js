import React from "react";
import BaseLayout from './BaseLayout';
import { Link } from 'react-router-dom';
import './practice.css';

const languages = [
  { name: "German", code: "de", flag: "/static/img/de_flag.png" },
  { name: "Romanian", code: "ro", flag: "/static/img/ro_flag.png" },
  { name: "Coming Soon", code: "", flag: "/static/img/coming-soon.png", comingSoon: true },
];

const ESPractice = ({ user }) => {
  return (
    <BaseLayout currentLan="ES">
      <div className="practice-page">
          {user && (
              <div className="my-languages">
                  <h2>Tus idiomas</h2>
                  <div className="languages-grid">
                      {/* Loop through user's practiced languages */}
                      {user.languages.map((lang) => (
                          <Link to={`es/practice/${lang.code}`} className="language-card" key={lang.code}>
                              <img src={`/flags/${lang.code}.png`} alt={lang.name} className="flag-icon-practice"/>
                              <h3>{lang.name}</h3>
                          </Link>
                      ))}
                  </div>
              </div>
          )}
          <h2>Selecciona un idioma</h2>
          <div className="languages-grid">
              {languages.map((lang) =>
                lang.comingSoon ? (
                <div key={lang.name} className="language-card coming-soon">
                    <img src={lang.flag} alt={lang.name} className="flag-icon-practice" />
                    <h3>{lang.name}</h3>
                    <p>Próximamente</p>
                </div>
                ) : (
                <Link to={`/es/practice/${lang.code}`} className="language-card" key={lang.code}>
                    <img src={lang.flag} alt={lang.name} className="flag-icon-practice" />
                    <h3>{lang.name}</h3>
                </Link>
                )
                )}
          </div>
      </div>
    </BaseLayout>
  );
};

    
  
export default ESPractice;