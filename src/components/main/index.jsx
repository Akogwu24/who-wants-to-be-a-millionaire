import { Stack, Square } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { rewards } from '../priceScore/reward';
import Options from './components/Options';
import Question from './components/Question';
import Timer from './components/Timer';
import play from '../../assets/sounds/lets-play.mp3';

const Main = ({ setToggle, questionNumber, setQuestionNumber }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stopGame, setStopGame] = useState(false);
  const [winning, setWinning] = useState('NGN 0');

  useEffect(() => {
    let letsPlay = new Audio(play);
    letsPlay?.play();
  }, []);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=20')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data?.results);
        setLoading(false);
      })
      .catch((error) => console.log('fetch error', error));
  }, []);

  useEffect(() => {
    questionNumber > 0 &&
      setWinning(rewards.find((reward) => reward.id === questionNumber).amount);
  }, [questionNumber]);

  // let letsPlay = new Audio(play);
  // letsPlay.play();

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      {stopGame ? (
        <Square textAlign={'center'} fontSize='3rem' fontWeight='500' h='100%'>
          Game Over <br /> You won: {winning}
        </Square>
      ) : (
        <Stack py={['50px']} w={['90%', '90%', '80%']} mx='auto' spacing={10}>
          <Timer setToggle={setToggle} setStopGame={setStopGame} />
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
