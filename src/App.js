import React from "react";
import "./App.css";
import ColorBlock from "./components/ColorBlock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "rgb(216, 211, 211)"
    };
  }
  updateColor = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };
  render() {
    return (
      <>
        <div className="color-container">
          <ColorBlock color="red" onClick={this.updateColor} />
          <ColorBlock color="green" onClick={this.updateColor} />
          <ColorBlock color="blue" onClick={this.updateColor} />
          <ColorBlock color="yellow" onClick={this.updateColor} />
          <ColorBlock color="purple" onClick={this.updateColor} />
        </div>
        <div
          className="target"
          style={{
            background: this.state.color
          }}
        ></div>
      </>
    );
  }
}
export default App;
