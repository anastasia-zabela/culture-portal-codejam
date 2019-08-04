import React from 'react';
import { Helmet } from "react-helmet"

import Header from '../header/header';
import Footer from '../footer/footer';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
  return (

        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>
            <Header path={props.path} slug={props.slug} />
            <Helmet>
              <meta name="google" content="notranslate" />
            </Helmet>
              {props.children}
          </div>
          <Footer />
      </div>

  )
}

export default Layout;
