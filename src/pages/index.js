import React from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from '../components/layout';
import Description from '../components/description-of-portal';
import DirOfDay from '../components/director-of-day';

const IndexPage = () => {
  return (
    <Layout>
      <Description />
      <DirOfDay />
    </Layout>
  )
}

export default IndexPage;
