import React, { Component } from "react";
import rodrigoRodriguezShakuhachiFluteAudio from "./assets/audio/rodrigo-rodriguez-shakuhachi-flute.mp3";
import "./Flute.css";

class Flute extends Component {
  play = () => this.audio && this.audio.play();
  pause = () => this.audio && this.audio.pause();
  render() {
    return (
      <div className="message__scene message__scene-flute" onMouseEnter={this.play} onMouseLeave={this.pause}>
        <em>(in the distance, a Japanese flute plays a gentle melody)</em>
        <audio ref={audio => this.audio = audio} preload="auto">
          <source src={rodrigoRodriguezShakuhachiFluteAudio} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default Flute;