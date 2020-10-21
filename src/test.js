import React from "react";

class TestComp extends React.Component {
  constructor() {
    super();

    this.state = {
      sentence: "I Love my new keyboard!",
      sound:
        "It has a good sound, it is not the type I wish to have but anyway it is good",
        keyboard: 'I have a Logitch G915 Tactile ( Price: 250$ )'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.sentence}</h1>
        <p>{this.state.sound}</p>
    <b>{this.state.keyboard}</b>
      </div>
    );
  }
}

export default TestComp;
