import { Stack, Square } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import Options from './components/Options';
import Question from './components/Question';
import Timer from './components/Timer';

const Main = ({ setToggle, questionNumber, setQuestionNumber }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stopGame, setStopGame] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=20')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data?.results);
        setLoading(false);
      })
      .catch((error) => console.log('fetch error', error));
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      {stopGame ? (
        <Square fontSize='3.5rem' fontWeight='500' h='100%'>
          Game Over
        </Square>
      ) : (
        <Stack py={['50px']} w={['90%', '90%', '80%']} mx='auto' spacing={10}>
          <Timer setToggle={setToggle} />
          <Question
            questions={questions}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
          <Options
            setQuestionNumber={setQuestionNumber}
            questions={questions}
            questionNumber={questionNumber}
            setStopGame={setStopGame}
          />
        </Stack>
      )}
    </>
  );
};

export default Main;
