import React from "react";

function App() {
  return (
    <div
      className="bg-black footer"
      // this line of style code centers objects within the parent
      //still working on a way to put these as a css class but currently that does not work.
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="gray"> Welcome!</h1>
    </div>
  );
}

export default App;