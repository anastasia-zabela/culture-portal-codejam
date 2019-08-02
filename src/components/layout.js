import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  const { page, pageLang, slug, siteTitle, buttonNames } = props;

  return (
    <div className={`${layoutStyles.container} notranslate`}>
      <div className={layoutStyles.content}>
        <Header
          page={page}
          pageLang={pageLang}
          slug={slug}
          siteTitle={siteTitle}
          buttonNames={buttonNames}
        />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
