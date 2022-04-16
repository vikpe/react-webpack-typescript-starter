import * as React from "react";
import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

const App = () => (
  <div className="app">
    <h1>Hello World!</h1>
    <p>Foo to the barz</p>
    <img src={reactLogo.default} height="480" />
  </div>
);

export default App;
