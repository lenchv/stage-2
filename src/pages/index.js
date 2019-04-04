import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <Link to="/how-developers-work/">How developers work</Link>
  </Layout>
);

export default IndexPage;
