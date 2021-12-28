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

  return (
    <ChakraProvider theme={theme}>
      <Flex minH='100vh ' color='#FFF' pos='relative'>
        <Box bg='#020230cc' flex={[5]}>
          <Main setToggle={setToggle} />
        </Box>
        <Box
          bg='primary'
          className={toggle ? 'price-score active' : 'price-score'}
        >
          <PriceScore />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

const BtnContainer = styled(Box)`
  color: #fff;
  // background: blue;
  transform: translate(-10%, 400%);
`;
