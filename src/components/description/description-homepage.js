import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import descriptionStyle from './description-homepage.module.scss';

const Description = ({ intl }) => {
  const img = {
    1: 'https://images.unsplash.com/photo-1527853410828-e05f067b7707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    2: 'https://images.unsplash.com/photo-1557759677-791f51707d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'
  }

  return (
    <article className={`${descriptionStyle.description} container-fluid`}>
      <h2>{intl.formatMessage({ id: "description.title" })}</h2>
      <div className={descriptionStyle.description__theaterImg}>
        <img alt="theater" src={img[1]} />
        <div className={descriptionStyle.square__2}></div>
      </div>
      <div className={descriptionStyle.description__directorImg}>
        <img alt="director" src={img[2]} />
        <div className={descriptionStyle.square__1}></div>
      </div>
      <div className={descriptionStyle.description__text}>
        <p>{intl.formatMessage({ id: "description.text" })}</p>
      </div>
    </article>
  )
}

export default injectIntl(Description);