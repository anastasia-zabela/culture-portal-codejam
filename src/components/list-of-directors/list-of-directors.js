import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import SearchBar from '../searchbar/searchbar';
import listOfDirStyle from './list-of-directors.module.scss';

const ListOfDir = () => {
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
  }))

  return (
    <div className={listOfDirStyle.listOfDir} style={{ background: '#e6e6e6' }}>
      <div className="container">
        <SearchBar options={options} />
      </div>
    </div>
  )
}

export default ListOfDir;