import { Grid, GridItem, Square } from '@chakra-ui/layout';
import React from 'react';

const Options = () => {
  return (
    <Grid
      pt={5}
      gridTemplateColumns={['repeat(1, 1fr)', '', 'repeat(2, 1fr)']}
      gridGap={['20px', '', '40px']}
    >
      {options.map((option) => (
        <GridItem
          textAlign='center'
          bg='linear-gradient(#0e0124, #22074d)'
          borderRadius='10px'
          border='1px solid #fff'
        >
          <Square fontSize={'18px'} h={['40px', '', '50px']}>
            {option.option}
          </Square>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Options;

const options = [
  {
    option: 'option1',
  },
  {
    option: 'option2',
  },
  {
    option: 'option3',
  },
  {
    option: 'option4',
  },
];
