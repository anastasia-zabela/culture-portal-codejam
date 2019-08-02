import React from 'react';
import '../../styles/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from '../../components/layout';
import Description from '../../components/description/description-homepage';
import DirOfTheDay from '../../components/director-of-the-day/dir-of-the-day';
import Team from '../../components/team/team';

const IndexPage = () => {
  const siteTitle = 'Театральные режиссёры Беларуси';
  const buttonNames = {
    home: "На стартовую",
    list: "К списку режиссёров"
  }

  const title = 'Театр - это что-то там такое';
  const innerText = "Лорем ипсум пусам шпонсом максум бряксум траляляля";

  return (
    <Layout
      page="/"
      siteTitle={siteTitle}
      buttonNames={buttonNames}
    >
      <Description title={title} innerText={innerText} />
      <DirOfTheDay lang="ru" />
      <Team />
    </Layout>
  )
}

export default IndexPage;
