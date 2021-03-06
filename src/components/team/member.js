import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

const Member = (props) => {
  const data = props.data;
  const style = {
    backgroundImage: data.photo,
  }
  const clickHandler = (siteName, accountName) => {
    const fullUrl = `${siteName}${accountName}`;
    window.open(fullUrl, '__blank');
  }
  return (
    <div className="row team__member">
      <div className="col-6">
        <div className="team__member--photo" style={style}></div>
      </div>
      <div className="col-6">
        <h6>{data.github}</h6>
        <h5>{data.name}</h5>
        <p>{data.contribution}</p>
        <button type="button" className="btn btn-primary"
          onClick={() => { clickHandler('https://github.com/', `${data.github.slice(1)}`) }}
          ><FontAwesomeIcon icon={faGithub} /> Github</button>
        <button type="button" className="btn btn-primary"
          onClick={() => { clickHandler('https://t.me/', `${data.telegram.slice(1)}`) }}
        ><FontAwesomeIcon icon={faTelegramPlane} /> Telegram</button>
      </div>
    </div>
  )
}

export default Member;