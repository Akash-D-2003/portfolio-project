import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default App;
