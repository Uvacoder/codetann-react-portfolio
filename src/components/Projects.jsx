import React from "react";
import { Flex, Text, Wrap, Heading } from "@chakra-ui/react";
import { PROJECTS } from "../data/projects";
import Project from "./sub-components/Project";

export default function Projects() {
  return (
    <Flex id="projects" {...flex}>
      <Heading {...heading}>Projects</Heading>
      <Text {...text}>Collection of personal web dev projects</Text>

      <Wrap justify="center" spacing="1.5rem">
        {PROJECTS.personal.map((item) => (
          <Project
            key={item.title}
            title={item.title}
            desc={item.desc}
            tags={item.tags}
            github={item.github}
            app={item.app}
          />
        ))}
      </Wrap>
    </Flex>
  );
}

const flex = {
  w: "full",
  m: "0 0 6rem 0",
  flexDirection: "column",
};

const heading = {
  fontSize: "30px",
  m: "0 0 1rem 0",
};

const text = {
  color: "brand.100",
  lineHeight: "1.5",
  m: "0 0 4rem 0",
};
