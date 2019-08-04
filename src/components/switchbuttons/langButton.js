import React from 'react';
import { changeLocale, Link } from "gatsby-plugin-intl";

const LangButton = ({ slug, lang, children, currentLocale }) => {
  const style = {
    background: '#3d0d15',
  }
  
  return (
    <>
      {slug ? (
          <Link className="btn btn-secondary" 
            to={`/directors/${slug.slice(0, -3)}-${lang}`}
            style={slug.slice(-2) === lang ? style : {}}>
            {children}
          </Link>
      ) : (
        <button className="btn btn-secondary" type="button" 
          onClick={() => {
            changeLocale(lang);
          }}
          style={currentLocale === lang ? style : {}}>
          {children}
        </button>
        )}
    </>
  )
}

export default LangButton;