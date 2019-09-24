#!/usr/bin/env node
import readlineSync from '..';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\n`);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const game = (counter) => {
  let result = '';

  if (counter === 3) {
    result = `Congratulations, ${userName}!`;
    console.log(result);
    return result;
  }

  const integer1 = getRandomInt(1, 100);
  const integer2 = getRandomInt(1, 100);
  const arr = ['+', '-', '*'];
  const randElement = arr[Math.floor(Math.random() * (arr.length))];

  let rightAnswer = 0;
  if (randElement === '+') {
    rightAnswer = parseInt(integer1, 10) + parseInt(integer2, 10);
  }
  if (randElement === '-') {
    rightAnswer = parseInt(integer1, 10) - parseInt(integer2, 10);
  }
  if (randElement === '*') {
    rightAnswer = parseInt(integer1, 10) * parseInt(integer2, 10);
  }

  console.log(`Question: ${integer1} ${randElement} ${integer2}`);
  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) !== rightAnswer) {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    console.log(result);
    return result;
  }
  result = 'Correct!';
  console.log(result);
  return game(counter + 1);
};

game(0);
