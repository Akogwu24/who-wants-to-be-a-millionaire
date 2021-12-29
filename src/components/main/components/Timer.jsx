import { Circle } from '@chakra-ui/layout';
import React from 'react';
import { Button, Flex, useMediaQuery } from '@chakra-ui/react';

const Timer = ({ setToggle }) => {
  const [desktop] = useMediaQuery('(min-width: 920px)');
  const handleSeeScore = () => {
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    }, 2500);
  };
  return (
    <Flex justifyContent='space-between' align='center'>
      <Circle
        fontSize={['1.6rem', '1.8rem', '2rem']}
        fontWeight='600'
        border='4px solid #fff'
        w={['60px', '65px', '85px']}
        h={['60px', '65px', '85px']}
      >
        30
      </Circle>
      {!desktop && (
        <Button
          className='see-score-btn'
          onClick={handleSeeScore}
          size={['sm']}
          bg='teal.300'
        >
          see your score
        </Button>
      )}
    </Flex>
  );
};

export default Timer;
