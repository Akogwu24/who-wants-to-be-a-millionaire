import { UnorderedList, ListItem, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { questions } from '../../questions';

const PriceScore = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <UnorderedList w='100%' pr='10px' className='price-list'>
      {questions?.map((question) => (
        <ListItem className={question.id === questionNumber && 'active-price'}>
          <span style={{ marginRight: '10%' }}>{question.id}</span>
          <span style={{ fontWeight: 500, fontSize: '18px' }}>
            {question.amount}
          </span>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default PriceScore;
