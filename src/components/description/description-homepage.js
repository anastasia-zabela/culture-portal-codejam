import React from 'react';

const Description = () => {
  return (
    <article className="description container-fluid">
      <h2>Theater is a living art</h2>
      <img className="description__theater-img" alt="theater" width="500px" src="https://images.unsplash.com/photo-1527853410828-e05f067b7707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <img className="description__director-img" alt="director" width="350px" src="https://images.unsplash.com/photo-1557759677-791f51707d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" />
      <div className="square__1"></div>
      <div className="square__2"></div>
      <div className="description__text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non augue semper, pulvinar metus eu, 
          gravida mauris. Aenean vitae iaculis dolor, vel tempus nunc. Sed at sem turpis. Donec finibus neque 
          nec mauris sagittis, non ornare nulla gravida. Pellentesque habitant morbi tristique senectus et netus 
          et malesuada fames ac turpis egestas.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non augue semper, pulvinar metus eu, gravida 
          mauris. Aenean vitae iaculis dolor, vel tempus nunc. Sed at sem turpis. Donec finibus neque nec mauris sagittis, 
          non ornare nulla gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Sed in nulla vitae nisi tincidunt varius at a odio. Nullam quis pulvinar libero. Ut eget ante a risus volutpat sagittis 
          in eu neque. Curabitur laoreet sem quis fermentum maximus.</p>
          <div></div>
      </div>
    </article>
  )
}

export default Description;