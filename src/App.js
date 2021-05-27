import { BrowserRouter, Switch, Route } from "react-router-dom";
import Post from "./Components/Post";
import Home from "./Components/Home";
import Project from "./Components/Project";
import SinglePost from "./Components/SinglePost";
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
          <Route component={SinglePost} path="/Post/:slug" />
          <Route component={Post} path="/Post" />
          <Route component={Project} path="/Project" />
          <Route component={Cv} path="/CV"/>
        </Switch>
      </BrowserRouter>
      <p className="text-center p-2">Developed with React⚛️</p>
    </div>
  );
}

export default App;
