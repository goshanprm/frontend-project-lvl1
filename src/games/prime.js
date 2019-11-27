import { cons } from '@hexlet/pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const descriptionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minValue = 1;
const maxValue = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let div = 2; div < (num / 2); div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const actualQuestion = getRandomInt(minValue, maxValue);
  const actualAnswer = isPrime(actualQuestion) ? 'yes' : 'no';
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playGame(descriptionOfGame, generateGameData);
