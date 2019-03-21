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
    this.getLesson = this.getLesson.bind(this);
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
    this.getLesson();
  }

  getLesson(lesson = "lesson-1") {
    fetch(
      `${
        process.env.PUBLIC_URL
      }/static/assets/lessons/development-lifecycle-in-github/${lesson}.md`
    )
      .then(response => response.text())
      .then(lesson => this.setState({ lesson }));
    fetch(
      `${
        process.env.PUBLIC_URL
      }/static/assets/lessons/development-lifecycle-in-github/${lesson}-hometask.md`
    )
      .then(response => response.text())
      .then(hometask => this.setState({ hometask }));
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
    const { assignHometask, getLesson } = this;
    const oauthConfig = {
      client_id: CLIENT_ID,
      scope: ["user", "repo"].join(" "),
      redirect_uri: REDIRECT_URI
    };
    return (
      <div className="container">
        <div
          style={{ margin: "0 0 2em 0", fontSize: "0.75em", opacity: "0.25" }}
        >
          <select onChange={event => getLesson(event.target.value)}>
            <option value="lesson-1">Lesson 1</option>
            <option value="lesson-2">Lesson 2</option>
          </select>
        </div>
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
              <main className="lecture">
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
