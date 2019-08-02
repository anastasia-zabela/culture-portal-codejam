import React from 'react';
import { Link } from 'gatsby';

import SwitchButtons from '../switchButtons';

const Header = ({ page, slug, siteTitle, buttonNames }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <h4>{siteTitle}</h4>
          </div>
            <div className="col-6">
              <ul className="nav justify-content-center">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">{buttonNames.home}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/directors">{buttonNames.list}</Link>
                </li>
              </ul>
              </div>
            <div className="col-3">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  English
                </button>
                <SwitchButtons page={page} slug={slug} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
