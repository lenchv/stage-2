import React, { Component } from "react";
import thatsAllFolksAudio from "./assets/audio/thats-all-folks.mp3";
import "./ThatsAllFolks.css";

class ThatsAllFolks extends Component {
  play = () => this.audio && this.audio.play();
  pause = () => this.audio && this.audio.pause();
  render() {
    return (
      <h4 className="thats-all-folks">
        <span onMouseEnter={this.play} onMouseLeave={this.pause}>
          <strong><em>― That's all, folks!</em></strong> 🐷
        </span>
        <audio ref={audio => this.audio = audio} preload="auto">
          <source src={thatsAllFolksAudio} type="audio/mpeg" />
        </audio>
      </h4>
    );
  }
}

export default ThatsAllFolks;