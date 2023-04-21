import getGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
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
const getRoundGcd = (roundCount) => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    let result = [];
    const firstNumber = getRandomNumber(1, 15) * 3;
    const secondNumber = getRandomNumber(1, 12) * 4;
    const question = `${firstNumber} ${secondNumber}`;
    result.push(question);
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
    result.push(correctAnswer);
    rounds.push(result);
    result = [];
  }
  return rounds;
};
const getGameBrainGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const rounds = getRoundGcd(3);
  getGame(rule, rounds);
};

export default getGameBrainGcd;
