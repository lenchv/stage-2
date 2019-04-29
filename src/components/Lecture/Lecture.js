import React from "react";
import { SEO, Header, Footer } from "../";
import "prismjs/themes/prism.css";
import "./Lecture.scss";

const Lecture = ({ children, metadata: { author, title, description, keywords } }) => (
  <>
    <SEO title={title} description={description} keywords={keywords} />
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article className="content">
            {children}
          </article>
          <Footer author={author} />
        </div>
      </div>
    </div>
  </>
);

export default Lecture;