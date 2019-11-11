import { cons } from '@hexlet/pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const descriptionOfGame = 'What number is missing in the progression?';

const valueMin = 1;
const valueMax = 100;
const diffMin = 2;
const diffMax = 11;
const progressionLength = 10;

const generatedGameData = () => {
  const integer = getRandomInt(valueMin, valueMax);
  const diff = getRandomInt(diffMin, diffMax);
  let progression = '';
  for (let i = 0; i <= progressionLength - 1; i += 1) {
    progression = `${progression} ${integer + (diff * i)}`;
  }
  const counterOfHiddenElement = getRandomInt(0, progressionLength - 1);
  const actualAnswer = integer + (diff * counterOfHiddenElement);
  const actualQuestion = progression.replace(`${actualAnswer}`, '..');
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playGame(descriptionOfGame, generatedGameData);
