import React from "react";
import "./App.css";
import { Card, CardHeader, CardImg, CardLink, CardBody } from "reactstrap";

class FetchFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  FetchFun() {
    fetch("http://localhost:8000/backend", {})
      .then(function(response) {
        return response.json();
      })
      .then(
        function(myJson) {
          console.log(myJson);
          this.setState({
            recipes: myJson["results"]
          });
        }.bind(this)
      );
  }

  componentDidMount() {
    this.FetchFun();
  }

  render() {
    return this.state.recipes.map(function(recipe) {
      return (
        <div>
          <Card>
            <CardHeader>
              <h4>
                Name: <br /> <b>{recipe["title"]}</b>
              </h4>
              <CardBody>
                <CardLink href={recipe["href"]}>Click Me</CardLink>
                Ingredients: <br /> <p>{recipe["ingredients"]}</p>
                <img src={recipe["thumbnail"]} />
              </CardBody>
            </CardHeader>
          </Card>
        </div>
      );
    });
  }
}

export default FetchFunction;
