import { cons } from '@hexlet/pairs';
import { numberOfRounds, getRandomInt, game } from '../engine';
import { welcome, greeting } from '../greetings';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
  const actualQuestion = getRandomInt(1, 100);
  const actualAnswer = isEven(actualQuestion) ? 'yes' : 'no';
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => {
  welcome(rulesOfGame);
  const name = greeting();
  game(name, gameEven, numberOfRounds);
};
