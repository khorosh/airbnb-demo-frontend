import "normalize.css";
import "flexboxgrid2";
import React, { Component } from "react";
import Header from "./Header/";
import Explore from "./Explore/";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
        <Footer />
      </div>
    );
  }
}

export default App;
