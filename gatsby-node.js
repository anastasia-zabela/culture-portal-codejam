const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
    query  {
        allContentfulTheaterDirector {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log("Error retrieving contentful data", result.errors);
    }
    const directorTemplate = path.resolve("./src/templates/director-page.js");
    result.data.allContentfulTheaterDirector.edges.forEach(edge => {
      createPage({
        path: `/directors/${edge.node.slug}/`,
        component: slash(directorTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id
        }
      });
    });
  })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};
