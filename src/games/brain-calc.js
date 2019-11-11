import { cons } from '@hexlet/pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const descriptionOfGame = 'What is the result of the expression?';

const valueMin = 1;
const valueMax = 100;

const calculateExpression = (a, b) => {
  const randomOperator = getRandomInt(1, 3);
  let actualQuestion = '';
  let actualAnswer = 0;
  switch (randomOperator) {
    case 1:
      actualQuestion = `${a} + ${b}`;
      actualAnswer = parseInt(a, 10) + parseInt(b, 10);
      return cons(actualQuestion, actualAnswer);
    case 2:
      actualQuestion = `${a} - ${b}`;
      actualAnswer = parseInt(a, 10) - parseInt(b, 10);
      return cons(actualQuestion, actualAnswer);
    case 3:
      actualQuestion = `${a} * ${b}`;
      actualAnswer = parseInt(a, 10) * parseInt(b, 10);
      return cons(actualQuestion, actualAnswer);
    default:
      return cons(actualQuestion, actualAnswer);
  }
};

const generatedGameData = () => {
  const integer1 = getRandomInt(valueMin, valueMax);
  const integer2 = getRandomInt(valueMin, valueMax);
  const gameData = calculateExpression(integer1, integer2);
  return gameData;
};

export default () => playGame(descriptionOfGame, generatedGameData);
