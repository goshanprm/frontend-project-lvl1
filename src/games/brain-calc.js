import { cons } from '@hexlet/pairs';
import { getRandomInt, playbackOfGame } from '../engine';

const descriptionOfGame = 'What is the result of the expression?';

const generatedGameData = () => {
  const integer1 = getRandomInt(1, 100);
  const integer2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const randOperator = operators[Math.floor(Math.random() * (operators.length))];
  const actualQuestion = `${integer1} ${randOperator} ${integer2}`;
  let actualAnswer = 0;
  switch (randOperator) {
    case '+':
      actualAnswer = parseInt(integer1, 10) + parseInt(integer2, 10);
      break;
    case '-':
      actualAnswer = parseInt(integer1, 10) - parseInt(integer2, 10);
      break;
    default:
      actualAnswer = parseInt(integer1, 10) * parseInt(integer2, 10);
  }
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playbackOfGame(descriptionOfGame, generatedGameData);
