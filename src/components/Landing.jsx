import React from "react";
import { HStack, Flex, Heading, Button, Divider } from "@chakra-ui/react";
import { ICONS } from "../data/icons";

export default function Landing() {
  const handleResume = () => {
    var anchor = document.createElement("a");
    anchor.href = "resume.pdf";
    anchor.target = "_blank";
    anchor.download = "resume.pdf";
    anchor.click();
  };

  const handleEmail = () => {
    var anchor = document.createElement("a");
    anchor.href = "mailto: thetannerthomas@gmail.com";
    anchor.target = "_blank";
    anchor.click();
  };

  const handleLink = (link) => {
    var anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.click();
  };
  return (
    <Flex id="home" {...flex}>
      {/* --- Heading --- */}
      <Heading {...heading}>
        Hello, Im{" "}
        <span style={{ color: "#ff7e67", fontWeight: 700 }}>Tanner</span>. Im a
        self-taught web developer with a passion for front and backend
        development
      </Heading>

      {/* --- Buttons --- */}
      <HStack {...hstack.buttons}>
        <Button {...buttons.email} onClick={handleEmail}>
          Email Me
        </Button>
        <Button {...buttons.resume} onClick={handleResume}>
          Resume
        </Button>
      </HStack>
      {/* --- Social Links --- */}
      <HStack {...hstack.icons}>
        <Divider />
        {ICONS.links.map((icon, i) => (
          <Button
            {...buttons.icon}
            onClick={() => handleLink(icon.link)}
            key={i}
            className={`fab fa-${icon.name}`}
          ></Button>
        ))}
        <Divider />
      </HStack>
    </Flex>
  );
}

const flex = {
  flexDirection: "column",
  alignItems: "center",
  w: "full",
};

const heading = {
  m: {
    base: "6rem 0 6rem 0 ",
    md: "8rem 0 10rem 0",
    lg: "10rem 0 6rem 0",
  },
  fontSize: { base: "28px", md: "32px" },
  textAlign: { base: "left", sm: "center", md: "center", lg: "center" },
  lineHeight: "1.5",
  fontWeight: "300",
  maxWidth: "1000px",
};

const buttons = {
  email: {
    fontSize: "sm",
    bg: "brand.200",
    color: "black",
    size: "lg",
    _hover: { opacity: 0.5 },
  },
  resume: {
    fontSize: "sm",
    size: "lg",
    _hover: { opacity: 0.5 },
  },
  icon: {
    fontSize: "22px",
    fontWeight: "100",
    bg: "none",
    color: "brand.100",
    _hover: { color: "brand.200" },
  },
};

const hstack = {
  icons: {
    m: "12rem ",
    w: "full",
  },
  buttons: {
    spacing: "2rem",
  },
};
