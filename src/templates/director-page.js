import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import directorPageStyles from './director-page.module.scss'

const DirectorPage = ({data}) => {
  const { directorName, text, image, json, location, gallery } = data.contentfulTheaterDirector;

  return (
    <Layout>
      <h1>{directorName}</h1>
      <img src={image.file.url} alt={directorName}/>
      <p>{text.text}</p>




      <Link to="/directors">View more theater directors</Link>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default DirectorPage

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulTheaterDirector(slug: { eq: $slug }) {
      directorName
      slug
      text {
        text
      }
      image {
        file {
          url
        }
      }
      json {
        entries {
          key
          date
          content
        }
      }
      location {
        lon
        lat
      }
      gallery {
        file {
          url
        }
      }
    }
  }
`;
