import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor < Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getRoundBrainPrime = () => {
  const result = [];
  const randomNumber = getRandomNumber(0, 20);
  const question = `${randomNumber}`;
  result.push(question);
  const primeNumber = isPrime(randomNumber);
  if (primeNumber) {
    result.push('yes');
  } else {
    result.push('no');
  }
  return result;
};

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(getRoundBrainPrime());
  }
  getGame(rule, rounds);
};
