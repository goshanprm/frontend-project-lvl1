import { cons } from '@hexlet/pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const descriptionOfGame = 'What number is missing in the progression?';

const minValue = 1;
const maxValue = 100;
const minDiff = 2;
const maxDiff = 11;
const progressionLength = 10;

const generateGameData = () => {
  const firstElement = getRandomInt(minValue, maxValue);
  const diff = getRandomInt(minDiff, maxDiff);
  let progression = '';
  for (let i = 0; i <= progressionLength - 1; i += 1) {
    progression = `${progression}${firstElement + (diff * i)} `;
  }
  const hiddenElementIndex = getRandomInt(0, progressionLength - 1);
  const actualAnswer = `${firstElement + (diff * hiddenElementIndex)}`;
  const actualQuestion = progression.replace(`${actualAnswer}`, '..');
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playGame(descriptionOfGame, generateGameData);
