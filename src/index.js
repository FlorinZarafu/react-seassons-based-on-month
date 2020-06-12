import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay-component";
import Spinner from "./Loading-Component";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  // component lifecycle
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  getContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="please accept loaction" />;
  }
  render() {
    return <div>{this.getContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
