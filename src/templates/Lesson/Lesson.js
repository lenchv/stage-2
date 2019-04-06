import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO/SEO";
import "./Lesson.css";

const Lesson = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter: { title } } = markdownRemark;
  return (
    <>
      <SEO title={title} keywords={[]} />
      <div className="container grid-lg">
        <div className="columns">
          <div className="column">
            <div className="hero hero-sm">
              <header className="navbar">
                <section className="navbar-section">
                  <a href="#" className="navbar-brand mr-2">Spectre.css</a>
                </section>
                <section className="navbar-section">
                  <a href="#" className="btn btn-link">Docs</a>
                  <a href="#" className="btn btn-link">GitHub</a>
                </section>
              </header>
            </div>
            <article className="content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query getMarkdownRemark($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default Lesson;