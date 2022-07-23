import "./App.css";
import BlogCard from "./blogCard";
import React, { Component } from "react";
import { isArrayEmpty } from "./Utils";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.disneyapi.dev/characters",
});

class App extends Component {
  state = {
    showBlog: false,
    blogObjArr: [
      {
        id: 1,
        title: "Blog Title 1",
        opening_crawl:
          "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      },
      {
        id: 2,
        title: "Blog Title 2",
        opening_crawl:
          "Lorem Ipsum Capsum Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      },
      {
        id: 3,
        title: "Blog Title 3",
        opening_crawl:
          "Lorem Ipsum Dolores Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      },
    ],
  };

  constructor() {
    super();
    this.getData().then(() => this.hide());
  }

  getData = async () => {
    await api
      .get("/")
      .then((data) => (this.state.blogObjArr = data.data.data))
      .then(d => console.log(d.data));
  };

  hide = () => {
    console.log(this.state.blogObjArr);
    this.setState(() => {
      return { showBlog: true };
    });
  };

  render() {
    this.blogObj = isArrayEmpty(this.state.blogObjArr)
      ? []
      : this.state.blogObjArr.map((item, pos) => {
          return (
            <BlogCard
              key={pos}
              title={item.name}
              description={item.imageUrl}
            />
          );
        });

    return (
      <div className="App">
        <p>{this.resp}</p>
        <br></br>
        {this.state.showBlog ? this.blogObj : null}
      </div>
    );
  }
}

export default App;
