import React from 'react';
import { Link } from 'gatsby';

import swicthButtonsStyle from './switchbuttons.module.scss';

const SwicthButtons = ({ page, slug, pageLang }) => {
  const directorName = slug ? slug.slice(0, -3) : '';
  const style = {
    background: '#3d0d15',
  }

  return (
    <div className={swicthButtonsStyle.btnLang}>
      <div className="btn-group" role="group" aria-labelledby="Basic example">
        <button className="btn btn-secondary" type="button" style={pageLang === 'en' ? style : {}}>
          <Link to={page ? `en/${page}` : `/directors/${directorName}-en`}>
            English
          </Link>
        </button>
        <button className="btn btn-secondary" type="button" style={pageLang === 'be' ? style : {}}>
          <Link to={page ? `be/${page}` : `/directors/${directorName}-be`}>
            Беларуская
            </Link>
        </button>
        <button className="btn btn-secondary" type="button" style={pageLang === 'ru' ? style : {}}>
          <Link to={page ? `ru/${page}` : `/directors/${directorName}-ru`}>
            Русский
          </Link>
        </button>
      </div>
    </div>
  )
}

export default SwicthButtons;