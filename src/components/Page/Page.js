import React from "react";
import { SEO, Header, Footer } from "../";

const Page = ({ children, metadata: { title, description, keywords } }) => (
  <>
    <SEO title={title} description={description.replace(/<(?:.|\n)*?>/gm, "")} keywords={keywords} />
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article className="content">
            {children}
          </article>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default Page;