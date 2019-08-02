import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  const { page } = props;
  const { slug } = props;
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header page={page} slug={slug} />
          {props.children}
      </div>
      <Footer />
  </div>
  )
}

export default Layout;
