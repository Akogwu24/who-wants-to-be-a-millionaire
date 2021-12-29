import { Square } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

const Question = ({ questions, questionNumber }) => {
  const [currentQuestion, setCurrentQuestion] = useState({});

  useEffect(() => {
    setCurrentQuestion(questions[questionNumber]);
    // setCurrentQuestion(false);
  }, [questions, questionNumber]);

  // console.log('current questions', currentQuestion);
  return (
    <Square
      border='2px solid #aaa'
      p='20px'
      bg='linear-gradient(#22074d, black)'
      borderRadius='10px'
    >
      {/* <h3> &#039;</h3> */}
      <h3>{currentQuestion && currentQuestion.question}</h3>
    </Square>
  );
};

export default Question;
