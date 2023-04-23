import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getGameBrainPrime = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    let result = [];
    const randomNumber = getRandomNumber(0, 20);
    const question = `${randomNumber}`;
    result.push(question);
    const primeNumber = isPrime(randomNumber);
    if (primeNumber) {
      result.push('yes');
    } else {
      result.push('no');
    }
    rounds.push(result);
    result = [];
  }
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getGame(rule, rounds);
};

export default getGameBrainPrime;
