import { UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { rewards } from './reward';

const PriceScore = ({ questionNumber }) => {
  return (
    <UnorderedList w='100%' pr='10px' className='price-list'>
      {rewards?.map((reward) => (
        <ListItem
          display='flex'
          alignItems={'center'}
          key={reward.id}
          className={reward.id - 1 === questionNumber && 'active-price'}
        >
          <Text w='40px'>{reward.id}</Text>
          <Text style={{ fontWeight: 500 }}>{reward.amount}</Text>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default PriceScore;
