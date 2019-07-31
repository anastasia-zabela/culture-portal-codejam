import React from 'react';
import { Link } from 'gatsby-plugin-intl';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <h4>THEATER DIRECTORS OF BELARUS</h4>
            </div>
            <div className="col-6">
              <ul className="nav justify-content-center">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/directors">LIST OF THEATER DIRECTORS</Link>
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
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
