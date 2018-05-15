import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

import axios from "axios";

import ReactDOM from "react-dom";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     recipes: []
  //   };
  // }
  componentDidMount() {
    fetch("http://localhost:8000/backend", {
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.results);
      });
  }
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <h1> test </h1>
        <p> jdhfkhsgdfk </p>
      </div>
    );
  }
}

export default App;
