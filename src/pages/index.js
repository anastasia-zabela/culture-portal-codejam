import React from 'react';
import '../styles/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from '../components/layout';
import Description from '../components/description/description-homepage';
import DirOfTheDay from '../components/director-of-the-day/dir-of-the-day';
import Team from '../components/team/team';

const IndexPage = () => {
  const title = 'Theater is a living art';
  const innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  + "Proin non augue semper, pulvinar metus eu, gravida mauris. "
  + "Aenean vitae iaculis dolor, vel tempus nunc. Sed at sem turpis. "
  + "Donec finibus neque nec mauris sagittis, non ornare nulla gravida. ";

  return (
    <Layout page="/" >
      <Description title={title} innerText={innerText} />
      <DirOfTheDay lang="en" />
      <Team />
    </Layout>
  )
}

export default IndexPage;
