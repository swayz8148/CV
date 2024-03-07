import React from "react";
import { VStack, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

interface ReferenceProps {
  reference: string[];
}

const Reference: React.FC<ReferenceProps> = ({ reference }) => {
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
      <Heading size="lg">Reference</Heading>
      <UnorderedList styleType="none" spacing={2} padding={0} margin={0}>
        {reference.map((reference, index) => (
          <ListItem key={index}>{reference}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default Reference;
