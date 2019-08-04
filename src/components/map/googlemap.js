import React from 'react';
import PropTypes from 'prop-types';

import mapStyles from './googlemap.module.scss'

const GoogelMap = ({ srcLink }) => {
  return (
    <>
      <iframe className={mapStyles.map}
        title="googlemap"
        src={srcLink}
        style={{
          frameborder: "0",
          border: "0px",
        }}
        allowFullScreen
      ></iframe>
    </>
  )
}

GoogelMap.propTypes = {
  srcLink: PropTypes.string,
};

GoogelMap.defaultProps = {
  srcLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150505.20100923395!2d27.453286768317984!3d53.88476083077986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1564568087931!5m2!1sru!2sby'
};

export default GoogelMap;