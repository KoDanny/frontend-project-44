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

export const getRandomNumber = (max) => Math.round(Math.random() * max);

export const isCorrect = (answer, correctAnswer = '') => {
  let result = '';
  if (Number(answer) === correctAnswer) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

export const getIncorrectResult = (answer, name = '', correctAnswer = '') => {
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