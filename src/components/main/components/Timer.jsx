import { Circle } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import { timeOut } from '../../utils/timeOut';

const Timer = ({ setToggle, setStopGame }) => {
  const [desktop] = useMediaQuery('(min-width: 920px)');
  const [timer, setTimer] = useState(30);

  const handleSeeScore = () => {
    setToggle(true);

    timeOut(() => {
      setToggle(false);
    }, 2500);
  };

  useEffect(() => {
    // if (timer === 0) return setStopGame(true);
    // const interval = setInterval(() => {
    //   setTimer((prev) => prev - 1);
    // }, 1000);
    // return () => clearInterval(interval);
  }, [timer, setStopGame]);

  return (
    <Flex justifyContent='space-between' align='center'>
      <CircularProgress
        size='70px'
        min={0}
        max={30}
        value={timer}
        color='gray.50'
        thickness={'7px'}
        trackColor={timer > 10 ? 'teal.300' : 'red.400'}
      >
        <CircularProgressLabel fontSize={'1.5rem'}>
          {timer}
        </CircularProgressLabel>
      </CircularProgress>
      {!desktop && (
        <Button
          className='see-score-btn'
          onClick={handleSeeScore}
          size={['sm']}
          bg='gray.100'
          color='rebeccapurple'
          _focus={{ border: 'none' }}
        >
          see your score
        </Button>
      )}
    </Flex>
  );
};

export default Timer;
