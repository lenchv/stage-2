import React from "react";
import classNames from "classnames";
import { Link, graphql } from "gatsby";
import { SEO, Header, Footer } from "../components";
import { isDateInThePast } from "../utils";
import {
  volodymyrKushnir2017Avatar,
  romanSahan2017Avatar,
  alexandrTovmach2018Avatar,
  pavelNemchenko2017Avatar,
  rostyslavDiakiv2018Avatar,
  nikitaKrasnov2018Avatar
 } from "../assets/images/avatars/intro-rounded";
import "./index.css";

const getAuthorAvatar = author => {
  switch (author) {
    case "Володимир Кушнір":
      return volodymyrKushnir2017Avatar;
    case "Роман Саган":
      return romanSahan2017Avatar;
    case "Александр Товмач":
      return alexandrTovmach2018Avatar;
    case "Павел Немченко":
      return pavelNemchenko2017Avatar;
    case "Ростислав Дяків":
      return rostyslavDiakiv2018Avatar;
    case "Никита Краснов":
      return nikitaKrasnov2018Avatar;
    default:
      return undefined;
  }
}

const Index = ({ data: { allMdx: { edges: data } } }) => (
  <>
    <SEO title="Welcome" description="Hi" keywords={[]} />
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article>
            <div className="columns">
              {data.map(({ node: { fields: { slug }, exports: { metadata: { title, description, author, duration, publishedAt, orderId } } } }, index) => {
                const lectureTitle = <h2 className="lecture-title">
                  <span><strong>{title}</strong></span>
                </h2>;
                const isPublished = isDateInThePast(publishedAt);
                return (
                  <div key={index} className="column col-6">
                    <div className={classNames("panel", "lecture-panel", {
                      "disabled": !isPublished
                    })}>
                      <div className="panel-header">
                        {
                          isPublished
                          ? <Link to={`.${slug}`} title={title}>{lectureTitle}</Link>
                          : lectureTitle
                        }
                      </div>
                      <div className="panel-body">
                        <span dangerouslySetInnerHTML={{ __html: description }} />
                      </div>
                      <div className="panel-footer">
                        <div className="lecture-meta">
                          <div className="lecture-author">
                            <div className="avatar-wrapper">
                              <object data={getAuthorAvatar(author)} role="img" aria-label={author}></object>
                            </div>
                            <div className="lecture-author-name">
                              {author}
                            </div>
                          </div>
                          {
                            duration &&
                            <span className="lecture-duration text-gray"><small>{duration}</small></span>
                          }
                        </div>
                        {orderId && <span class="lecture-number text-gray"><small>#{orderId}</small></span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export const pageQuery = graphql`
  query {
    allMdx (filter: {
      fileAbsolutePath: {
        regex: "/pages\/.*\/index[.]mdx$/"
      }
    }, sort: {
      fields: [exports___metadata___orderId]
      order: ASC
    }) {
      edges {
        node {
          fields {
            slug
          }
          exports {
            metadata {
              orderId
              title
              description
              author
              publishedAt
              duration
            }
          }
        }
      }
    }
  }`
;

export default Index;