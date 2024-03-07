import React from 'react';
import { VStack, Heading, Badge, Text } from '@chakra-ui/react';

interface WorkExperienceProps {
  company: string;
  role: string;
  date: string;
  description: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  company,
  role,
  date,
  description,
}) => {
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
      <Heading size="md">{company}</Heading>
      <Badge colorScheme="green" mb={2}>
        {role}
      </Badge>
      <Text fontSize="sm">{date}</Text>
      <Text fontSize="sm">{description}</Text>
    </VStack>
  );
};

export default WorkExperience;
