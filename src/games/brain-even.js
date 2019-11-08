import { cons } from '@hexlet/pairs';
import { getRandomInt, playbackOfGame } from '../engine';

const descriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generatedGameData = () => {
  const actualQuestion = getRandomInt(1, 100);
  const actualAnswer = isEven(actualQuestion) ? 'yes' : 'no';
  const gameData = cons(actualQuestion, actualAnswer);
  return gameData;
};

export default () => playbackOfGame(descriptionOfGame, generatedGameData);
