import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to the Empty React App</Text>
        <Text fontSize="lg">This is a minimal React application using Chakra UI for styling.</Text>
      </VStack>
    </Container>
  );
};

export default Index;