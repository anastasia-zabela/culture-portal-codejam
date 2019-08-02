import React from 'react'
import { Link } from 'gatsby'

const SwicthButtons = ({ page, slug }) => {
  const directorName = slug ? slug.slice(0, -3) : '';
  return (
    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button className="dropdown-item" type="button">
        <Link to={page ? `en/${page}` : `/directors/${directorName}-en`}>
          English
        </Link>
      </button>
      <button className="dropdown-item" type="button">
        <Link to={page ? `be/${page}` : `/directors/${directorName}-be`}>
          Беларуская
          </Link>
      </button>
      <button className="dropdown-item" type="button">
        <Link to={page ? `ru/${page}` : `/directors/${directorName}-ru`}>
          Русский
        </Link>
      </button>
    </div>
  )
}

export default SwicthButtons;