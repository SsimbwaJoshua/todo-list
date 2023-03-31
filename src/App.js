import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [windowwidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return <div className="App">{windowwidth}</div>;
}

export default App;
