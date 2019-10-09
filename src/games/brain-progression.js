import { cons } from '@hexlet/pairs';
import { numberOfRounds, getRandomInt, game } from '../engine';
import { welcome, greeting } from '../greetings';

const rulesOfGame = 'What number is missing in the progression?';

const gameProgression = () => {
  const integer = getRandomInt(1, 100);
  const diff = getRandomInt(2, 11);
  let progression = `${integer}`;
  for (let i = 1; i <= 9; i += 1) {
    progression = `${progression} ${integer + (diff * i)}`;
  }
  const counterOfHiddenElement = getRandomInt(2, 10);
  const actualAnswer = integer + (diff * counterOfHiddenElement);
  const actualQuestion = progression.replace(`${actualAnswer}`, '..');
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => {
  welcome(rulesOfGame);
  const name = greeting();
  game(name, gameProgression, numberOfRounds);
};
