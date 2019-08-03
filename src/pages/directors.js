import React from "react";

import Layout from "../components/layout/layout";
import ListOfDir from "../components/list-of-directors/list-of-directors";

const Directors = (props) => {
  const data = useStaticQuery(graphql`
      query {
      allContentfulTheaterDirector {
        edges {
          node {
            directorName
            slug
          }
        }
      }
    }
  `)
  const options = data.allContentfulTheaterDirector.edges.map(item => ({
    value: item.node.slug,
    label: item.node.directorName,
    slug: item.node.slug,
  })).filter(elem => elem.slug.slice(-2) === props.path.slice(1, 3))
  return (
    <Layout>
      <ListOfDir />  
    </Layout>
  )
}

export default Directors
