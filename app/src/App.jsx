import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./Components/Post";
import Home from "./Components/Home";
import Project from "./Components/Project";
import SinglePost from "./Components/SinglePost";
import Cv from "./Components/Cv";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skill";

export const GlobalContext = createContext();

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [Page, setPage] = useState("Home");

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="h-screen">
      <GlobalContext.Provider value={{ setPage, Page, dimensions }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/*  */}
            <Route
              element={
                <div className="h-full bg-white p-10">
                  <Home />
                </div>
              }
              path="/"
            />
            <Route
              element={
                <div className="h-full bg-white p-10">
                  <Skills />
                </div>
              }
              path="/Skills"
            />
            <Route
              element={
                <div className="h-full bg-white p-10">
                  <SinglePost />
                </div>
              }
              path="/Post/:slug"
            />
            <Route
              element={
                <div className="h-full bg-white p-10">
                  <Post />
                </div>
              }
              path="/Post"
            />
            <Route
              element={
                <div className="h-full bg-white p-10">
                  <Project />
                </div>
              }
              path="/Project"
            />

            <Route
              element={
                <div className="h-full bg-white p-10">
                  <Cv />
                </div>
              }
              path="/CV"
            />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
