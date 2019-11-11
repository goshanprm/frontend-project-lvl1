import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const playRounds = (userName, generatedGameData, round) => {
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
  return playRounds(userName, generatedGameData, round - 1);
};

export default (descriptionOfGame, generatedGameData) => {
  console.log(`Welcome to the Brain Games!\n${descriptionOfGame}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  playRounds(name, generatedGameData, numberOfRounds);
};
