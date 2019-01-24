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
      token: null,
      lecture: null,
      homeworkAssigned: false
    };
    this.assignHomework = this.assignHomework.bind(this);
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
    /* Load sample lecture */
    fetch(
      `${
        process.env.PUBLIC_URL
      }/static/assets/lectures/development-lifecycle-in-github/README.md`
    )
      .then(response => response.text())
      .then(text => {
        this.setState({
          lecture: text
        });
      });
  }

  assignHomework() {
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
    const { token, lecture } = this.state;
    const { assignHomework } = this;
    const oauthConfig = {
      client_id: CLIENT_ID,
      scope: ["user", "repo"].join(" "),
      redirect_uri: REDIRECT_URI
    };
    return (
      <div className="container">
        <div className="columns">
          <div className="column col-auto col-mx-auto">
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
              <div>
                <ReactMarkdown source={lecture} escapeHtml={false} />
                <button className="btn btn-success" onClick={assignHomework}>
                  Assign a hometask
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
