import React from 'react';
import { VStack, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

interface HobbiesProps {
  hobbies: string[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
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
      <Heading size="lg">Hobbies</Heading>
      <UnorderedList styleType="none" spacing={2} padding={0} margin={0}>
        {hobbies.map((hobby, index) => (
          <ListItem key={index}>{hobby}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default Hobbies;
