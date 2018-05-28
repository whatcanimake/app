import React from "react";
import "./App.css";
import ReactDOM from "reactDOM"

 class Clock extends React.component {
  tick(props) {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
     // <Clock date={new Date()} />,
     // document.getElementById('root2')
    );
    ReactDOM.render(
      element,
      document.getElementById("root2")
      );
    } 
 }
 // setInterval(props.tick, 1000);

//export default Clock;