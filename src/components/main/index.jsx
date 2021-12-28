import { Flex, Stack } from '@chakra-ui/layout';
import React from 'react';
import PriceScore from '../priceScore';
import Options from './components/Options';
import Question from './components/Question';
import Timer from './components/Timer';

const Main = ({ setToggle }) => {
  return (
    <Stack py={['50px']} w={['90%', '90%', '80%']} mx='auto' spacing={8}>
      <Timer setToggle={setToggle} />
      <Question />
      <Options />
    </Stack>
  );
};

export default Main;
