import React, { Component } from "react";
import queryString from "query-string";
import ReactMarkdown from "react-markdown";

const CLIENT_ID = "b79067a534b4ee2c2d9e";
const REDIRECT_URI = "http://localhost:3000";
const BACKEND_URI = "http://localhost:3001";
const REPOSITORY_NAME = "homepage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: true,
      lesson: null,
      hometask: null,
      homeworkAssigned: false
    };
    this.assignHometask = this.assignHometask.bind(this);
  }

  componentDidMount() {
    const queryParams = queryString.parse(window.location.search, {
      arrayFormat: "index"
    });
    const { code } = queryParams;
    if (code) {
      fetch(`${BACKEND_URI}/authenticate/${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          this.setState({
            token
          });
        });
    }
    fetch(
      `${
        process.env.PUBLIC_URL
      }/static/assets/lessons/development-lifecycle-in-github/lesson.md`
    )
      .then(response => response.text())
      .then(text => {
        this.setState({
          lesson: text.replace(
            "📢",
            `<g-emoji class="g-emoji" alias="loudspeaker" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png"><img class="emoji" alt="loudspeaker" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png"></g-emoji>`
          )
        });
      });
    fetch(
      `${
        process.env.PUBLIC_URL
      }/static/assets/lessons/development-lifecycle-in-github/hometask.md`
    )
      .then(response => response.text())
      .then(text => {
        this.setState({
          hometask: text
        });
      });
  }

  assignHometask() {
    const { token } = this.state;
    fetch("https://api.github.com/user/repos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`
      },
      body: JSON.stringify({
        token,
        name: REPOSITORY_NAME,
        description:
          "Must go faster. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."
      })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    const { token, lesson, hometask } = this.state;
    const { assignHometask } = this;
    const oauthConfig = {
      client_id: CLIENT_ID,
      scope: ["user", "repo"].join(" "),
      redirect_uri: REDIRECT_URI
    };
    return (
      <div className="container">
        <div className="columns">
          <div className="column col-mx-auto">
            {!token ? (
              <a
                className="btn btn-primary"
                href={`https://github.com/login/oauth/authorize?${queryString.stringify(
                  oauthConfig
                )}`}
              >
                Sign in with GitHub
              </a>
            ) : (
              <main class="lecture">
                <h1>
                  <strong>How developers work</strong>
                </h1>
                <ReactMarkdown source={lesson} escapeHtml={false} />
                <ReactMarkdown source={hometask} escapeHtml={false} />
                <button
                  className="btn btn-success"
                  onClick={assignHometask}
                  style={{ display: "none" }}
                >
                  Assign a hometask
                </button>
              </main>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
