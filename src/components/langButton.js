import React from 'react';
import { changeLocale, Link } from "gatsby-plugin-intl";

const LangButton = ({ lang, children, currentLocale, path, slug }) => {
  return (
    <>
      {slug ? (
        <button
          style={{
            color: currentLocale === lang ? `red` : `black`,
            margin: 3,
            cursor: `pointer`,
          }}
        > <Link to={`/directors/${slug.slice(0, -3)}-${lang}`} > {children}</Link >
        </button >
      ) : (
          <button
            onClick={() => {
              changeLocale(lang);
            }}
            style={{
              color: currentLocale === lang ? `red` : `black`,
              margin: 3,
              cursor: `pointer`,
            }}
          >{children}
          </button>
        )}
    </>
  )
}

export default LangButton;

/*  {
      slug?(<button
        style = {{
          color: currentLocale === lang ? `red` : `black`,
    margin: 3,
      cursor: `pointer`,
       }}
       > <Link to={`${lang}/directors/${slug.slice(0, -3)}-${lang}`} > {children}</Link >
    </button >

    ) : (
  <button
    onClick={() => {
      changeLocale(lang);
    }}
    style={{
      color: currentLocale === lang ? `red` : `black`,
      margin: 3,
      cursor: `pointer`,
    }}
  >{children}
  </button>
)} */