import React from 'react'
import Member from './member';
import { injectIntl } from 'gatsby-plugin-intl';

const Team = ({ intl }) => {
  const data = {
    member1: {
      name: 'Name Lastname',
      github: '@github-account',
      contribution: intl.formatMessage({ id: "team.members.first.contribution" }),
      photo: 'url(https://i.pinimg.com/564x/8b/04/2f/8b042f5e23a2b3f391f163fd44cf1ec7.jpg)',
    },
    member2: {
      name: 'Name Lastname',
      github: '@github-account',
      contribution: intl.formatMessage({ id: "team.members.second.contribution" }),
      photo: 'url(https://i.pinimg.com/564x/cf/37/05/cf3705b02356556cbd63cf4da90f2ef2.jpg)',
    },
    member3: {
      name: 'Name Lastname',
      github: '@github-account',
      contribution: intl.formatMessage({ id: "team.members.third.contribution" }),
      photo: 'url(https://i.pinimg.com/564x/22/ad/be/22adbe8c2d32a5a80742387dc4596f1a.jpg)',
    },
    member4: {
      name: 'Name Lastname',
      github: '@github-account',
      contribution: intl.formatMessage({ id: "team.members.fourth.contribution" }),
      photo: 'url(https://i.pinimg.com/564x/27/3c/c9/273cc9e32b96d0e48b3d51a38502078d.jpg)',
    }
  }

  return (
    <article className="team">
      <div className="container">
        <h4>{intl.formatMessage({ id: "team.title" })}</h4>
        <Member data={data.member1} />
        <Member data={data.member2} />
        <Member data={data.member3} />
        <Member data={data.member4} />
      </div>
    </article>
  )
}

export default injectIntl(Team);