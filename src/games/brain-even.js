import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const getGameBrainEven = () => {
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
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  getGame(rule, rounds);
};

export default getGameBrainEven;
