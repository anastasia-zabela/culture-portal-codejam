import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout/layout";
import Searchbar from '../components/searchbar/searchbar';

const Directors = () => {
  const data = useStaticQuery(graphql`
      query {
      allContentfulTheaterDirector (
        sort: {
          fields: directorName,
          order: ASC
        }
        filter: {
          node_locale: {
            eq: "en-US"
          }
        }
      ){
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
  }))
  return (
    <Layout>
      <ol>
        <Searchbar options={options} />
      </ol>
    </Layout>
  )
}

export default Directors
