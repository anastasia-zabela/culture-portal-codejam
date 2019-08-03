import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/layout/layout';

const PageNotFound = ({ intl }) => {
  const imageUrl = 'https://i.ytimg.com/vi/KRaBIxTPm1A/hqdefault.jpg';
  return (
    <Layout>
      <div
        style={{
          background: `url(${imageUrl}) no-repeat`,
          backgroundSize: '100%',
          width: '500px',
          height: '480px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        }}>
      </div>
      <div>
        <h3
          style={{
            color: 'red',
            position: 'absolute',
            top: '68%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          }}
        >{intl.formatMessage({ id: "pageNotFound" })}</h3>
      </div>
    </Layout>
  )
}

export default injectIntl(PageNotFound);