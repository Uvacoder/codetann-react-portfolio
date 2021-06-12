import React from "react";
import {
  Flex,
  Wrap,
  Text,
  Box,
  HStack,
  Heading,
  Tag,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Project({ title, desc, tags, github, app }) {
  return (
    <Flex {...flex}>
      <Box {...box.info}>
        <Heading {...heading}>{title}</Heading>

        <Text {...text}>{desc}</Text>

        {/* Tags */}
        <Wrap {...wrap}>
          {tags.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </Wrap>

        {/* Links */}
        <HStack {...hstack}>
          <Link href={github} {...link}>
            GitHub <ExternalLinkIcon mx="2px" color="brand.100" />
          </Link>
          <Link href={app} {...link}>
            Live App <ExternalLinkIcon mx="2px" color="brand.100" />
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}

<Box minHeight />;
const box = {
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    h: "full",
  },
};
const flex = {
  bg: "brand.400",
  w: { base: "full", sm: "full", md: "full", lg: "47%" },
  minHeight: "25rem",
  p: { base: "1.5rem", sm: "3rem" },
  borderRadius: ".5rem",
  flexDirection: { base: "column", sm: "row" },
  justifyContent: "space-between",
};

const heading = {
  fontSize: "24px",
  color: "brand.200",
  m: "0 0 2rem 0",
};

const text = {
  color: "brand.100",
  m: "0 0 1rem 0",
  fontStyle: "italic",
};

const wrap = {
  m: "0 0 1rem 0",
};

const link = {
  isExternal: true,
  color: "brand.100",
};

const hstack = {
  spacing: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};
