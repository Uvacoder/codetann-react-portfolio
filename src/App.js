import React from "react";
import { Flex } from "@chakra-ui/react";
// components
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <Flex {...flex}>
      <Nav />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </Flex>
  );
}

const flex = {
  w: "full",
  p: { base: "2rem", sm: "2rem", md: "2rem", lg: "2rem", xl: "2rem 10rem" },
  flexDirection: "column",
};

export default App;
