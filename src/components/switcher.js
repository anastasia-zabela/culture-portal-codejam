import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "Eng",
  be: "Бел",
  ru: "Рус",
}

const Switcher = () => {
  // let active = React.createRef();

  return (
    <div
      className="language"
      style={{
        float: "right",
      }}
    >
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              className={currentLocale === language ? `${language} active` : language}
              // ref={currentLocale === language ? active : language}
              onClick={(e) => {
                changeLocale(language);
                console.log('language:', language);
                // console.log(document.querySelector('.header').id);
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
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Switcher
