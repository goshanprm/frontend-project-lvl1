import { car, cdr } from '@hexlet/pairs';
import readlineSync from '.';

const numberOfRounds = 3;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const playbackOfRounds = (userName, generatedGameData, round) => {
  let result = '';

  if (round === 0) {
    result = `Congratulations, ${userName}!`;
    console.log(result);
    return result;
  }

  const gameData = generatedGameData();
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
  return playbackOfRounds(userName, generatedGameData, round - 1);
};

export const playbackOfGame = (descriptionOfGame, generatedGameData) => {
  console.log(`Welcome to the Brain Games!\n${descriptionOfGame}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  playbackOfRounds(name, generatedGameData, numberOfRounds);
};
