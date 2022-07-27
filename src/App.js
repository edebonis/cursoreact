import "./App.css";
import BlogCard from "./blogCard";
import React, { Component } from "react";
import { isArrayEmpty } from "./Utils";
import axios from "axios";



class App extends Component {
  state = {
    showBlog: false,
    blogObjArr: [],
  };
  
  api = axios.create({
    baseURL: "https://api.disneyapi.dev/characters?page=128",
    //baseURL: "https://script.google.com/macros/s/AKfycbxPdffBUGo48tor2S51hPLIZYF8gK-60I36Z1_r7DcVfQqTXBFYQNZ39PJ7MyvAs66Dzw/exec?e=245"
  });
  
  constructor() {
    super();
    this.getData().then(() => this.hide());
  }

  getData = async () => {
    await this.api
      .get("/")
      .then((data) => (this.state.blogObjArr = data.data.data))
      .then((d) => console.log(d.data));
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
            <BlogCard key={pos} title={item.name} description={item.imageUrl} />
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
