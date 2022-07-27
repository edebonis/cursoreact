import React, { Component } from "react";

class Header extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1>Son las {this.state.date.toLocaleTimeString()}</h1>
    );
  }
}

export default Header;
