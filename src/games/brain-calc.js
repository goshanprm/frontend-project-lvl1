import { cons } from '@hexlet/pairs';
import { numberOfRounds, getRandomInt, game } from '../engine';
import { welcome, greeting } from '../greetings';

const rulesOfGame = 'What is the result of the expression?';

const gameCalc = () => {
  const integer1 = getRandomInt(1, 100);
  const integer2 = getRandomInt(1, 100);
  const arr = ['+', '-', '*'];
  const randOperator = arr[Math.floor(Math.random() * (arr.length))];
  const actualQuestion = `${integer1} ${randOperator} ${integer2}`;
  let actualAnswer = 0;
  if (randOperator === '+') {
    actualAnswer = parseInt(integer1, 10) + parseInt(integer2, 10);
  }
  if (randOperator === '-') {
    actualAnswer = parseInt(integer1, 10) - parseInt(integer2, 10);
  }
  if (randOperator === '*') {
    actualAnswer = parseInt(integer1, 10) * parseInt(integer2, 10);
  }
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => {
  welcome(rulesOfGame);
  const name = greeting();
  game(name, gameCalc, numberOfRounds);
};
