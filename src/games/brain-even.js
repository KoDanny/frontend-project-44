import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => {
  let result = false;
  if (number % 2 === 0) {
    result = true;
  }
  return result;
};

const getRoundBrainEven = () => {
  const result = [];
  const randomNumber = getRandomNumber(1, 100);
  result.push(randomNumber);
  if (isEven(randomNumber)) {
    result.push('yes');
  } else {
    result.push('no');
  }
  return result;
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(getRoundBrainEven());
  }
  getGame(rule, rounds);
};
