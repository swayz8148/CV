import React from "react";
import { VStack, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image"; // Make sure this import is at the top

interface CertificatesProps {
  title: string;
  img: string[];
}

const Certificates: React.FC<CertificatesProps> = ({ title, img }) => {
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
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={5} w="full">
        {img.map((image, index) => (
          <Box
            key={index}
            w="full"
            h={{ base: "200px", sm: "150px", md: "200px" }}
            overflow="hidden"
            position="relative"
            borderRadius="lg"
            borderColor="gray.500"
            borderWidth="3px"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.2s ease-in-out 0.1s",
            }}
          >
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Certificates;
