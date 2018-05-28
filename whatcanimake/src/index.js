import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import Clock from "./clock"
import registerServiceWorker from "./registerServiceWorker";

class FetchFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  FetchFun() {
    fetch("http://localhost:8000/backend", {
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson['results']);
      this.setState({recipes: myJson['results']
        .map(result => result['title'])
      })
    }.bind(this))
  }

  componentDidMount() {
    this.FetchFun();

    //this.setState({recipes: fetchFun()});
  }  

  render() {
    return (
      <div>
        <div> recipes {this.state.recipes}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<FetchFunction />, document.getElementById("root"));
registerServiceWorker();
