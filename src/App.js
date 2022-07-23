import "./App.css";
import BlogCard from "./blogCard";
import React from "react";
import { isArrayEmpty } from "./Utils";
import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/films",
});

var blogObjArr = [
  {
    id: 1,
    title: "Blog Title 1",
    description:
      "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
  },
  {
    id: 2,
    title: "Blog Title 2",
    description:
      "Lorem Ipsum Capsum Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
  },
  {
    id: 3,
    title: "Blog Title 3",
    description:
      "Lorem Ipsum Dolores Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
  },
];

class App extends React.Component {
  state = {
    showBlog: false,
  };

  constructor() {
    super();
    this.getData();
  }

  getData = async () => {
    var data = await api
      .get("/")
      .then(({ data }) => data)
      .then(data => (blogObjArr = [...data.results]))
      .then(() => this.hide(data));
  };

  hide = (data) => {
      this.setState((prevState, prevProps) => {
        return { showBlog: true };
      });
  };

  blogObj = isArrayEmpty(blogObjArr)
    ? []
    : blogObjArr.map((item, pos) => {
        return (
          <BlogCard
            key={pos}
            title={item.title}
            description={item.opening_crawl}
          />
        );
      });

  render() {
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
