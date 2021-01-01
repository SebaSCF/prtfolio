import { BrowserRouter, Switch, Route } from "react-router-dom";
import Post from "./Components/Post";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import SinglePost from "./Components/SinglePost";
import Pdf from "./Components/pdf";
import Cv from "./Components/Cv";
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
          <Route component={SinglePost} path="/Post/:slug" />
          <Route component={Post} path="/Post" />
          <Route component={Project} path="/Project" />
          <Route component={Cv} path="/CV"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
