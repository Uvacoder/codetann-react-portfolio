import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex id="about" {...flex}>
      <Heading {...heading}>About Me</Heading>
      <Text {...text}>
        I'm a self-taught frontend developer based in Salt Lake City, Utah. My
        goal is to create engaging experiences for users, with a fine balance of
        technology and design.
      </Text>
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
};
