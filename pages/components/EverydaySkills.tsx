import React from "react";
import { VStack, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

interface ITSkillsProps {
  skills: string[];
}

const ITSkills: React.FC<ITSkillsProps> = ({ skills }) => {
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
      <Heading size="lg">Skills</Heading>
      <UnorderedList styleType="none" spacing={2} padding={0} margin={0}>
        {skills.map((skill, index) => (
          <ListItem key={index}>{skill}</ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default ITSkills;
