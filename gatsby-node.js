const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const lessonTemplate = path.resolve("src/templates/lesson.js");
  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: lessonTemplate,
        context: {}
      });
    });
  });
};
