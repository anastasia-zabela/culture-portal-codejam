import React from "react";
import { IntlContextConsumer } from "gatsby-plugin-intl";

import LangButton from './langButton';
import swicthButtonsStyle from './switchbuttons.module.scss';

const Switcher = ({ path, slug }) => {
  return (
    <div className={swicthButtonsStyle.btnLang}>
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          <div className="btn-group" role="group" aria-labelledby="Basic example">
            <LangButton
              lang='en'
              path={path}
              slug={slug}
              currentLocale={currentLocale}
            >Eng</LangButton>
            <LangButton
              lang='ru'
              path={path}
              slug={slug}
              currentLocale={currentLocale}
            >Рус</LangButton>
            <LangButton
              lang='be'
              path={path} 
              slug={slug}
              currentLocale={currentLocale}
            >Бел</LangButton>
          </div>
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Switcher


/* <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              className={currentLocale === language ? `${language} active` : language}
              onClick={(e) => {
                changeLocale(language);
                console.log('language:', language);
                // console.log(e.target.className);
              }
              }
              style={{
                color: currentLocale === language ? `red` : `black`,
                margin: 3,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
              {path ?
                (<Link to={`${path.slice(3, -3)}${language}`}>{languageName[language]}</Link>) :
                (languageName[language]) }
            </button >
          ))
        }
      </IntlContextConsumer > */
