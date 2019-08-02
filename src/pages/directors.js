import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Searchbar from '../components/searchbar';

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
      <ol>
        <Searchbar options={options} />
      </ol>
    </Layout>
  )
}

export default Directors
