import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  state = {
    recipes: "gg",
    recipe: []
  };
  componentDidMount() {
    axios.get("http://localhost:8000/backend").then(response => {
      console.log(response.data);
      // this.setState({ recipe: response.data });
      // console.log(response.json());
    });
  }
  // }
  render() {
    return (
      <div>
        <div>{console.log(this.state.recipe)}</div>
        <h1>{this.componentDidMount()}</h1>
        <p> jdhfkhsgdfk </p>
      </div>
    );
  }
}

export default App;
