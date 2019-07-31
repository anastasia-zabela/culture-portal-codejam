import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

const DirOfTheDay = () => {
  const data = useStaticQuery(graphql`
      query {
      allContentfulTheaterDirector (
        sort: {
          fields: directorName,
          order: ASC
        }
        filter: { node_locale: { eq: "en-US" } }
      ){
        edges {
          node {
            directorName
            text {
              text
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  const directorsArray = data.allContentfulTheaterDirector.edges.map(item => ({
    text: item.node.text.text,
    name: item.node.directorName,
    // url: item.node.image.file.url,
    imageURL: item.node.image.file.url,
  }))
  // console.log(directorsArray);
  // console.log(data);
  // console.log(data2);
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const randomDirector = getRandomInt(directorsArray.length);

  return (
    <article className="d-of-day">
      <div className="container">
        <div className="row">
          <div className="flex-end col-6">
            <div className="d-of-day__photo"
            style={{
              background: `url(${directorsArray[randomDirector].imageURL}) no-repeat`,
              backgroundSize: "100%",
            }}>{/* 
              <img
                style={{
                  height: '200px',

                }}
                src={directorsArray[randomDirector].imageURL}></img> */}
            </div>
          </div>
          <div className="col-6">
            <h6>THEATER DIRECTOR OF THE DAY</h6>
            <h3>{directorsArray[randomDirector].name}</h3>
            <p>{directorsArray[randomDirector].text}</p>
              <button type="button" className="btn btn-primary">Read more</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default DirOfTheDay;