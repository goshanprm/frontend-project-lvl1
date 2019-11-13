import { cons } from '@hexlet/pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const descriptionOfGame = 'What is the result of the expression?';

const minValue = 1;
const maxValue = 100;
const operatorsCount = 3;

const getOperator = () => {
  const randomOperator = getRandomInt(1, operatorsCount);
  switch (randomOperator) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return false;
  }
};

const getExpression = (a, b, operator) => {
  let expression = 0;
  switch (operator) {
    case '+':
      expression = parseInt(a, 10) + parseInt(b, 10);
      return expression;
    case '-':
      expression = parseInt(a, 10) - parseInt(b, 10);
      return expression;
    case '*':
      expression = parseInt(a, 10) * parseInt(b, 10);
      return expression;
    default:
      return false;
  }
};

const generatedGameData = () => {
  const integer1 = getRandomInt(minValue, maxValue);
  const integer2 = getRandomInt(minValue, maxValue);
  const operator = getOperator();
  const actualQuestion = `${integer1} ${operator} ${integer2}`;
  const actualAnswer = getExpression(integer1, integer2, operator);
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playGame(descriptionOfGame, generatedGameData);
