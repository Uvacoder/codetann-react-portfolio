import React from "react";
import { HStack, Flex, Spacer, Link, Box, Heading } from "@chakra-ui/react";

export default function Nav() {
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
      <HStack spacing="32px" color="brand.100">
        <Link href="#home" _hover={{ color: "brand.200" }}>
          Home
        </Link>
        <Link href="#about" _hover={{ color: "brand.200" }}>
          About
        </Link>
        <Link href="#projects" _hover={{ color: "brand.200" }}>
          Projects
        </Link>
      </HStack>
    </Flex>
  );
}
