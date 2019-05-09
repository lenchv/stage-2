import React from "react";
import { SEO, Header, Footer, ShrugMessage } from "../";
import { isDateInThePast } from "../../utils";
import "prismjs/themes/prism.css";
import "./Lecture.scss";

const Lecture = ({ children, metadata: { author, title, description, keywords, publishedAt } }) => {
  const isPublished = isDateInThePast(publishedAt);
  return (
    <>
      <SEO title={title} description={description.replace(/<(?:.|\n)*?>/gm, "")} keywords={keywords} />
      <div className="container grid-lg">
        <div className="columns">
          <div className="column">
            <Header />
            <article className="content">
              {
                isPublished
                ? children
                : <ShrugMessage>
                    <h4>— Пробач, але лекція <strong>«{title}»</strong> ще не опублікована.</h4>
                    <p>Заглянь сюди трішки пізніше, будь ласка.</p>
                  </ShrugMessage>
              }
            </article>
            <Footer author={author} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lecture;