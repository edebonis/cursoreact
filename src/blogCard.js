import React, { Component } from "react";
// import { dumpLogs } from "./Utils";
// import "./BlogCard.css"
import classes from "./BlogCard.module.css";

class BlogCard extends Component {
  state = {
    likeCount: 0,
  };

  addLike = () => {
    this.setState((prevState, prevProps) => {
      return { likeCount: prevState.likeCount + 1 };
    });
  };

  render() {
    return (
      <div className={classes.BlogCard}>
        <h3>{this.props.title}</h3>
        <img src = {this.props.description}></img>
        <p>
          Like Count:
          <span className={classes.LikeCount}> {this.state.likeCount}</span>
        </p>
        <button onClick={this.addLike}>Like</button>
      </div>
    );
  }
}

export default BlogCard;
