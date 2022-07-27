import "./App.css";
import BlogCard from "./blogCard";
import React, { Component } from "react";
import { isArrayEmpty } from "./Utils";
import axios from "axios";



class App extends Component {
  state = {
    showBlog: false,
    blogObjArr: [],
    page: 0,
    url: "",
  };
  
  
  
  constructor() {
    super();
    this.getData().then(() => this.hide());
    this.page = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      page: this.page+=1
    });
    this.getData().then(() => this.hide());
  }


  getData = async () => {
    if (this.page > 149) this.page = 0;
    this.page > 0 ? this.url = "https://api.disneyapi.dev/characters?page=" + this.page : this.url = "https://api.disneyapi.dev/characters";
    this.api = axios.create({
      baseURL: this.url,
      //baseURL: "https://script.google.com/macros/s/AKfycbxPdffBUGo48tor2S51hPLIZYF8gK-60I36Z1_r7DcVfQqTXBFYQNZ39PJ7MyvAs66Dzw/exec?e=245"
    });
    await this.api
      .get("?page="+ this.page)
      .then((data) => (this.state.blogObjArr = data.data.data))
      .then((d) => console.log(d.data));
  };

  hide = () => {
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
