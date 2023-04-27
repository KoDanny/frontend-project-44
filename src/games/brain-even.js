import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundBrainEven = () => {
  const question = getRandomNumber(1, 100);
  let correctAnswer = 'no';
  if (isEven(question)) {
    correctAnswer = 'yes';
  }
  return [question, correctAnswer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(getRoundBrainEven());
  }
  getGame(description, rounds);
};
