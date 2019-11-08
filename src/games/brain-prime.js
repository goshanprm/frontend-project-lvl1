import { cons } from '@hexlet/pairs';
import { getRandomInt, playbackOfGame } from '../engine';

const descriptionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const generatedGameData = () => {
  const actualQuestion = getRandomInt(1, 100);
  const actualAnswer = isPrime(actualQuestion) ? 'yes' : 'no';
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playbackOfGame(descriptionOfGame, generatedGameData);
