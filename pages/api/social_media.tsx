import React from "react";
import { HStack, Heading, VStack } from "@chakra-ui/react";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const SocialMedia: React.FC = () => {
  return (
    <VStack
      padding="5"
      boxShadow="lg"
      bg="gray.50"
      borderRadius="lg"
      alignItems="start"
      spacing={3}
      margin={3}
    >
      <Heading size="lg">Social Media Links</Heading>
      <HStack spacing={5}>
        <a href="https://www.linkedin.com/in/michealdownard/" target="_blank">
          <BiLogoLinkedin size={24} />
        </a>
        <a href="https://github.com/swayz8148" target="_blank">
          <BiLogoGithub size={24} />
        </a>
      </HStack>
    </VStack>
  );
};

export default SocialMedia;
