import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header path={props.path} slug={props.slug} />
          {props.children}
      </div>
      <Footer />
  </div>
  )
}

export default Layout;
