import { car, cdr } from '@hexlet/pairs';
import readlineSync from '.';

export const numberOfRounds = 3;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const game = (userName, typeOfGame, round) => {
  let result = '';

  if (round === 0) {
    result = `Congratulations, ${userName}!`;
    console.log(result);
    return result;
  }

  const gameData = typeOfGame();
  const actualQuestion = car(gameData);
  const actualAnswer = cdr(gameData);

  console.log(`Question: ${actualQuestion}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== String(actualAnswer)) {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${actualAnswer}'.\nLet's try again, ${userName}!`;
    console.log(result);
    return result;
  }

  result = 'Correct!';
  console.log(result);
  return game(userName, typeOfGame, round - 1);
};
