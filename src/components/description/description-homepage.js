import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

const Description = ({ intl }) => {
  return (
    <article className="description container-fluid">
      <h2>{intl.formatMessage({ id: "description.title" })}</h2>
      <img className="description__theater-img" alt="theater" width="500px" src="https://images.unsplash.com/photo-1527853410828-e05f067b7707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <img className="description__director-img" alt="director" width="350px" src="https://images.unsplash.com/photo-1557759677-791f51707d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
      <div className="square__1"></div>
      <div className="square__2"></div>
      <div className="description__text">
        <p>{intl.formatMessage({ id: "description.text" })}</p>
          <div></div>
      </div>
    </article>
  )
}

export default injectIntl(Description);