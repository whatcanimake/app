import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

     this.state = {
      recipes: 'gg'
    };
  }
  fetchfunction() {
    fetch("http://localhost:8000/backend", {
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        myJson.map(recipe => this.setState({recipes: recipe})
         console.log(this.state.recipes);
      }.bind(this));
  }
  render() {
    return (
      <div>
        <div>{ console.log(this.state["recipes"]) }</div>
        <h1>{this.fetchfunction()}</h1>
        <p> jdhfkhsgdfk </p>
      </div>
    );
  }
}

export default App;

