import React from 'react'

const DirOfDay = () => {
  return (
    <article className="d-of-day">
      <div className="container">
        <div className="row">
          <div className="flex-end col-6">
            <div className="d-of-day__photo"></div>
          </div>
          <div className="col-6">
            <h6>THEATER DIRECTOR OF THE DAY</h6>
            <h3>Ivan Ivanov (1941-1945)</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non augue semper, pulvinar metus eu, 
              gravida mauris. Aenean vitae iaculis dolor, vel tempus nunc. Sed at sem turpis. Donec finibus neque 
              nec mauris sagittis, non ornare nulla gravida. Pellentesque habitant morbi tristique senectus et netus 
              et malesuada fames ac turpis egestas.</p>
              <button type="button" className="btn btn-primary">Read more</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default DirOfDay;
