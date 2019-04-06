import { graphql } from "gatsby";

export default graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;