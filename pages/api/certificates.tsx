import React from "react";
import { VStack, Heading, HStack, Box } from "@chakra-ui/react";

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
      <HStack spacing={5} overflowX="auto" w="full">
        {img.map((image, index) => (
          <Box
            key={index}
            w={{ base: "100px", sm: "150px", md: "200px" }}
            h={{ base: "100px", sm: "150px", md: "200px" }}
            overflow="hidden"
          >
            <img
              src={image}
              alt={title}
              style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
            />
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

export default Certificates;
