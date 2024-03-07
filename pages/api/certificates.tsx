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
      <HStack spacing={5}>
        {img.map((image, index) => (
          <Box key={index} boxSize="200px">
            <img
              width={200}
              height={200}
              src={image}
              alt={title}
              style={{ width: "auto", height: "auto" }}
            />
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};
export default Certificates;
