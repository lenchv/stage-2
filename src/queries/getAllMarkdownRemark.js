import { graphql } from "gatsby";

export default graphql`
  query getAllMarkdownRemark {
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
`;