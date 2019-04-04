import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactMarkdown from "react-markdown";

class HowDevelopersWork extends Component {
  componentDidMount() {
    fetch("/lessons/es6.md")
      .then(response => response.text())
      .then(lesson => this.setState({ lesson }));
  }

  render() {
    const { lesson } = this.state || { lesson: null };
    return (
      <Layout>
        <SEO title="How developers work" />
        <div className="container">
          <div className="columns">
            <div className="column col-mx-auto">
              <main className="lecture-content">
                <ReactMarkdown source={lesson} escapeHtml={false} />
              </main>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HowDevelopersWork;
