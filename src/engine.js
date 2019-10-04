import { welcome, greeting } from './greetings';
import { game } from './game';

export const gameEven = () => {
  welcome('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = greeting();
  game(userName, 'even', 0);
};

export const gameCalc = () => {
  welcome('What is the result of the expression?');
  const userName = greeting();
  game(userName, 'calc', 0);
};

export const gameGcd = () => {
  welcome('Find the greatest common divisor of given numbers.');
  const userName = greeting();
  game(userName, 'gcd', 0);
};

export const gameProgression = () => {
  welcome('What number is missing in the progression?');
  const userName = greeting();
  game(userName, 'progression', 0);
};

export const gamePrime = () => {
  welcome('Answer "yes" if given number is prime. Otherwise answer "no".');
  const userName = greeting();
  game(userName, 'prime', 0);
};
