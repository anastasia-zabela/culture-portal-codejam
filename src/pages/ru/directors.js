import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../../components/layout";
import Searchbar from '../../components/searchbar';

const Directors = () => {
  const data = useStaticQuery(graphql`
      query {
      allContentfulTheaterDirector (filter: {slug: {regex: "/-ru$/"}})
      {
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
  const siteTitle = 'Театральные режиссёры Беларуси';
  const buttonNames = {
    home: "На стартовую",
    list: "К списку режиссёров"
  }

  return (
    <Layout
      page="directors"
      siteTitle={siteTitle}
      buttonNames={buttonNames}
    >
      <ol>
        <Searchbar options={options} />
      </ol>
    </Layout>
  )
}

export default Directors
