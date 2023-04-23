import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const getRoundEven = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    let result = [];
    const randomNumber = getRandomNumber(1, 100);
    result.push(randomNumber);
    if (randomNumber % 2 === 0) {
      result.push('yes');
    } else {
      result.push('no');
    }
    rounds.push(result);
    result = [];
  }
  return rounds;
};
const getGameBrainEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = getRoundEven();
  getGame(rule, rounds);
};

export default getGameBrainEven;
