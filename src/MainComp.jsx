import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Making from "./Components/Making/Making";
import Hamkorlar from "./Components/Hamkorlar/Hamkorlar";

function MainComp() {
  return (
    <>
      <Home />
      <Making />
      <About />
      <Hamkorlar />
      <Contact />
    </>
  );
}

export default MainComp;
