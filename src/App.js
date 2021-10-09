import { Box, Flex } from '@chakra-ui/layout';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Flex w='100vw' h='100vh'>
        <Box bg='teal.500' flex={8}>
          main
        </Box>
        <Box bg='teal.200' flex={2}>
          amount side
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
