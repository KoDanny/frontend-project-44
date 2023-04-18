import readlineSync from 'readline-sync';

export const getQuestion = (question) => {
  const answer = readlineSync.question(`${'Question:'} ${question}\n${'Your answer:'} `);
  return answer;
};

export const getPersonalGreeting = (question) => {
  const name = readlineSync.question(`${question} `);
  console.log(`${'Hello'}, ${name}!`);
  return name;
};

export const getCongratulation = (name, correctAnswerCount, maxCount) => {
  if (correctAnswerCount === maxCount) {
    const result = `${'Congratulations'}, ${name}!`;
    console.log(result);
  }
};

export const getRandomNumber = (min, max) => {
  const result = Math.round(Math.random() * (max - min) + min);
  return result;
};

export const isCorrect = (answer, correctAnswer, name) => {
  let result = '';
  if (answer === correctAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'.\n${"Let's try again"}, ${name}!`);
    result = false;
  }
  return result;
};

export const doMath = (firstNumber, operator, secondNumber) => {
  let result = '';
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      result = null;
  }
  return result;
};

export const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export const getProgression = (firstNumber, step, numberCount) => {
  let result = '';
  for (let i = 1, number = firstNumber; i <= numberCount; i += 1, number += step) {
    result = `${result} ${number}`;
  }
  return result.split(' ');
};

export const isPrime = (number) => {
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

export const getRule = (text) => {
  console.log(text);
};
