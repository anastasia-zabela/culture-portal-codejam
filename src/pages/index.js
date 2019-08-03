import React from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from '../components/layout/layout';
import Description from '../components/description/description-homepage';
import DirOfTheDay from '../components/director-of-the-day/dir-of-the-day';
import Team from '../components/team/team';

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <Description />
      <DirOfTheDay props={props} />
      <Team />
    </Layout>
  )
}

export default IndexPage;
