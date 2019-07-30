import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

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
  return (
    <Layout>
      <ol>
        {data.allContentfulTheaterDirector.edges.map((edge) => {
          return (
            <Link to={`/directors/${edge.node.slug}`}>
              <h2>{ edge.node.directorName }</h2>
              <p>{ edge.node.slug } </p>
            </Link>
            )
        })}
      </ol>
    </Layout>
  )
}

export default Directors