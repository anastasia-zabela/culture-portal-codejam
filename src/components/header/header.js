import React from 'react';
import { Link, injectIntl } from 'gatsby-plugin-intl';
import { Link as LinkGat } from 'gatsby';

import Switcher from '../../components/switcher';
import be from '../../locales/be.json';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';

const lang = {
  be: be,
  ru: ru,
  en: en
}

const Header = ({ path, slug, intl }) => {
  const headerTitle = path ? lang[`${path.slice(-3, -1)}`].header.title : null;
  const homeLink = path ? lang[`${path.slice(-3, -1)}`].header.nav.home : null;
  const directorsLink = path ? lang[`${path.slice(-3, -1)}`].header.nav.list : null;
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <>
                {headerTitle ?
                  (<h4>{headerTitle}</h4>)
                  :
                  (<h4>{intl.formatMessage({ id: "header.title" })}</h4>)
                }
              </>
            </div>
            <div className="col-6">
              <ul className="nav justify-content-center">
                <li className="nav-item active">
                  <>
                    {path ?
                      (<LinkGat className="nav-link" to={`/${path.slice(-3)}/`}>{homeLink}</LinkGat>)
                      :
                      (<Link className="nav-link" to="/">{intl.formatMessage({ id: "header.nav.home" })}</Link>)
                    }
                  </>
                </li>
                <li className="nav-item">
                  <>
                    {path ?
                      (<LinkGat className="nav-link" to={`/${path.slice(-3)}/directors/`}>{directorsLink}</LinkGat>)
                      :
                      (<Link className="nav-link" to="/directors">{intl.formatMessage({ id: "header.nav.list" })}</Link>)
                    }
                  </>
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
