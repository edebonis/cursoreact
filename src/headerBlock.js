import React, { Component } from "react";
import classes from "./Header.module.css";

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
      <h1 className={classes.Reloj}>{this.state.date.toLocaleTimeString()}</h1>
    );
  }
}

export default Header;
