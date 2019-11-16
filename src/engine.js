import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (descriptionOfGame, generatedGameData) => {
  console.log(`Welcome to the Brain Games!\n${descriptionOfGame}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const playRound = (round) => {
    if (round === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const gameData = generatedGameData();
    const actualQuestion = car(gameData);
    const actualAnswer = cdr(gameData);

    console.log(`Question: ${actualQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== String(actualAnswer)) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${actualAnswer}'.\nLet's try again, ${userName}!`);
    }

    console.log('Correct!');
    return playRound(round - 1);
  };

  playRound(roundsCount);
};
