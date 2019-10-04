import readlineSync from '.';

export const welcome = (rulesOfGame) => {
  console.log(`Welcome to the Brain Games!\n${rulesOfGame}\n`);
};

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};
