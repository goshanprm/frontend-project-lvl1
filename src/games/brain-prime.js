import { cons } from '@hexlet/pairs';
import { numberOfRounds, getRandomInt, game } from '../engine';
import { welcome, greeting } from '../greetings';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const actualQuestion = getRandomInt(1, 100);
  const actualAnswer = isPrime(actualQuestion) ? 'yes' : 'no';
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => {
  welcome(rulesOfGame);
  const name = greeting();
  game(name, gamePrime, numberOfRounds);
};
