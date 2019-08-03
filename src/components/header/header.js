import React from 'react';
import { Link, injectIntl } from 'gatsby-plugin-intl';

import Switcher from '../../components/switcher';

const Header = ({ path, slug, intl }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <h4>{intl.formatMessage({ id: "header.title" })}</h4>
          </div>
            <div className="col-6">
              <ul className="nav justify-content-center">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">{intl.formatMessage({ id: "header.nav.home" })}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/directors">{intl.formatMessage({ id: "header.nav.list" })}</Link>
                </li>
              </ul>
              </div>
            <div className="col-3">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  English
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">English</button>
                  <button className="dropdown-item" type="button">Белорусский</button>
                  <button className="dropdown-item" type="button">Русский</button>
                </div>
              </div>
            </div>
              <Switcher path={path} slug={slug} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default injectIntl(Header);
