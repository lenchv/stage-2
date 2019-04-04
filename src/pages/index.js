import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <Link to="/how-developers-work/">How developers work</Link>
    <br />
    <Link to="/es6/">ES6</Link>
  </Layout>
);

export default IndexPage;
