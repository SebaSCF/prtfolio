import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./Components/Post";
import Home from "./Components/Home";
import Project from "./Components/Project";
import SinglePost from "./Components/SinglePost";
import Cv from "./Components/Cv";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
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
    <div style={{ height: dimensions.height }}>
      <BrowserRouter>
        <Routes>
          {/*  */}
          <Route
            element={
              <div className="h-full">
                <Home />
              </div>
            }
            path="/"
          />
          <Route
            element={
              <div className="h-full">
                <SinglePost />
              </div>
            }
            path="/Post/:slug"
          />
          <Route
            element={
              <div className="h-full">
                <Post />
              </div>
            }
            path="/Post"
          />
          <Route
            element={
              <div className="h-full">
                <Project />
              </div>
            }
            path="/Project"
          />

          <Route
            element={
              <div className="h-full">
                <Cv />
              </div>
            }
            path="/CV"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
