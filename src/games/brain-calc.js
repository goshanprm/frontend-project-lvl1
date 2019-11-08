import { cons } from '@hexlet/pairs';
import { getRandomInt, playbackOfGame } from '../engine';

const descriptionOfGame = 'What is the result of the expression?';

const generatedGameData = () => {
  const integer1 = getRandomInt(1, 100);
  const integer2 = getRandomInt(1, 100);
  const randOperator = getRandomInt(1, 3);
  let actualQuestion = '';
  let actualAnswer = 0;
  switch (randOperator) {
    case 1:
      actualQuestion = `${integer1} + ${integer2}`;
      actualAnswer = parseInt(integer1, 10) + parseInt(integer2, 10);
      break;
    case 2:
      actualQuestion = `${integer1} - ${integer2}`;
      actualAnswer = parseInt(integer1, 10) - parseInt(integer2, 10);
      break;
    default:
      actualQuestion = `${integer1} * ${integer2}`;
      actualAnswer = parseInt(integer1, 10) * parseInt(integer2, 10);
  }
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playbackOfGame(descriptionOfGame, generatedGameData);
