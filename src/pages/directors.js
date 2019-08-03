import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout/layout";
import ListOfDir from "../components/list-of-directors/list-of-directors";

const Directors = (props) => {
  const data = useStaticQuery(graphql`
      query {
      allContentfulTheaterDirector {
        edges {
          node {
            city
            directorName
            slug
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
  const options = data.allContentfulTheaterDirector.edges.map(item => ({
    value: item.node.city,
    label: item.node.directorName,
    slug: item.node.slug,
    image: item.node.image.file.url,
  })).filter(elem => elem.slug.slice(-2) === props.path.slice(1, 3))
  return (
    <Layout>
      <ListOfDir options={options} />  
    </Layout>
  )
}

export default Directors
