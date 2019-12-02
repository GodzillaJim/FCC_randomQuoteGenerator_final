import React from "react";
import ReactDOM from "react-dom";
import Box from "./components";
import ReactFCCtest from 'react-fcctest';

import "./styles.css";

function App() {

  return (
    <div className="App">
      <Box />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
