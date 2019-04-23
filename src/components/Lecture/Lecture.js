import React from "react";
import SEO from "../../components/SEO/SEO";
import "./Lecture.scss";

const Lecture = ({ children, metadata: { author, title, description, keywords } }) => (
  <>
    <SEO title={title} description={description} keywords={keywords} />
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <header className="hero hero-sm">
            <nav className="navbar">
              <div className="navbar-section">
                <a
                  href="https://academy.binary-studio.com/"
                  className="navbar-brand mr-2"
                >
                  <svg
                    className="logo"
                    viewBox="0 0 105 99"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M44.9269232,62.8812382 C45.1942077,63.4971831 44.4998288,64.0859815 43.937223,63.7190356 L14.3088315,44.3757436 C12.0499973,43.0773915 12.565875,40.6042509 14.3088315,39.8497652 L30.8944879,33.724951 C31.5430733,33.4853129 32.2645545,33.7942214 32.5411846,34.427952 L44.9269232,62.8812382 Z"
                        fill="#FFC712"
                        transform="translate(15 14)"
                      />
                      <path
                        d="M72.1925572,59.2141192 L53.9994557,67.0903512 C52.8396654,67.5930297 51.4527766,66.9649156 50.8995165,65.6880936 L27.463527,11.5645066 C26.9093323,10.2848763 27.4027806,8.83862262 28.5653746,8.33500806 L46.7575415,0.458776008 C47.9182665,-0.0429663717 49.3060897,0.584211603 49.8593499,1.86103363 L73.2953393,55.9846206 C73.8485995,57.2642509 73.3551513,58.7105046 72.1925572,59.2141192"
                        fill="#00ADEE"
                        transform="translate(15 14)"
                      />
                      <path
                        d="M24.6823666,16.0343198 C25.9608462,18.9343158 28.8953681,25.7377927 30.0420746,28.401895 C30.3009481,29.0000543 30.0046922,29.68995 29.3962929,29.9183552 L16.7171021,34.6746108 C16.1582345,34.8833581 15.622731,34.319834 15.8582404,33.7712873 L23.4908011,16.0408724 C23.7160304,15.5194722 24.4533991,15.5138557 24.6823666,16.0343198"
                        fill="#EC1848"
                        transform="translate(15 14)"
                      />
                      <path
                        d="M25.3513254,56.3505369 L11.4272992,47.0561337 C10.8759081,46.6882517 10.1263901,46.9082321 9.86004016,47.5157522 L1.88356093,65.7216991 C1.47983053,66.6456165 2.41439165,67.5863835 3.33867261,67.1866745 L25.2279634,57.7144149 C25.7943074,57.4691603 25.8643995,56.6931445 25.3513254,56.3505369"
                        fill="#EC1848"
                        transform="translate(15 14)"
                      />
                      <path
                        d="M25.3513254,56.3505369 L11.4272992,47.0561337 C10.8759081,46.6882517 10.1263901,46.9082321 9.86004016,47.5157522 L19.2617251,60.2961416 L25.2279634,57.7144149 C25.7943074,57.4691603 25.8643995,56.6931445 25.3513254,56.3505369"
                        fill="#C22035"
                        transform="translate(15 14)"
                      />
                    </g>
                  </svg>
                </a>
                <div><strong>Binary Studio Academy 2019 &bull; </strong>Stage 2 <span style={{ color: "grey", fontWeight: 300 }}>(alpha)</span></div>
              </div>
              <div className="navbar-section">
                <a href="/whats-this/ua" className="btn btn-link">
                  Це як?
                </a>
                <a href="/whats-this/en" className="btn btn-link">
                  What's this?
                </a>
                <a href="/whats-this/ru" className="btn btn-link">
                  Как это?
                </a>
              </div>
            </nav>
          </header>
          <article className="content">
            {children}
          </article>
          <footer className="hero hero-sm">
            <div className="text-gray">
              Copyright © 2019 <strong>{author || "Contributors"}</strong>. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </div>
  </>
);

export default Lecture;
