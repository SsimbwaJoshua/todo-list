import react, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const styling1 = {
    backgroundColor: "blue",
    color: "red",
    fontSize: "30px",
    padding: "30px",
    // width: "300px",
  };
  const styling2 = {
    backgroundColor: "red",
    color: "blue",
    fontSize: "30px",
    padding: "30px",
    // width: "300px",
  };

  const [coloring, setColoring] = useState("true");

  // const colorToggle = () => {
  //   coloring = { ...styling1 };
  // };

  const switchColor = () => {
    console.log("clicked");
    setColoring(!coloring);
  };

  return (
    <div className="App">
      <button onClick={switchColor}>switch</button>
      <>
        <p style={coloring ? styling1 : styling2} className="para">
          color changes
        </p>
      </>
    </div>
  );
}

export default App;
