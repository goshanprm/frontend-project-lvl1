#!/usr/bin/env node
import readlineSync from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');

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
  const integer = getRandomInt(1, 100);
  console.log(`Question: ${integer}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === 'yes' && integer % 2 !== 0) {
    result = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    console.log(result);
    return result;
  }
  if (answer === 'no' && integer % 2 === 0) {
    result = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
    console.log(result);
    return result;
  }
  if (answer !== 'no' && answer !== 'yes') {
    result = `'${answer}' is wrong answer ;(.\nLet's try again, ${userName}!`;
    console.log(result);
    return result;
  }
  result = 'Correct!';
  console.log(result);
  return game(counter + 1);
};

game(0);
