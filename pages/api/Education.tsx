import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

interface EducationProps {
  school: string;
  degree: string[];
  date: string;
}

const Education: React.FC<EducationProps> = ({ school, degree, date }) => {
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
      <Heading size="lg">{school}</Heading>
      <Text fontSize="md">
        {degree.map((deg, index) => (
          <React.Fragment key={index}>
            {deg}
            <br />
          </React.Fragment>
        ))}
      </Text>
      <Text fontSize="md">{date}</Text>
    </VStack>
  );
};

export default Education;
