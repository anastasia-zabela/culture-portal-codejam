import React from 'react';
import '../../styles/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Layout from '../../components/layout';
import Description from '../../components/description/description-homepage';
import DirOfTheDay from '../../components/director-of-the-day/dir-of-the-day';
import Team from '../../components/team/team';

const IndexPage = () => {
  const title = 'Тэатр - гэта жыццё';
  const innerText = "Панаехала гасцей з іншаземных абласцей "
  + "Не няправільна гасцёў з іншаземных абласцёў "
  + "Вось прыехалі ўсе: містэр, пані, гер, місье "
  + "Сі сіньёра уі мадам прахадзіце гаспада "
  + "Вось прыехалі яны і паненкі і паны "
  + "У край суворы катаклізмаў са сваіх капіталізмаў ";
  return (
    <Layout page="/" >
      <Description title={title} innerText={innerText} />
      <DirOfTheDay lang="be" />
      <Team />
    </Layout>
  )
}

export default IndexPage;
