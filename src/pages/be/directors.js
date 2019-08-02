import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../../components/layout";
import Searchbar from '../../components/searchbar';

const Directors = () => {
  const data = useStaticQuery(graphql`
      query {
      allContentfulTheaterDirector (filter: {slug: {regex: "/-be$/"}})
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
  const siteTitle = 'Тэатральныя рэжысёры Беларусi';
  const buttonNames = {
    home: "На пачатковую",
    list: "Да спису рэжысерау"
  }
  const pageLang = 'be';

  return (
    <Layout
      page="directors"
      pageLang={pageLang}
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
