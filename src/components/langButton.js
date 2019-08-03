import React from 'react';
import { changeLocale, Link } from "gatsby-plugin-intl";

const LangButton = ({ lang, children, currentLocale, path, slug }) => {
  if (slug) {
    console.log('slug', slug.slice(-2))
  }
  console.log('lang', lang)
  return (
    <>
      {slug ? (
        <button
          style={{
            margin: 3,
            cursor: `pointer`,
          }}
        > <Link
          style={{
            color: slug.slice(-2) === lang ? `red` : `black`,
          }}
          to={`/directors/${slug.slice(0, -3)}-${lang}`} > {children}</Link >
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