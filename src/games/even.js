import { cons } from '@hexlet/pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const descriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const minValue = 1;
const maxValue = 100;

const isEven = (num) => num % 2 === 0;

const generatedGameData = () => {
  const actualQuestion = getRandomInt(minValue, maxValue);
  const actualAnswer = isEven(actualQuestion) ? 'yes' : 'no';
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playGame(descriptionOfGame, generatedGameData);
