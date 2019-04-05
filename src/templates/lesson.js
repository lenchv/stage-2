import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/base.css";

const Template = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html, frontmatter: { title } } = markdownRemark;
  return (
    <Layout>
      <SEO title={title} keywords={[]} />
      <div className="container grid-xl">
        <div className="columns">
          <div className="column">
            <article className="content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default Template;