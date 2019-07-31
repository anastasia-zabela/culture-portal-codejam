import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'


const Member = (props) => {
  const data = props.data;
  const style = {
    backgroundImage: data.photo,
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
        <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faGithub} /> Github</button>
        <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faTelegramPlane} /> Telegram</button>
      </div>
    </div>
  )
}

export default Member;