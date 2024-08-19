import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

interface AboutProps {
  title: string;
  about: string;
}

const About: React.FC<AboutProps> = ({ title, about }) => {
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
      <Heading size="lg">{title}</Heading>
      <Text fontSize="md">{about}</Text>
    </VStack>
  );
};

export default About;
