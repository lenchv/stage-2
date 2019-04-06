import React from "react";
import PropTypes from "prop-types";
import { StaticQuery } from "gatsby";
import { getSiteMetadata } from "../../queries";

const Layout = ({ children }) => (
  <StaticQuery query={getSiteMetadata} render={data => children} />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
