import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <article style={{ margin: "5em auto", maxWidth: "1100px" }}>
        {children}
      </article>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
