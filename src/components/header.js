import React from 'react';
import { Link } from 'gatsby-plugin-intl';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>Theater directors of Belarus</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">List of theater directors</Link>
                </li>
              </ul>
          </div>
      </nav>
    </header>
  )
}

export default Header;
