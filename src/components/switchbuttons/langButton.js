import React from 'react';
import { changeLocale, Link } from "gatsby-plugin-intl";

const language = {
  currentLang: 'en'
};

const LangButton = ({ slug, lang, children }) => {
  const style = {
    background: '#3d0d15',
  }
  
  return (
    <>
      {slug ? (
          <Link className="btn btn-secondary" 
            to={`/directors/${slug.slice(0, -3)}-${lang}`}
            style={language.currentLang === lang ? style : {}}
            onClick={() => {
              language.currentLang = lang;
            }}>
            {children}
          </Link>
      ) : (
        <button className="btn btn-secondary" type="button" 
          onClick={() => {
            changeLocale(lang);
            language.currentLang = lang;
          }}
          style={language.currentLang === lang ? style : {}}>
          {children}
        </button>
        )}
    </>
  )
}

export default LangButton;