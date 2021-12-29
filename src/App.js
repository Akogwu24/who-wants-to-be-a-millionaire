import { Box, Flex } from '@chakra-ui/layout';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import './App.css';
import Main from './components/main';
import PriceScore from './components/priceScore';

//opentdb.com/api for questions

const theme = extendTheme({
  colors: {
    primary: '#020230',
  },
});

function App() {
  const [toggle, setToggle] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <Flex minH='100vh ' color='#FFF' pos='relative'>
        <Box className='main' pt={['20px', '', '', '50px']} flex={[5]}>
          <Main
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setToggle={setToggle}
          />
        </Box>
        <Box
          bg='primary'
          className={toggle ? 'price-score active' : 'price-score'}
        >
          <PriceScore questionNumber={questionNumber} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
