import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import About from "./Components/About";
import React from 'react';
import NavBar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <div className="Appx">
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={About} path="/about" />
            <Route component={Projects} path="/Projects" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
