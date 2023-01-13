import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Icon, Center, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Center>
      <Box bg="teal.700" w="100%" p={4} color="white" textAlign="center">
        Built with ❤ by{" "}
        <Link
          href="https://fredolywagni.com"
          isExternal
          fontWeight="bold"
          color="#ababff"
          mr="10px"
        >
          Fredoly Wagni <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </Center>
  );
};

export default Footer;
