import React from "react";
import { SEO, Header, Footer } from "../";
import "./Index.scss";

const Index = ({ children, metadata: { title, description, keywords } }) => (
  <>
    <SEO title={title} description={description} keywords={keywords} />
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article>
            {children}
          </article>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default Index;