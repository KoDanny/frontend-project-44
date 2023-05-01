import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  let a = firstNum;
  let b = secondNum;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getRoundBrainGcd = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${getGreatestCommonDivisor(firstNumber, secondNumber)}`;
  return [question, correctAnswer];
};

export default () => runGame(description, getRoundBrainGcd);
