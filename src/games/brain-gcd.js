import { cons } from '@hexlet/pairs';
import { getRandomInt, playbackOfGame } from '../engine';

const descriptionOfGame = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
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

const generatedGameData = () => {
  const integer1 = getRandomInt(1, 100);
  const integer2 = getRandomInt(1, 100);
  const actualQuestion = `${integer1} ${integer2}`;
  const actualAnswer = gcd(integer1, integer2);
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playbackOfGame(descriptionOfGame, generatedGameData);
