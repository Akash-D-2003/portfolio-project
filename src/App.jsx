import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

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
