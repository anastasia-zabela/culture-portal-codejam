import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { injectIntl, Link } from 'gatsby-plugin-intl';

const DirOfTheDay = ({ intl, props }) => {
  const data = useStaticQuery(graphql`
      query {
      allContentfulTheaterDirector {
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
            slug
          }
        }
      }
    }
  `)
  const directorsArray = data.allContentfulTheaterDirector.edges.map(item => ({
    text: item.node.text.text,
    name: item.node.directorName,
    imageURL: item.node.image.file.url,
    slug: item.node.slug
  })).filter(elem => elem.slug.slice(-2) === props.location.pathname.slice(1, 3));
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
                backgroundImage: `url(${directorsArray[randomDirector].imageURL})`,
                backgroundSize: "100%",
              }}>
            </div>
          </div>
          <div className="col-6">
            <h6>{intl.formatMessage({ id: "directorOfTheDay.title" })}</h6>
            <h3>{directorsArray[randomDirector].name}</h3>
            <p>{directorsArray[randomDirector].text}</p>
            <Link
              className="btn btn-primary"
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
              to={`/directors/${directorsArray[randomDirector].slug}`}>
              {intl.formatMessage({ id: "directorOfTheDay.button" })}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default injectIntl(DirOfTheDay);