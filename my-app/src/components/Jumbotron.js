import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
  return (
    <Jumbotron 
        fluid className="bg-black" 
        // this line of style code centers objects within the parent
        //still working on a way to put these as a css class but currently that does not work. 
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <h1 className="white"> Hello World!</h1>
    </Jumbotron>
  );
}

export default App;
