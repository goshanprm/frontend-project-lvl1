import { cons } from '@hexlet/pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const descriptionOfGame = 'Find the greatest common divisor of given numbers.';

const minValue = 1;
const maxValue = 100;

const getGcd = (num1, num2) => {
  let divisor = 0;
  if (num1 % num2 === 0) {
    return num2;
  }
  if (num2 % num1 === 0) {
    return num1;
  }
  if (num1 > num2) {
    divisor = num2 - 1;
  }
  if (num2 > num1) {
    divisor = num1 - 1;
  }
  for (divisor; (num1 % divisor !== 0 || num2 % divisor !== 0);) {
    divisor -= 1;
  }
  return divisor;
};

const generateGameData = () => {
  const integer1 = getRandomInt(minValue, maxValue);
  const integer2 = getRandomInt(minValue, maxValue);
  const actualQuestion = `${integer1} ${integer2}`;
  const actualAnswer = `${getGcd(integer1, integer2)}`;
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playGame(descriptionOfGame, generateGameData);
