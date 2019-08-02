import React from 'react'
import { Link } from 'gatsby'

const SwicthButtons = ({ page, slug }) => {

  return (
    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button className="dropdown-item" type="button">
        <Link to={page ? `en/${page}` : `/directors/${slug}-en`}>
          English
        </Link>
      </button>
      <button className="dropdown-item" type="button">
        <Link to={page ? `be/${page}` : `/directors/${slug}-be`}>
          Белорусский
          </Link>
      </button>
      <button className="dropdown-item" type="button">
        <Link to={page ? `ru/${page}` : `/directors/${slug}-ru`}>
        Русский
        </Link>
        </button>
    </div>
  )
}

export default SwicthButtons;