import readlineSync from 'readline-sync';

export const getQuestion = (question) => {
  const answer = readlineSync.question(`${question}\n${'Your answer:'} `);
  return answer;
};

export const getPersonalGreeting = (name) => {
  console.log(`${'Hello'}, ${name}!`);
};

export const getCongratulation = (name) => {
  const result = `${'Congratulations'}, ${name}!`;
  console.log(result);
};

export const getRandomNumber = (min, max) => {
  const result = Math.round(Math.random() * (max - min) + min);
  return result;
};

export const isCorrect = (answer, correctAnswer) => {
  let result = '';
  if (Number(answer) === correctAnswer || String(answer) === correctAnswer) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

export const getIncorrectResult = (answer, name, correctAnswer) => {
  const result = (`'${answer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'.\n${"Let's try again"}, ${name}!`);
  console.log(result);
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
  return result;
};

export const isPrime = (number) => {
  let result = true;
  if (number <= 1) {
    result = false;
  } else if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
};
