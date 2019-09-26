import readlineSync from '.';

export const welcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const welcomeEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
};

export const welcomeCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
};

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const game = (userName, brain, counter) => {
  let result = '';
  let actualQuestion = 0;
  let actualAnswer = '';

  if (brain === 'even') {
    actualQuestion = getRandomInt(1, 100);
    if (actualQuestion % 2 === 0) {
      actualAnswer = 'yes';
    }
    if (actualQuestion % 2 !== 0) {
      actualAnswer = 'no';
    }
  }

  if (brain === 'calc') {
    const integer1 = getRandomInt(1, 100);
    const integer2 = getRandomInt(1, 100);
    const arr = ['+', '-', '*'];
    const randOperator = arr[Math.floor(Math.random() * (arr.length))];
    actualQuestion = `${integer1} ${randOperator} ${integer2}`;
    if (randOperator === '+') {
      actualAnswer = parseInt(integer1, 10) + parseInt(integer2, 10);
    }
    if (randOperator === '-') {
      actualAnswer = parseInt(integer1, 10) - parseInt(integer2, 10);
    }
    if (randOperator === '*') {
      actualAnswer = parseInt(integer1, 10) * parseInt(integer2, 10);
    }
  }

  if (counter === 3) {
    result = `Congratulations, ${userName}!`;
    console.log(result);
    return result;
  }

  console.log(`Question: ${actualQuestion}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== String(actualAnswer)) {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${actualAnswer}'.\nLet's try again, ${userName}!`;
    console.log(result);
    return result;
  }

  result = 'Correct!';
  console.log(result);
  return game(userName, brain, counter + 1);
};
