import React from 'react';
import { Link, injectIntl } from 'gatsby-plugin-intl';
import { Link as LinkGat } from 'gatsby';

import Switcher from '../switchbuttons/switcher';
import be from '../../locales/be.json';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';

const lang = {
  be: be,
  ru: ru,
  en: en
}

const Header = ({ path, slug, intl }) => {

  let headerTitle = null;
  let homeLink = null;
  let directorsLink = null;
  if (path && path.includes('directors')) {
    headerTitle = lang[`${path.slice(-3, -1)}`].header.title;
    homeLink = lang[`${path.slice(-3, -1)}`].header.nav.home;
    directorsLink = lang[`${path.slice(-3, -1)}`].header.nav.list;
  }
  const stringSlicer = (string) => {
    const firstSpaceIndex = string.indexOf(' ');
    const firstPart = string.slice(0, firstSpaceIndex);
    const secondSpaceIndex = string.indexOf(' ', firstSpaceIndex + 1);
    const secondPart = string.slice(firstSpaceIndex, secondSpaceIndex);
    const thirdPart = string.slice(secondSpaceIndex);
    return (
      <>
        {firstPart} <br />
        {secondPart} <br />
        {thirdPart}
      </>
    )
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <>
                {headerTitle ?
                  (<h4>{stringSlicer(headerTitle)}</h4>)
                  :
                  (<h4>{stringSlicer(intl.formatMessage({ id: "header.title" }))}</h4>)
                }
              </>
            </div>
            <div className="col-md-6 col-sm-12">
              <ul className="nav">
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
            <div className="col-md-3 сol-sm-12">
              <Switcher path={path} slug={slug} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default injectIntl(Header);
