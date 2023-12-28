import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./components/Counter";

import "./index.css";

const App = () => (
  <div className="counter_container">
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
