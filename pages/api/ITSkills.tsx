import React from "react";
import {
  VStack,
  Heading,
  UnorderedList,
  ListItem,
  Progress,
} from "@chakra-ui/react";

interface Skill {
  name: string;
  progress: number;
}

interface EverydaySkillsProps {
  skills: Skill[];
}

const ITSkills: React.FC<EverydaySkillsProps> = ({ skills }) => {
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
          <ListItem key={index} display="flex" flexDirection="column" mb={2}>
            <Heading size="sm" mb={1}>
              {skill.name}
            </Heading>
            <Progress
              value={skill.progress}
              colorScheme="green"
              size="sm"
              rounded="full"
              sx={{
                backgroundColor: "gray.200", // Custom track color
                "> div": {
                  backgroundColor: "green.300", // Custom filled bar color
                },
                boxShadow: "sm", // Adding a slight shadow for depth
              }}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default ITSkills;
