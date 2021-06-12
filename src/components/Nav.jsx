import React from "react";
import { HStack, Flex, Spacer, Button, Box, Heading } from "@chakra-ui/react";
import { ICONS } from "../data/icons";

export default function Nav() {
  const handleLink = (link) => {
    var anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.click();
  };
  return (
    <Flex>
      {/* Logo */}
      <Box>
        <Heading display="flex">
          TT<Box color="brand.200">.</Box>
        </Heading>
      </Box>
      <Spacer />

      {/* Nav Links */}
      <HStack spacing="20px" color="brand.100">
        {ICONS.links.map((icon, i) => (
          <Button
            {...buttons.icon}
            onClick={() => handleLink(icon.link)}
            key={i}
            className={`fab fa-${icon.name}`}
          ></Button>
        ))}
        {/* <Link href="#home" _hover={{ color: "brand.200" }}>
          Home
        </Link>
        <Link href="#about" _hover={{ color: "brand.200" }}>
          About
        </Link>
        <Link href="#projects" _hover={{ color: "brand.200" }}>
          Projects
        </Link> */}
      </HStack>
    </Flex>
  );
}

const buttons = {
  icon: {
    fontWeight: "100",
    color: "brand.100",
    _hover: { color: "brand.200" },
  },
};
