import React from "react";
import { Flex, Wrap, Text, Box, Heading } from "@chakra-ui/react";
import { ICONS } from "../data/icons";

export default function Skills() {
  return (
    <Flex {...flex}>
      <Heading {...heading}>Skills</Heading>
      <Text {...text.body}>Technologies I've worked with</Text>
      <Wrap {...wrap}>
        {ICONS.skills.map((icon) => (
          <Box key={icon.icon} {...box}>
            <i
              style={{
                color: icon.color,
                fontSize: "50px",
                marginBottom: ".5rem",
              }}
              className={icon.icon}
            ></i>
            <Text {...text.label}>{icon.name}</Text>
          </Box>
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
  body: {
    color: "brand.100",
    lineHeight: "1.5",
  },
  label: {
    color: "brand.100",
    lineHeight: "1.5",
    fontSize: "14px",
  },
};

const box = {
  display: "flex",
  alignItems: "center",
  justifyContent: "cener",
  flexDirection: "column",
  p: ".5rem 0",
};

const wrap = {
  w: "full",
  m: "4rem 0 0 0",
  spacing: { base: "30px", sm: "50px", md: "60px", lg: "70px" },
  justify: "center",
};
