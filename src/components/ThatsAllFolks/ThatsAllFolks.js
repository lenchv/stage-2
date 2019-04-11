import React, { Component } from "react";
import thatsAllFolksAudio from "../../assets/audio/thats-all-folks.mp3";
/*style="margin-top: 2rem; margin-bottom: 0; font-weight: 400;"*/

class ThatsAllFolks extends Component {
constructor() { super(); }

  play = () => this.audio && this.audio.play();
  pause = () => this.audio && this.audio.pause()

  render() {
    return (
      <h4 onMouseEnter={this.play} onMouseLeave={this.pause}>
        <strong><em>― That's all, folks!</em></strong> 🐷
        <audio ref={audio => this.audio = audio} id="thats-all-folks">
          <source src={thatsAllFolksAudio} type="audio/mpeg" />
        </audio>
      </h4>
    );
    }
}

export default ThatsAllFolks;