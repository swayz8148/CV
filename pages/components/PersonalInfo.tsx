import React from "react";
import { VStack, Heading, Text, Box, Grid } from "@chakra-ui/react";

interface PersonalInfoProps {
  name: string;
  email: string;
  phone: string;
  location: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  email,
  phone,
  location,
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
      <Grid
        templateColumns={{ base: "1fr auto", md: "1fr auto" }}
        gap={3}
        alignItems="center"
        w="full"
      >
        <Box>
          <Heading size="lg">{name}</Heading>
          <Text fontSize="md">{email}</Text>
          <Text fontSize="md">{phone}</Text>
          <Text fontSize="md">{location}</Text>
        </Box>
        <Box
          width={{ base: "75px", md: "100px" }}
          height={{ base: "75px", md: "100px" }}
          overflow="hidden"
          borderRadius="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
        </Box>
      </Grid>
    </VStack>
  );
};

export default PersonalInfo;
