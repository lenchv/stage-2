import React from "react";
import SEO from "../../components/SEO/SEO";
import "./Lesson.css";

const Lesson = ({ children }) => {
  const title = "Unknown";
  return (
    <>
      {/* <SEO title={title} keywords={[]} /> */}
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
            <article className="content">
              {children}
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson;