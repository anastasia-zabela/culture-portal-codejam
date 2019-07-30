import React from 'react';
import { Link } from 'gatsby-plugin-intl';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <h1>Theater directors of Belarus</h1>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="/"><a class="nav-link">Home</a></Link>
                </li>
                <li class="nav-item">
                  <Link ><a class="nav-link">List of theater directors</a></Link>
                </li>
              </ul>
          </div>
      </nav>
    </header>
  )
}

export default Header;
