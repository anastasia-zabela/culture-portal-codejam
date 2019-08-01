import React from 'react'
import { Link } from 'gatsby'

const SwicthButtons = ({ page }) => {

  return (
    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button className="dropdown-item" type="button">
        <Link to={`en/${page}`}>
          English
        </Link>
      </button>
      <button className="dropdown-item" type="button">
        <Link to={`be/${page}`}>
          Белорусский
          </Link>
      </button>
      <button className="dropdown-item" type="button">
        <Link to={`ru/${page}`}>
        Русский
        </Link>
        </button>
    </div>
  )
}

export default SwicthButtons;