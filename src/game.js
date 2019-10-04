import readlineSync from '.';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const game = (userName, typeOfGame, counter) => {
  let result = '';
  let actualQuestion = 0;
  let actualAnswer = '';

  if (typeOfGame === 'even') {
    actualQuestion = getRandomInt(1, 100);
    if (actualQuestion % 2 === 0) {
      actualAnswer = 'yes';
    }
    if (actualQuestion % 2 !== 0) {
      actualAnswer = 'no';
    }
  }

  if (typeOfGame === 'calc') {
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

  if (typeOfGame === 'gcd') {
    const integer1 = getRandomInt(1, 100);
    const integer2 = getRandomInt(1, 100);
    actualQuestion = `${integer1} ${integer2}`;
    const gcd = (num1, num2) => {
      let divisor = 0;
      if (num1 % num2 === 0) {
        return num2;
      }
      if (num2 % num1 === 0) {
        return num1;
      }
      if (num1 > num2) {
        divisor = num2 - 1;
      }
      if (num2 > num1) {
        divisor = num1 - 1;
      }
      for (divisor; (num1 % divisor !== 0 || num2 % divisor !== 0);) {
        divisor -= 1;
      }
      return divisor;
    };
    actualAnswer = gcd(integer1, integer2);
  }

  if (typeOfGame === 'progression') {
    const integer = getRandomInt(1, 100);
    const diff = getRandomInt(2, 11);
    let progression = `${integer}`;
    for (let i = 1; i <= 9; i += 1) {
      progression = `${progression} ${integer + (diff * i)}`;
    }
    const counterOfHiddenElement = getRandomInt(2, 10);
    actualAnswer = integer + (diff * counterOfHiddenElement);
    actualQuestion = progression.replace(`${actualAnswer}`, '..');
  }

  if (typeOfGame === 'prime') {
    actualQuestion = getRandomInt(1, 100);
    const isPrime = (num) => {
      for (let div = 2; div < num; div += 1) {
        if (num % div === 0) {
          return false;
        }
      }
      return true;
    };
    if (isPrime(actualQuestion) === true) {
      actualAnswer = 'yes';
    }
    if (isPrime(actualQuestion) === false) {
      actualAnswer = 'no';
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
  return game(userName, typeOfGame, counter + 1);
};
