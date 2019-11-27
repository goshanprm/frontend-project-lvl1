import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (descriptionOfGame, generateGameData) => {
  console.log(`Welcome to the Brain Games!\n${descriptionOfGame}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const playRound = (round) => {
    if (round === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const gameData = generateGameData();
    const actualQuestion = car(gameData);
    const actualAnswer = cdr(gameData);

    console.log(`Question: ${actualQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== actualAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${actualAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    playRound(round - 1);
  };

  playRound(roundsCount);
};
