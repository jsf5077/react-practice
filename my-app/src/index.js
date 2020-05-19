// import the react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//this function can be placed in the return below the same way as the variable is called

// function getButtonText() {
//   return "Click on me!";
// }

// create a react component

const App = () => {
  const buttonText = "Click Me!";
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
