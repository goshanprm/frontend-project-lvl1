import { cons } from '@hexlet/pairs';
import { getRandomInt, playbackOfGame } from '../engine';

const descriptionOfGame = 'What number is missing in the progression?';

const generatedGameData = () => {
  const integer = getRandomInt(1, 100);
  const diff = getRandomInt(2, 11);
  let progression = '';
  const progressionLength = 9;
  for (let i = 0; i <= progressionLength; i += 1) {
    progression = `${progression} ${integer + (diff * i)}`;
  }
  const counterOfHiddenElement = getRandomInt(2, 10);
  const actualAnswer = integer + (diff * counterOfHiddenElement);
  const actualQuestion = progression.replace(`${actualAnswer}`, '..');
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playbackOfGame(descriptionOfGame, generatedGameData);
