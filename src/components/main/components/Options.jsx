import { Grid, GridItem, Square } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { shuffleArray } from '../../utils/shuffleArray';
import { timeOut } from '../../utils/timeOut';

const Options = ({
  setQuestionNumber,
  questionNumber,
  questions,
  setStopGame,
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('options');

  useEffect(() => {
    const options = questions[questionNumber]?.incorrect_answers?.concat(
      questions[questionNumber]?.correct_answer
    );
    const shuffledOptions = shuffleArray(options);
    setShuffledAnswers(shuffledOptions);
  }, [questionNumber, questions]);

  const handleSelectedAnswer = (answer) => {
    setSelectedAnswer(answer);
    setClassName('options active');

    timeOut(() => {
      setClassName(
        questions[questionNumber].correct_answer === answer
          ? 'options correct'
          : 'options wrong'
      );
    }, 3000);

    timeOut(() => {
      if (questions[questionNumber].correct_answer === answer) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStopGame(true);
      }
    }, 6000);
  };

  return (
    <Grid
      pt={5}
      gridTemplateColumns={['repeat(1, 1fr)', '', 'repeat(2, 1fr)']}
      gridRowGap={['20px']}
      gridColumnGap={['40px']}
    >
      {shuffledAnswers?.map((answer) => (
        <GridItem key={answer}>
          <Square
            onClick={() => handleSelectedAnswer(answer)}
            className={selectedAnswer === answer ? className : 'options'}
            borderRadius={'10px'}
            h={['40px', '', '45px']}
          >
            {answer}
          </Square>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Options;
