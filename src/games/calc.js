import { cons } from '@hexlet/pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const descriptionOfGame = 'What is the result of the expression?';

const minValue = 1;
const maxValue = 100;
const operators = '+-*';
const operationsCount = 3;

const calculateExpression = (a, b, operator) => {
  let expression;
  switch (operator) {
    case '+':
      expression = a + b;
      return expression;
    case '-':
      expression = a - b;
      return expression;
    case '*':
      expression = a * b;
      return expression;
    default:
      return false;
  }
};

const generateGameData = () => {
  const integer1 = getRandomInt(minValue, maxValue);
  const integer2 = getRandomInt(minValue, maxValue);
  const randomOperator = operators[getRandomInt(0, operationsCount - 1)];
  const actualQuestion = `${integer1} ${randomOperator} ${integer2}`;
  const actualAnswer = `${calculateExpression(integer1, integer2, randomOperator)}`;
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playGame(descriptionOfGame, generateGameData);
