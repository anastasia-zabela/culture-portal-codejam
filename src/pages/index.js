import React from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from '../components/layout';
import Description from '../components/description/description-homepage';

const IndexPage = () => {
  return (
    <Layout>
      <Description />
    </Layout>
  )
}

export default IndexPage;
