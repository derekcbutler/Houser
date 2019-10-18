import React from "react";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Wizard from "./Components/Wizard/Wizard";
import Header from "./Components/Header/Header";
import { HashRouter } from "react-router-dom";
import routes from './routes';

import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
        {/* <Wizard />
        <Dashboard /> */}
      </div>
    </HashRouter>
  );
}

export default App;
