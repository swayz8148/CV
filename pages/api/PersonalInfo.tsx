import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

interface PersonalInfoProps {
  name: string;
  email: string;
  phone: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, email, phone }) => {
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
      <Heading size="lg">{name}</Heading>
      <Text fontSize="md">{email}</Text>
      <Text fontSize="md">{phone}</Text>
    </VStack>
  );
};

export default PersonalInfo;
